import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from '../App';

const New = () => {
    const { onInsert } = useContext(DiaryDispatchContext);
    const nav = useNavigate();

    const onSubmit = (input) => {
        onInsert(
            input.createdDate.getTime(),
            input.emotionId,
            input.content
        );
        nav('/', { replace: true });
    };






    const [searchParams, setSearchParams] = useSearchParams();

    const updateNameParam = (name, age) => {
        setSearchParams({ name: name, age: age });
    };

    return (
        <div>
            <Header
                title={'새 일기 쓰기'}
                lChild={<Button text={'< 뒤로 가기'} onClick={() => { nav(-1) }} />}
            />
            <Editor onSubmit={onSubmit} />
        </div>
    );
};
export default New;