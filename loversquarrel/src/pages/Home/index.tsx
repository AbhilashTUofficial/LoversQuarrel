import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserToken, setUserType } from '../../redux/userSlice';
import style from "./style.module.css";
import baseStyle from "../../base.module.css"
import { setCurrentUserType, setGameMode } from '../../redux/gameSlice';

function Home() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onClickBoyfriend = () => {
        dispatch(setUserToken("Boyfriend"));
        dispatch(setUserType("Boyfriend"))
        dispatch(setCurrentUserType("Boyfriend"))
        dispatch(setGameMode("solo"))
        navigate('/setup')
    }

    const onClickGirlfriend = () => {
        dispatch(setUserToken("girlfriend"));
        dispatch(setUserType("girlfriend"))
        dispatch(setCurrentUserType("girlfriend"))
        dispatch(setGameMode("solo"))
        navigate('/setup')
    }

    const onClickDual = () => {
        dispatch(setUserToken('dual'));
        dispatch(setUserType("girlfriend"))
        dispatch(setGameMode("dual"))
        dispatch(setCurrentUserType("girlfriend"))
        navigate('/setup')
    }

    const onClickAIMode = () => {
        dispatch(setUserToken('dual'));
        dispatch(setUserType("girlfriend"))
        dispatch(setCurrentUserType("girlfriend"))
        dispatch(setGameMode("ai"))
        navigate('/setup')
    }

    return (
        <div className={[style.pageContainer, style.homeContainer].join(' ')}>
            <div className={[style.chooseUserTypeContainer, baseStyle.glassCard].join(' ')}>
                <div className={style.chooseUserType}>Choose User Type</div>
                <div className={style.userTypeBtnContainer}>
                    <button className={[style.userTypeBtn, style.boyfriendBtn].join(' ')} onClick={onClickBoyfriend}>Boyfriend</button>
                    <button className={[style.userTypeBtn, style.girlfriendBtn].join(' ')} onClick={onClickGirlfriend}>Girlfriend</button>
                    <button className={[style.userTypeBtn, style.dualBtn].join(' ')} onClick={onClickDual}>Dual</button>
                    <button className={[style.userTypeBtn, style.aiBtn].join(' ')} onClick={onClickAIMode}>AI Mode</button>
                </div>
            </div>
        </div>
    )
}

export default Home