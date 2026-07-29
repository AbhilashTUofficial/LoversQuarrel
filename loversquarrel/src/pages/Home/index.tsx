import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserToken, setUserType, type UserState } from '../../redux/userSlice';
import style from "./style.module.css";
import baseStyle from "../../base.module.css"
import { setCurrentUserType, setGameMode } from '../../redux/gameSlice';

function Home() {



    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData: UserState = useSelector((state: any) => state.user);


    const onClickBoyfriend = () => {
        dispatch(setUserToken("boyfriend"));
        dispatch(setUserType("boyfriend"));
        dispatch(setCurrentUserType("boyfriend"));
        dispatch(setGameMode("solo"));
        navigate('/setup');
    }

    const onClickGirlfriend = () => {
        dispatch(setUserToken("girlfriend"));
        dispatch(setUserType("girlfriend"));
        dispatch(setCurrentUserType("girlfriend"));
        dispatch(setGameMode("solo"));
        navigate('/setup');
    }

    const onClickDual = () => {
        dispatch(setUserToken('dual'));
        dispatch(setUserType("girlfriend"));
        dispatch(setGameMode("dual"));
        dispatch(setCurrentUserType("girlfriend"));
        navigate('/setup');
    }

    const onClickAIMode = () => {
        dispatch(setUserToken('dual'));
        dispatch(setUserType("girlfriend"));
        dispatch(setCurrentUserType("girlfriend"));
        dispatch(setGameMode("ai"));
        navigate('/setup');
    }
    console.log("userdata: ", userData);
    if (userData.loggedin) {

        return (
            <div className={[style.pageContainer, style.homeContainer].join(' ')}>
                <div className={[style.chooseUserTypeContainer, baseStyle.glassCard].join(' ')}>
                    <div className={style.chooseUserType}>Choose User Type</div>
                    <div className={style.userTypeBtnContainer}>
                        <button className={[style.userTypeBtn, style.boyfriendBtn].join(' ')} onClick={onClickBoyfriend}>boyfriend</button>
                        <button className={[style.userTypeBtn, style.girlfriendBtn].join(' ')} onClick={onClickGirlfriend}>girlfriend</button>
                        <button className={[style.userTypeBtn, style.dualBtn].join(' ')} onClick={onClickDual}>Dual</button>
                        <button className={[style.userTypeBtn, style.aiBtn].join(' ')} onClick={onClickAIMode}>AI Mode</button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        setTimeout(() => {
            navigate("/")
        }, 500)
        return (
            <div className={[style.pageContainer, style.homeContainer].join(' ')}>
                <div className={[baseStyle.userLoggingOutContainer, baseStyle.glassCard].join(' ')}>
                    <div className={baseStyle.userLoggingOut}>User logging out...</div>
                </div>
            </div>)
    }

}

export default Home