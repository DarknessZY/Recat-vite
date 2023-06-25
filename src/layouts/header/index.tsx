import React from 'react'
import AvatarIcon from './components/AvatarIcon'
import CollapsedIcon from './components/CollapseIcon'
import styles from './index.module.scss'
const Header = (props: { collapsed: any; onClick: any }) => {
  return (
    <div className={styles.content}>
      <CollapsedIcon collapsed={props.collapsed} onClick={props.onClick} />
      <AvatarIcon />
    </div>
  )
}

export default React.memo(Header)
