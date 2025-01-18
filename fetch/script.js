fetch("https://jsonplaceholder.typicode.com/users")
.then(function (response) {
    return response.json();
}).then((response) => {
    console.log(response);
}).catch(() => {
    console.log("Error : something went wrong T_T");
    
})
