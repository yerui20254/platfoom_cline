import React from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const items = [
    {
      key: '/page3',
      label: '首页',
    },
    {
      key: 'ai',
      icon: <AppstoreOutlined />,
      label: 'AI通用能力',
      children: [
        { key: '/page2/details', label: '能力展示' },
        { key: '/abilityconfig', label: '能力配置' },
      ],
    },
    {
      key: 'knowledge',
      icon: <UserOutlined />,
      label: '知识插件搜索',
      children: [
        { key: '/page2/knowledgesearch', label: '知识插件搜索' },
        { key: '/group2/item2', label: '子菜单 2' },
      ],
    },
    {
      key: 'group3',
      icon: <SettingOutlined />,
      label: '数据处理',
      children: [
        { key: '/group3/item1', label: '子菜单 1' },
        { key: '/group3/item2', label: '子菜单 2' },
        { key: '/group3/item3', label: '子菜单 3' },
        { key: '/group3/item4', label: '子菜单 4' },
      ],
    },
    {
      key: 'group4',
      icon: <SettingOutlined />,
      label: '自动化评估',
      children: [
        { key: '/group4/item1', label: '子菜单 1' },
      ],
    },
  ];

  return (
    <Sider width={240} style={{ height: '95vh', background: '#fff' }}>
      <Menu
        mode="inline"
        style={{ height: '100%' }}
        defaultOpenKeys={[]}
        onClick={({ key }) => navigate(key)}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
