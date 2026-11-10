import type {MetadataRoute} from 'next';
import {nearby} from '@/data/nearby';
export default function sitemap():MetadataRoute.Sitemap{const base='https://www.puertadebisagra.com';return [...['es','en','fr','zh-Hant'].map(l=>({url:`${base}/${l}`})),...['historia-puerta-de-bisagra','como-llegar-puerta-de-bisagra','puerta-nueva-vs-puerta-antigua-bisagra',...nearby.map(p=>p.slug)].map(slug=>({url:`${base}/es/${slug}`}))]}
