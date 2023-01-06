// Reloj JS
setInterval(() => {
    const hh = document.getElementById('hh');
    const mm = document.getElementById('mm');
    const ss = document.getElementById('ss');

    let sec_dot = document.querySelector('.sec_dot');
    let min_dot = document.querySelector('.min_dot');
    let hora_dot = document.querySelector('.hora_dot');

    let hora = document.getElementById('hora');
    let minutos = document.getElementById('minutos');
    let segs = document.getElementById('segs');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >=12 ? "PM" : "AM";

    //Formato de hora 24hr y 12hr

    if (h > 12){
        h = h-12;
    }

    //Agregar un cero antes del numero con un digito
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hora.innerHTML = h;
    minutos.innerHTML = m;
    segs.innerHTML = s;
    ampm.innerHTML = am;
    
    hh.style.strokeDashoffset = 510 - (510 * h) / 12;
    //Reloj de 12 Horas

    mm.style.strokeDashoffset = 630 - (630 * m) / 60;
    // 60 minutos

    ss.style.strokeDashoffset = 780 - (780 * s)/ 60;
    // 60 Segundos

    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
    //360/60seg = 6

    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    //360/60min = 6

    hora_dot.style.transform = `rotateZ(${h * 30}deg)`;
    //360/12hrs = 30

});

//Cambio de color

const body = document.querySelector("body"),
    modeToggle = document.querySelector (".dark-light");

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    if (!body.classList.contains("dark")){
        localStorage.setItem("mode", "ligth-mode");
    }
    else{
        localStorage.setItem("mode", "dark-mode");
    }
});
