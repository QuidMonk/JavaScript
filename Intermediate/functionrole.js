var getuserrole=function (name ,role)
{
    switch (role) {
        case "admin":
            return `${name} is admin and has the full access`;
            
            break;
            case "subadmin":
            return `${name} is subadmin and has partial access`;
            
            break;

            case "testprep":
            return `${name} is testprep and has right to create test`;
            
            break;
            case "user":
            return `${name} is user and can consume content`;
            
            break;
    
        default:
            return `${name} is a trial user`;
            break;
    }
}
console.log(getuserrole("Rabiul","admin"));
var user=getuserrole("ARyan","testprep");

console.log(user);
