'use client';

import AppHeader from '@/src/shared/components/AppHeader/AppHeader';
import BoyfriendPanel from '@/src/features/character/BoyfriendPanel';
import GirlfriendPanel from '@/src/features/character/GirlfriendPanel';
import ArgumentArena from '@/src/features/arena/ArgumentArena';
import ChaosPanel from '@/src/features/chaos/ChaosPanel';
import StatsPanel from '@/src/features/stats/StatsPanel';

export default function Home() {
  return (
    <main className="page-container">
      <AppHeader />

      <section className="game-layout">
        <aside className="character-panel container  glass-card">
          <BoyfriendPanel />
        </aside>

        <section className="arena-container container  glass-card">
          <ArgumentArena />
        </section>

        <aside className="character-panel container  glass-card">
          <GirlfriendPanel />
        </aside>
      </section>

      <footer className="game-control-layout">
        <section className="chaos-panel container  glass-card">
          <ChaosPanel />
        </section>

        <section className="stats-panel container  glass-card">
          <StatsPanel />
        </section>
      </footer>
    </main>
  );
}