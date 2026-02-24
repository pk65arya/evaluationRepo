
import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const port = 3000;
app.use(express.json());

interface User {
  id: number;
  name: string;
  email: string;
}

  interface Message {
    message: string;
  }

  let users: User[] = [];
  let idCounter = 1;

  app.post('/users', (req: Request, res: Response <User>) => {
    const { name, email } = req.body;
    const newUser: User = { id: idCounter++, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  });

    app.get('/users', (req: Request, res: Response<User[]>) => {
    res.json(users);
  });

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
