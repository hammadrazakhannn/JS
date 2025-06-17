const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Hammad", lastname: "Khan" })
        }
        else {
            reject("Raza")
        }
    }, 1000);
})

// promise4.then(function (user) {
//     console.log(user)
//     return user.username
// })
//     .then((username) => {
//         console.log(username);

//     })
//     .catch((error) => {
//         console.log(error);

//     }).finally()


async function sheesh() {
    try{
        const response = await promise4
        console.log(response);
    } catch (error){
        console.log(error)
    }

}
sheesh()