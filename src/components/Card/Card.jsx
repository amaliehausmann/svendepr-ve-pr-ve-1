import style from './Card.module.scss'

export const Card = ({image, title, description, children, custom}) => {
  return (
    <div className={`${style.cardStyling} ${style[custom]}`}>
        <img src={`${image}`} alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
    </div>
  )
}