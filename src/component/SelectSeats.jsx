import React, { useContext } from 'react'
import { seats } from '../Data'
import SeatsInput from './SeatsInput'
import '../CSS/SelectSeats.css'
import BsContext from '../context/BsContext'

const SelectSeats = () => {
  //context page ko access kar rhe hai
  const context = useContext(BsContext)
  const {noOfSeats, changeNoOfSeats} = context
  // window.localStorage.setItem('seats',JSON.stringify(seats))
  return (
    <>
        <div className='SS_wrapper'>
          <h1 className='SS_heading'>Select Seats :</h1>
          <div className='SS_main_container'>
            {seats.map((el,index)=>{
              return(
                <SeatsInput key={index} text={el} noOfSeats={noOfSeats}  changeNoOfSeats={changeNoOfSeats}/>
              )
            })}
          </div>
        </div>
    </>
      
  )
}

export default SelectSeats
