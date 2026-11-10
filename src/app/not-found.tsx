import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = {title: '404 | Puerta de Bisagra', robots: {index:false,follow:false}};
export default function NotFound(){return <main className="max-w-3xl mx-auto px-6 py-24"><h1 className="text-4xl font-bold">404 · Página no encontrada</h1><p className="my-6">La dirección no existe.</p><Link href="/es" className="text-blue-600 underline">Puerta de Bisagra</Link></main>}
