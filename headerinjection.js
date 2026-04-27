let elem =  document.createElement("div");
elem.innerHtml = "<link rel='stylesheet' href='https://yawperry.github.io/web-dev/header.css'>";
document.body.prepend(elem);

fetch("https://yawperry.github.io/web-dev/wdsub/global-header.html")
.then((result) => result.text())
.then((text) => {elem.innerHTML = elem.innerHTML + text;})
.catch((e) => console.error(e));
