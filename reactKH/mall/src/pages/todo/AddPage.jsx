import { Container } from 'react-bootstrap';
import Header from '../../include/Header';
import AddComponent from '../../components/todo/AddComponent';

const AddPage = () => {
    return (
        <Container>
            <Header />
            <div className="d-grid gap-2 mt-3">
                <button className="btn btn-outline-primary" type="button">
                    <AddComponent />
                </button>
            </div>
        </Container>
    );
};
export default AddPage;