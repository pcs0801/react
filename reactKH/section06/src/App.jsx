import './App.css'
import Count from "./components/count"
import CountButton from "./components/CountButton"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const minus1Func = () => { setCount(count - 1); };
  const minus10Func = () => { setCount(count - 10); };
  const minus100Func = () => { setCount(count - 100); };
  const plus100Func = () => { setCount(count + 100); };
  const plus10Func = () => { setCount(count + 10); };
  const plus1Func = () => { setCount(count + 1); };

  return (
    <>
      <div className="App">
        <h1>Counter App Mini Project</h1>
        <section>
          <Count countFunc={count} />
        </section>
        <section>
          <CountButton plus1Func={plus1Func} plus10Func={plus10Func} plus100Func={plus100Func} minus1Func={minus1Func} minus10Func={minus10Func} minus100Func={minus100Func} />
        </section>
      </div>
    </>
  )
}

export default App
