import { COLORS } from "../constants/ui";

export const ModalBackground = () => {
  return <div style={style.background}></div>
}

const style = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: COLORS.MODAL_BACKGROUND,
  },
}