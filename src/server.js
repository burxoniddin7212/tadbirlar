import express from "express";
import { PORT } from "./config.js";
import router from "./modules/index.js"
import { cheektoken } from "./middilweire/cheektoken.js";
import path from "path";


const app = express();

app.use(express.static(path.join(process.cwd(), 'uploades')));
app.use(express.json());
app.use(cheektoken, router);



app.listen(PORT, () => console.log("server ready http://localhost:9000"))