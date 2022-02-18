
// import modules
const express = require('express');

// instantiate express
const app = express();

// use ejs
app.set("view engine", "ejs");

// create routes
app.get("/", (req, res) => {

    // build an obj with some qualities
    const items = [
        {
            "title": "D",
            "message": "esenvolver Aplicações/Serviços de forma fácil."
        },
        {
            "title": "E",
            "message": "JS usa Javascript para renderizar HTML."
        },
        {
            "title": "M",
            "message": "uito fácil de usar."
        },
        {
            "title": "A",
            "message": "morzinho!"
        },
        {
            "title": "I",
            "message": "nstale EJS em seus projetos :)"
        },
        {
            "title": "S",
            "message": "intaxe simples."
        }
    ];

    // build a const with a subtitle
    const subTitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando Javascript."

    res.render("./pages/index", {
        qualities: items,
        subTitle
    });
})

app.get("/sobre", (req, res) => {
    res.render("./pages/about");
})

// run on port 8080
app.listen(8080, () => {
    console.log("listening on port 8080");
});