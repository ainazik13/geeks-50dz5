function checkTrafficLight() {
  const color = document.getElementById("colorInput").value.toLowerCase();
  const message = document.getElementById("message");

  if (color === "красный") {
    message.textContent = "Остановитесь!";
  } else if (color === "желтый") {
    message.textContent = "Приготовьтесь!";
  } else if (color === "зеленый") {
    message.textContent = "Можно ехать!";
  } else {
    message.textContent = "Ошибка: некорректный цвет светофора.";
  }
}