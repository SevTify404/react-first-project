import {z} from "zod";


export const loginSchemas = z.object(
    {
        username: z
            .string({message: "Le nom d'utilisateur doit être une chaîne de caractères."})
            .min(3, {message: "Le nom d'utilisateur doit comporter au moins 3 caractères."}),

        password: z
            .string()
            .min(6, {message: "Le mot de passe doit comporter au moins 6 caractères."}),

        expiresInMins: z
            .number({message: "Le durée de la connexion doit être un nombre."})
            .int({message: "Le durée de la connexion doit etre un entier"})
            .positive({message: "Le durée de la connexion doit être un nombre positif."}),
    },
    {
        message: "Les données de connexion sont invalides.",
    }
);


export const loginResponseSchemas = z.object(
    {
        id: z
            .number()
            .int(),

        username: z
            .string({message: "Le nom d'utilisateur doit être une chaîne de caractères."}),

        email: z
            .email({message: "Le email d'utilisateur doit être valide."}),

        firstName: z
            .string({message: "Le prénom doit être une chaîne de caractères."}),

        lastName: z
            .string({message: "Le nom de famille doit être une chaîne de caractères."}),

        gender: z
            .enum(['female', 'male']),

        image: z
            .httpUrl({message: "L'image doit être une chaîne de caractères."}),

        accessToken: z
            .string(),

        refreshToken: z
            .string(),
    }
);


export const refreshTokenResponseSchemas = z.object(
    {
        accessToken: z
            .string(),

        refreshToken: z
            .string(),
    }
);


const addressSchema = z.object({
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    stateCode: z.string().optional(),
    postalCode: z.string().optional(),
    coordinates: z.object({
        lat: z.number(),
        lng: z.number()
    }).optional(),
    country: z.string().optional()
});

const bankSchema = z.object({
    cardExpire: z.string().optional(),
    cardNumber: z.string().optional(),
    cardType: z.string().optional(),
    currency: z.string().optional(),
    iban: z.string().optional()
});

const companySchema = z.object({
    department: z.string().optional(),
    name: z.string().optional(),
    title: z.string().optional(),
    address: addressSchema.optional()
});

export const meResponseSchema = z.object({
    id: z.number().int(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.email(),
    username: z.string(),
    image: z.url(),
    role: z.enum(['admin', 'user', 'moderator']),
    gender: z.enum(['male', 'female']),
    phone: z.string(),
    address: addressSchema.optional(),
    bank: bankSchema.optional(),
    company: companySchema.optional()
}).strip(); // ignore tous les autres champs de la réponse


// types inférés pour typscripte clairement
export type LoginData = z.infer<typeof loginSchemas>;
export type LoginResponseData = z.infer<typeof loginResponseSchemas>;
export type RefreshTokenResponseData = z.infer<typeof refreshTokenResponseSchemas>;
export type MeResponse = z.infer<typeof meResponseSchema>;
