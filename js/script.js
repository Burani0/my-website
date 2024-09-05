let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}
Number.prototype.pad = function (n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
  };
  
  function updateClock() {
    var now = new Date();
    var millisec = now.getMilliseconds(),
      sec = now.getSeconds(),
      min = now.getMinutes(),
      hour = now.getHours(),
      month = now.toLocaleString("default", { month: "long" }),
      day = now.getDate(),
      year = now.getFullYear();
  
    const tags = ["month", "day", "year", "hour", "min", "s", "millisec"],
      corr = [month, day, year, hour.pad(2), min.pad(2), sec.pad(2), millisec];
  
    for (var i = 0; i < tags.length; i++)
      document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
  }
  
  window.setInterval("updateClock()", 1);


