const { crearAlumne } = require("./helpers/hours");
const { argv } = require("./config/yargs").argv;

console.clear();

console.log();

let param = argv._[0];

//console.log(param);

switch (param) {
  case "crear":
    crearAlumne(argv.nom, argv.hores);
    break;
  default:
    console.log("ERROR: No s'ha reconegut la comanda");
}
