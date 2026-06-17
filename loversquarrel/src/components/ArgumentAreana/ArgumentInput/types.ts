export type ArgumentInputProps = {
  /** Callback to send a submitted message up to the parent / Redux */
  setArgument: (message: string) => void;
  /** Controls textarea and send-button color theme */
  isBoyfriend: boolean;
};
