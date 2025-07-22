import { useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const getNum = (param, defaultValue) => {
    if (!param) {
        return defaultValue
    }
    return parseInt(param)
}
const useCustomMove = () => {
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false)
    const [queryParams] = useSearchParams()
    const page = getNum(queryParams.get('page'), 1)
    const size = getNum(queryParams.get('size'), 10)
    const queryDefault = createSearchParams({ page, size }).toString()
    const moveToList = (pageParam) => {
        let queryStr = ""
        if (pageParam) {
            const pageNum = getNum(pageParam.page, page)
            const sizeNum = getNum(pageParam.size, size)
            queryStr = createSearchParams({ page: pageNum, size: sizeNum }).toString()
        } else {
            queryStr = queryDefault
        }
        navigate({
            pathname: `../todo/list`, search: queryStr
        })
        setRefresh(!refresh)
    }
    const moveToModify = (num) => {
        console.log(queryDefault)
        navigate({
            pathname: `../todo/modify/${num}`, search: queryDefault
        })
    }
    const moveToRead = (num) => {
        console.log(queryDefault)
        navigate({
            pathname: `../todo/read/${num}`, search: queryDefault
        })
    }

    const moveToProductList = (pageParam) => {
        let queryStr = '';
        if (pageParam) {
            const pageNum = getNum(pageParam.page, page);
            const sizeNum = getNum(pageParam.size, size);
            queryStr = createSearchParams({
                page: pageNum, size: sizeNum,
            }).toString();
        } else {
            queryStr = queryDefault;
        }
        navigate({
            pathname: `../product/list`, search: queryStr,
        });
        setRefresh(!refresh);
    };

    const moveToProductModify = (num) => {
        console.log(queryDefault);
        navigate({
            pathname: `../product/modify/${num}`, search: queryDefault,
        });
    };

    const moveToProductRead = (num) => {
        console.log(queryDefault);
        navigate({
            pathname: `../product/read/${num}`, search: queryDefault,
        });
    };



    return {
        moveToProductList, moveToList, moveToModify, moveToProductModify, moveToProductRead, moveToRead, page, size, refresh,
    };
};

export default useCustomMove