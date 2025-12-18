import { IconTextButton } from '../../../components/IconTextButton';
import logo from '../../../images/logo.svg';
import { COLORS, SHADOWS } from '../../../constants/ui';
import c from './LHeader.module.css'
import SortSearchIcon from '../../../images/sortSearch_icon.svg'

export const LHeader = ({
  toggleSortSearchOpened
}) => {
  function toggleSortSearch() {
    toggleSortSearchIconView();
    toggleSortSearchOpened();
  }

  function toggleSortSearchIconView() {

  }

  return (
    <div
      style={{
        backgroundColor: COLORS.HEADER_BACKGROUND,
        boxShadow: SHADOWS.DEFAULT,
      }}
      className={c.background}
    >
      <img src={logo} />
      <IconTextButton icon={SortSearchIcon} onPress={toggleSortSearch} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>Сортировка и поиск</IconTextButton>
    </div>
  )
}
