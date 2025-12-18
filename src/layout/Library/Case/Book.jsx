import { COLORS, SHADOWS } from "../../../constants/ui";
import { NavigationContext } from '../../../stores/navigation';
import { useContext } from "react";

export const Book = ({
  path
}) => {
  // const navigation = useContext(NavigationContext);

  function openBook() {
      // navigation.navigate('BookView', { book: 'asd' })
  }

  return (
    <div onClick={openBook}>
      <div style={style.book}></div>
    </div>
  )
}

const style = {
  book: {
    width: 124,
    height: 193,
    backgroundColor: COLORS.ACCENT,
    boxShadow: SHADOWS.DEFAULT,
  }
}