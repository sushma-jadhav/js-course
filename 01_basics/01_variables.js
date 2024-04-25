const accountId = 12345
let accountEmail = "testing@gmail.com"
let accountPassword = "12345"

let accountState; 

accountEmail = "valueChanged@gmail.com"
accountPassword = "valueChnaged678910"

console.table([accountId, accountEmail, accountPassword, accountState])

/* Var is not used because of issues with block scope and functional scope */
// { } this is block
/* for (i=0; i<=10; i++){
    those curley braces are block scope
} */