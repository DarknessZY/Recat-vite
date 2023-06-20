import { Breadcrumb } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { EditOutlined, PoweroffOutlined } from '@ant-design/icons'
import { Avatar, Popover } from 'antd'
import useUserInfoStore from '@/store/userInfo'
import styles from './index.module.scss'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import React from 'react'

const Header = (props: { collapsed: any; onClick: any }) => {
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

  /**退出登录 */
  const navigate = useNavigate()
  const loginOut = () => {
    navigate('/login')
    reset()
  }
  /** 头像气泡显示内容*/
  const { userInfo, reset } = useUserInfoStore()
  const content = (
    <div>
      <p>{userInfo.role ?? 'root'}</p>
      <p>
        <EditOutlined /> 修改密码
      </p>
      <p onClick={loginOut}>
        <PoweroffOutlined />
        退出登录
      </p>
    </div>
  )
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <div onClick={onClick}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div>
          {pathSnippets[0] == 'home' ? (
            ''
          ) : (
            <Breadcrumb items={breadcrumbItems} />
          )}
        </div>
      </div>
      <div className={styles.right}>
        <Popover content={content}>
          <Avatar
            src={
              'https://wimg.588ku.com/gif620/21/12/20/ed0bcd1cdd2f61618d59faebcf66811f.gif'
            }
            size={50}
          />
        </Popover>
      </div>
    </div>
  )
}

export default React.memo(Header)
