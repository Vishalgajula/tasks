const count = document.querySelector('.count');
console.log(count);
let counter = 0

count.innerHTML = counter

const decrease = () => {
  counter--;
  count.innerHTML = counter

  if (counter < 0) {
    count.style.color = 'red';
  } else if (counter == 0) {
    count.style.color = 'black';
  } else {
    count.style.color = 'green';
  }
}

const reset = () => {
  counter = 0;
  count.innerHTML = counter

  if (counter == 0) {
    count.style.color = 'black';
  }
}

const increase = () => {
  counter++;
  count.innerHTML = counter

  if (counter > 0) {
    count.style.color = 'green';
  }
}