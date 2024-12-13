import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = 8080;
const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/geolocation', async (req, res) => {
    try {
        const response = await axios.get(API_URL, {
            params: { apiKey: API_KEY }, // Pass query parameters
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching geolocation:', error.message);
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

app.listen(PORT, () => {
    console.log('Server running on http://localhost:', PORT);
});











////Testing
// const data = { id: 1, name: "Daryl" }
// const posts = [
//     { id: 1, title: "Title 1" },
//     { id: 2, title: "Title 2" },
//     { id: 3, title: "Title 3" }
// ]
// app.get('/api/posts', (req, res) => {
//     res.json(posts);
// })
// app.get('/api/test', (req, res) => {
//     res.json(data);
// })
