import { Link, useLoaderData, useNavigation } from "react-router";
import HeroImg from '../assets/hero.png'
import GooglePlay from '../assets/google-play.svg';
import AppStore from '../assets/app-store.svg'
import IconDownload from '../assets/icon-downloads.png';
import IconRatings from '../assets/icon-ratings.png';
import { ValueStringifier } from "../utility/Functions";
import AppsCard from "../Components/AppsCard";

export default function HomePage() {
    const { data } = useLoaderData()
    const { state } = useNavigation()
    if (state === 'loading') return <div className="flex items-center justify-center min-h-screen"><span className="loading loading-spinner loading-lg"></span></div>
    return (
        <main>
            <section className="flex flex-col items-center justify-center text-center gap-4 text-gray-700 min-h-[70vh] w-11/12 mx-auto">
                <h1 className="font-bold text-5xl">We Build</h1>
                <h2 className="font-bold text-5xl"><span className="bg-gradient-to-l from-purple-500 to-violet-500 bg-clip-text text-transparent font-extrabold text-5xl sm:text-6xl">Productive</span> Apps</h2>
                <p className="text-gray-500">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="flex gap-3">
                    <a href="https://play.google.com/store/search?q=programming+hero&c=apps&hl=en_US" target="_blank" className="px-6 py-3 rounded-sm bg-white text-sm font-semibold flex items-center justify-between gap-2 hover:bg-gray-50 hover:shadow-md/50 shadow-gray-400 transition-all duration-300 transition-discrete"><img src={GooglePlay} alt="google play store" className="h-5 w-auto" /> Google Play</a>
                    <a href="https://apps.apple.com/us/app/programming-hero-coding-fun/id1478201849" target="_blank" className="px-6 py-3 rounded-sm bg-white text-sm font-semibold flex items-center justify-between gap-2 hover:bg-gray-50 hover:shadow-md/50 shadow-gray-400 transition-all duration-300 transition-discrete"><img src={AppStore} alt="app store" className="h-5 w-auto" /> App Store</a>
                </div>
            </section>
            <img src={HeroImg} alt="app" className="mx-auto w-auto" />
            <section className="-bg-linear-45 from-purple-600 to-indigo-600 px-4 py-10 mb-8">
                <h3 className="text-white text-4xl font-bold text-center mx-2 my-6">Trusted by Millions, Built for You</h3>
                <div className="flex flex-wrap items-center justify-evenly gap-4 w-5/6 mx-auto my-6 text-sm text-gray-300 text-center">
                    <span>
                        <p>Total Downloads</p>
                        <p className="font-extrabold text-5xl text-white my-2">29.6M</p>
                        <p>21% more than last month</p>
                    </span>
                    <span>
                        <p>Total Reviews</p>
                        <p className="font-extrabold text-5xl text-white my-2">906K</p>
                        <p>46% more than last month</p>
                    </span>
                    <span>
                        <p>Active Apps</p>
                        <p className="font-extrabold text-5xl text-white my-2">132+</p>
                        <p>31 more will Launch</p>
                    </span>
                </div>
            </section>
            <h3 className="text-center text-gray-800 text-3xl font-bold">Trending Apps</h3>
            <p className="text-center text-gray-500 text-sm font-medium m-2">Explore All Trending Apps on the Market developed by us</p>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto my-6">
                {data.map(e => <AppsCard key={e._id} e={e} />)}
            </section>
            <Link to='/allapps' className="-bg-linear-45 from-purple-500 to-indigo-500 w-fit text-sm font-semibold mx-auto flex items-center justify-between gap-2 text-white px-4 py-2 rounded-sm hover:shadow-md/50 shadow-gray-500 transition-all duration-300 transition-discrete">
                Show All
            </Link>
        </main>
    )
}