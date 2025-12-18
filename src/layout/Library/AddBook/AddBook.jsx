import { COLORS } from "../../../constants/ui"
import AddBookIcon from '../../../images/addBook_icon.svg'
import c from './AddBook.module.css'

export const AddBook = ({
  sortSearchOpened
}) => {
  async function openExplorer() {
    // try {
    //   const result = await getDocumentAsync({
    //     type: 'txt',
    //     copyToCacheDirectory: false,
    //   });

    //   console.log(result.assets?.[0])
    // } catch (err) {
    //   console.error('Error opening book:', err);
    // }
  }

  return (
    <div
      className={c.button}
      style={{
        bottom: sortSearchOpened ? 312 : 12,
        borderColor: COLORS.ACCENT,
        backgroundColor: COLORS.HEADER_BACKGROUND
      }}
      onPress={openExplorer}
    >
      <img src={AddBookIcon} />
    </div>
  )
}