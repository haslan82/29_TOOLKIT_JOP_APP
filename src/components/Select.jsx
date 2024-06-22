import React from 'react'

const Select = ({label, options, name, handleChange}) => {
    //! console.log(label)
    //! console.log(options)
    //! console.log(handleChange)
  return (
    <div>
      <label>{label} </label>
      <select defaultValue={""} name={name} onChange={handleChange}>
        <option value="">Seçiniz</option>
        {options.map((i)=>(
           <option key={i} value={i}>{i} </option>
        ))}
      </select>
    </div>
  )
}

export default Select
