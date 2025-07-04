import { useState } from "react";
import Count from "../../section06/src/components/count";
import CountButton from "../../section06/src/components/CountButton";
import Register from './components/Register'
import HookExam from "./components/HookExam";




export default function App() {
  return (
    <>
      <div>
        <HookExam />
        <Register />

        <Count />
        <CountButton />
      </div>
    </>
  )
};
