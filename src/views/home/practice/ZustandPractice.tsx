import useCounterStore from '@/store/counter'
const ZustandPractice = () => {
  /** zustand状态管理小练习*/
  const counter = useCounterStore((state) => state.counter)
  const delcounter = useCounterStore((state) => state.delcounter)
  const increase = useCounterStore((state) => state.increase)
  const decrease = useCounterStore((state) => state.decrease)
  return (
    <>
      <div>zustand状态管理小练习</div>
      <button onClick={() => increase(1)}>增加 counter:{counter}</button>
      <button onClick={() => decrease(1)}>减少 counter:{delcounter}</button>
    </>
  )
}

export default ZustandPractice
