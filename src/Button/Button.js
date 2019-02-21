import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

export const btnClasses = p => ({
  btn: !p.anchor,
  'btn-anchor': p.anchor,
  'btn-block': p.block,
  [`btn-${p.size}`]: p.size,
  [`btn-outline-${p.outline}`]: p.outline,
  disabled: p.disabled,
  // Button color switching
  [`btn-${p.color}`]: !p.anchor && p.color,
  [`text-${p.color}`]: p.anchor && p.color,
})

export const cleanBtnClasses = ({ anchor, block, color, outline, size, ...rest }) => rest

export default function Button(props) {
  const merged = { ...useTheme('Button'), ...props }

  return elem({
    defaultAs: 'button',
    type: 'button',
    classes: btnClasses(merged),
    ...cleanBtnClasses(merged),
  })
}
