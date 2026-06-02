import react from "react"
import AppHeader from "../../components/AppBar/AppHeader/AppHeader";
import BoyfriendPanel from "../../components/PlayerPanel/BoyfriendPanel/BoyfriendPanel";
import GirlfriendPanel from "../../components/PlayerPanel/GirlfriendPanel/GirlfriendPanel";
import ArgumentArena from "../../components/ArgumentArena";
import ChaosPanel from "../../components/ChaosPanel/ChaosPanel";
import StatsPanel from "../../components/StatsPanel";
import { Pause } from "lucide-react";

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
                    {/* <ChaosPanel /> */}
                </section>
                <section className="stats-panel container  glass-card">
                    {/* <Pause className="pause-icon" style={{ width: 180, height: 160 }} /> */}
                </section>
                <section className="stats-panel container  glass-card">
                    {/* <StatsPanel /> */}
                </section>
            </footer>
        </main>
    );
}