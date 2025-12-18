import { COLORS, SHADOWS } from "../../../constants/ui"
import { MetadataMenuContext } from "../../../stores/metadataMenu"
import { useContext, useState } from "react"
import bookOptionsIcon from "../../../images/bookOptions_icon.svg"
import c from './Case.module.css'

export const BookMenu = ({
  book
}) => {
  const [expanded, setExpanded] = useState(false)
  const { metadataMenuOpened, setMetadataMenuOpened } = useContext(MetadataMenuContext);

  function openMetadataMenu() {
    setMetadataMenuOpened(true)
  }

  return (
    <div
      className={c.menu}
      style={{
        backgroundColor: COLORS.SHELF_BACKGROUND,
        boxShadow: SHADOWS.SHELF,
        height: expanded ? 123 : 25
      }}
    >
      {
        book &&
        <>
          <div onClick={() => setExpanded(!expanded)} style={{ paddingRight: 9 }} className={c.menu}>
            <p
              className={c.bookName}
            >
              { book.name }
            </p>
            <img className={c.optionsIcon} src={bookOptionsIcon}  style={{ opacity: expanded ? 0 : 1 }} />
          </div>
          <div className={c.options}>
            <div className={ `${c.divider} ${expanded && c.dividerExpanded}` } />
            <div onClick={openMetadataMenu}>
              <p className={c.optionsTitle}>Изменить метаданные</p>
            </div>
            <div className={`${c.divider} ${c.dividerTransparent}`}></div>
            <div>
              <p className={c.optionsTitle} style={{ color: COLORS.DELETE_TEXT }}>Убрать из библиотеки</p>
            </div>
          </div>
        </>
      }
    </div>
  )
}