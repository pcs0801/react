import './ListItem.css';
import { memo, useContext } from 'react';
import { TodoDispatch } from '../App';

const ListItem = ({ id, isDone, content, date }) => {

    const { onUpdate, onDelete } = useContext(TodoDispatch);

    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    const onClickBtn = () => {
        onDelete(id);
    };


    return (
        <div className='ListItem'>
            <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickBtn}>삭제</button>
        </div>
    );
};

export default memo(ListItem, (preProps, postProps) => {
    if (preProps.id !== postProps.id) return false;
    if (preProps.isDone !== postProps.isDone) return false;
    if (preProps.content !== postProps.content) return false;
    if (preProps.date !== postProps.date) return false;
    return true;
});