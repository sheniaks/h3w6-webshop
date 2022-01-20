export default class ModelCards {
  URL_GAMES =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRX-T20ZlEv-pJVqwWgmTC89368BK6XhYIfKgqeTewfNLpKeWgVxcw0azcxTIwyKNLtuF-YjfX61bE-/pub?output=tsv";

  getData() {
    return fetch(this.URL_GAMES)
      .then((resp) => resp.text())
      .then(this.parseSheet);
  }

  parseSheet = tsv => {
    const d = tsv.split("\r\n").map((line) => line.split("\t"));
    const keys = d.shift();
    const data = d.map((arr) =>
      arr.reduce((obj, prop, i) => {
        obj[keys[i]] = prop;
        return obj;
      }, {})
    );
    this.data = data;
    console.log(data);
    return data;
  }

  getSortData(sortType){
    const sortVoc = { sort_price_up : 1, sort_price_dn : -1, sort_release_up : 1, sort_release_dn : -1, sort_age_up : 1, sort_age_dn: -1};
    const sortMulti = sortVoc[sortType];
    if (sortType === 'sort_price_up' || sortType ===  'sort_price_dn'){
      this.data.sort((a,b) =>  (a.price - b.price)*sortMulti);}
    if (sortType === 'sort_release_up' || sortType ===  'sort_release_dn'){
      this.data.sort((a,b) =>  (a.release - b.release)*sortMulti);}
    if (sortType === 'sort_age_up' || sortType ===  'sort_age_dn'){
      this.data.sort((a,b) =>  (a.age_rating - b.age_rating)*sortMulti);}
    if (sortType === 'sort_a_z'){
      this.data.sort((a,b) => a.name.localeCompare(b.name));}  
    if (sortType === 'sort_z_a'){
        this.data.sort((a,b) => b.name.localeCompare(a.name));}
    return this.data;
  }

  getFilterData(filterType){
    console.log(filterType);
    return filterType === "all"? this.data: this.data.filter(card => card.platforms.includes(filterType));
    // return this.data;
  }


  
}
