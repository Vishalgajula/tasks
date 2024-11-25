document.getElementById('item').addEventListener('keypress', function (event) {
  if (event.key === "Enter") {
    list();
  }
})

function list() {

  let item = document.getElementById("item").value;
  // console.log(item);
  let listitem = document.createElement("p");
  listitem.innerHTML = item;
  // console.log(listitem);

  document.getElementById("list").appendChild(listitem);
  item.value = "";
  document.getElementById('item').value = "";
}