import { useEffect } from 'react';
import useLogin from '../../hooks/queries/useLogin';
import { useNavigate } from 'react-router-dom';
import { setUserDetails, setUserLoggedIn, setUsername, setUserToken } from '../../redux/userSlice';
import { useAppDispatch } from '../../redux/store';

function Landing() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { data, status, isLoading } = useLogin();

    useEffect(() => {
        if (status !== "success" || !data) return;
        const user = (data as any)?.data?.user;
        if (user) {
            dispatch(setUsername(user.username));
            dispatch(setUserToken(user.name));
            dispatch(setUserDetails(user));
            dispatch(setUserLoggedIn(true));
        }

        const timeout = setTimeout(() => {
            navigate("/home", { replace: true });
        }, 1000);

        return () => clearTimeout(timeout);
    }, [status, data, dispatch, navigate]);

    if (isLoading) return <div>Loading...</div>;
    if (status === "error") return <div>Error</div>;
    if (status === "success") return <div>Success</div>;
    return <div></div>;
}

export default Landing;