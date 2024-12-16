import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = 8080;
const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

const sampleData = {
    ip: "112.198.132.243",
    location: {
        country: "PH",
        region: "Mimaropa",
        city: "Paluan",
        lat: 13.416,
        lng: 120.4623,
        postalCode: "",
        timezone: "+08:00",
        geonameId: 1695982
    },
    as: {
        asn: 132199,
        name: "GLOBE-MOBILE-5TH-GEN-AS",
        route: "112.198.128.0/21",
        domain: "globe.com.ph",
        type: ""
    },
    isp: "Globe Telecom"

}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/geolocation', async (req, res) => {
    try {
        // Extract ipAddress or domain from query parameter
        // const { ipAddress } = req.query;
        // const ip = ipAddress || req.ip;
        // const ip = ipAddress || req.headers['x-forwarded-for'];

        // const response = await axios.get(API_URL, {
        //     params: { apiKey: API_KEY, ipAddress: ip },
        // });

        // res.status(200).json(response.data);
        res.status(200).json(sampleData);
    } catch (error) {
        // // console.error('Error fetching geolocation:', error.message);
        // Handle axios errors
        // if (error.response) {
        //     // API responded with a status code outside the 2xx range
        //     res.status(error.response.status).json({
        //         message: 'Error from external API',
        //         error: error.response.data,
        //     });
        // } else if (error.request) {
        //     // Request was made but no response received
        //     res.status(500).json({
        //         message: 'No response from external API',
        //         error: error.request,
        //     });
        // } else {
        //     // Something else happened
        //     res.status(500).json({
        //         message: 'Error making the request',
        //         error: error.message,
        //     });
        // }
        //  Something else happened
        res.status(500).json({
            message: 'Error making the request',
            error: error.message,
        });
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
