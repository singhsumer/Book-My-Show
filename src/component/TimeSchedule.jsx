import React, { useContext } from 'react'
import  { slots } from '../Data'
import RedioComponent from './RedioComponent'
import '../CSS/TimeSchedule.css'
import BsContext from '../context/BsContext'


const TimeSchedule = () => {
  //context page ko accesse kar rha hai
  const context = useContext(BsContext)
  const {time , changeTime} = context

  const handlecChangeIem = (value) =>{
    changeTime(value)

    //local storege me store karenge
    window.localStorage.setItem('slot',value)
  }
  return (
    <>
      <div className='slot_container'>
        <h1 className='TS_heading'>Select a Schedule</h1>
        <div className='TS_main_container'>
          {slots.map((el,index)=>{
            return(
              <RedioComponent text={el} key={index} data={time} changeSelection={handlecChangeIem} />
            )
          })}
          </div>     
          
      </div>
    </>
  )
}

export default TimeSchedule
