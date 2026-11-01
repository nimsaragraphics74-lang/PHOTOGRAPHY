import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'Nimzara — Photography & Studio',description:'Capture. Create. Cherish. Discover Nimzara Photography & Studio and thoughtfully crafted photography packages.'};export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
