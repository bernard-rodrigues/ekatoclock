function updateTime() {
    const d = new Date();
    document.getElementById('hour').innerText = String(d.getHours())
    d.getMinutes() < 10
        ? document.getElementById('minute').innerText = '0' + String(d.getMinutes())
        : document.getElementById('minute').innerText = String(d.getMinutes())
    d.getSeconds() < 10
        ? document.getElementById('second').innerText = '0' + String(d.getSeconds())
        : document.getElementById('second').innerText = String(d.getSeconds())


    document.getElementById('seconds-pointer').style.transform = `rotate(${(d.getSeconds() + d.getMilliseconds()/1000) * 6}deg)`;
    document.getElementById('minutes-pointer').style.transform = `rotate(${d.getMinutes() * 6}deg)`;
    document.getElementById('hours-pointer').style.transform = `rotate(${(d.getHours() % 12) * 5 * 6}deg)`;

    const miliseconds_per_day = 24 * 3600 * 1000
    const miliseconds = (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()) * 1000 + d.getMilliseconds()

    const percentage = miliseconds / miliseconds_per_day

    const centihours = Math.floor(percentage * 100) % 100
    const centiminutes = Math.floor(percentage * 10000) % 100
    const centiseconds = (percentage * 1000000) % 100

    document.getElementById('centi-hour').innerText = String(centihours)
    centiminutes < 10
        ? document.getElementById('centi-minute').innerText = '0' + String(centiminutes)
        : document.getElementById('centi-minute').innerText = String(centiminutes)
    centiseconds < 10
        ? document.getElementById('centi-second').innerText = '0' + String(Math.floor(centiseconds))
        : document.getElementById('centi-second').innerText = String(Math.floor(centiseconds))

    document.getElementById('centi-seconds-pointer').style.transform = `rotate(${((percentage * 1000000) % 100) * 3.6}deg)`;
    document.getElementById('centi-minutes-pointer').style.transform = `rotate(${centiminutes * 3.6}deg)`;
    document.getElementById('centi-hours-pointer').style.transform = `rotate(${centihours * 3.6}deg)`;

    document.getElementById('percentage').innerText = `${centihours},${Math.floor(centiminutes/10)}%`
    document.getElementById('overlayer').style.width = `${100-percentage*100}%`
}

window.setInterval(updateTime, 1);