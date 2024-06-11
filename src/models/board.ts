import { Mode, mapActionToMode, getSettings } from "./types";

export interface BoardInstance {
  action: Mode;
  zoom: number;
  loading: boolean;
  images: boolean;
  settings: string[];
}

export function getBoard(): BoardInstance {
  return {
    zoom: 50,
    action: mapActionToMode(localStorage.getItem('action')) || Mode.Move,
    settings: getSettings(localStorage.getItem('settings')) || [] as string[],
    loading: true as boolean,
    images: false as boolean
  }
}