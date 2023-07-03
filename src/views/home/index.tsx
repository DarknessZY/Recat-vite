import styles from './index.module.scss'
import DraggablePractice from './practice/DraggablePractice'
import ZustandPractice from './practice/zustandPractice'
import CssPractice from './practice/CssPractice'
const Home = () => {
  return (
    <div className={styles.home_content}>
      <ZustandPractice></ZustandPractice>
      <DraggablePractice></DraggablePractice>
      <CssPractice></CssPractice>
    </div>
  )
}
export default Home
