import { useEffect, useState } from 'react';
import type { ArgumentInputProps } from "./types";
import BoyfriendPanel from '../PlayerPanel/BoyfriendPanel/BoyfriendPanel';
import GirlfriendPanel from '../PlayerPanel/GirlfriendPanel/GirlfriendPanel';
import baseStyle from "../../base.module.css";
import style from "./style.module.css";
import { setInitialArgument, setTraits } from '../../redux/gameSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import useSetInitialArg from '../../hooks/useSetInitialArg';
import useGetInitialTraits from '../../hooks/useGetInitialTraits';
import useGetFormatted from '../../hooks/useGetFormatted';
import type { UserRole } from '../../types';

const ArgumentInput: React.FC<ArgumentInputProps> = ({ isBfTabActive }) => {
    const currentUserType: UserRole = isBfTabActive ? "boyfriend" : "girlfriend";
    const [isReformatting, setIsReformatting] = useState(false);
    const initialArg = useSetInitialArg();
    const initialTraits = useGetInitialTraits();
    const formattedArgument = useGetFormatted();
    const userData = useAppSelector((state) => state.game);
    const [argument, setArgument] = useState(
        isBfTabActive
            ? userData.game.boyfriend.initialArgument.content
            : userData.game.girlfriend.initialArgument.content
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (argument.trim() !== "") {
                initialArg.mutate({
                    username: (userData.game as any).currentUser || "user",
                    [currentUserType]: {
                        initialArgument: argument
                    },
                });
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [argument]);

    const commitInitialArgument = (argContent: string) => {
        setArgument(argContent);
        dispatch(setInitialArgument({
            id: "001",
            from: isBfTabActive ? "boyfriend" : "girlfriend",
            content: argContent,
            timestamp: Date.now().toString(),
        }));
    };

    const reformatArgumentText = async (
        text: string,
        userType: UserRole
    ) => {
        try {
            setIsReformatting(true);
            formattedArgument.mutate({
                username: (userData.game as any).currentUser || "user",
                [userType]: {
                    initialArgument: text
                }
            });

            if (formattedArgument.data) {
                setArgument(formattedArgument.data.data.formatted);
                dispatch(setInitialArgument({
                    id: "001",
                    from: userType,
                    content: formattedArgument.data.data.formatted,
                    timestamp: Date.now().toString(),
                }));
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsReformatting(false);
        }
    };

    const GenerateTraits = (text: string, userType: UserRole) => {
        initialTraits.mutate({
            username: (userData.game as any).currentUser || "user",
            argument: text,
            tags: userData.game[userType].tags
        });

        if (initialTraits.data) {
            dispatch(setTraits({
                traits: initialTraits.data.data.traits,
                userType: userType
            }));
        }
    };

    return (
        <div className={style.argumentCont}>
            <div className={style.argumentInputContainer}>
                <textarea
                    placeholder="Enter Argument"
                    className={style.argumentInput}
                    value={argument}
                    onChange={(e) => commitInitialArgument(e.target.value)}
                />
                <button
                    onClick={() => reformatArgumentText(argument, currentUserType)}
                    disabled={isReformatting}
                    className={`${style.reformatBtn}`}
                >
                    {isReformatting ? "Reformatting..." : "Reformat & Fix Grammar"}
                </button>
            </div>

            <button
                onClick={() => GenerateTraits(argument, currentUserType)}
                className={`${style.argumentBtn} ${isBfTabActive ? style.bfArgumentBtn : style.gfArgumentBtn}`}
            >
                Generate Traits from Argument
            </button>
            <aside className={[baseStyle.glassCard, style.traitsContainer].join(' ')}>
                {isBfTabActive ? <BoyfriendPanel /> : <GirlfriendPanel />}
            </aside>
        </div>
    );
};

export default ArgumentInput;