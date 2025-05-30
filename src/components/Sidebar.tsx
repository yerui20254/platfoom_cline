import React from 'react'
import { Layout, Menu } from 'antd'
import {
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

const Sidebar: React.FC = () => {
    const navigate = useNavigate()

    return (
        <Sider width={240} style={{ height: '95vh', background: '#fff' }}>
            <Menu
                mode="inline"
                defaultOpenKeys={['group1']}
                style={{ height: '100%' }}
                onClick={({ key }) => navigate(key)}
            >
                <Menu.Item key="/page3">首页</Menu.Item>
                <Menu.SubMenu key="page2" icon={<AppstoreOutlined />} title="AI通用能力">
                    <Menu.Item key="/page2/details">能力展示</Menu.Item>
                    <Menu.Item key="/abilityconfig">能力配置</Menu.Item>
                </Menu.SubMenu>

                <Menu.SubMenu key="page2" icon={<UserOutlined />} title="知识插件搜索">
                    <Menu.Item key="/page2/knowledgesearch">知识插件搜索</Menu.Item>
                    <Menu.Item key="/group2/item2">子菜单 2</Menu.Item>
                </Menu.SubMenu>

                <Menu.SubMenu key="group3" icon={<SettingOutlined />} title="数据处理">
                    <Menu.Item key="/group3/item1">子菜单 1</Menu.Item>
                    <Menu.Item key="/group3/item2">子菜单 2</Menu.Item>
                    <Menu.Item key="/group3/item3">子菜单 3</Menu.Item>
                    <Menu.Item key="/group3/item4">子菜单 4</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="group4" icon={<SettingOutlined />} title="自动化评估">
                    <Menu.Item key="/group4/item1">子菜单 1</Menu.Item>
                    
                </Menu.SubMenu>
            </Menu>
        </Sider>
    )
}

export default Sidebar