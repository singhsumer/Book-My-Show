import RedioComponent from './RedioComponent'
import { movieList } from '../Data'
import '../CSS/SelectMovie.css'
import { useContext } from 'react'
import BsContext from '../context/BsContext'

const SelectMovie = () => {
  //const state ke jariye use kiya ja rha hai
  const context = useContext(BsContext)

  const {movie,changeMovie} = context

  const handleChangeMovie =(value) =>{
    changeMovie(value)
    //localstorege me set kar det hai 
    window.localStorage.setItem('movie',value)
  }

  return (
    <>
      <h1 className='SM_heading'>select a movie :-</h1>
      <div className='SM_main_container'>
        {movieList.map((el, index) => {
          return (
            <RedioComponent text={el} key={index} data={movie} changeSelection={handleChangeMovie} />
          )
        })}

      </div>

    </>
  )
}

export default SelectMovie
