export type Moveability = {
  top: number;
  left: number;
}

export enum TileType {
  Skill = 'Skill',
  Item = 'item',
  Goal = 'goal',
}

export enum Screens {
  Home = 'home',
  AboutMe = 'About Me',
  Modelling = 'Modelling',
  Menu = 'Menu',
  Clans = 'Clan Events'
}

export enum Mode {
  Drag = 'drag',
  Move = 'move',
  Link = 'link',
}

export function mapActionToMode(action: string | null): Mode {
  switch (action) {
    case 'drag':
      return Mode.Drag;
    case 'move':
      return Mode.Move;
    case 'link':
      return Mode.Link;
    default:
      return Mode.Move;
  }
};

export enum Settings {
  Developer = 'developer',
  Information = 'information',
  Grid = 'grid',
  Border = 'border',
  Layers = 'layers',
}

export function getSettings(settings: string | null): string[] | undefined {
  return settings?.split(',');
}
