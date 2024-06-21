import { BrowserRouter, Route, Routes } from "react-router-dom"
import JobList from "./pages/JobList"
import AddJob from "./pages/AddJob"
import Header from "./components/Header"
import api from "./utils/api"
import { useEffect } from "react"


function App() {
const getJobs = ()=> {
  api.get("/jobs").then ((res)=> console.log(res));
};

useEffect(()=> {
  getJobs();
}, []);

  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<JobList />}  />
    <Route path="/new" element={<AddJob />}  />
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
