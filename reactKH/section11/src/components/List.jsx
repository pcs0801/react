import './List.css';
import ListItem from './ListItem';
import { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from '../App';

const List = () => {

    const { todos } = useContext(TodoStateContext);
    const [search, setSearch] = useState('');

    const onChangeInput = (e) => {
        setSearch(e.target.value);
    };

    const getFilterTodos = () => {
        if (search === '') {
            return todos;
        }
        return todos.filter((data) => {
            return data.content.toLowerCase().includes(search.toLowerCase());
        });
    };

    const filterTodos = getFilterTodos();

    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((data) => { return data.isDone === true }).length;
        const notDoneCount = totalCount - doneCount;
        return { totalCount, doneCount, notDoneCount }
    }, [todos]);

    return (
        <div className='List'>
            <h4>To-do List</h4>
            <div>
                <p>totalCount : {totalCount} </p>
                <p>doneCount : {doneCount} </p>
                <p>notDoneCount : {notDoneCount} </p>
            </div>
            <input value={search} placeholder='검색어를 입력하세요' onChange={onChangeInput} />
            <div className='list_wrapper'>
                {filterTodos.map((data) => { return <ListItem key={data.id} {...data} /> })}
            </div>
        </div>
    );
};

export default List;