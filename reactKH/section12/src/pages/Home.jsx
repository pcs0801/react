import Button from "../components/Button";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";
import { useContext, useState } from "react";

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();
    return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
};

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const monthlyData = getMonthlyData(pivotDate, data);
    const onIncreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
        );
    }
    const onDecreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
        );
    }


    return (
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`} lChild={<Button text={'<'} onClick={onDecreaseMonth} />} rChild={<Button text={'>'} onClick={onIncreaseMonth} />}></Header>
            <DiaryList data={monthlyData} />
        </div>
    );
};
export default Home;