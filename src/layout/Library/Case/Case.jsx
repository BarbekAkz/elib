import { ShelfContainer } from "./ShelfContainer"
import c from './Case.module.css'

export const Case = ({
  savedBooks
}) => {
  const shelfColumn = placeBooks(savedBooks)

  function placeBooks(books) {
    const shelfs = [] 

    for (let i = 0; i < books.length; i++) {
      shelfs.push(<ShelfContainer books={[books[i], books[++i]]} />)
    }

    return shelfs
  }

  return (
    <div className={c.container}>
      { shelfColumn }
    </div>
  )
}