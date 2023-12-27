// Код начнет выполняться после загрузки страницы 
window.addEventListener('load', function () { 
    // Получим объекты поля для указания возраста и блока для размещения кнопки 
    const ageField = document.getElementById('demoButtonJsAge'); 
    const enterWrapper = document.getElementById('demoButtonJsEnter'); 
 
    // Если этих элементов не существует, остановим выполнения скрипта 
    if (!ageField || !enterWrapper) { 
        return; 
    } 
 
    // Повесим обработчик на событие изменения поля возраста 
    ageField.oninput = function () { 
        // Попытаемся получить объект кнопки 
        const enterBtn = enterWrapper.querySelector('button'); 
 
        // Если в поле возраста введено значение от 18 и больше и кнопки не существует, создадим эту кнопку 
        if (ageField.value >= 18 && !enterBtn) { 
            demoButtonJsCreateButtonIn(enterWrapper); // В функцию передадим объект области размещения кнопки 
        } else if (ageField.value < 18 && enterBtn) { // При указанном возрасте меньше 18 удалим кнопку, если она размещена 
            enterBtn.remove(); 
        } 
    }; 
}); 
 
// Функция создания кнопки 
function demoButtonJsCreateButtonIn(enterWrapper) { 
    // Создадим элемент button 
    const btn = document.createElement('button'); 
    // Добавим ему текст 
    btn.innerHTML = 'Входите!'; 
    // При нажатии на кнопку появится сообщение 
    btn.onclick = function () { 
        alert('Добро пожаловать!'); 
    }; 
    // Прикрепим созданный элемент button в блок размещения кнопки 
    enterWrapper.appendChild(btn); 
}