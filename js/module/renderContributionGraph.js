import { result } from "../API/api.js";
// Всякие switch переборы, чтобы получить русское название дня недели или месяца
import { dayOfWeek, monthOfYear, brieflyMonthOfYear } from "./switch.js";

function renderContributionGraph() {
  let date = new Date(); //основная дата, от которой будем отталкиваться

  //Рендеринг мясецев сверху таблицы

  // Для этого создадим отдельную дату и будем обращаться в brieflyMonthOfYear(), чтобы получить слово на русском сокращенным
  let dateForMonthRender = new Date();
  dateForMonthRender.setMonth(dateForMonthRender.getMonth() - 1); // сразу вычитаем -1, т.к. в цикле потом делать проверку, на то первый это месяц или нет более запарно

  // Отображем нынешний месяц(а не прошлый) только после наступления второй половины нынешнего месяца
  if (dateForMonthRender.getDate() > 14) {
    dateForMonthRender.setMonth(dateForMonthRender.getMonth() + 1);
  }
  //Вывод месяцев сверху таблицы
  for (let m = 0; m < 12; m++) {
    let month = document.createElement("div");
    let monthName = document.createElement("p");

    dateForMonthRender.setMonth(dateForMonthRender.getMonth() + 1);
    monthName.innerText = brieflyMonthOfYear(dateForMonthRender.getMonth());

    month.append(monthName);
    document
      .querySelector(".contribution-graph__upper-table-text")
      .append(month);
  }

  //Цикл рендеринга
  for (let days = 357; days !== 0; ) {
    // Полная дата в нужном формате YY-MM-DD, которая постоянно обновлятся в зависимости от основной даты
    let fullDate =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate().toString().padStart(2, "0");

    function createItem() {
      let item = document.createElement("div");

      item.dataset.date =
        dayOfWeek(date.getDay()) +
        ", " +
        monthOfYear(date.getMonth()) +
        " " +
        date.getDate().toString().padStart(2, "0") +
        ", " +
        date.getFullYear();

      if (result[fullDate] != undefined) {
        item.dataset.contribution = result[fullDate] + " contribution";
      } else {
        item.dataset.contribution = "No contribution";
      }

      date.setDate(date.getDate() - 1);

      item.classList.add("item");

      // отслеживание количества коммитов
      if (result[fullDate] == undefined) {
        item.classList.add("noContributions");
      }
      if (0 < result[fullDate] && result[fullDate] < 10) {
        item.classList.add("firstLevel");
      }
      if (result[fullDate] > 9 && result[fullDate] < 20) {
        item.classList.add("secondLevel");
      }
      if (result[fullDate] > 19 && result[fullDate] < 30) {
        item.classList.add("thirdLevel");
      }
      if (result[fullDate] >= 30) {
        item.classList.add("lastLevel");
      }
      document.querySelector(".contribution-graph__table").prepend(item);
      days--;
    }

    // Проверка на первую неделю, чтобы следующие дни недели, если таковые есть
    if (days == 357) {
      let today = date.getDay();
      if (today !== 0) {
        let appendDayofWeek = 7 - today;
        date.setDate(date.getDate() + appendDayofWeek);
        for (appendDayofWeek; appendDayofWeek !== 0; appendDayofWeek--) {
          createItem();
        }
      }
    }
    createItem();
  }
}
export default renderContributionGraph;
