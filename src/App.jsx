import { BrowserRouter, Route, Routes } from "react-router-dom"
import JobList from "./pages/JobList"
import AddJob from "./pages/AddJob"
import Header from "./components/Header"
import api from "./utils/api"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setJobs, setLoading } from "./constants/app/slices/jobSlice"


function App() {

  const dispatch = useDispatch();

const getJobs = ()=> {
  dispatch(setLoading());
  api.get("/jobs").then ((res)=> dispatch(setJobs(res.data)));
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
