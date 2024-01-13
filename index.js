import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import dotenv from "dotenv"; // Tambahkan dotenv

dotenv.config(); // Load environment variables

const app = express();

app.use('/res', (req, res) => {
    res.send('Express Vercel App Response')
});

app.use(cors({
    origin: process.env.REACT_APP_FRONTEND_URL, // Gunakan environment variable
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use(express.json());
app.use(UserRoute);

const PORT = process.env.PORT || 3000; // Gunakan environment variable PORT jika tersedia
app.listen(PORT, () => console.log("Server up and running"));

export default app;
