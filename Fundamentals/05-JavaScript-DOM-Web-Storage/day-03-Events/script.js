function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // desenvolva função que crie dinamicamente os dias como filho da tag il com ID "days"
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day. 
    // Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday.
    // Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday.
    // Ex: <li class="day friday">4</li>
function calendarDays(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    for (day of dezDaysList) {
        let monthDay = document.createElement('li');
        monthDay.innerText = day;
        monthDay.className = 'day';
        document.querySelector('#days').appendChild(monthDay);
        if (day === 24 || day === 25 || day == 31) {
            monthDay.classList.add('holiday')
        } 
        if (day === 4 || day === 11 | day == 18 || day === 25) {
            monthDay.classList.add('friday')
        }
    }
}
calendarDays();
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// // Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function bntHolydays(bntString) {
    holidayButton = document.createElement('button');
    holidayButton.innerHTML = bntString;
    holidayButton.id = 'btn-holiday';
    btnContainer = document.querySelector('.buttons-container')
    btnContainer.appendChild(holidayButton);
}
bntHolydays('Feriados');
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
function displayHolidays(){
    let hlBttn = document.querySelector('#btn-holiday');
    hlBttn.addEventListener('click', alternateColors);
    function alternateColors(){
        let classDays = document.querySelectorAll('.holiday');
        for (let i = 0; i < classDays.length; i += 1) {
            let color = classDays[i].style.backgroundColor;
            if ( color === 'white') {
                classDays[i].style.backgroundColor = 'rgb(238,238,238)'; 
            } else {
                classDays[i].style.backgroundColor = 'white'; 
            }
        }
    }
}
displayHolidays();
function bntFriday(fridayString) {
    fridayButton = document.createElement('button');
    fridayButton.innerHTML = fridayString;
    fridayButton.id = 'btn-friday';
    btnContainer = document.querySelector('.buttons-container')
    btnContainer.appendChild(fridayButton);
}
bntFriday('Sexta-Feira');
