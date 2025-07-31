import { useEffect, useState } from "react";
import axios from "axios";

const BoardList = () => {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/boards")
            .then(res => {
                setBoards(res.data);
            })
            .catch(err => {
                console.error("게시글 불러오기 실패:", err);
            });
    }, []);

    return (
        <div>
            <h2>게시글 목록</h2>
            <ul>
                {boards.map((board) => (
                    <li key={board.boardId}>
                        <strong>{board.title}</strong> - {board.member?.nickname}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoardList;