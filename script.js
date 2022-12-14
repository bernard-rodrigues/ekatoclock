function updateTime(){
    const d = new Date();
    document.getElementById('hour').innerText = String(d.getHours())
    d.getMinutes() < 10
        ? document.getElementById('minute').innerText = '0' + String(d.getMinutes())
        : document.getElementById('minute').innerText = String(d.getMinutes())
    d.getSeconds() < 10
        ? document.getElementById('second').innerText = '0' + String(d.getSeconds())
        : document.getElementById('second').innerText = String(d.getSeconds())
        
    document.getElementById('seconds-pointer').style.transform = `rotate(${d.getSeconds()*6}deg)`;
    document.getElementById('minutes-pointer').style.transform = `translate(-50%, -100%) rotate(${d.getMinutes()*6}deg)`;
    document.getElementById('hours-pointer').style.transform = `translate(-50%, -250%) rotate(${(d.getHours()%12)*5*6}deg)`;
    


    const milisseconds = (d.getHours()*3600 + d.getMinutes()*60 + d.getSeconds())*1000 + d.getMilliseconds()

    const total = Math.floor(milisseconds/86.4)
    const centiseconds = total % 100
    const centiminutes = Math.floor(total/100) % 100
    const centihours = Math.floor(total/10000)

    document.getElementById('centi-hour').innerText = String(centihours)
    centiminutes < 10
        ? document.getElementById('centi-minute').innerText = '0' + String(centiminutes)
        : document.getElementById('centi-minute').innerText = String(centiminutes)
    centiseconds < 10
        ? document.getElementById('centi-second').innerText = '0' + String(centiseconds)
        : document.getElementById('centi-second').innerText = String(centiseconds)

    document.getElementById('centi-seconds-pointer').style.transform = `rotate(${centiseconds*3.6}deg)`;
    document.getElementById('centi-minutes-pointer').style.transform = `translate(-50%, -100%) rotate(${centiminutes*3.6}deg)`;
    document.getElementById('centi-hours-pointer').style.transform = `translate(-50%, -250%) rotate(${centihours*3.6}deg)`;

}

window.setInterval(updateTime, 125);