import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import { useCallback } from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';

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
            To do ReadPage {tno}
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-outline-success" type="button" onClick={() => moveToModify(tno)}>To Modify Menu</button>
                <button class="btn btn-outline-secondary" type="button" onClick={() => moveToList()}>To List Menu</button>
            </div>
        </Container>
    );
};

export default ReadPage;