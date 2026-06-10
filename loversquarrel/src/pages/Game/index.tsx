import AppHeader from "../../components/AppBar/AppHeader/AppHeader";
import BoyfriendPanel from "../../components/PlayerPanel/BoyfriendPanel/BoyfriendPanel";
import GirlfriendPanel from "../../components/PlayerPanel/GirlfriendPanel/GirlfriendPanel";
import ArgumentArena from "../../components/ArgumentAreana/ArgumentArena";
import ChaosPanel from "../../components/ChaosPanel/ChaosPanel";
import StatsPanel from "../../components/StatsPanel/StatsPanel";
import StartButton from "../../components/StartButton/StartButton";
import style from "./style.module.css";
import layoutStyle from "../../layout.module.css";
import { useSelector } from "react-redux";
export default function Game() {

    const gameSettings = useSelector((state: any) => state.game)

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
                <section className={[style.container, style.glassCard,
                gameSettings.game.currentUserType === "Boyfriend" ? style.bfBorder : style.gfBorder].join(' ')}>
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