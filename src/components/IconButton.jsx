

export const IconButton = ({
  icon,
  onClick,
  style
}) => {
  return (
    <div style={baseStyle} onClick={onClick}>
        <img src={icon} />
    </div>
  )
}

const baseStyle = {
  container: {
    userSelect: 'none',
  },
}