import React, { useState } from 'react';
import { Layout, Menu, Button, Typography, Input, Avatar, Divider, Image } from 'antd';
import {
    LogoutOutlined,
    SearchOutlined,
    NotificationFilled,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { NAVIGATION_CONFIG, SUPPORT_CONFIG } from '@/routes/NavigationConfig';
import { Outlet, useNavigate } from 'react-router';

const { Header, Content, Sider } = Layout;
const { Search } = Input;

export default function DashBoardLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState(() => {
        const navigationConfig = NAVIGATION_CONFIG();
        return navigationConfig.length > 0 ? navigationConfig[0].path : '/app/dashboard';
    });
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const navigate = useNavigate();

    // Process navigation config to create menu items
    const processNavigationToMenuItems = (navigationConfig) => {
        return navigationConfig.map((item) => {
            const IconComponent = item.icon;
            const menuItem = {
                key: item.path,
                icon: <IconComponent />,
                label: item.title,
            };

            if (item.submenu && item.submenu.length > 0) {
                menuItem.children = item.submenu.map((subItem) => {
                    const SubIconComponent = subItem.icon;
                    return {
                        key: subItem.path,
                        icon: <SubIconComponent />,
                        label: subItem.title,
                    };
                });
            }

            return menuItem;
        });
    };

    const mainMenuItems = processNavigationToMenuItems(NAVIGATION_CONFIG());

    // Support section items
    const supportMenuItems = processNavigationToMenuItems(SUPPORT_CONFIG());



    const handleMenuClick = ({ key }) => {
        setSelectedKey(key);
        navigate(key);
        // Close mobile menu after navigation
        if (window.innerWidth <= 768) {
            setMobileMenuVisible(false);
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    const handleLogout = () => {
        // Add your logout logic here
        console.log('Logout clicked');
    };

    const findNavigationLabel = (selectedKey) => {
        const mainNavigationConfig = NAVIGATION_CONFIG();
        const supportNavigationConfig = SUPPORT_CONFIG();
        const allNavigationConfig = [...mainNavigationConfig, ...supportNavigationConfig];

        // Search in all items
        for (const item of allNavigationConfig) {
            if (item.path === selectedKey) {
                return item.title;
            }
            // Search in submenu items
            if (item.submenu && item.submenu.length > 0) {
                for (const subItem of item.submenu) {
                    if (subItem.path === selectedKey) {
                        return subItem.title;
                    }
                }
            }
        }

        return 'Dashboard';
    };

    const currentLabel = findNavigationLabel(selectedKey);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Sidebar */}
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={250}
                collapsedWidth={80}
                className="dashboard-sidebar"
                breakpoint="lg"
                onBreakpoint={(broken) => {
                    if (broken) {
                        setCollapsed(true);
                    }
                }}
                style={{
                    display: window.innerWidth <= 768 && !mobileMenuVisible ? 'none' : 'flex',
                    flexDirection: 'column'
                }}
            >
                {/* Logo Section */}
                <div className="logo-section">
                    <div className="logo-content">
                        {/* <div className="logo-icon">
                            <div className="bid-command-logo">
                               <Image src='/src/assets/logo.png'/>
                            </div>
                        </div> */}
                        {/* {!collapsed && (
                            <div className="bid-command-logo">
                            <Image src='/src/assets/logo.png'/>
                         </div>
                        )} */}
                        {!collapsed && (
                            <img src='/src/assets/logo.png' width={180} />

                        )}
                        {collapsed && (
                            <img src='/src/assets/logo-sm.png' width={30} />

                        )}
                    </div>
                </div>

                {/* Menu Sections Container */}
                <div className="menu-sections-container">
                    {/* Main Menu */}
                    <div className="menu-section">
                        {!collapsed && (
                            <Typography.Text className="menu-label">Main menu</Typography.Text>
                        )}
                        <Menu
                            theme="light"
                            mode="vertical"
                            selectedKeys={[selectedKey]}
                            items={mainMenuItems}
                            onClick={handleMenuClick}
                            className="main-menu"
                        />
                    </div>

                    {/* Support Section */}
                    <div className="menu-section support-section">
                        {!collapsed && (
                            <Typography.Text className="menu-label">Support</Typography.Text>
                        )}
                        <Menu
                            theme="light"
                            mode="vertical"
                            selectedKeys={[selectedKey]}
                            items={supportMenuItems}
                            onClick={handleMenuClick}
                            className="support-menu"
                        />
                    </div>
                </div>

                {/* User Profile Section */}
                <div className="user-section">
                    {!collapsed && <Divider style={{ margin: '12px 0', borderColor: '#f0f0f0' }} />}
                    <div className="user-profile">
                        <Avatar size={collapsed ? 32 : 40} className="user-avatar">
                            DL
                        </Avatar>
                        {!collapsed && (
                            <div className="user-info">
                                <Typography.Text strong className="user-name">
                                    Denny Leo
                                </Typography.Text>
                                <Typography.Text className="user-email">
                                    dennyleo@gmail.com
                                </Typography.Text>
                            </div>
                        )}
                    </div>

                    {/* Logout Button */}
                    <Button
                        type="text"
                        icon={<LogoutOutlined />}
                        onClick={handleLogout}
                        className="logout-btn"
                        block={!collapsed}
                    >
                        {!collapsed && 'Log out'}
                    </Button>
                </div>
            </Sider>

            {/* Mobile Menu Overlay */}
            {mobileMenuVisible && (
                <div
                    className="mobile-overlay"
                    onClick={() => setMobileMenuVisible(false)}
                />
            )}

            <Layout className="site-layout">
                {/* Header */}
                <Header className="dashboard-header">
                    <div className="header-left">
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            className="collapse-btn desktop-only"
                        />
                        <Button
                            type="text"
                            icon={<MenuFoldOutlined />}
                            onClick={toggleMobileMenu}
                            className="mobile-menu-btn mobile-only"
                        />
                        <Typography.Title className="page-title">
                            {currentLabel}
                        </Typography.Title>
                    </div>

                    <div className="header-right">
                        <Input
                            placeholder="Search..."
                            prefix={<SearchOutlined />}
                            className="header-search"
                            style={{ width: 300 }}
                        />
                        <Button
                            type="default"
                            icon={<NotificationFilled />}
                        // className="notification-btn"
                        >

                        </Button>
                    </div>
                </Header>

                {/* Content */}
                <Content className="dashboard-content">
                    <Outlet />
                </Content>
            </Layout>

            <style jsx>{`
                .dashboard-sidebar {
                    background: #fff;
                    box-shadow: 2px 0 8px rgba(0,0,0,0.06);
                    position: relative;
                    z-index: 1001;
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                }

                .logo-section {
                    border-bottom: 1px solid #f0f0f0;
                    
                    display: flex;
                    align-items: center;
                    min-height: 80px;
                }

                .logo-content {
                    display: flex;
                    align-items: center;
                    justify-content:${!collapsed ? 'flex-start' : 'center'};
                    
                    gap: 12px;
                    width: 100%;
                }

                .bid-command-logo {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #1890ff, #096dd9);
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: bold;
                    text-align: center;
                    line-height: 1;
                }

                .logo-text {
                    font-size: 10px;
                    letter-spacing: 1px;
                }

                .logo-subtext {
                    font-size: 6px;
                    letter-spacing: 0.5px;
                    margin-top: -2px;
                }

                .logo-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: #1890ff;
                }

                /* Main Menu and Support Menu Container */}
                .menu-sections-container {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .menu-section {
                    margin: 20px 0;
                }

                .support-section {
                    margin-top: auto;
                    margin-bottom: 20px;
                }

                .menu-label {
                    display: block;
                    padding: 0 24px 8px;
                    color: #8c8c8c;
                    font-size: 12px;
                    font-weight: 400;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    text-align:left;
                    opacity:50%
                }

                .main-menu, .support-menu {
                    border: none;
                    background: transparent;
                }

                .main-menu .ant-menu-item,
                .support-menu .ant-menu-item {
                    
                    border-radius: 8px;
                    height: 40px;
                    line-height: 40px;
                    display: flex;
                    align-items: center;
                    color: #22242F;
                    background: transparent;
                    font-size:15px !important;
                    font-weight:400 !important
                }

                /* Remove hover effects - only show active state */
                .main-menu .ant-menu-item-selected,
                .support-menu .ant-menu-item-selected {
                    
                    color: #4A67B3 !important;
                }

                .main-menu .ant-menu-item-selected::after,
                .support-menu .ant-menu-item-selected::after {
                    display: none;
                }

                .support-section {
                    margin-top: auto;
                }

                .user-section {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    width: ${collapsed ? '80px' : '240px'};
                    padding: 16px;
                    background: #fff;
                    
                    z-index: 1002;
                }

                .user-profile {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-bottom: 12px;
                }

                .user-avatar {
                    background: #1890ff;
                    color: white;
                    font-weight: 600;
                }

                .user-info {
                    flex: 1;
                    min-width: 0;
                }

                .user-name {
                    display: block;
                    font-size: 14px;
                    color: #262626;
                }

                .user-email {
                    display: block;
                    font-size: 12px;
                    color: #8c8c8c;
                    margin-top: 2px;
                }

                .logout-btn {
                    color: #8c8c8c;
                    height: 36px;
                    border-radius: 6px;
                }

                .logout-btn:hover {
                    background-color: #f5f5f5;
                    color: #262626;
                }

                .dashboard-header {
                    background: #fff;
                    padding: 0 24px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
                    z-index: 1000;
                    height: 82px;
                }

                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .collapse-btn, .mobile-menu-btn {
                    border: none;
                    background: transparent;
                    font-size: 16px;
                    color: #595959;
                }

                .page-title {
                    margin: 0;
                    color: #131313 !important;
                    font-size: 24px !important;
                }

                .header-right {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .header-search {
                    max-width: 300px;
                    border-radius:31px
                }

                .notification-btn {
                    background: #1890ff;
                    border: none;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .dashboard-content {
                    
                    padding: 24px;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
                    min-height: calc(100vh - 112px);
                }

                .mobile-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 1000;
                    display: none;
                }

                .desktop-only {
                    display: inline-flex;
                }

                .mobile-only {
                    display: none;
                }

                /* Responsive Styles */
                @media (max-width: 768px) {
                    .dashboard-sidebar {
                        position: fixed;
                        top: 0;
                        left: 0;
                        height: 100vh;
                        z-index: 1001;
                        transform: translateX(${mobileMenuVisible ? '0' : '-100%'});
                        transition: transform 0.3s ease;
                    }

                    .user-section {
                        left: ${mobileMenuVisible ? '0' : '-240px'};
                        width: 240px;
                        transition: left 0.3s ease;
                    }

                    .mobile-overlay {
                        display: block;
                    }

                    .site-layout {
                        margin-left: 0 !important;
                    }

                    .desktop-only {
                        display: none;
                    }

                    .mobile-only {
                        display: inline-flex;
                    }

                    .dashboard-header {
                        padding: 0 16px;
                    }

                    .header-search {
                        max-width: 200px;
                        width: 100%;
                    }

                    .notification-text {
                        display: none;
                    }

                    .page-title {
                        font-size: 18px;
                    }

                    .dashboard-content {
                        margin: 16px;
                        padding: 16px;
                    }
                }

                @media (max-width: 576px) {
                    .header-search {
                        max-width: 150px;
                    }

                    .header-right {
                        gap: 8px;
                    }

                    .page-title {
                        font-size: 16px;
                    }
                }

                /* Sidebar collapsed state */
                .ant-layout-sider-collapsed .user-profile {
                    flex-direction: column;
                    text-align: center;
                }

                .ant-layout-sider-collapsed .user-info {
                    display: none;
                }

                .ant-layout-sider-collapsed .logout-btn {
                    width: 48px;
                    justify-content: center;
                }

                .ant-layout-sider-collapsed .user-section {
                    width: 80px;
                }

                /* Add padding to sidebar content to prevent overlap with fixed user section */
                .menu-sections-container {
                    padding-bottom: 100px; /* Space for user section */
                }
            `}</style>
        </Layout>
    );
}