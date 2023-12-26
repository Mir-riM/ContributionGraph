// Функция на вычисление дня недели, т.к. названия пишутся на английском
export function dayOfWeek(day) {
  switch (day) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
    case 0:
      return "Воскресенье";
  }
}

// функция на вычисление месяца, т.к. названия пишутся на английском
export function monthOfYear(month) {
  switch (month) {
    case 0:
      return "Январь";
    case 1:
      return "Февраль";
    case 2:
      return "Март";
    case 3:
      return "Апрель";
    case 4:
      return "Май";
    case 5:
      return "Июнь";
    case 6:
      return "Июль";
    case 7:
      return "Август";
    case 8:
      return "Сентябрь";
    case 9:
      return "Октябрь";
    case 10:
      return "Ноябрь";
    case 11:
      return "Декабрь";
  }
}
// функция на вычисление месяца, т.к. названия пишутся на английском
export function brieflyMonthOfYear(month) {
  switch (month) {
    case 0:
      return "Янв.";
    case 1:
      return "Февр.";
    case 2:
      return "Март";
    case 3:
      return "Апр.";
    case 4:
      return "Май";
    case 5:
      return "Июнь";
    case 6:
      return "Июль";
    case 7:
      return "Авг.";
    case 8:
      return "Сент.";
    case 9:
      return "Окт.";
    case 10:
      return "Нояб.";
    case 11:
      return "Дек.";
  }
}
