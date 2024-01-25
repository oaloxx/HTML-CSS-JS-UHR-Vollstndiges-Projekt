function wiederholen(){
    let uhr = document.getElementById("UHR");
    let date1 = document.getElementById("DATE");


    var now = new Date();

    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    var y = now.getFullYear();
    var mo = now.getMonth();
    let moy = mo + 1;
    var d = now.getDate();



    
    uhr.innerHTML = h+":"+m+":"+s;
    date1.innerHTML = y+":"+moy+":"+d;

    }

setInterval(wiederholen,500);