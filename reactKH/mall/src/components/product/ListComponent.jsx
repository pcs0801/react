import { useEffect, useState } from 'react';
import { getList } from '../../api/ProductApi';
import useCustomMove from '../../hooks/useCustomMove';
import FetchingModal from '../common/FetchingModal';
import { API_SERVER_HOST } from '../../api/todoApi';
import { Container, Card, Row } from 'react-bootstrap';
import PageComponent from '../common/PageComponent';
const host = API_SERVER_HOST;
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
    current: 0,
};

const ListComponent = () => {
    const { page, size, moveToProductList, moveToProductRead, refresh } = useCustomMove();
    const [serverData, setServerData] = useState(initState);
    const [fetching, setFetching] = useState(false);
    useEffect(() => {
        setFetching(true); getList({ page, size })
            .then((data) => {
                console.log(data);
                setServerData(data);
                setFetching(false);
            }).catch((err) => {
                console.error('에러 발생:', err);
                setFetching(false);
            });
    }, [page, size, refresh]);
    return (
        <>
            <Container className="px-5 justify-content-center mb-5">
                {fetching ? <FetchingModal /> : <></>}
                <Row className="display-content-around mt-5 gap-4">{serverData.dtoList.map((product) => (
                    <>
                        <Card className="p-3"
                            style={{ width: '14rem', height: '20rem' }} key={product.pno}
                            onClick={() => moveToProductRead(product.pno)}
                        >
                            <Card.Body>
                                <Card.Title>PNO :{product.pno}</Card.Title>
                                <Card.Title>NAME : {product.pname}</Card.Title>
                                <Card.Title>PRICE : {product.price}원</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                            <img alt="product" src={`${host}/api/products/view/s_${product.uploadFileNames[0]} `} />
                        </Card>
                    </>
                ))}
                </Row>
                <PageComponent serverData={serverData} moveToProductList={moveToProductList}></PageComponent>
            </Container>
        </>
    );
};
export default ListComponent;