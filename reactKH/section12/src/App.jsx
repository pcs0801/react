import './App.css'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Diary from './pages/Diary'
import New from './pages/New'
import NotFound from './pages/NotFound'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { getEmotionImages } from './util/getEmotionImages'


function App() {
  const nav = useNavigate();
  const onClickHome = () => {
    nav('/')
  };

  return (
    <>
      <div className='App'>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
        <Link to={'/edit'}>Edit</Link>
      </div>
      <div className='App'>
        <button onClick={onClickHome}>Home</button>
        <button onClick={() => nav('new')}>New</button>
        <button onClick={() => nav('diary/2')}>Diary</button>
        <button onClick={() => nav('edit/2')}>Edit</button>
      </div>
      <div className='App'>
        <img src='/emotion11.png' alt='' />
        <img src='/emotion12.png' alt='' />
        <img src='/emotion13.png' alt='' />
        <img src='/emotion14.png' alt='' />
        <img src='/emotion15.png' alt='' />
      </div>
      <div className='App'>
        <img src={getEmotionImages(1)} alt='' />
        <img src={getEmotionImages(2)} alt='' />
        <img src={getEmotionImages(3)} alt='' />
        <img src={getEmotionImages(4)} alt='' />
        <img src={getEmotionImages(5)} alt='' />
      </div>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new/*' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
