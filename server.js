const express = require('express');
const app = express();
const port = 5000;
const request = require('request');
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get("/api/random/urls", async (req, res) => {
    const url = "https://random.dog/woof.json";
    const options = {
        method: "GET"
    };
    const loadPicsCountMax = 8;
    let urls = [];
    let count = 0;
    while (count < loadPicsCountMax) {
        const response = await fetch(url, options);
        const data = await response.json();
        const body = JSON.parse(JSON.stringify(data));
        const randomUrl = body.url;
        if (randomUrl.toLowerCase().indexOf(".jpg") !== -1 || randomUrl.toLowerCase().indexOf(".png") !== -1) {
            urls.push(randomUrl);
            count++;
        }
    }
    res.send(urls);
});

app.get("/api/random/url", (req, res) => {
   request("https://random.dog/woof.json", function(err, data){
      res.send(JSON.parse(data.body));
  });
});

app.listen(port, () => console.log(`Application listening on port ${port}`));