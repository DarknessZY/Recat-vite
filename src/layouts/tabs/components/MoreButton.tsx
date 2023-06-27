import { Dropdown, MenuProps } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from '../index.module.scss'
const MoreButton = (props: any) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  /** 关闭其他和关闭所有*/
  const closeMultipleTab = (tabPath?: string) => {
    const handleTabsList = props.tabsList.filter((item: any) => {
      return item.path === tabPath || item.path === '/home'
    })
    props.setTabsList(handleTabsList)
    tabPath ?? navigate('/home')
  }
  const items: MenuProps['items'] = [
    {
      label: '关闭当前',
      key: '1',
      onClick: () => props.delTabs(pathname)
    },
    {
      label: '关闭其他',
      key: '2',
      onClick: () => closeMultipleTab(pathname)
    },
    {
      label: '关闭所有',
      key: '3',
      onClick: () => closeMultipleTab()
    }
  ]
  return (
    <div>
      <Dropdown.Button
        icon={<DownOutlined />}
        menu={{ items }}
        className={styles.moreButton}
      >
        更多
      </Dropdown.Button>
    </div>
  )
}

export default MoreButton
