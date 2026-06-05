import AppHeader from "../../components/AppBar/AppHeader/AppHeader";
import BoyfriendPanel from "../../components/PlayerPanel/BoyfriendPanel/BoyfriendPanel";
import GirlfriendPanel from "../../components/PlayerPanel/GirlfriendPanel/GirlfriendPanel";
import ArgumentArena from "../../components/ArgumentAreana/ArgumentArena";
import ChaosPanel from "../../components/ChaosPanel/ChaosPanel";
import StatsPanel from "../../components/StatsPanel/StatsPanel";
import StartButton from "../../components/StartButton/StartButton";
import style from "./style.module.css";
import layoutStyle from "../../layout.module.css";
export default function Game() {
    return (
        <main className={style.pageContainer}>
            <AppHeader />

            <section className={`${style.gameLayout} ${layoutStyle.gameLayout}`}>
                <aside className={[style.glassCard, layoutStyle.boyfriendPanel].join(' ')}>
                    <BoyfriendPanel />
                </aside>

                <section className={[style.glassCard, layoutStyle.argumentArena].join(' ')}>
                    <ArgumentArena />
                </section>

                <aside className={[style.glassCard, layoutStyle.girlfriendPanel].join(' ')}>
                    <GirlfriendPanel />
                </aside>
            </section>

            <footer className={`${style.gameControlLayout} ${layoutStyle.gameControlLayout}`}>
                <section className={[style.container, style.glassCard].join(' ')}>
                    <ChaosPanel />
                </section>
                <section className={style.container}>
                    <StartButton />
                </section>
                <section className={[style.container, style.glassCard].join(' ')}>
                    <StatsPanel />
                </section>
            </footer>
        </main>
    );
}