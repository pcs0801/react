
import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import ListComponent from '../../components/todo/ListComponent';
import { useSearchParams } from 'react-router-dom';

const ListPage = () => {
    const [queryParams] = useSearchParams();
    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1;
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10;
    return (
        <Container>
            <Header />
            <ListComponent page={page} size={size} />
        </Container >
    );
};
export default ListPage;