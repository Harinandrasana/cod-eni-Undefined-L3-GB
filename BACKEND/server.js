const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Connexion à la base de données MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'citizenconnect'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Fonction d'inscription
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Hachage du mot de passe
  const hashedPassword = await bcrypt.hash(password, 10);

  // Requête SQL pour insérer un nouvel utilisateur
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).json({ message: 'Error creating user' });
      return;
    }

    res.status(201).json({ message: 'User created successfully' });
  });
});

// Fonction de connexion
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Vérification de l'utilisateur dans la base de données
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], async (err, result) => {
    if (err) {
      console.error('Error selecting user:', err);
      res.status(500).json({ message: 'Error logging in' });
      return;
    }

    if (result.length === 0) {
      res.status(401).json({ message: 'Invalid username or password' });
      return;
    }

    const user = result[0];

    // Comparaison du mot de passe haché
    const validPassword = await bcrypt.compare(password, user.password);     
    if (!validPassword) {
      res.status(401).json({ message: 'Invalid username or password' });
      return;
    }

    // Création d'un jeton de session
    const token = jwt.sign({ user_id: user.user_id }, 'secretKey');

    // Création d'une nouvelle session dans la base de données
    const sql = 'INSERT INTO sessions (user_id, token, expires_at) VALUES (?, ?, ?)';
    db.query(sql, [user.user_id, token, new Date().getTime() + 3600000], (err) => {
      if (err) {
        console.error('Error creating session:', err);
        res.status(500).json({ message: 'Error logging in' });
        return;
      }

      res.status(200).json({ token: token });
    });
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
