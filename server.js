const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Node.js App running with PM2!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

