import useMyInput from "./useMyInput";

function HookExam(props) {
    const [input1, onChangeInput1] = useMyInput();
    const [input2, onChangeInput2] = useMyInput();


    return (
        <div>
            <h1>점수 : {input1 + input2}</h1>
            <input value={input1} name={"kor"} onChange={onChangeInput1} placeholder={"국어점수를 입력해주세요"} /> <br></br>
            <input value={input2} name={"eng"} onChange={onChangeInput2} placeholder={"영어점수를 입력해주세요"} />
        </div>
    )
}
export default HookExam;