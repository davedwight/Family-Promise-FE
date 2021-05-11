import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  TeamOutlined,
  ProjectOutlined,
  ReconciliationOutlined,
  UsergroupAddOutlined,
  LeftCircleOutlined,
} from '@ant-design/icons';

const HamburgerMenu = () => {
  const [visible, setVisible] = useState(false);
  const { Sider } = Layout;
  const history = useHistory();

  const userRole = localStorage.getItem('role');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('okta-token-storage');
    localStorage.removeItem('okta-cache-storage');
    localStorage.removeItem('username');
    history.push('/login');
    window.location.reload(); // quick fix need to change later
  };

  const onClick = s => {
    history.push(s);
    setVisible(false);
  };

  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width="200"
        className="tablet"
        closable={true}
        placement="left"
        visible={visible}
        onClose={onClose}
        // position='sticky'
      >
        {userRole === 'administrator' ? (
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => onClick('/')}
            >
              My Profile
            </Menu.Item>

            <Menu.Item
              key="2"
              icon={<TeamOutlined />}
              onClick={() => onClick('/employees')}
            >
              Employees
            </Menu.Item>

            <Menu.Item
              key="3"
              icon={<ProjectOutlined />}
              onClick={() => onClick('/programs')}
            >
              Programs
            </Menu.Item>

            <Menu.Item
              key="4"
              icon={<UsergroupAddOutlined />}
              onClick={() => onClick('/recipients')}
            >
              Recipients
            </Menu.Item>

            <Menu.Item
              key="5"
              icon={<ReconciliationOutlined />}
              onClick={() => onClick('/services')}
            >
              Services
            </Menu.Item>

            <Menu.Item
              key="6"
              icon={<LeftCircleOutlined />}
              className="logout-ctn"
              onClick={handleLogout}
            >
              Logout
            </Menu.Item>
          </Menu>
        ) : (
          <></>
        )}
        {userRole === 'program_manager' ? (
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => onClick('/')}
            >
              My Profile
            </Menu.Item>

            <Menu.Item
              key="3"
              icon={<ProjectOutlined />}
              onClick={() => onClick('/programs')}
            >
              Programs
            </Menu.Item>

            <Menu.Item
              key="4"
              icon={<UsergroupAddOutlined />}
              onClick={() => onClick('/recipients')}
            >
              Recipients
            </Menu.Item>

            <Menu.Item
              key="5"
              icon={<ReconciliationOutlined />}
              onClick={() => onClick('/services')}
            >
              Services
            </Menu.Item>

            <Menu.Item
              key="6"
              icon={<LeftCircleOutlined />}
              className="logout-ctn"
              onClick={handleLogout}
            >
              Logout
            </Menu.Item>
          </Menu>
        ) : (
          <></>
        )}
        {userRole === 'service_provider' ? (
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => onClick('/')}
            >
              My Profile
            </Menu.Item>

            <Menu.Item
              key="5"
              icon={<ReconciliationOutlined />}
              onClick={() => onClick('/services')}
            >
              Services
            </Menu.Item>

            <Menu.Item
              key="6"
              icon={<LeftCircleOutlined />}
              className="logout-ctn"
              onClick={handleLogout}
            >
              Logout
            </Menu.Item>
          </Menu>
        ) : (
          <></>
        )}
      </Sider>
    </>
  );
};

export default HamburgerMenu;
