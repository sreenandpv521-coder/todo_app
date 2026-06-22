import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)

  const handleInc = () => {
    if (count < 10) {
      setCount((count) => count + 1)
    }
  }
  const handleDec = () => {
    if (count > 0) {
      setCount((count) => count - 1)
    }
  }





  return (
    <>
      <div>
        <h1>Welcome</h1>
      </div>
      <section id="center">

        <h1>counter</h1>
        <button
          type="button"
          className="counter"
          onClick={handleInc}
        >
          Increment
        </button>
        <button
          type="button"
          className="Counter"
          onClick={handleDec}
        >
          decrement
        </button>
        <h1>{count}</h1>
      </section>
    </>
  )
}

export default Counter
