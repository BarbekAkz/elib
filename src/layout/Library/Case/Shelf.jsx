import { BookMenu } from "./BookMenu"
import c from './Case.module.css'

export const Shelf = ({
  books
}) => {
  return (
    <div className={c.shelf}>
      <div className={c.shelfFloor}></div>
      <div className={c.shelfMenus}>
        <BookMenu book={books[0]} />
        <BookMenu book={books[1]} />
      </div>
    </div>
  )
}