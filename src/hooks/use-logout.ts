import { authorizeApi } from '@redux/API/authorizeApi';
import { logout } from '@redux/authSlice';
import { useAppDispatch } from '@redux/storeSetting';
import { resetUser } from '@redux/user/user-slice';

export const useLogout = () => {
    const dispatch = useAppDispatch();

    return () => {
        dispatch(resetUser());
        dispatch(authorizeApi.util.resetApiState());
        dispatch(logout());
    };
};
