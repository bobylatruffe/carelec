const searchModelInFileFs = require('./searchModelInFileFs.js');
const makeMarqueModelCv = require('./makeMarqueModelCv');

fetch("https://www.mister-auto.com/nwsAjax/Plate?captcha_token=&family_id=0&generic_id=0&category_id=0&locale=fr_FR&device=desktop&pageType=homepage&country=FR&lang=fr&captchaVersion=v3&plate_selector_vof=&immatriculation="+process.argv[2])
.then(res => res.json())
.then(res => {
  // console.log(res);
  let libelle = res.vehicule[0].libelle
  console.log(libelle);
  let standardise = makeMarqueModelCv(libelle);
  console.log(standardise);
  console.log(searchModelInFileFs(standardise));
})