/*const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express() ;  
 app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'daypilot'})

app.get('login',(req,res)=>{
    const sql="SELECT * FROM users";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);})


})
app.get('/signin',(req,res)=>{
    const sql="SELECT * FROM users";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);})


})

app.get('/',(re,res)=>{
    return res.json("From backendside");})
app.post('/create',(req,res)=>{})
app.listen(8081,()=>{
    console.log("Server is running on port 8081");
})*/
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'daypilot'
});

// Signup (Register) Route
app.post('/signin', (req, res) => {
    const { Username, PasswordHash } = req.body;

    if (!Username || !PasswordHash) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Check if username already exists
    const checkUserQuery = 'SELECT * FROM users WHERE Username = ?';
    db.query(checkUserQuery, [Username], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.length > 0) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Insert user into database
        const insertQuery = 'INSERT INTO users (Username, PasswordHash) VALUES (?, ?)';
        db.query(insertQuery, [Username, PasswordHash], (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Error inserting user' });
            }
            return res.status(200).json({ success: true, message: 'Signup successful' });
        });
    });
});

// Login Route
app.post('/login', (req, res) => {
    const { Username, PasswordHash } = req.body;

    if (!Username || !PasswordHash) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    const sql = 'SELECT * FROM users WHERE Username = ? AND PasswordHash = ?';
    db.query(sql, [Username, PasswordHash], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.length > 0) {
            return res.status(200).json({ success: true, message: 'Login successful' });
        } else {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});
/*app.post('/signin', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    const checkUserQuery = 'SELECT * FROM users WHERE username = ?';
    db.query(checkUserQuery, [username], (err, result) => {
        if (err) {
            console.error("Database error during username check:", err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.length > 0) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Insert user into database
        const insertQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.query(insertQuery, [username, password], (err, data) => {
            if (err) {
                console.error("Error inserting user:", err); // Log the error
                return res.status(500).json({ error: 'Error inserting user' });
            }
            return res.status(200).json({ success: true, message: 'Signup successful' });
        });
    });
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error("Database error during login:", err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (result.length > 0) {
            return res.status(200).json({ success: true, message: 'Login successful' });
        } else {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});*/



    db.connect((err) => {
        if (err) {
            console.error("Database connection failed:", err);
            return;
        }
        console.log("Connected to MySQL database");
    });
    


// Test Route
app.get('/', (req, res) => {
    return res.json("From backend side");
});

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
