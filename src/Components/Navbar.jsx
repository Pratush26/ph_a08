import { Link } from "react-router";
import Logo from '../assets/logo.png'

export default function NavBar() {
    return (
        <header className="bg-white shadow shadow-gray-300 text-sm font-semibold">
            <nav className="flex items-center justify-between gap-2 w-11/12 mx-auto px-2 py-4">
                <Link to='/' className="flex items-center justify-center gap-2"><img src={Logo} alt="Logo" className="h-8 w-auto" /><span className="text-purple-800 font-bold">HERO.IO</span></Link>
                <span className="space-x-4">
                    <Link to='/'>Home</Link>
                    <Link to='/'>Apps</Link>
                    <Link to='/'>Installation</Link>
                </span>
                <button className="-bg-linear-45 from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-sm">Contribute</button>
            </nav>
        </header>
    )
}