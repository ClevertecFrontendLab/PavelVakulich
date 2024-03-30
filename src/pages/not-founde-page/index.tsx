import { push } from 'redux-first-history';
import { PATHS } from '@constants/paths';
import { useAppDispatch } from '@redux/storeSetting';
import { Button, Result } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import styles from './notFoundPage.module.css';

export const NotFoundPage = () => {
    const dispatch = useAppDispatch();

    return (
        <Content className={styles.wrapper}>
            <div className={styles.main}>
                <Result
                    status={404}
                    title='Такой страницы нет'
                    subTitle='Извините, страница не найдена, возможно, она была удалена или перемещена.'
                    extra={
                        <Button
                            type='primary'
                            size='large'
                            onClick={() => dispatch(push(PATHS.MAIN))}
                        >
                            На главную
                        </Button>
                    }
                />
            </div>
        </Content>
    );
};
