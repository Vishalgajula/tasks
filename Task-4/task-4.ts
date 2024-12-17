//Interface initization
interface person {
  name: string,
  age: number,
  city: string,
  gender?: string,
  phone?: number,
  email?: string
}

// Array of the details of the persons 
const details: person[] = [
  { name: 'Nivas', age: 22, city: 'Nizamabad', gender: "Male" },
  { name: 'Sampath', age: 22, city: 'Nizamabad', gender: "Male" },
  { name: 'Vishal', age: 24, city: 'Karimnagar', gender: 'Male', phone: 9948888792, email: 'vishalgajula64@gmail.com' },
  { name: 'Saicharan', age: 24, city: 'Karimnagar', phone: 9703558750 },
  { name: 'Adarsh', age: 24, city: 'Karimnagar', email: 'adarshdulam3@gmail.com' },
  { name: 'Shilesh', age: 24, city: 'Jagityal', gender: 'Male' },
  { name: 'Pawan', age: 25, city: 'Armur', gender: 'Male' },
  { name: 'Srihari', age: 24, city: 'Armur', gender: 'Male' },
  { name: "Sreeja", age: 23, city: "Nizamabad", gender: "Female" },
  { name: "Manasa", age: 24, city: "Dharmaram" },
  { name: "Tejaswini", age: 23, city: "Karimnagar" },
  { name: "Ishwarya", age: 22, city: "kamareddy", gender: "Female" },
];
const container: any = document.querySelector('.container')
//function for creating elements in the DOM dynamically

function persons(element: any) {
  let div = document.createElement("div")
  div.className = "Cards"
  let name = document.createElement("h1");
  let age = document.createElement("p");
  let city = document.createElement("p");
  let gender = document.createElement("p");

  name.innerHTML = `${element.name}`
  age.innerHTML = `Age : ${element.age}`
  city.innerHTML = `City : ${element.city}`

  div.appendChild(name)
  div.appendChild(age)
  div.appendChild(city)

  //looping througth the each object element and creating the elements if key and value are present in the object
  for (const [key, value] of Object.entries(element)) {
    if (value !== undefined && (key === "gender" || key === "phone" || key === "email")) {
      const optionalField = document.createElement("p");
      optionalField.innerHTML = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
      div.appendChild(optionalField);
    }
  }

  // div.appendChild(gender)
  container.appendChild(div)
}
container.innerHTML = `<h3 class="length">Available data on ${details.length} persons</h3>`
//displaying persons on home
details.forEach((eachPerson) => {
  persons(eachPerson)

})

//function for flitering the details
function filterByCity() {
  let city = document.getElementById("city") as HTMLInputElement;
  let cityname: string = city.value.trim();
  //Filtering the details with the input value
  const filter = details.filter((detail: person) =>
    detail.city.toLowerCase() === cityname.toLowerCase() || detail.name.toLowerCase() === cityname.toLowerCase() || detail.gender?.toLocaleLowerCase() === cityname.toLowerCase())
  //here we are filtering the details using city-name and persons-name by using or property
  // console.log(filter);

  container.innerHTML = "" //to clear the before content in the document
  container.innerHTML = `<h3 class="length">${filter.length} person/s found</h3>`
  if (filter.length > 0) {
    filter.map((person) => {
      persons(person) //calling the function to create the cards dynamically
    })
  }
  else if (cityname === "") {

    container.innerHTML = `<h3 class="length" >Enter City Name</h3>`

  }
  else {
    console.log(filter)
    container.innerHTML = `<h3 class="length">No data avalible</h3>`
  }
}
// it is to run the function on the Enter keypress
document.querySelector('input')?.addEventListener("keypress",
  function (event) {
    if (event.key === "Enter") {
      filterByCity()
    }
  }
)

