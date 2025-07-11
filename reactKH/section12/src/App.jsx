import './App.css'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Diary from './pages/Diary'
import New from './pages/New'
import NotFound from './pages/NotFound'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useReducer, useRef, createContext } from 'react'
import Button from './components/Button'
import Header from './components/Header'

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime() - 24 * 60 * 60 * 3000,
    emotionId: 2,
    content: "2번 일기 내용"
  },
  {
    id: 3,
    createdDate: new Date().getTime() - 24 * 60 * 60 * 1000,
    emotionId: 3,
    content: "3번 일기 내용"
  }
];

function reducer(state, action) {
  switch (action.type) {
    case "INSERT": return [action.data, ...state];
    case "UPDATE": return state.map((item) => item.id === action.data.id ? action.data : item);
    case "DELETE": return state.filter((item) => item.id !== action.id);
    default: return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();


function App() {
  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(4);

  const onInsert = (createdDate, emotionId, content) => {
    dispatch({
      type: 'INSERT',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  }

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    })
  }

  return (
    <>
      <Header />
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onInsert, onUpdate, onDelete }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new/*' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider >
    </>
  )
}

export default App
