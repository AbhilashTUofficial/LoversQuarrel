/** Props for the ArgumentTags tag list below each player panel */
export type ArgumentTagsProps = {
  isBoyfriend: boolean;
  /** Current active tags from Redux */
  activeTags: string[];
  /** Called when user clicks "+ Add Tag" */
  onAddTag: (tag: string) => void;
  /** Called when user clicks the X on a tag chip */
  onRemoveTag: (tag: string) => void;
};
