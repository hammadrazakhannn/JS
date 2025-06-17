async function getusers(){
    try{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = await response.json()
    console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
// getusers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(res){
    return res.json()
})
.then((data)=> console.log(data)
)
.catch((e)=> console.log(e))