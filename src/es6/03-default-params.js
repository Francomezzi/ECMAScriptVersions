function newUser(name,age,country){
    var name = name || "oscar";
    var age = age || 19;
    var country = country || "Argentina";
    console.log(name,age,country);

}

newUser("Franco",29,"Mxc");

//Nueva forma con ecmascript6

function newAdmin(name = "Franc",age = 23, country = "Arg"){
    console.log(name,age,country);
}

newAdmin();
newAdmin("LOQUETRE",23,"OR");