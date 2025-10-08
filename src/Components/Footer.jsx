import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import Logo from '../assets/logo.png'

export default function Footer() {
    return (
        <section className="bg-gray-900 px-4 py-8 mt-6">
            <footer className="w-5/6 mx-auto space-y-3 text-white">
                <div className="flex justify-between gap-2">
                    <Link to='/' className="flex items-center justify-between font-bold gap-2">
                        <img src={Logo} alt="logo" className="h-7 w-auto" />
                        <span>HERO.IO</span>
                    </Link>
                    <span>
                        <h6>Social Links</h6>
                        <div className="flex gap-2 text-xl m-2">
                        <a target="_blank" href="https://www.twitter.com/"><FaXTwitter /></a>
                        <a target="_blank" href="https://www.linkedin.com/"><FaLinkedin /></a>
                        <a target="_blank" href="https://www.facebook.com/"><FaFacebook /></a>
                        </div>
                    </span>
                </div>
                <hr className="border-none h-[1.5px] bg-gray-600"/>
                <p className="text-sm text-gray-400 text-center">Copyright © 2025 - All right reserved</p>
            </footer>
        </section>
    )
}