const form = document.getElementById('test-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formResults = new FormData(form);
  const resultValues = [];
  
  for (let value of formResults.values()) {
    resultValues.push(value);
  }
  
  const countValues = resultValues.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  
  const maxCount = Math.max(...Object.values(countValues));
  const resultKeys = Object.keys(countValues).filter(key => countValues[key] === maxCount);
  
  if (resultKeys.length === 1) {
    result.textContent = `Ваше направление - ${getResult(resultKeys[0])}`;
  } else {
    result.textContent = 'У Вас несколько направлений, пожалуйста, ответьте на вопросы более конкретно.';
  }
});

function getResult(value) {
  switch (value) {
    case '1':
      return 'Программная инженерия (ПИНЖ)';
    case '2':
      return 'Информационные системы и технологии (ИФСТ)';
    case '3':
      return 'Прикладная информатика (ПИФН)';
    case '4':
      return 'Информатика и вычислительная техника (ИВЧТ)';
    default:
      return '';
  }
}

/*
Данный код определяет направление в зависимости от ответов, 
выбранных пользователем в HTML-форме. При отправке формы, код сначала 
прерывает стандартное поведение (submit) и собирает все ответы в массив 
(resultValues). Затем он использует метод reduce() для подсчета количества 
каждого ответа (countValues). Далее он определяет наибольшее количество 
ответов (maxCount) и наиболее популярные ответы (resultKeys). Если есть 
только одно наиболее популярное направление, то результат выводится в 
элемент .result с помощью функции getResult(). Если есть несколько 
популярных направлений, то выводится сообщение об ошибке. Функция 
getResult() возвращает текстовое описание направления в зависимости от 
переданного значения value.*/