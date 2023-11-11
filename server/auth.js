const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('./models/user');





router.post('/register', async (req, res) => {
    const { username, email, password,  } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Gebruiker bestaat al' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, email, password: hashedPassword, salt });
        await newUser.save();

        console.log(newUser)

        const token = jwt.sign({ userId: newUser._id }, 'geheimesleutel', {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Serverfout tijdens registratie' });
    }
});





  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Ongeldige inloggegevens' })
        }

        console.log('Ingevoerd wachtwoord:', password);
        console.log('Opgeslagen wachtwoord:', user.password);

        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log('Resultaat van bcrypt.compare:', passwordMatch);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Ongeldige inloggegevens' });
        }

        const token = jwt.sign({ userId: user._id }, 'geheimesleutel', {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Serverfout tijdens inloggen' });
    }
})



module.exports = router;
