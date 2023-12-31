const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.resolve(__dirname, './public')))

const port = process.env.PORT || 3001
app.listen(3001, function() {
    console.log(`Servidor corriendo en el puerto ${port}`);
}); 

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/registro.html"));
});
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
app.post("/register", (req, res) => {
    res.redirect("/")
})
app.post("/login", (req, res) => {
    res.redirect("/")
})
app.post("/", (req, res) => {
    res.redirect("/")
})
