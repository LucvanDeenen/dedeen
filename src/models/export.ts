import { DraggableInstance } from "./item";
import { LineInstance } from "./line";

export interface FileExport {
  positions: DraggableInstance | string;
  lines: LineInstance | string;
}