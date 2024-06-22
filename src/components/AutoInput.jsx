import React from "react";
import { useSelector } from "react-redux";

const AutoInput = ({ label, name }) => {
  const { jobs } = useSelector((store) => store);
  // console.log(name)
  // console.log(jobs);
  // console.log(label)
  // console.log(name)

  //!  1) sadece pozisyon değerlerinden oluşan bir dizi tanımla

  const arr = jobs.map((job) => job[name]);
  //console.log(arr)

  //! 2) Dizide tekrar eden elemanları kaldırır

  const filteredSet = new Set(arr);


  //! 3) set in dönderdiği nesneyi diziye çevirir
  const options = Array.from (filteredSet);

  return (
    <div>
      <label htmlFor={label}>{label} </label>
      <input type="text" id={label} name={name}  required />

<datalist id= {name} >
  {options.map((i, index)=>(
   <option key={index} value={i} />
  ))}z
</datalist>

    </div>
  );
};

export default AutoInput;
