import { Link, useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import styles from '../index.module.scss'
const CollapsedIcon = (props: { collapsed: any; onClick: any }) => {
  /** 侧边栏是否展开**/
  const { collapsed, onClick } = props
  /** 获取当前页面的路径信息*/
  const location = useLocation()
  console.log('location', location)
  const breadcrumbNameMap: Record<string, string> = {
    '/': '首页',
    '/home': '首页',
    '/about': '关于',
    '/about/aboutMy': '关于我',
    '/about/study': '学习'
  }
  /** 解析路径信息并生成面板屑导航*/
  const pathSnippets = location.pathname.split('/').filter((i) => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>
    }
  })
  /** 向面包屑添加首页导航*/
  const breadcrumbItems = [
    {
      title: <Link to="/home">首页</Link>,
      key: 'home'
    }
  ].concat(extraBreadcrumbItems)
  return (
    <div className={styles.left}>
      <div onClick={onClick}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className={styles.leftItem}>
        {pathSnippets[0] == 'home' ? (
          ''
        ) : (
          <Breadcrumb items={breadcrumbItems} />
        )}
      </div>
    </div>
  )
}

export default CollapsedIcon
