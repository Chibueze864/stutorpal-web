import * as z from "zod"

export const signUpSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(8, {message: "Password must be at least 8 characters."}),
  confirmPassword: z.string()
  // department: z.string(),
}).refine((data) => data.confirmPassword === data.password, {
  message: "Passwords do not match.",
})
export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string()
})
export const forgotPasswordSchema = z.object({
  email: z.string().email()
})
export const verifySchema = z.object({
  input1: z.number() || null,
  input2: z.number() || null,
  input3: z.number() || null,
  input4: z.number() || null,
})
export const resetPasswordSchema = z.object({
  password: z.string().min(8, {message: "Password must be at least 8 characters."}),
  confirmPassword: z.string()
}).refine((data) => data.confirmPassword === data.password, {
  message: "Passwords do not match.",
})