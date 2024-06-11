import { TileDetails } from "./tile";
import { Moveability } from "./types";
import { generateId } from '@/service';

export interface DraggableInstance {
  values: Record<string, DraggableDetails>;
}

export interface DraggableDetails extends Moveability {
  internalId: string,
  name: string;
  url: string;
  lines: string[],
  amount: number,
  entity?: HTMLElement | null;
}

export function setItem(item: TileDetails): DraggableDetails {
  return {
    internalId: generateId(item.name, 3),
    name: item.name,
    url: item.url,
    lines: [],
    top: 500,
    left: 500,
    entity: null,
    amount: item.amount!,
  }; 
}