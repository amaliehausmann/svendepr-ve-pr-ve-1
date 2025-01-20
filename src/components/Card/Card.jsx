import style from "./Card.module.scss";

export const Card = ({
  image,
  title,
  description,
  children,
  custom,
  action,
}) => {
  return (
    <div className={`${style.cardStyling} ${style[custom]}`} onClick={action}>
      <img src={`${image}`} alt="" />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
};
