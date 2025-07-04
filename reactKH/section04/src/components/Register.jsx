import { useState, useRef } from 'react'

function Register() {
    const [input, setInput] = useState({
        name: '', birth: '', natioanlity: '', bio: ''
    })

    const countRef = useRef(0);
    const nameRef = useRef();

    const onChanges = (e) => {
        countRef.current++;
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        if (nameRef.current.value === "") {
            alert("이름 입력");
            nameRef.current.focus();
        } else {
            alert("전송 완료");
        }
    };

    return (
        <div>
            <h1>Event count : {countRef.current} </h1>
            <div>
                <input ref={nameRef} value={input.name} name={"name"} onChange={onChanges} placeholder='이름을 입력해주세요' />
            </div>

            <div>
                <input value={input.birthday} name={"birthday"} onChange={onChanges} type="date" />
            </div>

            <div>
                <select value={input.nationality} name={"nationality"} onChange={onChanges}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="uk">영국</option>
                    <option value="us">미국</option>
                </select>
            </div>

            <div>
                <textarea value={input.bio} name={"bio"} onChange={onChanges} ></textarea>
            </div>

            <div>
                <button type='submit' onClick={onSubmit}>전송하기</button>
            </div>
        </div>
    );
}

export default Register;