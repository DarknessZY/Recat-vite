import { Tabs, message } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HomeFilled } from '@ant-design/icons'
import { routerArray } from '@/router'
import { searchRoute } from '@/utils/util'
import { tabsListStore } from '@/store'

import MoreButton from './components/MoreButton'
import styles from './index.module.scss'
const LayoutTabs = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [activeValue, setActiveValue] = useState<string>(pathname)
  const { tabsList, setTabsList } = tabsListStore()
  /** message提示推荐的是顶层注册的方式*/
  const [messageApi, contextHolder] = message.useMessage()
  useEffect(() => {
    addTabs()
  }, [pathname])

  // click tabs
  const clickTabs = (path: string) => {
    navigate(path)
  }

  // add tabs
  const addTabs = () => {
    const route = searchRoute(pathname, routerArray)
    const newTabsList = JSON.parse(JSON.stringify(tabsList))
    if (tabsList.every((item: any) => item.path !== route.path)) {
      newTabsList.push({ title: route.meta!.title, path: route.path })
    }
    setTabsList(newTabsList)
    setActiveValue(pathname)
  }

  // delete tabs
  const delTabs = (tabPath?: string) => {
    if (tabPath === '/home') return
    if (pathname === tabPath) {
      tabsList.forEach((item: any, index: number) => {
        if (item.path !== pathname) return
        const nextTab = tabsList[index + 1] || tabsList[index - 1]
        if (!nextTab) return
        navigate(nextTab.path)
      })
    }
    messageApi.success('你删除了Tabs标签 😆😆😆')
    setTabsList(tabsList.filter((item: any) => item.path !== tabPath))
  }

  return (
    <>
      {contextHolder}
      <div className={styles.tabs}>
        <Tabs
          size="small"
          animated
          activeKey={activeValue}
          onChange={clickTabs}
          hideAdd
          type="editable-card"
          onEdit={(path) => {
            delTabs(path as string)
          }}
          items={tabsList.map((item: any) => {
            return {
              label: (
                <span>
                  {item.path == '/home' ? <HomeFilled /> : ''}
                  {item.title}
                </span>
              ),
              key: item.path,
              closable: item.path !== '/home'
            }
          })}
        ></Tabs>
        <MoreButton
          tabsList={tabsList}
          setTabsList={setTabsList}
          delTabs={delTabs}
        ></MoreButton>
      </div>
    </>
  )
}

export default LayoutTabs
