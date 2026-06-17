/** A single live stat card shown in the StatsPanel */
export type StatCard = {
  id: number;
  /** Bundler-resolved image import (string URL at runtime) */
  image: string;
  title: string;
  /** Percentage value 0–100 */
  value: number;
};
