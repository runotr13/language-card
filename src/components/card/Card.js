import React from 'react'
import './Card.css'

const Card = ({veri}) => {
  const handleClick = (event) => {
    
    event.currentTarget.children[0].classList.toggle('card-ul')
    event.currentTarget.children[1].classList.toggle('card-ul')
  }
  return (
<>
    <h3 className='card-title'>Languages</h3>
    <div className="card-wrapper">
      {
        veri.map((item) => {
          const {img,name,options} = item;
          return(
            <>
                <div className='card' key={name}  onClick={handleClick}>
                  <img src={img} alt="" className='card-images' />
                  <h4 className='card-name'>{name}</h4>
                  <ul className='card-li'>
                      <li>{options[0]}</li>
                      <li>{options[1]}</li>
                      <li>{options[2]}</li>
                    </ul>
                </div>
                
                

                
                    </>
          )
        })
      }
    </div>
    </>
  )
}

export default Card