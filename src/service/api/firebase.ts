import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { TileDetails } from '../../models/tile';
import { TileType } from '../../models/types';
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default {
  getImages: async (type: string): Promise<TileDetails[]> => {
    const storageRef = ref(storage, type);
    const imageUrls: TileDetails[] = [];
    const items = await listAll(storageRef);

    for (const item of items.items) {
      const url = await getDownloadURL(item);
      imageUrls.push({
        menu: false,
        amount: undefined,
        type: TileType.Item,
        name: item.name.split('.')[0].replaceAll('_', ' '),
        url: url
      });
    }

    return imageUrls;
  },
}