const anotherFunc = () => {
    return new Promise((resolve,reject) =>{
        if(false){
            resolve("Hola");
        }else{
            reject("Nooo");
        }
    })
}

anotherFunc()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(()=>{
        console.log("Finally");
    });