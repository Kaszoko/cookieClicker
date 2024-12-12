// Zmienna przechowująca liczbę ciastek
let cookieCount = 0;
// Zmienna przechowująca wartość kliknięcia
let cookiesPerClick = 1;
// Zmienna przechowująca liczbę ciastek na sekundę
let cookiesPerSecond = 0;
// Zmienna przechowująca koszt ulepszenia
let upgradeCostClick = 20;
// Zmienna przechowująca koszt ulepszenia
let upgradeCostTime = 50;

// !Funkcja do wyświetlenia alertBoxa na 4 sekundy
function alertBoxVisionTime() {
    // Dodaj klasę widoczności
    alertBox.classList.add('visible');
    setTimeout(() => {
        //Usuwanie klasy po 4 s
        alertBox.classList.remove('visible');
        // Czas wyświetlenia alertBoxa
    }, 4000);
}



// !Funkcja aktualizująca 
function updateCookies() {
    // Aktualizowanie liczby ciastek
    document.getElementById('cookies').innerHTML = "Ciastka<i class='icon-dollar'></i>: " + Math.floor(cookieCount);
    // Aktualizowanie liczby ciastek na sekundę
    document.getElementById('cookies_on_sec').innerHTML = "Ciastka<i class='icon-back-in-time'></i>: " + cookiesPerSecond;
    // Zmienna przechowjąca koszt ulepszenia ciastek na sekundę
    let timePrize = document.getElementById('timePrize');
    timePrize.innerHTML = "<i class='icon-dollar'></i>: " + upgradeCostTime + " ciastek";
    // Zmienna przechowująca koszt ulepszenia kliknięcia
    let clickPrize = document.getElementById('clickPrize');
    clickPrize.innerHTML = "<i class='icon-dollar'></i>: " + upgradeCostClick + " ciastek  [<i class='icon-mouse-pointer'></i>: " + cookiesPerClick + "]";
    // Stała przechowująca alertBoxa
    const alertBox = document.getElementById('alertBox');
    // Funkcja zmieniająca kolor ceny
    function updatePrizeColor(prizeElement, condition) {
        // Instrukcja warunkowa 
        prizeElement.style.color = condition ? 'rgb(0, 255, 0)' : 'rgb(255,0,0)';
    }
    // Aktualizacja kolorów dla ceny klikania
    updatePrizeColor(clickPrize, cookieCount >= upgradeCostClick);
    // Aktualizacja kolorów dla ceny ciastek na sekundę
    updatePrizeColor(timePrize, cookieCount >= upgradeCostTime);
    
}

// !Sprawdzanie czy strona jest załadowana
document.addEventListener('DOMContentLoaded', () => {
    // Zmienna przechowująca obraz ciastka 
    const cookieImage = document.getElementById('cookie');
    // Zmienna przechowująca alert boxa
    const alertBox = document.getElementById('alertBox');
    // !Dodanie nasłuchiwania kliknięcia na obraz ciastka
    cookieImage.addEventListener('click', () => {
        // Do liczby ciastek jest dodawana liczba wartości kliknięcia po kliknięciu na obrazek
        cookieCount += cookiesPerClick;
        // Wywołanie funkcji aktualizującej liczbę ciastek 
        updateCookies();
    });

    // !Funkcja ulepszania wartości kliknięcia w sklepie
    window.more_cookie_click = function () {
        // Sprawdzanie czy posiada się odpowiednią liczbę ciastek
        if (cookieCount >= upgradeCostClick) {
            // Odjęcie ceny ulepszenia od aktualnej liczby ciastek
            cookieCount -= upgradeCostClick;
            // Zwiększenie wartości kliknięcia
            cookiesPerClick += 1;
            // Zwiększenie ceny po ulepszeniu
            upgradeCostClick += upgradeCostClick;
            // Wywołanie funkcji aktualizującej liczbę ciastek
            updateCookies();
            // Tekst w alertBoxie
            alertBox.textContent = "Wartość kliknięcia wynosi teraz: " + cookiesPerClick;
            alertBox.style.boxShadow = 'inset 0px 0px 20px 5px green';
            // Alert w przypadku udanego zakupu
            alertBoxVisionTime();
        } else {
            // Alert w przypadku braku wystarczającej liczby ciastek
            alertBoxVisionTime();
            alertBox.textContent = "Brak wystarczającej ilości ciastek";
            /* Ciewnie wewnątrz */
            alertBox.style.boxShadow = 'inset 0px 0px 20px 5px red';
        }
    };

    // !Funkcja ulepszenia liczby ciastek na sekundę
    window.more_cookie_time = function () {
        // Sprawdzanie czy posiada się odpowiednią liczbę ciastek 
        if (cookieCount >= upgradeCostTime) {
            // Odjęcie ceny ulepszenia od aktualnej liczby ciastek
            cookieCount -= upgradeCostTime;
            // Zwiększenie liczby ciastek na sekundę
            cookiesPerSecond += 1;
            // Zwiększenie ceny po ulepszeniu
            upgradeCostTime += upgradeCostTime;
            // Wywołanie funkcji aktualizującej liczbę ciastek
            updateCookies();
            // Tekst w alertBoxie
            alertBox.textContent = "Obecna ilość ciastek na sekundę: " + Math.ceil(cookiesPerSecond);
            /* Ciewnie wewnątrz */
            alertBox.style.boxShadow = 'inset 0px 0px 20px 5px green';
            // Alert w przypadku udanego zakupu
            alertBoxVisionTime();
        } else {
            // Alert w przypadku braku wystarczającej liczby ciastek
            alertBoxVisionTime();
            alertBox.textContent = "Brak wystarczającej ilości ciastek";
            alertBox.style.boxShadow = 'inset 0px 0px 20px 5px red';
        }
    };

    // !Funkcja dodająca liczbę ciastek na sekundę do liczby ciastek 
    setInterval(() => {
        // Działanie matematyczne
        cookieCount += cookiesPerSecond / 100;
        // Wywołanie funkcji aktualizującej liczbę ciastek
        updateCookies();
        // Wykonywanie funkcji co określony czas
    }, 10);
    // Wywołanie funkcji aktualizującej liczbę ciastek
    updateCookies();
});
