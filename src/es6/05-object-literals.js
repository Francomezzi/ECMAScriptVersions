// enhaced object literals

function newUser(user,age,country,uId){
    return {
        user,
        age,
        country,
        id: uId
    }
};

console.log(newUser("sdasd",23,"arg",1));