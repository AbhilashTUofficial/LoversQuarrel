export type Trait = {
  name: string;
  value: number;
};

export type PlayerTraitsProps = {
  traits: Trait[];
  isBoyfriend: boolean;
  gameMode: string;
};

export interface ArgumentInputProps {
  isBfTabActive: boolean;
}
