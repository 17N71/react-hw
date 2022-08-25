import { useState } from 'react'
import './App.css'
import Homework from "./components/Homework.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Second from "./components/Second/Second.jsx";
import Third from "./components/Third/Third.jsx";
function App({surName}) {
    debugger;

    const [name, setName] = useState(true)
    const handleName = () => setName(!name)
  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Navigate to={'/first'} ></Navigate> }></Route>
          <Route path='/first' element={<Homework  name={name} lastName={name?"Simonyan":"Poghosyan"} handleName={handleName} setName={setName} />}></Route>
          <Route path='/second' element={<Second />}></Route>
            <Route path='/third' element={<Third surName={surName} />}></Route>

        </Routes>

    </>
  )
}

export default App
