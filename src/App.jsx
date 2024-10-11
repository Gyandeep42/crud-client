

import './App.css'
import { BrowserRouter , Routes,Route} from 'react-router-dom'
import'bootstrap/dist/css/bootstrap.min.css'

import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import User from './user'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User/>} />
      <Route path='/create' element={<CreateUser/>} />
      <Route path="/Update/:id" element={<UpdateUser />} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
