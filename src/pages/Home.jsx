import React, { useContext } from 'react'
import SelectMovie from '../component/SelectMovie'
import LastBookingDetail from '../component/LastBookingDetail'
import TimeSchedule from '../component/TimeSchedule'
import SelectSeats from '../component/SelectSeats'
import '../CSS/Home.css'
import BsContext from '../context/BsContext'

const Home = () => {
    const context = useContext(BsContext)
    const {
        movie,
        time,
        noOfSeats,
        handlePostBooking,
        handleGetBooking,
        setErrorMassage,
        setErrorPopup
    } = context


    const handleBookNow =() =>{
        //agar movie nhi hai to error msj show kar do ye message show karva rhe hai
        if(!movie){
            setErrorPopup(false)
            setErrorMassage("Please select a movie")
        }
        if(!time){
            setErrorPopup(false)
            setErrorMassage("Please select a slot")
        }
        if(!noOfSeats){
            setErrorPopup(false)
            setErrorMassage("Please select a seat number")
        }else{
            //agar handlePostbooking succses ful ho gya to hame ye data last booking par dikhana hai
            handlePostBooking()
            handleGetBooking()
        }
    }
    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='select_movie_component'>
                    <SelectMovie />
                </div>
                <div className='last_booking_detail_container'>
                    <LastBookingDetail />
                </div>
            </div>
            <div className='time_seats_container'>
                <TimeSchedule />
                <SelectSeats />
                <button className='btn' onClick={()=> handleBookNow()}>Book Now</button>
            </div>
        </div>
    )
}

export default Home
