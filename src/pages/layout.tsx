import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@components/sidebar';
import { STATUS_CODE } from '@constants/constants';
import { useGetMeQuery } from '@redux/API/authorizeApi';
import { logout } from '@redux/authSlice';
import { useAppDispatch } from '@redux/storeSetting';
import { setUser } from '@redux/user/user-slice';
import { Layout } from 'antd';

import styles from './MainPage/mainPage.module.css';

type ErrorGetUser = {
    status: number;
    data: {
        message: string;
        statusCode: number;
        error: string;
    };
};

export const LayoutMain = () => {
    const dispatch = useAppDispatch();
    const { data: user, isError, error, isSuccess } = useGetMeQuery();

    useEffect(() => {
        if (isError) {
            const errorGetUser = error as ErrorGetUser;

            if (errorGetUser.status === STATUS_CODE.FORBIDDEN) {
                dispatch(logout());
            }
        }
        if (isSuccess) {
            dispatch(setUser(user));
        }
    }, [isError, error, dispatch, isSuccess, user]);

    return (
        <Layout hasSider={true} style={{ height: '100%' }} className={styles.image_container}>
            <Sidebar />
            <Outlet />
        </Layout>
    );
};
