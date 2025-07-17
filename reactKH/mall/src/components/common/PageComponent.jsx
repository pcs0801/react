import { Container } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

const PageComponent = ({ serverData, moveToList }) => {
    return (
        <Container className="d-flex justify-content-center mt-3">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {
                        serverData.prev ? (
                            <li class="page-item" onClick={() => { moveToList({ page: serverData.prevPage }) }}>
                                <a class="page-link" href="#">Previous</a></li>) : (
                            <></>
                        )
                    }
                    {
                        serverData.pageNumList.map((pageNum) => {
                            const isActive = serverData.current === pageNum;

                            return (
                                <li
                                    key={pageNum}
                                    className={`page-item ${isActive ? 'active' : ''}`}
                                    onClick={() => moveToList({ page: pageNum })}
                                >
                                    <a className="page-link" href="#">
                                        {pageNum}
                                    </a>
                                </li>
                            );
                        })
                    }

                    {
                        serverData.next ? (<li class="page-item" onClick={() => { moveToList({ page: serverData.nextPage }) }}>
                            <a class="page-link" href="#">Next</a></li>) : (
                            <></>
                        )
                    }

                </ul>
            </nav>
        </Container >
    );
};
export default PageComponent;