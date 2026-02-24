import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());
let users = [];
let idCounter = 1;
app.post('/users', (req, res) => {
    console.log('Received user data:', req.body);
    const { name, email } = req.body;
    const newUser = { id: idCounter++, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});
app.get('/users', (req, res) => {
    res.json(users);
});
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map