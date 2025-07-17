import { useEffect, useState } from "react";
import { getList } from "../../api/TodoApi";
import useCustomMove from "../../hooks/useCustomMove";
import { Container, Table } from 'react-bootstrap';
import PageComponent from "../common/PageComponent";


const initState = {
    dtoList: [],
    pageNumList: [],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
}

const ListComponent = () => {
    const { page, size, refresh, moveToList, moveToRead } = useCustomMove();
    const [serverData, setServerData] = useState(initState)

    useEffect(() => {
        getList({ page, size }).then(data => {
            setServerData(data)
        })
    }, [page, size, refresh])
    return (
        <>
            <Container className="px-5 justify-content-center mt-5">
                <table class="table table-dark table-hover">
                    <thead>
                        <tr className="text-center">
                            <th className="p-2" scope="col">TNO</th>
                            <th className="p-2" scope="col">TITLE</th>
                            <th className="p-2" scope="col">WRITER</th>
                            <th className="p-2" scope="col">DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serverData.dtoList.map((todo) => {
                            return (
                                <tr key={todo.tno} className="text-center p-2" onClick={() => moveToRead(todo.tno)}>
                                    <td>{todo.tno}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.writer}</td>
                                    <td>{todo.dueDate}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <PageComponent serverData={serverData} moveToList={moveToList} />
            </Container>
        </>
    );
}
export default ListComponent;