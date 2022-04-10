import express from "express";
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import userController from "./controllers/user-controller.js";
import mongoose from "mongoose";
mongoose.connect('mongodb+srv://root:toor@cluster0.7yrvx.mongodb.net/webdev?retryWrites=true&w=majority');

const app = express();
app.use(cors());
app.use(express.json());

// app.get('/hello', (req, res) => {
//     res.send('Life is not so good ryt now!')
// });

helloController(app);
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);