import React, { FC, ReactElement } from 'react'

interface BookProps {}

const Book: FC<BookProps> = (): ReactElement => {
  return (
    <div>
      <h1>Book</h1>
    </div>
  )
}

export default Book
