const data = JSON.parse(sessionStorage.getItem("user"))
console.log(data);

data.map((e)=>{
console.log(e); 
const td = document.getElementsByTagName('td')
td[6].innerHTML=e.stdID
td[7].innerHTML=e.firstName
td[8].innerHTML=e.fatherName
td[9].innerHTML=e.gender
td[11].innerHTML=e.email
td[10].innerHTML=e.phoneNumber
})
