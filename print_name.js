// gaberoche42 at gmail
//
// example: > node print_name --name "Brendan Eich"
//          > Brendan Eich

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const fname = grab("--name");
const flag_name = (process.argv.indexOf('--name') > -1 ? true : false); // was name supplied?
const node_author = "Ryan Dahl"; // use node.js author if no name supplied


if (flag_name) {
    console.log(fname); // print name if supplied as flag
} else {
    console.log(node_author); // print default in no name supplied
}