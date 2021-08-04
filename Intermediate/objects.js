var user={
    firstname:"Rabiul",
    lastname:"Alam",
    role: "Admin",
    logincount:32,
    isloggedinfromfacebook:true,
courselist:[],
buycourse: function(courseName){
    this.courselist.push(courseName)
},
getcoursecount:function(){
    return `${this.firstname} is enrolled in ${this.courselist.length} courses`;
},
    


};
// console.log(user.firstname);
// console.log(user);

user.role="SubAdmin";

//console.log(user.role);

//console.table(user)

console.log(user.getcoursecount());
user.buycourse("React Js");
console.log(user.getcoursecount());
