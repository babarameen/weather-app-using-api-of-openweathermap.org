

function showweather(){
    let city=document.querySelector('input');
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=a406e426dbbf360294c1332a2d02c95f&units=metric`)
.then(data=>data.json())
.then(result=>{return show(result)});
console.log(1);
}

function show(w){
    let res=document.getElementsByClassName('res')[0];
    res.innerHTML = `${w.name},${w.sys.country}`;
    console.log(res)
    console.log(w);
    // console.log(res.innerHtml)
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var a =d.getDate() +month[(d.getMonth())]+"["+days[d.getDay()]+"]"+d.getFullYear();
    document.getElementsByClassName('date')[0].innerHTML= a;
    var tmp=w.main.temp +"℃"
    document.getElementsByClassName('temp')[0].innerHTML= tmp;
    var minmax=w.main.temp_min+"℃(min)/"+w.main.temp_max+"℃(max)";
    document.getElementsByClassName('comapre')[0].innerHTML=minmax;
    var forcast=w.weather[0].main;
    document.getElementsByClassName('forcast')[0].innerHTML=forcast;
}
function startTime(){
    var today=new Date();
    var h =today.getHours();
    var m =today.getMinutes();
    var s =today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementsByClassName('time')[0].innerHTML= h + ":" + m + ":"+ s;
    var t = setTimeout(startTime, 500); 
}
function checkTime(i){
    if(i<10){i="0"+i};
    return i;
}
