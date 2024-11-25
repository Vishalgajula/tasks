function colorflipper() {
  let hexCode = Math.floor(Math.random() * 999999)
  // console.log(hexCode);

  const card = document.querySelector('.color-box');
  card.style.backgroundColor = `#${String(hexCode).padStart(6, '0')
    }`;

}

function reset() {
  const card = document.querySelector('.color-box');
  card.style.backgroundColor = '';


}