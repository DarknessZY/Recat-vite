import useCounterStore from '@/store/counter'
import styles from './index.module.scss'
const Home = () => {
  const counter = useCounterStore((state) => state.counter)
  const delcounter = useCounterStore((state) => state.delcounter)
  const increase = useCounterStore((state) => state.increase)
  const decrease = useCounterStore((state) => state.decrease)
  return (
    <div className={styles.home_content}>
      <div>zustand状态管理小练习</div>
      <button onClick={() => increase(1)}>增加 counter:{counter}</button>
      <button onClick={() => decrease(1)}>减少 counter:{delcounter}</button>
    </div>
  )
}

export default Home
