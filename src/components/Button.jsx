import React from 'react'

const Button = (props) => {
    
    const handleClick = () => {
        alert('from changed state!')
    }

  return (
    <button onClick={handleClick}>        
        {props.children}
    </button>  
  
  )
}

export default Button
