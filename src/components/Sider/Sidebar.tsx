import React, { useEffect, useState } from 'react';
import cnBind from 'classnames/bind';
import styles from './Sidebar.module.css';
import logo from '../../assets/svg/logo.svg';
import achiev from '../../assets/svg/achiev.svg';
import fit from '../../assets/svg/fit.svg';
import exit from '../../assets/svg/exit.svg';
import {Layout, Menu} from 'antd';
import {CalendarTwoTone, HeartFilled, IdcardOutlined, MenuFoldOutlined, MenuUnfoldOutlined,
} from '@ant-design/icons';


const cx = cnBind.bind(styles);
const { Sider } = Layout;

export const Side: React.FC = () => {

    const [collapsed, setCollapsed] = useState(false);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isDataTextButton, setDataTextButton] = useState('sider-switch');
    const [wight, setWight] = useState(208);
    const [collapsedWidth, setCollapsedWidth] = useState(64);

    const listItem = [
        {
            key: '1',
            icon: screenWidth > 600 ? <CalendarTwoTone className={styles.icon} twoToneColor='#003a8c'/>: '',
            label: collapsed ? '' : 'Календарь',
        },
        {
            key: '2',
            icon:screenWidth > 600 ?  <HeartFilled className={styles.icon} />: '',
            label: collapsed ? '' : 'Тренировки',
        },
        {
            key: '3',
            icon:screenWidth > 600 ?  <img alt='cap ico' src={achiev} className={styles.icon} />: '',
            label: collapsed ? '' : 'Достижения',
        },
        {
            key: '4',
            icon:screenWidth > 600 ?  <IdcardOutlined className={styles.icon} />: '',
            label: collapsed ? '' : 'Профиль',
        },
    ];

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }
        if(screenWidth >= 600) { setDataTextButton('sider-switch') }
        if(screenWidth < 600) {
            setDataTextButton('sider-switch-mobile')
            setCollapsedWidth(0)
            setWight(106)
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [screenWidth]);

    return (
        <Sider breakpoint={"lg"} collapsedWidth={collapsedWidth} width={wight} className={cx(styles.sider, {sider_open: !collapsed})} trigger={null} collapsible collapsed={collapsed}>
            <div className={styles.sider_div}>
                <img alt='logoLage' src={collapsed ? fit : logo} className={cx({img_open: !collapsed, img: collapsed})}/>
                <Menu
                    mode="inline" defaultSelectedKeys={['1']}
                    className={cx({menu_open: !collapsed, menu: collapsed})}
                    items={listItem}
                />
            </div>
            <div className= {cx(styles.exit_div, {block: collapsed && screenWidth < 600, border_none: collapsed  && screenWidth < 600})}>
                {screenWidth < 600 ? "" :  <img alt='exit icon' src={exit} className={styles.icon}/>}  {collapsed ? '' : 'Выход'}
            </div>
            <button className={styles.button}
                data-test-id={isDataTextButton} type='button' onClick={() => setCollapsed(!collapsed)}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {className: styles.trigger})}
            </button>
        </Sider>
    );
};
