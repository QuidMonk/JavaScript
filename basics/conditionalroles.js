var user="tes";

switch (user) {
    case "admin":
        console.log("you get full access");
        break;
        case "subadmin":
        console.log("you get partial access");
        break;
        case "testprep":
        console.log("you get test prep access");
        break;
        case "user":
        console.log("you can consume courses");
        break;


    default:
        console.log("Trial user");
        break;
}