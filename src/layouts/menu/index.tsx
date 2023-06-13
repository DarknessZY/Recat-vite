import { Menu, MenuProps } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HomeOutlined, UserAddOutlined } from '@ant-design/icons'
const menuData = [
  {
    path: '/',
    key: '/home',
    label: '首页',
    icon: <HomeOutlined />
  },
  {
    key: '/about',
    label: '关于',
    icon: <UserAddOutlined />,
    children: [
      {
        path: '/about/aboutMy',
        key: '/about/aboutMy',
        label: '关于我'
      },
      {
        path: '/about/study',
        key: '/about/study',
        label: '学习'
      }
    ]
  }
]
/** 模拟接口*/
const getMenuList = () => {
  return menuData
}
const DynamicMenu = (setMenu: any) => {
  useEffect(() => {
    async function getMenuData() {
      // 通过接口获取菜单数据
      const data = await getMenuList()
      setMenu(data)
    }
    getMenuData()
  }, [])
}
const Siderbar = () => {
  const navigate = useNavigate()
  const [menu, setMenu] = useState([])
  const [selectedKeys, setSelectedKeys] = useState(['home'])
  DynamicMenu(setMenu)
  const handleMenuOnClick: MenuProps['onClick'] = ({ key }) => {
    setSelectedKeys([key])
    navigate(key)
  }
  const location = useLocation()
  useEffect(() => {
    setSelectedKeys([location.pathname])
  }, [location])
  return (
    <Menu
      mode="inline"
      selectedKeys={selectedKeys}
      onClick={handleMenuOnClick}
      items={menu}
    ></Menu>
  )
}

export default Siderbar
