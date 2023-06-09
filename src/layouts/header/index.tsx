import { Breadcrumb } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { Link, useLocation } from 'react-router-dom'

const Header = (props: { collapsed: any; onClick: any }) => {
  /** 侧边栏是否展开**/
  const { collapsed, onClick } = props
  /** 获取当前页面的路径信息*/
  const location = useLocation()
  console.log('location', location)

  /** 解析路径信息并生成面板屑导航*/
  const pathSnippeets = location.pathname.split('/').filter((i) => i)
  console.log('pathSnippeets', pathSnippeets)
  const breadcrumbItems = pathSnippeets.map((_item, index) => {
    const url = `/${pathSnippeets.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item key={index}>
        <Link to={url}>{_item}</Link>
      </Breadcrumb.Item>
    )
  })
  /** 添加首页链接*/
  breadcrumbItems.unshift(
    <Breadcrumb.Item key="home">
      <Link to="/">home</Link>
    </Breadcrumb.Item>
  )
  return (
    <div className={styles.content}>
      <div onClick={onClick}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>{breadcrumbItems}</Breadcrumb>
      </div>
    </div>
  )
}

export default Header
