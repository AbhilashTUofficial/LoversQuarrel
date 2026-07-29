import { useEffect } from 'react'
import useLogin from '../../hooks/queries/useLogin';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserDetails, setUserLoggedIn, setUsername, setUserToken } from '../../redux/userSlice';

function Landing() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, status, isLoading }: { data: any, status: any, isLoading: boolean } = useLogin();


    useEffect(() => {
        if (status !== "success" || !data) return;
        const user = data.data.user;
        dispatch(setUsername(user.username));
        dispatch(setUserToken(user.name));
        dispatch(setUserDetails(user));
        dispatch(setUserLoggedIn(true));

        const timeout = setTimeout(() => {
            navigate("/home", { replace: true });
        }, 1000);

        return () => clearTimeout(timeout);
    }, [status, data, dispatch, navigate]);

    if (isLoading) return <div>Loading...</div>
    if (status === "error") return <div>Error</div>
    if (status === "success") return <div>Success</div>
    return <div></div>

}


export default Landing