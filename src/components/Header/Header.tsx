import styles from './Header.module.css';
import { Layout, } from 'antd';
import { Link } from 'react-router-dom';
import { SettingOutlined } from "@ant-design/icons";

export const Header: React.FC = () => {
return <Layout.Header  className={styles.header_wrapper}>
    <Link className={styles.header_link} to={""}>
        Главная
    </Link>
    <button type="button" className={styles.settings}> <SettingOutlined className={styles.icon}/>
        Настройки
    </button>
    <span className={styles.title}>
        Приветствуем тебя в CleverFit— приложении, <br/>которое поможет тебе добиться своей мечты!
    </span>
</Layout.Header>
};
