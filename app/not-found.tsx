'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import css from './not-found.module.css';
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: 'Сторінку не знайдено — NoteHub',
  description: 'На жаль, сторінка, яку ви шукаєте, не існує.',
  openGraph: {
    title: 'Сторінку не знайдено — NoteHub',
    description: 'Ця сторінка не існує. Спробуйте іншу адресу.',
    url: 'https://08-zustand-cyan.vercel.app',
    images: [
      {
      url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
      width: 1200,
      height: 630,
      
      }

      ],
  },
};

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/'), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className={css.container}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" className={css.homeLink}>
        Go back home
      </Link>
    </main>
  );
};

export default NotFound;
