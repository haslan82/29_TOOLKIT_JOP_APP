import { useEffect, useState } from "react";
import { sortOpt, statusOpt, typeOpt } from "../constants";
import Select from "./Select";
import SubmitButton from "./SubmitButton";
import { useDispatch } from "react-redux";
import { setLoading, setJobs } from "../constants/app/slices/jobSlice";
import api from "./../utils/api";


const Filter = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  //!console.log(text)
  const [status, setStatus] = useState();
  //!console.log(status);

  const [type, setType] = useState();
  const [sort, setSort] = useState();
  //! console.log(text)
  //! console.log(status);
  //! console.log(type);
  //! console.log(sort);
  const [debouncedText, setDebouncedText] = useState();

  
// DEBOUNCE
  
//    Bir olayın çok sık tetiklenmesini önlemek için kullanılır.
//    Her tuşa basıldığında arama yapmak yerine, kullanıcının yazmayı
//    bitirmesini bekleyip yalnızca belirli bir süre geçtikten sonra 
//    arama yapar.Bu performansı arttırır ve gerekisiz ağ isteklerini veya
//     işlem yükünü azaltır.
  
  


  
  useEffect(() =>{
if (text === undefined) return;

 // bir sayaç başlat ve işlemi sayaç durunca yap
const timer = setTimeout(()=> setDebouncedText(text), 1000);

// eğerki süre bitmeden tekrar  useEffect çalışırsa(yeni sayaç başlaması) önceki sayacı iptal et
return () => {
  clearTimeout(timer);

  };
  }, [text]);



  // filtreleme veya sıralama ile ilgili bir state değiştiğinde api den güncel verileri al
  useEffect(() => {
    const sortParam =
      sort === "a-z" || sort === "z-a"
        ? "company"
        : sort === "En Yeni" || sort === "En Eski"
        ? "date"
        : undefined;

    const orderParam =
      sort === "a-z"
        ? "asc"
        : sort === "z-a"
        ? "desc"
        : sort === "En Yeni"
        ? "desc"
        : sort === "En Eski"
        ? "asc"
        : undefined;

    const params = {
      q: text,
      _sort: sortParam,
      _order: orderParam,
      type: type || undefined,
      status: status || undefined,
    };

    dispatch(setLoading());

    api
      .get("/jobs", { params })
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, [debouncedText, sort, type, status]);

  // filtreyi sıfırla butonuna tıkladığımızda state leri ve inputları sıfırlar
  const handleReset = (e) => {
    e.preventDefault();
    //!console.log("çalıştı")

    // state leri sıfırla
    setText();
    setSort();
    setStatus();
    setType();
    setDebouncedText();

    // inputları sıfırla
    e.target.reset();
  };
  return (
    <div className="filter-sec">
      <h2>Filtreleme Formu</h2>
      
      <form onSubmit={handleReset}>
        <div>
          <label>Ara</label>
          <input type="text" onChange={(e) => setText(e.target.value)} />
        </div>
        <Select
          label="Durum"
          options={statusOpt}
          handleChange={(e) => setStatus(e.target.value)}
        />

        <Select
          label={"Tür"}
          options={typeOpt}
          handleChange={(e) => setType(e.target.value)}
        />

        <Select
          label={"Sırala"}
          options={sortOpt}
          handleChange={(e) => setSort(e.target.value)}
        />
        <div>
          <SubmitButton text={"Filtreleri Sıfırla"} />
        </div>
      </form>
    </div>
  );
};

export default Filter;

//!burayaa kadar dön
