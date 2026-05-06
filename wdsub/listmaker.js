const CHECKBOX = "<button onclick='crossCheck(this)'><svg viewBox='0 0 512 512' width='10' title='check-circle'><path d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z' /></svg></button>";
let itemInput = document.getElementById("item-input");
let list = document.getElementById("list");
if (document.cookie != "") loadItems();


const NOTCHECKED = "<button onclick='crossCheck(this)'> <svg viewBox='0 0 512 512' width='10' title='vector-square'><path d='M512 128V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32H160c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32v192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32h192c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32V160c17.67 0 32-14.33 32-32zm-96-64h32v32h-32V64zM64 64h32v32H64V64zm32 384H64v-32h32v32zm352 0h-32v-32h32v32zm-32-96h-32c-17.67 0-32 14.33-32 32v32H160v-32c0-17.67-14.33-32-32-32H96V160h32c17.67 0 32-14.33 32-32V96h192v32c0 17.67 14.33 32 32 32h32v192z' /></svg></button>";

document.addEventListener("keydown", (key) => {
  console.log(key.code);
  if (key.code == "Enter") addItem(key);
} );

function addItem(event) {
  if (itemInput.value != "") {
 let _newItem = itemInput.value;
  let _elem = document.createElement("li");
  _elem.innerText = _newItem;
    _elem.innerHTML = _elem.innerHTML + NOTCHECKED;
  list.append(_elem);
  itemInput.value = "";
  itemInput.focus();
  }
}

function clearList(event) {
list.innerHTML = "";
}

function crossCheck (notThis) {
let parentLI = notThis.parentElement;
  parentLI.style.textDecoration = "wavy orange 0.8px line-through";
  parentLI.style.color = "gray";
  parentLI.innerHTML = CHECKBOX + parentLI.innerText;
}

function notchecked(elem) {
  let parentLI = notThis.parentElement;
  parentLI.stle.textDecoration = "none";
  parentLI.style.color = "black";
  parentLI.innerHTML = NOTCHECKED + parentLI.innerText;
}

document.addEventListener("beforeunload", () => {
  event.preventDefault();
  event.returnValue =  "testtest";
});

function saveItems() {
  document.cookie = "items" + itemInput.innerHTML;
  console.log(document.cookie)
}

function loadItems() {
  cookieArr = document.cookie.substring[6];
  list.innerHTML = cookieArr;
}
