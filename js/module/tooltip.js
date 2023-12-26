//создаем всплывающее окно, достаем данные из дата атрибутов, которые передали зарание
function tooltipCreate() {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      //Удаляем старый tooltip ежели такой есть
      tooltipDelete();

      //Создаем DOM элементы, заполняем контентом, вставляем друг в друга и рендерим
      let tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.style.top = item.getBoundingClientRect().y - 50 + "px";

      let tooltipTitle = document.createElement("h6");
      tooltipTitle.classList.add("tooltip__title");
      tooltipTitle.innerText = item.dataset.contribution;

      tooltip.append(tooltipTitle);

      let tooltipContent = document.createElement("p");
      tooltipContent.innerText = item.dataset.date;
      tooltipContent.classList.add("tooltip__content");

      tooltip.append(tooltipContent);

      document.querySelector("body").prepend(tooltip);

      //помещаем tooltip по центру при клике на квадратик коммита
      tooltip.style.left =
        item.getBoundingClientRect().x -
        tooltip.getBoundingClientRect().width / 2 +
        7.5 +
        "px";
      if (item.classList.contains("color-gradation__item")) {
        tooltipDelete();
        let tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.style.top = item.getBoundingClientRect().y - 35 + "px";

        let tooltipTitle = document.createElement("h6");
        tooltipTitle.classList.add("tooltip__title");
        tooltipTitle.innerText = item.dataset.info;

        tooltip.append(tooltipTitle);

        //вычисления для размещения tooltip'a при крике на градацию цвета
        document.querySelector("body").prepend(tooltip);
        tooltip.style.left =
          item.getBoundingClientRect().x -
          tooltip.getBoundingClientRect().width / 2 +
          7.5 +
          "px";
      }
    });
  });
}

// если кликаем на другой, то удаляем старный tooltip, чтобы не копились
function tooltipDelete() {
  const tooltip = document.querySelector(".tooltip");
  if (tooltip) {
    tooltip.remove();
  }
}

export { tooltipCreate, tooltipDelete };
