import { useEffect, useState } from 'react';
import type { ArgumentInputProps } from "./types.ts";
import BoyfriendPanel from '../PlayerPanel/BoyfriendPanel/BoyfriendPanel.tsx';
import GirlfriendPanel from '../PlayerPanel/GirlfriendPanel/GirlfriendPanel.tsx';
import baseStyle from "../../base.module.css"
import style from "./style.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { setInitialArgument, setTraits, } from '../../redux/gameSlice.ts';
import useSetInitialArg from '../../hooks/useSetInitialArg.ts';
import useGetInitialTraits from '../../hooks/useGetInitialTraits.ts';
import useGetFormatted from '../../hooks/useGetFormatted.tsx';


const ArgumentInput: React.FC<ArgumentInputProps> = (
    { isBfTabActive }) => {

    const currentUserType = isBfTabActive ? "boyfriend" : "girlfriend";
    const [isReformatting, setIsReformatting] = useState(false);
    const initialArg = useSetInitialArg();
    const initialTraits = useGetInitialTraits();
    const formattedArgument = useGetFormatted();
    const userData = useSelector((state: any) => state.game);
    const [argument, setArgument] = useState(isBfTabActive ? userData.game.boyfriend.initialArgument.content : userData.game.girlfriend.initialArgument.content);

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (argument.trim() != "") {

                initialArg.mutate({
                    username: userData.game.currentUser,
                    [currentUserType]: {
                        initialArgument: argument
                    },
                });
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [argument])


    const commitInitialArgument = (argument: string) => {
        setArgument(argument);
        dispatch(setInitialArgument({
            id: "001",
            from: isBfTabActive ? "boyfriend" : "girlfriend",
            content: argument,
            timestamp: Date.now().toString(),
        }));
    }

    const reformatArgumentText = async (
        text: string,
        userType: "boyfriend" | "girlfriend"
    ) => {

        try {
            setIsReformatting(true);
            formattedArgument.mutate({
                username: userData.game.currentUser,
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
            return "";
        } finally {
            setIsReformatting(false);
        }
    };


    const GenerateTraits = (text: string, userType: "boyfriend" | "girlfriend") => {

        initialTraits.mutate({
            username: userData.game.currentUser,
            argument: text,
            tags: userData.game[userType].tags
        })

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
                    className={`${style.reformatBtn} `}
                >
                    {isReformatting ? "Reformatting..." : "Reformat & Fix Grammar"}
                </button>
            </div>

            <button onClick={() => GenerateTraits(argument, currentUserType)} className={`${style.argumentBtn} ${isBfTabActive ? style.bfArgumentBtn : style.gfArgumentBtn}`}>
                Generate Traits from Argument
            </button>
            <aside className={[baseStyle.glassCard, style.traitsContainer].join(' ')}>
                {isBfTabActive ? <BoyfriendPanel /> : <GirlfriendPanel />}
            </aside>
        </div>
    );
};

export default ArgumentInput;