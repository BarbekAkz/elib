import { IconButton } from '../../../components/IconButton';
import { MenuEdge } from '../../../components/MenuEdge';
import { COLORS } from '../../../constants/ui';
import { useState } from 'react';
import SortSearchIcon from '../../../images/sortSearch_icon.svg'
import CloseIcon from '../../../images/close_icon.svg'
import c from './SortSearch.module.css'
import { CInput } from '../../../components/CInput'

export const SortSearch = ({
  opened,
  close,
  sortTypeState
}) => {
  const [ selectedSortType, setSelectedSortType ] = useState(sortTypeState.sortType)

  function changeSortType(sortType) {
    setSelectedSortType(sortType)
    sortTypeState.setSortType(sortType)
  }

  return (
    <div
      className={c.sortSearch}
      style={{
        backgroundColor: COLORS.MENU_BACKGROUND,
        transform: `translateY(${opened ? 0 : 110}%)`
      }}
    >
      <MenuEdge width={opened ? 90 : 0} />
      <div className={c.header}>
        <img src={SortSearchIcon} />
        <IconButton icon={CloseIcon} onClick={close} className={c.closeButton} />
      </div>

      <p className={c.sectionTitle}>Сортировать:</p>

      <form>
        <div className={c.radio}>
          <input type="radio" value="none" />
          <p>свободно</p>
          </div>
        <div className={c.radio}>
          <input type="radio" value="name" />
          <p>по названию</p>
        </div>
        <div className={c.radio}>
          <input type="radio" value="author" />
          <p>по автору</p>
        </div>
        <div className={c.radio}>
          <input type="radio" value="year" />
          <p>по году выпуска</p>
        </div>
      </form>

      <div className={c.divider} style={{ backgroundColor: COLORS.ACCENT }} />

      <p className={c.sectionTitle}>Найти:</p>
      <CInput
        placeholder='Название книги...'
        valueState={{value: '', setValue: () => {}}}
      />

    </div>
  )
}