import link from "next/link";

export default function Navbar() {
    return (
    <nav>
        <ul className='flex items-center justify-center bg-slate-800,/45 text-gray-100 py-1 px-16 text-2xl shadow-2xl space-x-6'>
            <li>
                <link href={'/'}>Home</link>
            </li>
                    
            <li>
                <link href={'/about'}>About</link>  
            </li>
            <li>
                <link href={'/contact'}>Contact</link>
            </li>

</ul>
    </nav>
    )
}