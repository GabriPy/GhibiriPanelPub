const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root_33',
    database: 'ghibiri'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connesso al database');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    
    db.query(query, [username, password], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.length > 0) {
            res.cookie('user', username, { maxAge: 900000, httpOnly: true });
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    });
});

app.post('/register', (req, res) => {
    if (!req.cookies.user) {
        return res.status(401).send('Non autorizzato');
    }

    const { username, password } = req.body;
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    
    db.query(query, [username, password], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ success: true });
    });
});

app.get('/dashboard', (req, res) => {
    if (!req.cookies.user) {
        return res.redirect('/');
    }
    res.sendFile(__dirname + '/dashboard.html');
});

app.get('/logout', (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
});
