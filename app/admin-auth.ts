import { env } from 'cloudflare:workers';
import { getChatGPTUser } from './chatgpt-auth';
import { ownerMatches } from './access.mjs';
export async function getAdmin(){const user=await getChatGPTUser();return ownerMatches(user,env.ADMIN_EMAIL)?user:null;}
