import express from "express";
import axios from "axios";
import 'dotenv/config';
const app = express();
const port = 3000;

const api_url = "http://www.thecocktaildb.com/api/json/v1/1/"

app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use(express.static('public'));

app.get("/", async (req, res) => {
    try{
        const result = await axios.get(api_url+"random.php");
        const cocktail = result.data.drinks[0];
        res.render("index.ejs", {drink: cocktail});
    }
    catch (error) {
        console.error(error);
        res.status(500);
    }
})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})