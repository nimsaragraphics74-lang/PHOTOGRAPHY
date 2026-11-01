import {env} from 'cloudflare:workers';
export async function GET(_:Request,{params}:{params:Promise<{key:string}>}){const {key}=await params;const o=await env.BUCKET?.get(key);return o?new Response(o.body,{headers:{'Content-Type':o.httpMetadata?.contentType||'image/jpeg','Cache-Control':'public,max-age=86400'}}):new Response('Not found',{status:404});}
