const month = 3;

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;                           //if we skip break then all the code after it excluding DEFAULT will get executed **************
    case 4:
        console.logI("April");
        break;
    case 5:
        console.log("may");
        break;

    default:
        break;
}