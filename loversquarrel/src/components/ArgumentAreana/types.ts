// ─── Shared primitive types used across ArgumentArena ─────────────────────────

export type ArgumentSender = "boyfriend" | "girlfriend" | "system";

export type Argument = {
  id: number;
  from: ArgumentSender;
  content: string;
  timestamp: string; // ISO string — must be serializable for Redux
};
