import { useState } from "react"
import IconDownload from '../assets/icon-downloads.png'
import IconRatings from '../assets/icon-ratings.png'
import { ValueStringifier } from "../utility/Functions"
import { Link } from "react-router"

export default function InstalledListCard({e, handleClick}) {
    const [loading, setLoading] = useState(false)
    return (
        <div className="flex items-center justify-between gap-4 p-4 rounded-xl shadow-md/40 shadow-gray-400 border border-gray-200">
            <img src={e.image} alt={e.title} className="bg-gray-300 rounded-xl p-2 h-18 aspect-square" />
            <span className="w-full flex flex-col justify-between gap-2 p-1">
                <Link to={`/details/${e.id}`} className="text-lg font-semibold hover:underline underline-offset-2">{e.title}</Link>
                <div className="flex gap-2 text-xs font-semibold">
                    <span className="flex items-center justify-between gap-2 bg-green-50 text-emerald-800 px-2 py-1 rounded"><img src={IconDownload} alt="download sign" className="h-4 aspect-square" /> {ValueStringifier(e.downloads)}</span>
                    <span className="flex items-center justify-between gap-2 bg-amber-50 text-amber-800 px-2 py-1 rounded"><img src={IconRatings} alt="ratings sign" className="h-4 aspect-square" /> {e.ratingAvg}</span>
                    <span className="flex items-center justify-between gap-2 px-2 py-1 rounded text-gray-600">{e.size} MB</span>
                </div>
            </span>
            <button disabled={loading} onClick={() => handleClick(e.id, e.title, setLoading)} className="-bg-linear-45 from-emerald-700 to-green-400 text-white font-semibold px-4 py-2 rounded-sm hover:shadow-md/50 shadow-gray-500 cursor-pointer transition-all duration-300 transition-discrete">{loading ? <span className="loading loading-bars loading-md"></span> : 'Uninstall'}</button>
        </div>
    )
}