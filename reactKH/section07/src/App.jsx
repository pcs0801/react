import './App.css'
import Count from "./components/count"
import CountButton from "./components/CountButton"
import { useState, useEffect } from "react"
import Even from './components/Even'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`마운트 : ${count} / ${input}`);
  }, [count, input]);

  const minus1Func = () => { setCount(count - 1); };
  const minus10Func = () => { setCount(count - 10); };
  const minus100Func = () => { setCount(count - 100); };
  const plus100Func = () => { setCount(count + 100); };
  const plus10Func = () => { setCount(count + 10); };
  const plus1Func = () => { setCount(count + 1); };

  const onChangeInput = e => { setInput(e.target.value) };

  return (
    <>
      <div className="App">
        <h1>Counter App Mini Project</h1>

        <section>
          <input value={input} name="phone" onChange={onChangeInput} type="text" />
        </section>

        <section>
          <Count countFunc={count} />
          {count % 2 === 0 ? <Even /> : null}
        </section>
        <section>
          <CountButton plus1Func={plus1Func} plus10Func={plus10Func} plus100Func={plus100Func} minus1Func={minus1Func} minus10Func={minus10Func} minus100Func={minus100Func} />
        </section>
      </div>
    </>
  )
}

export default App
