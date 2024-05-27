const list = document.getElementById("class-list")
console.log(list)
const elements = list.children
for(const elem of elements){
  const cls = elem.innerText.split(" - ")[0]
  elem.onclick = ()=>copyToClipboard(cls)
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert(text+" скопирован!")
}