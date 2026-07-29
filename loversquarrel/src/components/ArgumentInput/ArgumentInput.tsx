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
import type { Traits } from '../../redux/types.ts';


const ArgumentInput: React.FC<ArgumentInputProps> = (
    { isBfTabActive }) => {

    const currentUserType = isBfTabActive ? "Boyfriend" : "Girlfriend";
    const [argument, setArgument] = useState("");
    const [isReformatting, setIsReformatting] = useState(false);
    const { mutate: setInitialArg, isPending: initialArgPending, data, isSuccess: initialArgSuccess, error: initialArgError } = useSetInitialArg();
    const { mutate: getInitialTraits, isPending: initialTraitsPending, data: initialTraits, isSuccess: initialTraitsSuccess, error: initialTraitsError } = useGetInitialTraits();
    const userData = useSelector((state: any) => state.game);

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (argument.trim() != "") {

                isBfTabActive ?
                    setInitialArg({
                        username: userData.game.currentUser,
                        boyfriend: {
                            initialArgument: argument
                        },
                    }) :
                    setInitialArg({
                        username: userData.game.currentUser,
                        girlfriend: {
                            initialArgument: argument
                        },
                    })
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [argument])


    const commitInitialArgument = (argument: string) => {
        setArgument(argument);
        dispatch(setInitialArgument({
            id: "001",
            from: isBfTabActive ? "Boyfriend" : "Girlfriend",
            content: argument,
            timestamp: Date.now().toString(),
        }));
    }

    const reformatArgumentText = async (
        text: string,
        userType: "Boyfriend" | "Girlfriend"
    ): Promise<string> => {
        // if (!text.trim()) {
        //     return "";
        // }

        try {
            setInitialArg({
                username: userData.game.currentUser,
                boyfriend: {
                    initialArgument: argument
                }
            })
            // console.log(initialArg?.data)
            return ""

        } catch (err) {
            console.error(err);
            return "";
        } finally {
            setIsReformatting(false);
        }
    };

    const reformatText = async (text: string, userType: "Boyfriend" | "Girlfriend") => {

        // reformatArgumentText(text, userType).then((formattedArgument: string) => setArgument(formattedArgument));

    }

    const GenerateTraits = (text: string, userType: "Boyfriend" | "Girlfriend") => {

        if (userType === "Boyfriend") {
            getInitialTraits({
                username: userData.game.currentUser,
                argument: text,
                tags: userData.game.boyfriend.tags
            });
        }

        if (userType === "Girlfriend") {
            getInitialTraits({
                username: userData.game.currentUser,
                argument: text,
                tags: userData.game.girlfriend.tags
            })
        }

        if (initialTraits) {
            dispatch(setTraits({
                traits: initialTraits.data.traits,
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