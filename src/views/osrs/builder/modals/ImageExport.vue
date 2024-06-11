<template>
  <v-dialog width="500px" v-model="isActive" persistent>
    <v-card class="pa-2">

      <!-- Title -->
      <v-card-title class="non-select">Upload new tile(s)</v-card-title>
      <v-card-actions class="text" style="display: flex; justify-content: space-between;">
        <v-checkbox label="Remove 'Icon' in name" v-model="removeIconInName" density="compact" hide-details />
      </v-card-actions>

      <!-- Select file -->
      <v-file-input chips multiple show-size counter class="mt-2 mr-3 ml-2" density="compact" variant="outlined"
        @click:clear="images = []" @change="handleFiles">
        <template v-slot:selection="{ fileNames }">
          <template v-for="(fileName, index) in fileNames" :key="fileName">
            <v-chip v-if="index < 1" label size="small" class="me-2 my-1">
              {{ fileName }}
            </v-chip>

            <span v-else-if="index === 1" class="text-overline mx-2">
              +{{ images.length - 1 }} File(s)
            </span>
          </template>
        </template>
      </v-file-input>

      <!-- Tiles -->
      <div class="images-container pa-1 my-4" ref="scrollContainer" v-if="images.length > 0">
        <div class="image-placeholder"></div>
        <div v-for="(image, key) in images" :key="key" class="image-item pa-2 border"
          @click="handleItemClick($event, key)">


          <div style="display: flex; justify-content: space-between;">
            <div style="max-width: 48%; min-width: 48%;" class="border ma-1">
              <v-img :src="image.url" class="non-select my-8" height="80px"></v-img>
            </div>
            <div style="max-width: 48%; min-width: 48%; max-height: 80px; min-height: 80px;" class="ma-1">
              <v-combobox chips multiple density="compact" label="Sub-categories"
                :items="['Range', 'Mage', 'Melee', 'Gear', 'Consumable', 'Requirement']" variant="outlined" />
            </div>
          </div>

          <div class="mt-2 text-subtitle-2 non-select">Name</div>
          <v-text-field v-model="image.name" density="compact" flat variant="solo" hide-details></v-text-field>

          <div class="mt-1 text-subtitle-2 non-select">Type</div>
          <v-btn-toggle v-model="image.type" mandatory style="width: 100%;">
            <v-btn v-for="tile in tileTypes" :key="tile" :value="tile">
              <v-img :src="'/src/assets/images/' + tileImages[tile]" alt="Tile Image" class="icon-image" />
              {{ tile }}
            </v-btn>
          </v-btn-toggle>
        </div>
        <div class="image-placeholder"></div>
      </div>

      <!-- Menu -->
      <v-card-actions class="text" style="display: flex; justify-content: space-between;">
        <v-btn :disabled="images.length == 0" @click="uploadTiles">Add {{ images.length == 1 ? 'tile' : 'tiles' }}</v-btn>
        <v-btn @click="closeDialog">Close</v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { TileDetails } from '@/models/tile';
import { TileType } from '@/models/types';
import useEventsBus from '@/service/eventBus';

export default defineComponent({
  setup(_, { emit }) {
    const scrollContainer = ref<HTMLElement | null>(null);
    const removeIconInName = ref<boolean>(true);
    const images = ref<TileDetails[]>([]);
    const tileTypes = Object.values(TileType);
    const tileImages = computed(() => {
      return {
        [TileType.Skill]: 'stats.png',
        [TileType.Item]: 'items.webp',
        [TileType.Goal]: 'goals.webp',
      };
    });
    const handleFiles = (event: Event) => {
      images.value = [];
      const files = (event.target as HTMLInputElement).files;
      if (!files) return;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (e) => {
          if (typeof e.target?.result === 'string') {
            if (images.value.find(item => item.url == e.target!.result)) return;
            const formattedName = removeIconInName ?
              file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ").replace("icon", "") :
              file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ");

            images.value.push({
              type: TileType.Item,
              url: e.target.result,
              name: formattedName,
              menu: false,
              amount: undefined
            });
          }
        }
        reader.readAsDataURL(file);
      }
    }

    const closeDialog = () => {
      images.value = [];
      emit('close');
    }

    let index: number | undefined = undefined;
    const handleItemClick = (event: MouseEvent, key: number) => {
      if (index == key) return;
      index = key;

      const card = event.currentTarget as HTMLElement;
      const cardRect = card.getBoundingClientRect();
      const clickX = event.clientX;

      if (clickX < cardRect.left + cardRect.width / 2) {
        if (key > 0 && scrollContainer.value) {
          scrollContainer.value.scrollBy({
            left: cardRect.width,
            behavior: 'smooth'
          });
        }
      } else {
        if (key < images.value.length - 1 && scrollContainer.value) {
          scrollContainer.value.scrollBy({
            left: -cardRect.width,
            behavior: 'smooth'
          });
        }
      }
    };

    const uploadTiles = () => {
      const { emit } = useEventsBus();
      emit('upload-tiles', images); 
    }

    return {
      handleFiles,
      closeDialog,
      uploadTiles,
      tileImages,
      tileTypes,
      images,
      removeIconInName,

      scrollContainer,
      handleItemClick
    };
  },

  props: {
    isActive: Boolean
  },
})
</script>

<style scoped>
.images-container {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  margin-top: 10px;
  scroll-padding: 12.5%;
  scroll-snap-type: x mandatory;
}

.images-container::-webkit-scrollbar {
  display: none;
}

.images-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.image-item {
  flex: 0 0 60%;
  scroll-snap-align: center;
}

.image-placeholder {
  flex: 0 0 60%;
  visibility: hidden;
}

.icon-image {
  height: 24px;
  width: 24px;
  margin-right: 8px;
}
</style>