import React from 'react'

const Select = ({label, options, name}) => {
    // console.log(label)
    // console.log(options)
  return (
    <div>
      <label>{label} </label>
      <select name={name} >
        <option value="">Seçiniz</option>
        {options.map((i)=>(
           <option key={i} value={i}>{i} </option>
        ))}
      </select>
    </div>
  )
}

export default Select
