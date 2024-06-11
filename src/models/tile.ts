import { TileType } from "./types";

export interface TileDetails {
    type: TileType | undefined;
    name: string;
    url: string;
    menu: boolean;
    amount: number | undefined;
}


export interface TileInstance {
    values: TileDetails[];
}

export function getTiles(): TileInstance {
    return { values: [] };
}
