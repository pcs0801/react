import { useEffect, useState } from "react";
import { getList } from "../../api/ProductApi";
import { Container } from 'react-bootstrap';
import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal";

const initState = {
    dtoList: [],
    pageNumList: [],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totolCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
}
const ListComponent = () => {
    const { page, size, moveToProductList, moveToProductRead, refresh } = useCustomMove();
    const [serverData, setServerData] = useState(initState)
    const [fetching, setFetching] = useState(false)
    useEffect(() => {
        setFetching(true)
        getList({ page, size }).then(data => {
            console.log(data)
            setServerData(data)
            setFetching(false)
        })
    }, [page, size, refresh])
    return (
        <Container className="px-5 justify-content-center mb-5">
            <h1>Products List Component</h1>
            {fetching ? <FetchingModal /> : <></>}
        </Container>
    );
}
export default ListComponent