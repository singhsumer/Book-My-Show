import React from 'react'
import '../CSS/RedioComponent.css'

//select Movie me se bheje gye props ko accsse kar rhai hai
const RedioComponent = ({text,changeSelection,data}) => {

  const handleChecked = (value) =>{
    changeSelection(value)
 
  }
  return (
    <div>
      {/* particular value text me aarhi hai to hame name ke value ko text se accse karege */}
        <div name={text} className={`form-check-label ${data === text ? "active" : "inactive"}`}l onClick={() => handleChecked(text)}>
      <span className='text'>{text}</span>
      </div>
    </div>
  )
}

export default RedioComponent;
