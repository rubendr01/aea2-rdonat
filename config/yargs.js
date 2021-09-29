const opt = {
  nom: {
    demand: true,
    alias: "n",
  },
  hores: {
    alias: "h",
    default: 0,
  },
};

const argv = require("yargs").command("crear", "Crea un nou alumne", opt);

module.exports = {
  argv,
};
