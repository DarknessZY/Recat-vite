import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import HeaderLayout from './header'
import reactImg from '@/assets/react.svg'
const { Header, Sider, Content } = Layout
const items: MenuProps['items'] = [
  {
    label: '首页',
    path: '/home'
  },
  {
    label: '关于',
    path: '/about'
  }
].map((nav) => ({
  key: nav.path,
  icon: null,
  label: nav.label
}))

const BasicLayout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }
  const handleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout style={{ height: '100vh', width: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div
          style={{
            height: 32,
            margin: 16,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <img src={reactImg} alt="" />
          {!collapsed && (
            <div
              style={{
                fontSize: 20,
                color: '#00d8ff',
                fontWeight: 500
              }}
            >
              React
            </div>
          )}
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={[pathname]}
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <Header style={{ background: '#fff', padding: 0 }}>
          <HeaderLayout collapsed={collapsed} onClick={handleCollapsed} />
        </Header>
        <Content style={{ flex: 1, padding: 10 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default BasicLayout
