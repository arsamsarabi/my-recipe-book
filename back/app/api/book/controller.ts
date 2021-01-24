import omit from 'lodash/omit'

import Book, { BookInterface, BookDocument } from '../../db/models/Book'

const addBook = async (userId: string, requestData: BookInterface) => {
  const book = new Book({
    ...requestData,
    creator: userId,
  })
  await book.save()
  return book
}

const removeBook = async (id: string) => {
  const result = await Book.findByIdAndRemove(id)
  return result
}

const updateBook = async (book: Partial<BookDocument>) => {
  const result = await Book.findByIdAndUpdate(
    book._id,
    omit(book, ['_id', 'creator']),
    {
      new: true,
    }
  )
  return result
}

const getBooks = async (userId: string) => await Book.find({ creator: userId })

export default {
  addBook,
  removeBook,
  updateBook,
  getBooks,
}
