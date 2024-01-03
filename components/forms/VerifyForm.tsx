"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { verifySchema } from '@/lib/validations'
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

const VerifyForm = () => {
    // 1. Define your form.
  const form = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      input1: undefined,
      input2: undefined,
      input3: undefined,
      input4: undefined,
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof verifySchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className='flex justify-evenly'>
                <FormField
                control={form.control}
                name="input1"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input {...field} className='w-[86px] h-[80px] text-[25px] text-center' />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="input2"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input {...field} className='w-[86px] h-[80px] text-[25px] text-center' />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="input3"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input {...field} className='w-[86px] h-[80px] text-[25px] text-center' />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="input4"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input {...field} className='w-[86px] h-[80px] text-[25px] text-center' />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <p className='text-center'>00:30</p>
            <Button className='bg-primary-color text-white hover:text-black w-full rounded-[6px]' type="submit">CONTINUE</Button>
            <p className='text-center text-sm'>If you didn’t receive a code! <span className='text-[red] cursor-pointer'>Resend</span></p>
        </form>
    </Form>
  )
}

export default VerifyForm