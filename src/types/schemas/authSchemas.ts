import { z } from "zod";


const loginSchemas = z.object(
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
      .default(60),
  },
  {
    message: "Les données de connexion sont invalides.",
  }
);



const loginResponseSchemas = z.object(
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


const refreshTokenResponseSchemas = z.object(
  {
    accessToken: z
      .string(),
     
    refreshToken: z
      .string(),
  }
);


// types inférés pour typscripte clairement
export type LoginData = z.infer<typeof loginSchemas>;
export type LoginResponseData = z.infer<typeof loginResponseSchemas>;
export type RefreshTokenResponseData = z.infer<typeof refreshTokenResponseSchemas>;