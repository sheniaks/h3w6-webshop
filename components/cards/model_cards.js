export default class ModelCards {
    URL_SHEET = 'https://docs.google.com/spreadsheets/d/1Wc-F9Qa3a2giE4cVbbJgTaTQAdaHVX7kdCujcG0_ppY/pub?output=tsv';

    getData() {
        return fetch(this.URL_SHEET)
                .then(response => response.text())
                .then(this.parseSheet);
    }

    parseSheet = tsv => {
        const d = tsv.split('\r\n').map(line => line.split('\t'));
        const keys = d.shift();
        const data = d.map(arr => arr.reduce((obj, prop, i) => {
            obj[keys[i]] = prop;
            return obj;
        }, {}));
        this.data = data;
        return data;
    }

    getSortData(sortType){
        const sortVoc = { sort_price_up : 1, sort_price_dn : -1,
                          sort_release_up : 1, sort_release_dn : -1,
                          sort_age_up : 1, sort_age_dn: -1};
        const sortMulti = sortVoc[sortType];
        if (sortType === 'sort_price_up' || sortType === 'sort_price_dn'){
            this.data.sort((a,b) =>  (a.price - b.price)*sortMulti);}
        if (sortType === 'sort_release_up' || sortType === 'sort_release_dn'){
            this.data.sort((a,b) =>  (a.release - b.release)*sortMulti);}
        if (sortType === 'sort_age_up' || sortType === 'sort_age_dn'){
            this.data.sort((a,b) =>  (a.age_rating - b.age_rating)*sortMulti);}
        return this.data;
    }
}