import React from 'react'

function BookCard({book}) {
    const {id,title,authors,description,image_url} =book
  return (
    <>
        <div key={id}>
            <div className='w-40'>
                <img src={image_url} className="object-cover w-full" alt={title}/> 
            </div>
        </div>
    </>
  )
}

export default BookCard