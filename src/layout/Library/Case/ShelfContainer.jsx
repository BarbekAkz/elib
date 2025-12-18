import { Book } from "./Book";
import { Shelf } from "./Shelf";
import c from './Case.module.css'

export const ShelfContainer = ({
  books
}) => {
  if (books.length > 2)
    throw new Error('На полку положилось больше 2-х книг')

  const booksOnShelf = books.map(book => {
    if (book)
      return <Book path={book?.path} />
    return <div className={c.emptyBook}/>
  })

  return (
    <div className={c.shelfContainer}>
      <div className={c.booksContainer}>
        { booksOnShelf }
      </div>
      <Shelf books={books} />
    </div>
  )
}