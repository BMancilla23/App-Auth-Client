import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About, Home, Profile, SignIn, SignUp } from "./pages"
import { Header } from "./components"

export const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

