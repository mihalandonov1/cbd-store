var email = document.getElementById("email");
var password = document.getElementById("password");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var phone = document.getElementById("phone");
var country = document.getElementById("country");
var state = document.getElementById("state");
var city = document.getElementById("city");
var adress = document.getElementById("adress");
var jsonBtn = document.getElementById("jsonbtn");
var jsonText = document.getElementById("jsontext");

jsonBtn.addEventListener("click", function () {
  console.log("click");
  var data = {
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
    phones: phone.value,
    country: country.value,
    state: state.value,
    city: city.value,
    adress: adress.value,
  };
  jsonText.innerHTML = JSON.stringify(data);
});

const ul = document.getElementById("employees");
const list = document.createDocumentFragment();

fetch("http://localhost:3000/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let employees = data;
    console.table(data[0].id);

    employees.map(function (employees) {
      let li = document.createElement("li");
      let name = document.createElement("h2");
      let email = document.createElement("span");

      name.innerHTML = `${employees.name}`;
      email.innerHTML = `${employees.email}`;

      li.appendChild(name);
      li.appendChild(email);
      list.appendChild(li);
    });
  })

  .catch((err) => {
    console.log("ERROR");
  });

ul.appendChild(list);

// const fullName = document.getElementById("name");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const phone = document.querySelector("#phone");

// const submit = document.getElementById("button");

// const card = document.getElementById("card");

// function testResults() {
//   let inputValuePassword = form.password.value;
//   let inputValueFirstName = form.firstName.value;
//   let inputValueLastName = form.lastName.value;
//   let inputValuePhone = form.phone.value;
//   let inputValueCuntry = form.country.value;
//   let inputValueState = form.state.value;
//   let inputValueCity = form.city.value;
//   let inputValueAdress = form.adress.value;

//   const user = {
//     firstName: inputValueFirstName,
//     lastName: inputValueLastName,
//     email: inputValueEmail,
//     password: inputValuePassword,
//     phone: inputValuePhone,
//     country: inputValueCuntry,
//     state: inputValueState,
//     city: inputValueCity,
//     address: inputValueAdress,
//   };

//   const fs = require("fs");

//   const data = JSON.stringify(user);

//   fs.writeFile("data.json", data, (error) => {
//     if (error) {
//       console.log(error);
//       throw error;
//     }
//     console.log("data.json was written succesfully");
//   });
// }

// card.innerHTML += ` <div class="container">
//                         <div class="firstName">
//                             <p>Име: </p>
//                             <div>${inputValueFirstName}</div>
//                         </div>
//                         <div class="lastName">
//                             <p> Фамилия:</p>
//                             <div>${inputValueLastName}</div>
//                         </div>
//                         <div class="email">
//                             <p>Имейл: </p>
//                             <div>${inputValueEmail}</div>
//                         </div>
//                         <div class="password">
//                             <p>Парола: </p>
//                             <div>${inputValuePassword}</div>
//                         </div>
//                         <div class="phone">
//                             <p>Телефон: </p>
//                             <div>${inputValuePhone}</div>
//                         </div>
//                         <div class="country">
//                             <p>Държава: </p>
//                             <div>${inputValueCuntry}</div>
//                         </div>
//                         <div class="state">
//                             <p>Област: </p>
//                             <div>${inputValueState}</div>
//                         </div>
//                         <div class="city">
//                             <p>Град: </p>
//                             <div>${inputValueCity}</div>
//                         </div>
//                         <div class="adress">
//                             <p>Адрес: </p>
//                             <div>${inputValueAdress}</div>
//                         </div>
//                 </div>
//   `;
