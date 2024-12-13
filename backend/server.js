import express from 'express';
const app = express();
const PORT = 8080;

app.get('/api/test', (req, res) => {
    const data = { id: 1, name: "daryl" }
    res.json(data);
})
app.get('/api/geolocation', (req, res) => {

})

app.listen(PORT, () => {
    console.log('Server running on http://localhost:', PORT);
}); 
