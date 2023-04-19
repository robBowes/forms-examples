import z from 'zod';

export const formValidator = z.object({
	color: z.string().min(3).max(20)
});
