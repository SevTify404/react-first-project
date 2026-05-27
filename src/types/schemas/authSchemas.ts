import { z } from "zod";


export const loginSchemas = z.object(
  {
    username: z
      .string({ message: "Le nom d'utilisateur doit être une chaîne de caractères." })
      .min(3, { message: "Le nom d'utilisateur doit comporter au moins 3 caractères." }),

    password: z
      .string()
      .min(6, { message: "Le mot de passe doit comporter au moins 6 caractères." }),

    expiresInMins: z
      .number({ message: "Le durée de la connexion doit être un nombre." })
      .int({ message: "Le durée de la connexion doit etre un entier" })
      .positive({ message: "Le durée de la connexion doit être un nombre positif." }),
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
      .string({ message: "Le nom d'utilisateur doit être une chaîne de caractères." }),

    email: z  
      .email({ message: "Le email d'utilisateur doit être valide." }),

    firstName: z
      .string({ message: "Le prénom doit être une chaîne de caractères." }),

    lastName: z
      .string({ message: "Le nom de famille doit être une chaîne de caractères." }),

    gender: z
      .enum(['female', 'male']),

    image: z
      .httpUrl({ message: "L'image doit être une chaîne de caractères." }),

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


export const meResponseSchema = z.object({
  id: z.number().int(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  username: z.string(),
  image: z.string().url(),
  role: z.enum(['admin', 'user', 'moderator']),
}).strip(); // ignore tous les autres champs de la réponse




// types inférés pour typscripte clairement
export type LoginData = z.infer<typeof loginSchemas>;
export type LoginResponseData = z.infer<typeof loginResponseSchemas>;
export type RefreshTokenResponseData = z.infer<typeof refreshTokenResponseSchemas>;
export type MeResponse = z.infer<typeof meResponseSchema>;
