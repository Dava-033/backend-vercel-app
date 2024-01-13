import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

app.use('/res', (req, res) => {
        res.send('Expresss Vercel App Response')
});

app.use(cors({
    origin: 'http://localhost:3001', // Sesuaikan dengan origin React Anda
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use(express.json());
app.use(UserRoute);

const PORT = 3000;
app.listen(PORT, ()=> 
console.log("Server up and running"));

export default app;
