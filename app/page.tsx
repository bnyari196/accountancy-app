import Image from "next/image";
import Link from 'next/link'
import Button from './components/ Button';

export default function Home() {
  return (
   <main>
    <h1 className ='p-5 bg-sky-400'>Hello Joe mama</h1>
    <Link href="/users">Users</Link>
    <Button />
  </main>
  );
}
