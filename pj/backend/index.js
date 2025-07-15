const express  = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;
const User = require('./models/user')

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))


app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.post('/register', async (req, res) => {
    const payload = await req.body;
    console.log('Payload:', payload);

    const { name, email, password } = payload;
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    if (!name || !email || !password) {
        console.log('All fields are required');
        return res.status(409).json({ message: "All fields are required" });
    }

    const exist = await User.findOne({ email });
    console.log(exist)
    if (exist) {
        console.log('User already exists');
        return res.status(405).json({ message: "User already exists" });
    } else {
        // await the password hashing
        const user = new User({
            name,
            email,
            password
        });
        user.save();
        console.log('User created');

        return res.status(201).json({ message: "User created" });
    }
})

app.post('/login', async (req, res) => {

    try {
        console.log('Request body:', req.body);
        const payload = req.body;
        const { email, password } = payload;

        if (!email || !password) {
            console.log('All fields are required');
            return res.status(409).json({ message: "All fields are required" });
        }

        console.log('Finding user with email:', email);
        const user = await User.findOne({ email });

        if (!user) {
            console.log('User does not exist');
            return res.status(404).json({ message: "User does not exist" });
        }

        console.log('Matching passwords');
        
        if (password!=user.password) {
            console.log('Incorrect password');
            return res.status(409).json({ message: "Incorrect password" });
        }

        console.log('Sending user response');
        return res.status(200).json({ message: "Login successful", user });

    } catch (error) {
        console.log('Error occurred during login:', error);
        return res.status(500).json({ message: "Internal server error" });
    }

})




mongoose.connect('mongodb://127.0.0.1:27017/asdfghjkl')
        .then(() => {
            console.log('db connected')
        })
        .catch((err) => {
            console.log(err);
        })


app.listen(5000,()=>{
    console.log('listining on port 5000')
})