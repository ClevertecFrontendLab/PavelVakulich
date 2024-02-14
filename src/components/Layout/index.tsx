import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import { Layout, } from 'antd';
import { Side } from '../Sider/Sidebar';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const LayoutApp: React.FC = () => {
return (
    <Layout className={styles.layout}>
        <Side/>
        <Layout className={styles.site_layout}>
            <Header/>
            <Outlet />
            <Footer/>
        </Layout>
    </Layout>
);
};
