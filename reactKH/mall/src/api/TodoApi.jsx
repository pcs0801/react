import axios from "axios";

export const API_SERVER_HOST = 'http://localhost:8080';
const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async (tno) => {
    const result = await axios.get(`${prefix}/${tno}`);
    return result.data;
};

export const getList = async (pageParam) => {
    const { page, size } = pageParam;
    const result = await axios.get(`${prefix}/list`, { params: { page: page, size: size } });
    return result.data;
}

export const postAdd = async (todo) => {
    const result = await axios.post(`${prefix}/`, todo)
    return result.data;

}

export const deleteOne = async (tno) => {
    const result = await axios.delete(`${prefix}/${tno}`);
    return result.data;
}

export const putOne = async (todo) => {
    const result = await axios.put(`${prefix}/${todo.tno}`, todo)
    return result.data;
}