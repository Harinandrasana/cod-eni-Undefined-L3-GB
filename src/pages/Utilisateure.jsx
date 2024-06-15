import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import {
  DesktopOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const items = [
  { key: '1', icon: <PieChartOutlined />, label: 'Profil' },
  { key: '2', icon: <DesktopOutlined />, label: 'Service' },
  { key: '3', icon: <ContainerOutlined />, label: 'Historique' },
  { key: '4', icon: <PieChartOutlined />, label: 'Notification' },
  { key: '5', icon: <ContainerOutlined />, label: 'Tableau de bord' },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [username, setUsername] = useState('John Doe'); // Exemple de nom d'utilisateur

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = () => {
    setCollapsed(true); // Ferme le menu lorsqu'un élément de menu est cliqué
  };

  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        onClick={handleMenuClick} // Gère le clic sur un élément de menu
      >
        {items.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.key === '1' ? `${item.label} (${username})` : item.label}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default App;
