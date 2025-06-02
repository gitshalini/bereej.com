'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { WorldMapDemo } from './map';
import LottieAnimation from '@/components/layout/lottie';
import animationData from '@/public/lottie/contact.json';

type Address = {
  country: string;
  city: string;
  areaTitle: string;
  area: string;
  email: string;
  phone: string;
  mapQuery: string;
};

const addresses: Address[] = [
  {
    country: 'India',
    city: 'Pune',
    areaTitle: 'Area',
    area: 'Kothrud',
    email: 'dorpely@bereej.com',
    phone: '+91 9922 783337',
    mapQuery: 'https://www.google.com/maps/place/...India/',
  },
  {
    country: 'Malaysia',
    city: 'Kuala Lumpur',
    areaTitle: 'Street',
    area: 'Jalan 112',
    email: 'doreply@bereej.com',
    phone: '+60 11 3665 3580',
    mapQuery: 'https://www.google.com/maps/place/...Malaysia/',
  },
];

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().optional(),
  message: z.string().min(5, { message: 'Message must be at least 5 characters.' }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const res = await fetch(
        'https://0uamtrqsvb.execute-api.ap-south-1.amazonaws.com/prod/clouder/mail/sendEmailCloudshot',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
          }),
        }
      );

      if (res.ok) {
        toast.success('Message sent successfully! We’ll get back to you soon.');
        form.reset();
        setIsSubmitted(true);
      } else {
        const errorText = await res.text();
        toast.error(errorText || 'Something went wrong. Please try again later.');
      }
    } catch (err: unknown) {
      const error = err as Error;
      toast.error(error?.message || 'Something went wrong. Please try again later.');
    }

    setIsSubmitting(false);
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative flex items-center min-h-[70vh] sm:min-h-screen bg-gradient-to-br from-indigo-800 via-purple-700 to-indigo-900 pt-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: 'url("/images/Home_Bg.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get a Quote
          </motion.h1>
        </div>
        <BackgroundBeams />
      </div>

      {/* Contact Form Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50 to-white">
        <div className='max-w-6xl mx-auto '>
          <h2 className="text-3xl font-bold mb-4 text-purple-900 text-center">Let’s discuss your project</h2>
          <p className="text-muted-foreground text-base text-center mb-12">
            Our dedicated team of IT experts is committed to understanding your unique requirements and crafting tailored solutions that align with your business objectives.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <LottieAnimation animationData={animationData} width={"w-full"} />
            </div>

            {/* Form */}
            {isSubmitted ? (
              <div className="text-center p-8 rounded-lg bg-purple-800 text-white shadow-lg">
                <h2 className="text-xl font-bold mb-2">Thank you for reaching out!</h2>
                <p className="text-purple-200">We’ll get back to you soon.</p>
              </div>
            ) : (
              <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 border border-purple-100">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please tell us about your project and requirements"
                              className="min-h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full py-3 text-base bg-purple-700 hover:bg-purple-800 text-white" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : <>Send Message <ArrowRight className="ml-2 h-4 w-4" /></>}
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </section>

      <WorldMapDemo />

      {/* Address Section */}
      <div className="p-10 w-full text-center">
        <div className="space-y-8 max-w-5xl mx-auto">
          {addresses.map((address, index) => (
            <div key={index} className="flex flex-col md:flex-row border-b border-gray-200 pb-6">
              <div className="w-full md:w-1/3 mb-2 md:mb-0">
                <p className="text-xl font-semibold text-purple-900">{address.country}</p>
                <a
                  href={address.mapQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View Location
                </a>
              </div>
              <div className="w-full md:w-1/3 mb-2 md:mb-0 text-gray-600">
                <p>City: {address.city}</p>
                <p>{address.areaTitle}: {address.area}</p>
              </div>
              <div className="w-full md:w-1/3 space-y-1 text-gray-700">
                <div className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" /> {address.phone}
                </div>
                <div className="flex items-center text-gray-600 justify-center">
                  <Mail className="h-5 w-5 mr-2" /> {address.email}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
