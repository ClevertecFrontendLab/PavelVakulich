import { AndroidFilled } from '@ant-design/icons';
import { AppleFilled } from '@ant-design/icons';
import cnBind from 'classnames/bind';
import styles from './Footer.module.css';

const cx = cnBind.bind(styles);

export const Footer: React.FC = () => {
    return <div className={styles.column_footer}>
                <div className={styles.footer_wrapper}>
                    <div className={styles.column_row}>
                        <button type="button" className={styles.button}>
                            Скачать на телефон
                        </button>
                            Доступно в PRO-тарифе
                    </div>
                    <div className={styles.app_row}>
                        <div className={styles.icon}><AndroidFilled />
                            <span>Android OS</span>
                        </div>
                        <div className={styles.icon}><AppleFilled />
                            <span>Apple iOS</span>
                        </div>
                    </div>
                </div>
                <div className={cx(styles.people_reviews, styles.margin_left)}>
                    Смотреть отзывы
                </div>
            </div>
};
