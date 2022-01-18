export default class ModelCards {
    URL_SHEET = 'https://docs.google.com/spreadsheets/d/1Wc-F9Qa3a2giE4cVbbJgTaTQAdaHVX7kdCujcG0_ppY/pub?output=tsv';

    getData() {
        return fetch(this.URL_SHEET)
                .then(response => response.text())
                .then(data => this.parseSheet(data));
    }

    parseSheet(tsv) {
        const d = tsv.split('\r\n').map(line => line.split('\t'));
        const keys = d.shift();
        const data = d.map(arr => arr.reduce((obj, prop, i) => {
            obj[keys[i]] = prop;
            return obj;
        }, {}));
        return data;
    }
}