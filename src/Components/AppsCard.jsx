import { Link } from "react-router";
import IconDownload from '../assets/icon-downloads.png';
import IconRatings from '../assets/icon-ratings.png';
import { ValueStringifier } from "../utility/Functions";

export default function AppsCard({ e }) {
    return (
        <div className="flex flex-col items-center justify-between p-5 bg-white border gap-4 border-gray-300 shadow-md/50 shadow-gray-400 rounded-2xl">
            <div className="w-full bg-gray-100 aspect-square rounded-xl flex items-center justify-center">
                <img src={e.image} alt={e.title} className="rounded-xl w-2/3 aspect-square" />
            </div>
            <div className="w-full">
                <Link to={`/details/${e._id}`} className="font-semibold hover:underline w-fit">{e.title}</Link>
            </div>
            <div className="flex items-center justify-between w-full gap-2">
                <span className="rounded px-2 py-1 bg-green-50 flex items-center justify-between gap-2 text-xs w-fit text-green-600 font-semibold"><img src={IconDownload} alt="ratings" className="h-3 w-auto" /> {ValueStringifier(e.downloads)}</span>
                <span className="rounded px-2 py-1 bg-amber-50 flex items-center justify-between gap-2 text-xs w-fit text-amber-600 font-semibold"><img src={IconRatings} alt="ratings" className="h-3 w-auto" /> {e.ratingAvg}</span>
            </div>
        </div>
    )
}