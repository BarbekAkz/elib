import { COLORS } from "../constants/ui";

export const MenuEdge= ({
  width
}) => {
  return <div style={{
    width: `${width}%`,
    transform: `scaleX(${width > 0 ? 1 : 0})`,
    position: 'absolute',
    top: 4,
    left: 0, right: 0,
    marginInline: 'auto',
    height: 1,
    backgroundColor: COLORS.ACCENT,
    transformOrigin: 'center',
    transition: 0.3,
  }}/>
}