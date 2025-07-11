import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { DiaryDispatchContext, DiaryStateContext } from '../App';

const Edit = () => {
    const [curDiaryItem, setCurDiaryItem] = useState();
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);
    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(params.id)
        );
        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true });
        }
        setCurDiaryItem(currentDiaryItem);
    }, [params.id]);

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
            onDelete(Number(params.id));
            nav("/", { replace: true });
        }
    };

    const onSubmit = (input) => {
        if (window.confirm("일기를 정말 수정할까요?")) {
            onUpdate(
                Number(params.id),
                input.createdDate.getTime(),
                input.emotionId,
                input.content
            );
            nav("/", { replace: true });
        }
    };
    return (
        <div>
            <Header
                title={"일기 수정하기"}
                lChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
                rChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />}
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </div>
    );
};
export default Edit;