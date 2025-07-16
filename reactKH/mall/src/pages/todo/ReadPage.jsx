import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { useCallback } from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ReadComponent from '../../components/todo/ReadComponent';

const ReadPage = () => {
    const { tno } = useParams();
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();
    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10;
    const queryStr = createSearchParams({ page, size }).toString();
    const moveToModify = useCallback((tno) => {
        navigate({ pathname: `/todo/modify/${tno}`, search: queryStr });
    }, [tno]);
    const moveToList = useCallback(() => {
        navigate({ pathname: `/todo/List`, search: queryStr });
    }, [tno]);

    return (
        <Container>
            <Header />
            <ReadComponent tno={tno} />
        </Container>
    );
};

export default ReadPage;