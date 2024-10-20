import { useEffect, useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
    const [errorPopup,setErrorPopup] = useState(false)

    const [errorMassage,setErrorMassage] = useState('')

    const [movie, changeMovie] = useState('')

    const [time, changeTime] = useState('')

    const [noOfSeats, changeNoOfSeats] = useState({
        A1:"",
        A2:"",
        A3:"",
        B1:"",
        B2:"",
        B3:"",
        D1:"",  
    })
    const [lastBookingDetail,setLastBookingDetail] = useState(null)

    //handle karna hai post request taki hum booking data ko save kr sake backend me
        const handlePostBooking = async() =>{
            const response = await fetch(' http://localhost:5000/api/booking',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({movie:movie,slot:time,seats:noOfSeats}) 
            })
            const data = await response.json()

            setErrorPopup(true)
            setErrorMassage(data.massage)

            if(response.status === 200){
                changeTime('')
                changeMovie('')

                setLastBookingDetail(data.data)
                window.localStorage.clear()
            }

        }
// get require se hame chahiye backend se

        const handleGetBooking =  async () =>{
            const response = await fetch(' http://localhost:5000/api/booking',{
                method:"GET"
            })
            const data = await response.json()
            setLastBookingDetail(data.data)
        }
        useEffect(()=>{
            const movie = window.localStorage.getItem('movie');
            const slot =  window.localStorage.getItem('slot')
            const seats = JSON.parse(window.localStorage.getItem('seats'))

            if(movie){
                changeMovie(movie)
            }
            if(slot){
                changeTime(slot)
            }
            if(seats){
                changeNoOfSeats(seats)
            }
        },[])

return (
    <BsContext.Provider value={{ movie, changeMovie,time,changeTime,noOfSeats,changeNoOfSeats, lastBookingDetail,setLastBookingDetail ,handlePostBooking,handleGetBooking, errorMassage,errorPopup,setErrorMassage,setErrorPopup}} >{props.children}</BsContext.Provider>
)
}
export default BsState;