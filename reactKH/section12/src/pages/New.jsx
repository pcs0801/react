import { useSearchParams } from "react-router-dom";

const New = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const updateNameParam = (name, age) => {
        setSearchParams({ name: name, age: age });
    };

    return (
        <div>
            New ?{searchParams.get('name')}; <br />
            New ?{searchParams.get('age')}; <br />
            <button onClick={() => { updateNameParam('abc', '20'); }}> 쿼리스트링 값 변경 </button>
        </div>
    );
};
export default New;