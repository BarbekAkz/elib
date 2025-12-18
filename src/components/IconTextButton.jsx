export const IconTextButton = ({
  icon,
  children,
  onPress,
  style
}) => {
  return (
    <div style={style} onClick={onPress}>
        <img src={icon} />
        <p style={baseStyle.title}>{ children }</p>
    </div>
  )
}

const baseStyle = {
  title: {
    fontWeight: 300,
    fontSize: 14
  }
}