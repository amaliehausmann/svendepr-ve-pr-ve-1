import style from "./Filter.module.scss";

export const Filter = ({ handleDataFilter }) => {
  const filters = [
    { text: "A-Å", value: null, class: "grey" },
    { text: "RØD SCENE", value: "Rød scene", class: "red" },
    { text: "BLÅ SCENE", value: "Blå scene", class: "blue" },
    { text: "GRØN SCENE", value: "Grøn scene", class: "green" },
    { text: "LILLA SCENE", value: "Lilla scene", class: "purple" },
  ];

  return (
    <section className={style.filtersection}>
      <ul>
        {filters.map((item) => (
          <li
            key={item.value}
            onClick={() => handleDataFilter(item.value)}
            className={`${style[item.class]}`}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
};
