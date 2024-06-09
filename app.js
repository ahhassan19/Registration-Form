const getData = () => {
    localStorage.setItem("user", JSON.stringify([]))

    const stdID = document.getElementById("stdID").value
    const firstName = document.getElementById("firstName").value
    const fatherName = document.getElementById("fatherName").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("phoneNumber").value
    const gender = document.getElementById("gender").value

    console.log(stdID, firstName, fatherName, email, phoneNumber, gender);

    let obj = {
        stdID,
        firstName,
        fatherName,
        email,
        phoneNumber,
        gender
    }
    const array = JSON.parse(localStorage.getItem("user"))
    let result = array.push(obj)
    localStorage.setItem("user", JSON.stringify(result))
}
