const accountId = 144553
let sccountEmail = "ananya@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2// not allowed

accountEmail = "hc@c.com"
accountPassword = "212121"
accountCity = " Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
  */

console.table( [accountId , accountEmail , accountPassword , accountCity, accountState])