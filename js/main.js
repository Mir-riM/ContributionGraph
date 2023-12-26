//API
import { sendRequest, requestURL } from "./API/api.js";

//Функция рендеринга таблицы и месяцев сверху
import renderContributionGraph from "./module/renderContributionGraph.js";

// функции создания и удаления tooltip
import { tooltipCreate, tooltipDelete } from "./module/tooltip.js";

//Запуск API
await sendRequest(requestURL);

// Рендеринг элементов с передачей в дата атрибуты информации для последующего использования в tooltip'ах
renderContributionGraph();

//запускаем функцию по созданию tooltip'ов
tooltipCreate();

// Закрытие tooltip'а при нажатии куда угодно, кроме него
document.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("item") &&
    !e.target.classList.contains("tooltip") &&
    !e.target.classList.contains("tooltip__title") &&
    !e.target.classList.contains("tooltip__content")
  ) {
    tooltipDelete();
  }
});
