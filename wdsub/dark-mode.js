let darkMode = document.getElementById ("divid-tgl");
let dividOnoff = document.getElementById("divid-onoff");

let isLight = true;

  function tglDarkMode(event) {


// determine if light mode is on 
if (isLight) document.body.style.backgroundColor = "black" ;
else  document.body.style.backgroundColor = "white" ;
  
//change text color to white if light mode, else black
if (isLight) document.body.style.color = "white" ;
else document.body.style.color = "black" ;
  
// change text to "dark mode on" if light mode, else "Dark  mode off"
if (isLight) dividOnoff.innerHTML = "<p>Dark mode on</p>";
else dividOnoff.innerHTML = "<p>Dark mode off</p>" ;

// flip the isLight switch
isLight = !isLight;
  }
