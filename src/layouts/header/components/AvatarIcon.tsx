import { Avatar, Popover } from 'antd'
import useUserInfoStore from '@/store/userInfo'
import styles from '../index.module.scss'
import { useNavigate } from 'react-router-dom'

import { EditOutlined, PoweroffOutlined } from '@ant-design/icons'
const AvatarIcon = () => {
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
  )
}

export default AvatarIcon
