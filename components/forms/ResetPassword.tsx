"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { resetPasswordSchema } from '@/lib/validations'
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const ResetPasswordForm = () => {
    // 1. Define your form.
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
        password: "",
        confirmPassword: ""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Enter new password</FormLabel>
                <FormControl>
                    <Input {...field}/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                    <Input {...field}/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button className='bg-primary-color text-white hover:text-black w-full rounded-[6px]' type="submit">UPDATE PASSWORD</Button>
        </form>
    </Form>
  )
}

export default ResetPasswordForm