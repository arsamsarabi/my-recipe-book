import pick from 'lodash/pick'

import Book, { BookInterface } from '../../db/models/Book'

const addBook = async (userId: string, requestData: BookInterface) => {
  const newBook = pick(requestData, ['title', 'image', 'description'])
  const book = new Book({
    ...newBook,
    creator: userId,
  })
  await book.save()
  return book
}

const removeBook = async (id: string) => {
  const result = await Book.findByIdAndRemove(id)
  return result
}

const updateBook = async (id: string, book: Partial<BookInterface>) => {
  const result = await Book.findByIdAndUpdate(id, book, {
    new: true,
  })
  return result
}

const getBooks = async (userId: string) => await Book.find({ creator: userId })

export default {
  addBook,
  removeBook,
  updateBook,
  getBooks,
}
