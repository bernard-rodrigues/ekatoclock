let milliseconds_in=0, milliseconds_out=0, milliseconds_per_day_of_work=0;

$('#in').mask('00:00', {reverse: true});
$('#out').mask('00:00', {reverse: true});

function rangeSubmit(){
    if($('#in').val().length >= 4 && $('#out').val().length >= 4){
        if($('#in').val()[1] == ':' && Number($('#in').val()[2]) < 6){
            milliseconds_in = (Number($('#in').val()[0])*3600 + Number($('#in').val().slice(2,4))*60) * 1000
        }
        else if(Number($('#in').val()[0]) < 3 && Number($('#in').val()[3]) < 6){
            milliseconds_in = (Number($('#in').val().slice(0,2))*3600 + Number($('#in').val().slice(3,5))*60) * 1000
            
        }else{
            alert('Dica: Utilize horário no formato 24h')
        }

        if($('#out').val()[1] == ':' && Number($('#out').val()[2]) < 6){
            milliseconds_out = (Number($('#out').val()[0])*3600 + Number($('#out').val().slice(2,4))*60) * 1000
        }
        else if(Number($('#out').val()[0]) < 3 && Number($('#out').val()[3]) < 6){
            milliseconds_out = (Number($('#out').val().slice(0,2))*3600 + Number($('#out').val().slice(3,5))*60) * 1000
            
        }else{
            alert('Dica: Utilize horário no formato 24h')
        }
    }else{
        alert('Dica: Utilize horário no formato 24h')
    }
    
    if(milliseconds_in > milliseconds_out){
        milliseconds_out += 24*3600*1000
    }

    milliseconds_per_day_of_work = milliseconds_out - milliseconds_in
}

function updateTime() {
    const d = new Date();
    
    // COMMON CLOCK
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

    // CENTI CLOCK
    const milliseconds_per_day = 24 * 3600 * 1000
    const milliseconds = (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()) * 1000 + d.getMilliseconds()

    const percentage = milliseconds / milliseconds_per_day

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

    // RANGE CLOCK
    if(milliseconds_out > milliseconds){
        const range_percentage = (milliseconds-milliseconds_in)/milliseconds_per_day_of_work
        
        const rangehours = Math.floor(range_percentage * 100) % 100
        const rangeminutes = Math.floor(range_percentage * 10000) % 100
        const rangeseconds = (range_percentage * 1000000) % 100
        
        document.getElementById('range-hour').innerText = String(rangehours)
        rangeminutes < 10
            ? document.getElementById('range-minute').innerText = '0' + String(rangeminutes)
            : document.getElementById('range-minute').innerText = String(rangeminutes)
        rangeseconds < 10
            ? document.getElementById('range-second').innerText = '0' + String(Math.floor(rangeseconds))
            : document.getElementById('range-second').innerText = String(Math.floor(rangeseconds))
    
        document.getElementById('range-seconds-pointer').style.transform = `rotate(${((range_percentage * 1000000) % 100) * 3.6}deg)`;
        document.getElementById('range-minutes-pointer').style.transform = `rotate(${rangeminutes * 3.6}deg)`;
        document.getElementById('range-hours-pointer').style.transform = `rotate(${rangehours * 3.6}deg)`;
    }

    document.getElementById('percentage').innerText = `${centihours},${Math.floor(centiminutes/10)}% of the day`
    document.getElementById('overlayer').style.width = `${100-percentage*100}%`
}

window.setInterval(updateTime, 1);