import useCounterStore from '@/store/counter'
const Home = () => {
  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => increase(1)}>counter:{counter}</button>
    </>
  )
}

export default Home
