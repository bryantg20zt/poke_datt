import Styles from './Stats.module.css'

export function PokeStat ({ children, style }) {
  return (
    <div className={Styles.container} style={style}>
      {children}
    </div>
  )
}
