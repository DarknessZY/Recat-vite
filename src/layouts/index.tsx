import { useState, useEffect, useCallback } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Siderbar from './menu/index'
import HeaderLayout from './header'
import TabLayout from './tabs/index'
import useWindowSize from '@/hooks/useWindowSize'
import reactImg from '@/assets/react.svg'
const { Header, Sider, Content } = Layout

const BasicLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const handleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const { width } = useWindowSize()
  useEffect(() => {
    if (width < 720) {
      setCollapsed(true)
    } else {
      setCollapsed(false)
    }
  }, [width])

  return (
    <Layout style={{ height: '100vh', width: '100%' }}>
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
        <Siderbar></Siderbar>
      </Sider>
      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <Header style={{ background: '#fff', padding: 0 }}>
          <HeaderLayout
            collapsed={collapsed}
            onClick={useCallback(handleCollapsed, [collapsed])}
          />
          <TabLayout />
        </Header>
        <Content
          style={{
            flex: 1,
            marginTop: 60,
            marginLeft: 20,
            marginBottom: 20,
            marginRight: 20,
            background: '#fff',
            padding: 10
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default BasicLayout
