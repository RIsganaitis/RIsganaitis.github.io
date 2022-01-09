// let obj = {
//     title: "Labas pasauli",
//     desc: "Aprašymas",
//     log: true,
//     sk: 9,
//     mas: ["Labas", "Pasauli", "Aprašymas"],
//     mas2: [{name: "John", surname: "Doe"},
//         {name: "Donald", surname: "Trump"},
//         {name: "Bla", surname: "DKva"},
//         {name: "John", surname: "Doe"}
//     ],
//     kvadratu: function(n){
//         return n**2;
//     }
// };

// //properties - kažkasyra saugoma - duomenys
// //metodas - kažkas yra daroma
// console.log(obj);
// console.log(obj.title);
// console.log(obj['title']);
// console.log(obj.mas[2]);
// console.log(obj.mas2[1]);
// console.log(obj.mas2[1].surname);
// console.log(obj.kvadratu(9));

///
let obj = {
    title: "Labas pasauli",
    desc: "Aprašimas",
    log: true,
    sk: 9,
    mas: ["Labas", "Sveikas", "Labas rytas"],
    mas2: [
        {name: "John", surname: "Doe"},
        {name: "Simonas", surname: "Petrauskas"},
        {name: "Birutė", surname: "Pavardenė"}
    ],
    kvadratu: function(n){
        //pakelti kvadratu
        return n**2;
    }
};
// propetries/paramatras - kažkas yra saugoma (duomenys)
//metodas - kažkas daroma
 
console.log(obj.kvadratu(9));
// console.log(obj['title']);
 
 
//JSON failo nuskaitymas ir atspausdinimas
var xmlhttp = new XMLHttpRequest();
var url = "../../json.json";
 
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    //   console.log("turinys:" + this.responseText)
 
      //...
        console.log(JSON.parse(this.responseText).data[0].relationships.author.data.type);
      //...
 
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
 
