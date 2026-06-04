import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserToken } from '../../redux/userSlice';
import './style.css'
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
        <div className='page-container home'>
            <div className="choose-user-type-container glass-card">
                <div className="choose-user-type">Choose User Type</div>
                <div className="user-type-btn-container">
                    <button className="user-type-btn boyfriend-btn" onClick={onClickBoyfriend}>Boyfriend</button>
                    <button className="user-type-btn girlfriend-btn" onClick={onClickGirlfriend}>Girlfriend</button>
                </div>
            </div>
        </div>
    )
}

export default Home