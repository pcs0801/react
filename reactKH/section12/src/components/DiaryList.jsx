import DiaryItem from './DiaryItem';
import './DiaryList.css';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DiaryList = ({ data }) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState('latest');
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }

    const getSortedData = () => {
        return data.toSorted((a, b) => {
            if (sortType === 'oldest') {
                return Number(a.createdDate) - Number(b.createdDate);
            } else {
                return Number(b.createdDate) - Number(a.createdDate);
            }
        });
    };

    const sortedData = getSortedData();

    const onClickNav = () => {
        nav("/new")
    };


    return (
        <>
            <div className='DiaryList'>
                <section className='menu_bar'>
                    <select onChange={onChangeSortType} >
                        <option value={'latest'}>최신순</option>
                        <option value={'oldest'}>오래된 순</option>
                    </select>
                    <Button text={'새 일기쓰기'} type={'POSITIVE'} onClick={onClickNav} />
                </section>

                <section className='list_wrapper'>
                    {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
                </section>
            </div>
        </>
    );
};

export default DiaryList;