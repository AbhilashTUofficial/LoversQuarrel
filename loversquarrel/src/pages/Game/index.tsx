import AppHeader from "../../components/AppBar/AppHeader/AppHeader";
import BoyfriendPanel from "../../components/PlayerPanel/BoyfriendPanel/BoyfriendPanel";
import GirlfriendPanel from "../../components/PlayerPanel/GirlfriendPanel/GirlfriendPanel";
import ArgumentArena from "../../components/ArgumentAreana/ArgumentArena";
import ChaosPanel from "../../components/ChaosPanel/ChaosPanel";
import StatsPanel from "../../components/StatsPanel/StatsPanel";
import StartButton from "../../components/StartButton/StartButton";
import style from "./style.module.css";
import baseStyle from "../../base.module.css";
import layoutStyle from "../../layout.module.css";
import { useAppSelector } from "../../redux/store";
export default function Game() {

    const gameSettings = useAppSelector((state) => state.game)

    return (
        <main className={baseStyle.pageContainer}>
            <AppHeader />

            <section className={layoutStyle.gameLayout}>
                <aside className={[baseStyle.glassCard, layoutStyle.boyfriendPanel].join(' ')}>
                    <BoyfriendPanel />
                </aside>

                <section className={[baseStyle.glassCard, layoutStyle.argumentArena].join(' ')}>
                    <ArgumentArena />
                </section>

                <aside className={[baseStyle.glassCard, layoutStyle.girlfriendPanel].join(' ')}>
                    <GirlfriendPanel />
                </aside>
            </section>

            <footer className={layoutStyle.gameControlLayout}>
                <section className={[baseStyle.glassCard,
                gameSettings.game.currentUserType === "Boyfriend" ? style.bfBorder : style.gfBorder].join(' ')}>
                    <ChaosPanel />
                </section>
                <section>
                    <StartButton />
                </section>
                <section className={baseStyle.glassCard}>
                    <StatsPanel />
                </section>
            </footer>
        </main>
    );
}