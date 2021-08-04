var user={
    firstname: "Aryan",
    lastname:  "khan",
    isloggedisfromgoogle:true,
    logincount:32,
    courselist:[],
    getcourselist:function(coursename){
this.courselist.push(coursename)
    },
    buycourse:function(){
        return `${this.firstname} is enrolled in ${this.courselist.length} courses`;
    }
}

console.log(user.buycourse());
user.getcourselist("java");
user.getcourselist("c++");
console.log(user.buycourse());
console.log(user.courselist);