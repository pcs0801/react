import { useState } from "react"

function useMyInput() {
    const [input, setInput] = useState();

    const onChangeScore = (e) => {
        setInput(e.target.value);
    };

    return [input, onChangeScore]
}

export default useMyInput;