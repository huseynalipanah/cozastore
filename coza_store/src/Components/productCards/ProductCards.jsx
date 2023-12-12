import React, { useState, useEffect } from 'react'
import './ProductCards.scss'

const ProductCards = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  
  return (
    <div className='cards'>
      {data.map((x) => (
        <div className="card" key={x.id}>
          <img src={x.image} alt={x.name} />
          <p>{x.title}</p>
          <span>${x.price}</span>
        <i class="fa-regular fa-heart"></i>

        </div>
      ))}
    </div>
  )
}

export default ProductCards
