const searchModelInFileFs = require('./searchModelInFileFs.js');
const makeMarqueModelCv = require('./makeMarqueModelCv');

const fs = require('fs');

const apiRaw = fs.readFileSync("./api-plaque.txt");
const apiPlaque = apiRaw.toString();
console.log(apiPlaque)

fetch(apiPlaque + process.argv[2])
  .then(res => res.json())
  .then(res => {
    // console.log(res);
    let libelle = res.vehicule[0].libelle
    console.log(libelle);
    let standardise = makeMarqueModelCv(libelle);
    console.log(standardise);
    console.log(searchModelInFileFs(standardise));
  })