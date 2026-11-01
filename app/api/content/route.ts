import {env} from 'cloudflare:workers';
import {getAdmin} from '../../admin-auth';
import {initial} from '../../data';
export async function GET(){const obj=await env.BUCKET?.get('studio-content');return Response.json(obj?await obj.json():initial);}
export async function PUT(req:Request){if(!await getAdmin())return new Response('Unauthorized',{status:401});if(req.headers.get('origin')!==new URL(req.url).origin)return new Response('Forbidden',{status:403});const d=await req.json();if(typeof d.name!=='string'||typeof d.phone!=='string'||!Array.isArray(d.packages)||!Array.isArray(d.gallery)||d.gallery.some((g:any)=>!/^\/images\/|^\/media\/|^https:\/\//.test(g.url)))return new Response('Invalid content',{status:400});if(!env.BUCKET)return new Response('Storage unavailable',{status:503});await env.BUCKET.put('studio-content',JSON.stringify(d));return Response.json({ok:true});}
