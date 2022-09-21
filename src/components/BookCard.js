import React from 'react'
import { Link } from 'react-router-dom'

function BookCard({book}) {
    const {id,title,authors,description,image_url} =book
  return (
    <>
        <Link to={`/fullbookdetails/${id}`} ><div key={id}>
            <div className='w-40'>
                <img src={image_url} className="object-cover w-full" alt={title}/> 
            </div>
        </div></Link>
    </>
  )
}

export default BookCard