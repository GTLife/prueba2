// Establece la fecha objetivo para la cuenta regresiva (año, mes - 1, día, hora, minutos, segundos)
const targetDate = new Date('2024-10-01T08:59:59');

// Función para actualizar el contador
function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    // Calcula los días, horas, minutos y segundos restantes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Actualiza el HTML con los valores calculados
    document.getElementById('days').innerText = `${days}`;
    document.getElementById('hours').innerText = `${hours}`;
    document.getElementById('minutes').innerText = `${minutes}`;
    document.getElementById('seconds').innerText = `${seconds}`;

    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (timeDifference < 0) {
        document.querySelector('.countdown').innerHTML = '¡La Preventa de DarkCoin a comenzado!';
    }
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);

// Inicializa el contador
updateCountdown();


// Establece la fecha objetivo para la cuenta regresiva (año, mes - 1, día, hora, minutos, segundos)
const targetDate1 = new Date('2024-10-01T08:59:59');

// Función para actualizar el contador
function updateCountdown1() {
    const now = new Date();
    const timeDifference = targetDate1 - now;

    // Calcula los días, horas, minutos y segundos restantes
    const days1 = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours1 = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes1 = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds1 = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Actualiza el HTML con los valores calculados
    document.getElementById('days1').innerText = `${days1}`;
    document.getElementById('hours1').innerText = `${hours1}`;
    document.getElementById('minutes1').innerText = `${minutes1}`;
    document.getElementById('seconds1').innerText = `${seconds1}`;

    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (timeDifference < 0) {
        document.querySelector('.countdown1').innerHTML = '¡La Preventa de DarkCoin a comenzado!';
    }
}

// Actualiza el contador cada segundo
setInterval(updateCountdown1, 1000);

// Inicializa el contador
updateCountdown1();

