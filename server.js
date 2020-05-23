const express = require('express');
const app = express();
const d = require('./cities');
app.use(express.static('public'));
const port =process.env.PORT || 3000;
app.listen(port, (e) => {
    console.log('server started' + port);
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