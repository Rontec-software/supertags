import { z } from 'zod';

export const createUserSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email format"),
        password: z.string().min(6, "Password must be at least 6 characters long")
    })
});

export const updateUserSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required").optional(),
        email: z.string().email("Invalid email format").optional(),
        password: z.string().min(6, "Password must be at least 6 characters long").optional()
    }),
    params: z.object({
        id: z.string().uuid("Invalid user ID")
    })
});

export const getUserSchema = z.object({
    params: z.object({
        id: z.string().uuid("Invalid user ID")
    })
});

export const deleteUserSchema = z.object({
    params: z.object({
        id: z.string().uuid("Invalid user ID")
    })
});
