// import Image from "next/image";
import css from "./page.module.css";
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'NoteHub Home Page',
  description: 'NoteHub App Description',
  openGraph: {
    title: 'NoteHub Home Page',
    description:
     'NoteHub App Description',
    url: 'https://08-zustand-cyan.vercel.app/',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub card',
      },
    ],
  },
}
export default function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <div className={css.container}>
          <h1 className={css.title}>Welcome to NoteHub</h1>
          <p className={css.description}>
            NoteHub is a simple and efficient application designed for managing
            personal notes. It helps keep your thoughts organized and accessible
            in one place, whether you are at home or on the go.
          </p>
          <p className={css.description}>
            The app provides a clean interface for writing, editing, and browsing
            notes. With support for keyword search and structured organization,
            NoteHub offers a streamlined experience for anyone who values clarity
            and productivity.
          </p>
          {/* <Image
        src="https://picsum.photos/seed/picsum/300/300"
        alt="test"
        width={300}
        height={300}
          /> */}
        </div>
      </main>
      <footer className={css.footer}></footer>
    </div>
  );
}
