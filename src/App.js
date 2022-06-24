import { Route, Routes } from 'react-router-dom'
import './App.css'
import Class from './routes/Class/Class.page'
import Functional from './routes/Functional/Functional.page'
import Home from './routes/Home/Home.page'
import Navigation from './routes/Navigation/Navigation.page'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home />}></Route>
          <Route path='function' element={<Functional />} />
          <Route path='class' element={<Class />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
