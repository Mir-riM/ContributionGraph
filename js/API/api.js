// Запрос к серверу для получения данных

const requestURL = "https://dpg.gg/test/calendar.json"; //
let result; // сюда запишем данные с сервера

//функция на получаение данных с сервера с помощью fetch API (умею и на XHR)
async function sendRequest(url) {
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((e) => {
      result = e;
    });
}

export { result, sendRequest, requestURL };
