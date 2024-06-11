import { DraggableDetails } from "./item";
import { Moveability } from "./types";
import { generateId } from '@/service';

export interface LineInstance {
  selected?: string;
  values: Record<string, LineDetails>;
}

export interface LineDetails {
  internalId: string,
  selected: boolean,
  startId: string,
  points: PointDetail[],
  start: Moveability,
  endId: string,
  end: Moveability,
  description?: string,
}

export interface PointDetail {
  position: Moveability,
  hovering: boolean,
}


export function setLine(item: DraggableDetails): LineDetails {
  return {
    internalId: generateId(`li-${item.name}`, 6),
    startId: item.internalId,
    start: { top: item.top, left: item.left },
    points: [],
    endId: '',
    selected: true,
    end: { top: item.top, left: item.left }
  };
}