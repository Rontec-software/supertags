import { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default class UserController {
    constructor(readonly server: Express) {
        server.post('/users', this.createUser);
        server.get('/users', this.getUsers);
        server.get('/users/:id', this.getUser);
        server.put('/users/:id', this.updateUser);
        server.delete('/users/:id', this.deleteUser);
    }

    async createUser(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
        res.status(201).json(user);
    }

    async getUser(req: Request, res: Response) {
        const { id } = req.params;
        const user = await prisma.user.findUnique({ where: { id } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    }

    async getUsers(req: Request, res: Response) {
        const users = await prisma.user.findMany();
        if (!users) {
            return res.status(404).json({ error: 'No users were found' });
        }
        res.json(users);
    }

    async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
        const user = await prisma.user.update({
            where: { id },
            data: {
                name,
                email,
                ...(hashedPassword && { password: hashedPassword }),
            },
        });
        res.json(user);
    }

    async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        await prisma.user.delete({ where: { id } });
        res.status(204).send();
    }
}
