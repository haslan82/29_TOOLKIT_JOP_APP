import { v4 } from "uuid";
import AutoInput from "../components/AutoInput"
import Select from "../components/Select";
import SubmitButton from "../components/SubmitButton";
import { statusOpt, typeOPt } from "../constants";
import api from "../utils/api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { createJob } from "../constants/app/slices/jobSlice";
import { useNavigate } from "react-router-dom";


const AddJob = () => {

const dispatch = useDispatch();
// const navigate = useNavigate();
const navigate = useNavigate();
  const handleSubmit = (e) =>{
   //!console.log("object"); 
   e.preventDefault();


   // formData oluştur
const formData = new FormData(e.target);
//!console.log(formData);

const newJobData = Object.fromEntries(formData.entries());
newJobData.id = v4();
newJobData.date=Date.now();
//!console.log(newJobData);

api.post("/jobs", newJobData).then(()=>{
  toast.success('İş Başarıyla Eklendi', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    
    });


    // store a yeni veriyi kaydet
dispatch(createJob(newJobData));
// işlem başarılı olursa anasayfaya yönlendir
navigate("/")

}).
catch(()=> toast.error("İş eklenirken bir hata oluştu."));
  }
  return (
    <div className="add-page">
      <section className="container ">
        <h2>Yeni İş Ekle</h2>
        <form onSubmit={handleSubmit}>
          <AutoInput label={"Pozisyon"} name="position" />
          <AutoInput label={"Şirket"} name="company" />
          <AutoInput label={"Lokasyon"} name="location" />

          <Select label={"Durum"} options={statusOpt} name="status" />
          <Select label={"Tür"} options={typeOPt}  name="type" />
          <div>
            <SubmitButton text={"Oluştur"}  />
          </div>
        </form>
      </section>
     
    </div>
  )
}

export default AddJob;
