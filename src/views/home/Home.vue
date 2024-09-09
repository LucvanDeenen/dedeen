<template>
  <div class="h-full w-full">
    <div class="flex md:h-[33.33%] h-[10%]">

      <div class="border w-[33.33%] flex-1"></div>
      <div class="border w-[300px] md:w-[500px] flex-8">
        
      </div>
      <div class="border w-[33.33%] flex-1"></div>

    </div>
    <div class="flex md:h-[33.33%] h-[80%]">

      <div class="border w-[33.33%] flex-1"></div>
      <div class="border w-[300px] md:w-[500px] flex-8 flex items-center justify-center">
        <h1 id="title" class="content">
          {{ text[index] }}
        </h1>
      </div>
      <div class="border w-[33.33%] flex-1"></div>

    </div>
    <div class="flex md:h-[33.33%] h-[10%]">

      <div class="border w-[33.33%] flex-1"></div>
      <div class="border w-[300px] md:w-[500px]  flex-8"></div>
      <div class="border w-[33.33%] flex-1"></div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      interval: null as ReturnType<typeof setInterval> | number | null,
      animation: null as ReturnType<typeof setInterval> | number | null,
      letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" as String,
      text: [
        "Luc_van_Deenen",
        "Dedeen",
        "Software_Engineer",
        "Face.IT",
      ] as String[],
      index: 0,
    }
  },

  mounted() {
    this.animateText();
    this.interval = setInterval(() => {
      this.index = (this.index + 1) % this.text.length;
      this.animateText();
    }, 10000);
  },

  methods: {
    animateText: function () {
      let iteration = 0;
      this.animation = setInterval(() => {
        const title = document.getElementById("title");
        if (!title) return;

        title.innerText = title.innerText.split("")
          .map((letter, index) => {
            if (index < iteration) return this.text[this.index][index]
            if (letter == " " || letter == "_" || letter == ".") return letter;
            return this.letters[Math.floor(Math.random() * this.letters.length)];
          }).join("");

        if (iteration > this.text[this.index].length) clearInterval(this.animation!);
        iteration += 1 / 3;
      }, 30);
    }
  },
})
</script>

<style scoped lang="scss">
h1 {
  text-transform: uppercase;
  font-size: 30px;
}
</style>