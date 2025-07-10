import './App.css';
import Header from './components/Header';
import Edit from './components/Edit';
import List from './components/List';

import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react';

const mockData = [
  { id: 0, isDone: false, content: 'React 공부하기', date: new Date().getTime() },
  { id: 1, isDone: false, content: 'spring boot 공부하기', date: new Date().getTime() },
  { id: 2, isDone: false, content: 'oracle 공부하기', date: new Date().getTime() },
];

function reducer(todos, action) {
  switch (action.type) {
    case "INSERT": return [action.data, ...todos];
    case "UPDATE": return todos.map((data) => {
      return data.id === action.tagId ? { ...data, isDone: !data.isDone } : data
    });
    case "DELETE": return todos.filter((data) => { return data.id !== action.tagId });
    default: return todos;
  }
}

export const TodoState = createContext();
export const TodoDispatch = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);


  const onInsert = useCallback((content) => {
    dispatch({
      type: "INSERT", data: {
        id: idRef.current++, isDone: false, content: content, date: new Date().getTime()
      }
    });
  }, []);

  const memorizeDispatch = useMemo(() => {
    return { onInsert, onUpdate, onDelete };
  }, []);

  const onUpdate = useCallback((tagId) => {
    dispatch({
      type: "UPDATE", tagId: tagId
    });
  }, []);

  const onDelete = useCallback((tagId) => {
    dispatch({
      type: "DELETE", tagId: tagId
    });
  }, []);

  return (
    <>
      <div className='App'>
        <Header />
        <TodoStateContext.Provider value={{ todos }}>
          <TodoDispatchContext.Provider value={memorizeDispatch}>
            <Edit />
            <List />
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
    </>
  )
}

export default App
