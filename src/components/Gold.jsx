import React from 'react'
import { useParams } from 'react-router-dom'

const Gold = () => {
  const { id } = useParams()

  // Fetch product details based on the ID
  // For demonstration purposes, let's just return the ID
  return (
    <div>
      <h1>Product Details for ID: {id}</h1>
      {/* Display product details here */}
    </div>
  )
}

export default Gold
