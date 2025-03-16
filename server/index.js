const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.get('/api/data', (req, res) => {
    res.json({
        message: "Welcome to Playful Solutions API!",
        services: ["Consulting", "Product Development", "Strategy"],
        contact: "contact@playfulsolutions.com"
    });
});

app.get('/api/services', (req, res) => {
    res.json([
        { id: 1, name: "Consulting", description: "Helping businesses innovate." },
        { id: 2, name: "Product Development", description: "Creating scalable solutions." },
        { id: 3, name: "Strategy", description: "Guiding growth with expert insights." }
    ]);
});

app.get('/api/projects', (req, res) => {
    res.json([
        { id: 1, title: "ImpactXP", description: "A nonprofit engagement platform." },
        { id: 2, title: "Peace Love Quest", description: "Empowering communities through gamification." }
    ]);
});

app.get('/api/team', (req, res) => {
    res.json([
        { id: 1, name: "John Doe", role: "CEO & Founder" },
        { id: 2, name: "Jane Smith", role: "Lead Developer" }
    ]);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


