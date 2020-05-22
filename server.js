const express = require('express');
const app = express();
const d = require('./cities');
app.use(express.static('public'));
app.listen(3000, (e) => {
    console.log('server started');
});
app.use(express.json());
app.post('/', (req, res) => {
    let a = [], c = 0, e = req.body.data;
    for (let i = 0; i < d.cities.length; i++) {
        if (d.cities[i].name.slice(0, e.length).toLocaleLowerCase() == e.toLocaleLowerCase() && c < 6) {
            a[c] = d.cities[i];
            c++;
        }
        else if (c >= 5) break;
    }
    res.json(a);
})