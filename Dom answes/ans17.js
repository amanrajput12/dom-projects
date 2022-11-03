

    //  Tasks

    //  change the button text To current Date.







let button = document.querySelector(".btn-container")
let btnval = document.querySelector(".btn-container .btn")
button.removeChild(btnval)
let addval = document.createElement("h1")
let now = new Date()
addval = now
button.append(addval)
