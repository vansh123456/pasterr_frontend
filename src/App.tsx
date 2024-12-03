import { Signin } from "./pages/SignIn"
import { Signup } from "./pages/SignUp"
import { Snippets } from "./pages/Snippets"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/signin" element = {<Signin/> }/>
        <Route path= "/snippets" element = {<Snippets/>}/>
      </Routes>
    </BrowserRouter>
      </>
  )
}

export default App
