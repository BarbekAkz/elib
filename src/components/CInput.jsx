import { COLORS } from "../constants/ui";
import c from './CInput.module.css'

export const CInput = ({
  styles,
  keyboard = 'default',
  placeholder = '',
  maxLength = 32,
  valueState,
}) => {
  const inputStyle = {
    container: {
      paddingInline: 4,
    },
    input: {
      height: 27,
      outlineWidth: 0,
      fontWeight: 500,
      color: COLORS.ACCENT,
      paddingInline: 4,
      fontSize: styles?.fontSize || 18,
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      width: '100%',
      marginBottom: -4,
      ...styles
    },
  }
  
  function setValue(value) {
    if (maxLength < value.length)
      return;

    if (keyboard === 'numeric') {
      valueState.setValue(Number(value));
      return;
    }
    valueState.setValue(value);
  }

  return (
    <div style={inputStyle.container}>
      <input
        style={inputStyle.input}
        className={c.input}
        onChange={e => setValue(e.target.value)}
        type={keyboard === 'numeric' ? 'number' : 'text'}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <div
        style={{
          width: '100%',
          height: 1,
          backgroundColor: COLORS.ACCENT,
          transform: 'translateY(2px)'
        }}
      />
    </div>
  )
}