const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

app.use(cors());

// CRITICAL: This allows files up to 50MB
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// serve static files (html, css, js) from the current folder
app.use(express.static(__dirname));

// Initialize Database
pool.query(`
    CREATE TABLE IF NOT EXISTS settings (
        id TEXT PRIMARY KEY, 
        value TEXT
    )
`).then(() => {
    console.log("Database initialized.");
}).catch(err => {
    console.error('Database initialization error:', err);
});

// API: Save Settings
app.post('/api/save', async (req, res) => {
    const { id, value } = req.body;
    
    // Convert value to string if it's not already
    let valueStr;
    if (typeof value === 'string') {
        valueStr = value;
    } else {
        valueStr = JSON.stringify(value);
    }
    
    try {
        await pool.query(
            "INSERT INTO settings (id, value) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET value = $2",
            [id, valueStr]
        );
        res.json({ status: 'success' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// API: Load Settings
app.get('/api/load/:id', async (req, res) => {
    // Special test endpoint to check if server is available
    if (req.params.id === 'test') {
        return res.json({ status: 'ok' });
    }
    
    try {
        const result = await pool.query("SELECT value FROM settings WHERE id = $1", [req.params.id]);
        
        if (result.rows.length === 0) {
            return res.json(null);
        }
        
        const row = result.rows[0];
        
        // Check if the value is a base64 image (starts with data:image)
        if (row.value && row.value.startsWith('data:image')) {
            // Return the base64 string directly (don't try to parse as JSON)
            return res.json(row.value);
        }
        
        // For other values, try to parse as JSON
        try {
            const parsed = JSON.parse(row.value);
            res.json(parsed);
        } catch (e) {
            // If parsing fails, return the raw string
            res.json(row.value);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});