const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const db = new sqlite3.Database('./slotmachine.db');

app.use(cors());

// CRITICAL: This allows files up to 50MB
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// serve static files (html, css, js) from the current folder
app.use(express.static(__dirname));

// Initialize Database
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS settings (id TEXT PRIMARY KEY, value TEXT)");
    console.log("Database initialized.");
});

// API: Save Settings
app.post('/api/save', (req, res) => {
    const { id, value } = req.body;
    
    // Convert value to string if it's not already
    let valueStr;
    if (typeof value === 'string') {
        valueStr = value;
    } else {
        valueStr = JSON.stringify(value);
    }
    
    db.run("INSERT OR REPLACE INTO settings (id, value) VALUES (?, ?)", [id, valueStr], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ status: 'success' });
    });
});

// API: Load Settings
app.get('/api/load/:id', (req, res) => {
    // Special test endpoint to check if server is available
    if (req.params.id === 'test') {
        return res.json({ status: 'ok' });
    }
    
    db.get("SELECT value FROM settings WHERE id = ?", [req.params.id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        
        if (!row) {
            return res.json(null);
        }
        
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
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
