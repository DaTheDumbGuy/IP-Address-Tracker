import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';
dotenv.config();

const app = express();
const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

app.use(cors({
    origin: ["https://your-client-app.vercel.app"]// Allow specific origins
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
    res.send("Express on Vercel");
})

app.get('/api/geolocation', async (req, res) => {
    try {
        // Extract ipAddress or domain from query parameter
        const { ipAddress } = req.query;
        const ip = ipAddress || req.headers['x-forwarded-for'] || req.ip;

        const response = await axios.get(API_URL, {
            params: { apiKey: API_KEY, ipAddress: ip },
        });

        res.status(200).json(response.data);
        // res.status(200).json(sampleData);
    } catch (error) {
        // Handle axios errors
        if (error.response) {
            // API responded with a status code outside the 2xx range
            res.status(error.response.status).json({
                message: 'Error from external API',
                error: error.response.data,
            });
        } else if (error.request) {
            // Request was made but no response received
            res.status(500).json({
                message: 'No response from external API',
                error: error.request,
            });
        } else {
            // Something else happened
            res.status(500).json({
                message: 'Error making the request',
                error: error.message,
            });
        }
    }
})

app.listen(8080, () => {
    console.log('Server running on http://localhost:', 8080);
});





export default app;
