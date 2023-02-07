function clock(){
    let date = new Date()

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let x = '';

    
    if(h>12){
        h = h - 12
        x = 'P.M.'        
    }else{
        x = 'A.M.'
    }

    h = h<10? "0"+h:h;
    m = m<10? "0"+m:m;
    s = s<10? "0"+s:s;

    document.getElementById("hour").innerText = h;
    document.getElementById("min").innerText = m;
    document.getElementById("sec").innerText = s;
    document.getElementById("str").innerText = x;

    setTimeout(clock,1000)
}

function toggle(){
    let a = document.getElementById('btn')


    if(a.value == 'dark'){
        a.value = 'light'
        document.getElementById('btn').innerText = 'Light Mode';
        document.body.style.backgroundColor= 'black';
        document.getElementById('container').style.backgroundColor = 'black'
        document.getElementById('hour').style.backgroundColor = 'aqua'
        document.getElementById('min').style.backgroundColor = 'aqua'
        document.getElementById('sec').style.backgroundColor = 'aqua'
        document.getElementById('str').style.backgroundColor = 'aqua'

        document.getElementById('hour').style.color = 'black'
        document.getElementById('min').style.color = 'black'
        document.getElementById('sec').style.color = 'black'
        document.getElementById('str').style.color = 'black'
    }
    else if(a.value == 'light'){
        a.value = 'dark'
        document.getElementById('btn').innerText = 'Dark Mode';
        document.body.style.backgroundColor= 'aqua';
        document.getElementById('container').style.backgroundColor = 'aqua'
        document.getElementById('hour').style.backgroundColor = 'rgba(0, 0, 0, 0.861)'
        document.getElementById('min').style.backgroundColor = 'rgba(0, 0, 0, 0.861)'
        document.getElementById('sec').style.backgroundColor = 'rgba(0, 0, 0, 0.861)'
        document.getElementById('str').style.backgroundColor = 'rgba(0, 0, 0, 0.861)'

        document.getElementById('hour').style.color = 'white'
        document.getElementById('min').style.color = 'white'
        document.getElementById('sec').style.color = 'white'
        document.getElementById('str').style.color = 'white'
    }
}
