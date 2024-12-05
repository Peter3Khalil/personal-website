import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SOCIAL_LINKS } from '@/constants/data';
import { cn } from '@/lib/utils';
import React, { FC, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const INPUTS: React.HTMLProps<HTMLInputElement>[] = [
  {
    placeholder: 'Your Name',
    required: true,
    minLength: 3,
    name: 'name',
  },
  {
    placeholder: 'Your Email',
    type: 'email',
    name: 'email',
    required: true,
  },
];
const Contact: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          form.current?.reset();
          alert('SUCCESS!');
        },
        (error) => {
          alert(`FAILED...: ${error.text}`);
        },
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className={cn('container dark:bg-accent/50', className)} {...props}>
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 *:flex-1 md:flex-row md:items-center lg:gap-x-24">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          {INPUTS.map((input, index) => (
            <Input
              className="bg-transparent dark:border-muted-foreground/30"
              key={index}
              {...input}
            />
          ))}
          <Textarea
            placeholder="How can I help you?"
            required
            className="max-h-52 min-h-40 bg-transparent dark:border-muted-foreground/30"
            minLength={10}
            name="message"
          />
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <Button disabled={isLoading} className="md:flex-1">
              {isLoading ? 'Sending...' : 'Get in Touch'}
            </Button>
            <ul className="flex flex-wrap items-center gap-4">
              {SOCIAL_LINKS.map(({ href, title, icon: Icon }, index) => (
                <li
                  key={index}
                  className="group size-8 rounded border-2 border-foreground duration-200 hover:bg-foreground"
                >
                  <a
                    href={href}
                    target="_blank"
                    title={title}
                    className="block size-full p-1"
                    rel="noreferrer"
                  >
                    <Icon className="fill-foreground group-hover:fill-background" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </form>
        <div className="space-y-5">
          <h4 className="section-title">
            Let&apos;s{' '}
            <span className="text-stroke tracking-tighter">talk</span> for{' '}
            <br /> Something special
          </h4>
          <p className="text-muted-foreground">
            I seek to push the limits of creativity to create{' '}
            <b>high-engaging</b>,<b>user-friendly</b>, and{' '}
            <b>memorable interactive experiences</b>.
          </p>
          <span className="block font-semibold">
            peter.khalil.fahmy@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
