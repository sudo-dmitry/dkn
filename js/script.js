!function(){let e=document.querySelector(".speakers"),t=document.querySelector(".speakers__collapsed"),n=0,c=document.getElementById("speakers-toggler"),d=!1;t.classList.add("check"),n=t.clientHeight,t.classList.remove("check"),c.addEventListener("click",(function(){d=e.classList.contains("expanded"),d?(e.classList.remove("expanded"),t.style.maxHeight=null):(e.classList.add("expanded"),t.style.maxHeight=n+"px")}))}(),function(){let e=document.querySelector(".schedule"),t=document.querySelector(".schedule__collapsed"),n=0,c=document.getElementById("schedule-toggler"),d=!1;t.classList.add("check"),n=t.clientHeight,t.classList.remove("check"),c.addEventListener("click",(function(){d=e.classList.contains("expanded"),d?(e.classList.remove("expanded"),t.style.maxHeight=null):(e.classList.add("expanded"),t.style.maxHeight=n+"px")}))}(),function(){let e=document.getElementById("fname"),t=document.getElementById("lname"),n=document.getElementById("tel"),c=document.getElementById("email");function d(e){let t=document.getElementById(e);document.getElementById(e+"-small").value=t.value}e.addEventListener("keyup",(function(){d("fname")})),t.addEventListener("keyup",(function(){d("lname")})),n.addEventListener("keyup",(function(){d("tel")})),c.addEventListener("keyup",(function(){d("email")}))}();