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
})