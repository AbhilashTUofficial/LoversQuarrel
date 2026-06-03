import react from "react"
import AppHeader from "../../components/AppBar/AppHeader/AppHeader";
import BoyfriendPanel from "../../components/PlayerPanel/BoyfriendPanel/BoyfriendPanel";
import GirlfriendPanel from "../../components/PlayerPanel/GirlfriendPanel/GirlfriendPanel";
import ArgumentArena from "../../components/ArgumentAreana/ArgumentArena";
import ChaosPanel from "../../components/ChaosPanel/ChaosPanel";
import StatsPanel from "../../components/StatsPanel/StatsPanel";
import { Pause } from "lucide-react";
import StartButton from "../../components/StartButton/StartButton";

export default function Home() {
    return (
        <main className="page-container">
            <AppHeader />

            <section className="game-layout">
                <aside className="container  glass-card">
                    <BoyfriendPanel />
                </aside>

                <section className="container  glass-card">
                    <ArgumentArena />
                </section>

                <aside className="container  glass-card">
                    <GirlfriendPanel />
                </aside>
            </section>

            <footer className="game-control-layout">
                <section className="container  glass-card">
                    <ChaosPanel />
                </section>
                <section className="container">
                    <StartButton />
                </section>
                <section className="container  glass-card">
                    <StatsPanel />
                </section>
            </footer>
        </main>
    );
}