// --- СКРИПТ СЧЕТЧИКА ---

// 1. Находим элемент на странице, где будем отображать число
const counterElement = document.getElementById("counter");

// 2. Устанавливаем дату начала отсчета (26 октября 2024 года)
// Формат: Год, Месяц (начинается с 0, поэтому 9 = Октябрь), День
// Используем UTC для независимости от часовых поясов
const startDate = new Date(Date.UTC(2024, 9, 26, 0, 0, 0));

// 3. Функция для обновления счетчика
function updateCounter() {
  // Проверяем, существует ли элемент на странице
  if (!counterElement) {
    return;
  }

  // Получаем текущее время
  const now = new Date();

  // Вычисляем разницу между сейчас и датой старта в миллисекундах
  const diffInMilliseconds = now - startDate;

  // Если дата старта еще не наступила, выходим из функции
  if (diffInMilliseconds < 0) {
    counterElement.textContent = "0";
    return;
  }

  // Переводим разницу в секунды
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  // Вычисляем, сколько раз по 30 секунд прошло с момента старта
  const deaths = Math.floor(diffInSeconds / 30);

  // Отображаем полученное число в нашем элементе
  // .toLocaleString() добавляет разделители для тысяч (например, 1,000,000)
  counterElement.textContent = deaths.toLocaleString("en-US");
}

// 4. Запускаем функцию обновления при загрузке документа
document.addEventListener("DOMContentLoaded", function () {
  // Сначала вызываем ее один раз, чтобы показать число сразу
  updateCounter();
  // Затем ставим интервал, чтобы она повторялась каждые 30 секунд (30000 миллисекунд)
  setInterval(updateCounter, 30000);
});
