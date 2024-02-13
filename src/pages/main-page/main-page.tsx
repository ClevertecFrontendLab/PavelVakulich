import React, { useState } from 'react';
import cnBind from 'classnames/bind';
import styles from './main-page.module.css';
import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';

const cx = cnBind.bind(styles);

export const MainPage: React.FC = () => {
const [count, setCount] = useState(0);

return (
    <div className={styles.main}>
        <div className={styles.gap}>
            <div className={cx(styles.block, styles.text_blue)}>
                    С CleverFit ты сможешь:
                    <ul>
                        <li> — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;<br/></li>
                        <li> — отслеживать свои достижения в разделе статистики, сравнивая свои результаты</li>
                        с нормами и рекордами;<br/>
                        <li> — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы  о тренировках;<br/></li>
                        <li> — выполнять расписанные тренировки для разных частей тела, следуя подробным
                        инструкциям и советам профессиональных тренеров.</li>
                    </ul>
            </div>
            <div className={cx(styles.block, styles.text_big)}>
                CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
            </div>
            <div className={styles.row}>
                <div className={styles.block_row}>
                    <p className={styles.ico_p}>
                        Расписать тренировки
                    </p>
                    <div className={styles.ico_div}>
                        <HeartFilled className={styles.ico}/>
                        Тренировки
                    </div>
                </div>
                <div className={styles.block_row}>
                    <p className={styles.ico_p}>Назначить календарь </p>
                    <div className={styles.ico_div}><CalendarTwoTone className={styles.ico} twoToneColor='#2f54eb'/>
                        Календарь
                    </div>
                </div>
                <div className={styles.block_row}>
                    <p className={styles.ico_p}>
                        Запонить профиль
                    </p> <div className={styles.ico_div}><IdcardOutlined className={styles.ico}/>
                        Профиль
                    </div>
                </div>
            </div>
        </div >
    </div>
    )
};
