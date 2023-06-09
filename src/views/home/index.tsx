import useCounterStore from '@/store/counter'
import styles from './index.module.scss'
const Home = () => {
  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)
  return (
    <div className={styles.home_content}>
      <div>Home Page</div>
      <button onClick={() => increase(1)}>counter:{counter}</button>
    </div>
  )
}

export default Home
