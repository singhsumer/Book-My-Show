import React from 'react'
import '../CSS/SeatsInput.css'

const SeatsInput = ({text ,noOfSeats,changeNoOfSeats}) => {
  const change_seat = (e) =>{
    changeNoOfSeats({...noOfSeats,[e.target.name]:Number(e.target.value)})

    window.localStorage.setItem('seats',JSON.stringify({...noOfSeats,[e.target.name]:Number(e.target.value)}))
  }
  return (
    <>
      <div className='form_check_label'>
        <span className='text'>{text}</span>
        <input type="number" className='seats-input' placeholder='0' max='30' min='0' name={text} onChange={change_seat} value={noOfSeats[text]}/>
      </div>
    </>
  )
}

export default SeatsInput
