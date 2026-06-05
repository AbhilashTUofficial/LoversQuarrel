import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserToken } from '../../redux/userSlice';
import style from "./style.module.css";

function Home() {

    const userData = useSelector((state: any) => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onClickBoyfriend = () => {
        dispatch(setUserToken('boyfriend'));
        navigate('/game')
    }

    const onClickGirlfriend = () => {
        dispatch(setUserToken('girlfriend'));
        navigate('/game')
    }

    return (
        <div className={[style.pageContainer, style.home].join(' ')}>
            <div className={[style.chooseUserTypeContainer, style.glassCard].join(' ')}>
                <div className={style.chooseUserType}>Choose User Type</div>
                <div className={style.userTypeBtnContainer}>
                    <button className={[style.userTypeBtn, style.boyfriendBtn].join(' ')} onClick={onClickBoyfriend}>Boyfriend</button>
                    <button className={[style.userTypeBtn, style.girlfriendBtn].join(' ')} onClick={onClickGirlfriend}>Girlfriend</button>
                </div>
            </div>
        </div>
    )
}

export default Home