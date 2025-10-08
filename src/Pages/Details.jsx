import { useLoaderData, useParams } from "react-router";
import IconDownload from '../assets/icon-downloads.png'
import IconRatings from '../assets/icon-ratings.png'
import IconReviews from '../assets/icon-review.png'

export default function AppsDetailsPage() {
    const { id } = useParams()
    const { data } = useLoaderData()
    const details = data.find(e => e.id == id)
    console.log(data.map(e=> e.title))
    if (!details) {
        return <p>App not found</p>
    }
    return (
        <main>
            <section className="grid grid-cols-[25%_70%] items-center-safe justify-items-center-safe gap-4 w-11/12 mx-auto my-6 text-gray-800">
                <img src={details.image} alt={details.title} className="rounded-2xl aspect-square w-11/12 object-cover" />
                <aside className="w-full space-y-5">
                    <div className="flex w-full items-center justify-between gap-3">
                        <h1 className="text-4xl font-bold text-black">{details.title}</h1>
                        <span>
                        <p className="text-xs text-gray-500">Developed By</p>
                        <p className="text-sm text-purple-500 font-bold">{details.companyName}</p>
                        </span>
                    </div>
                    <div className="flex items-center justify-around gap-2 text-sm font-medium">
                        <span className="flex flex-col items-center justify-center w-full">
                            <img src={IconReviews} alt="reviews" />
                            <p>Reviews</p>
                            <p className="font-extrabold text-4xl">{details.reviews >= 1000000000 ? `${details.reviews/1000000000}B` : details.reviews >= 1000000 ? `${details.reviews/1000000}M` : details.reviews >= 1000 ? `${details.reviews/1000}K` : details.reviews}</p>
                        </span>
                        <span className="flex flex-col items-center justify-center border-l-2 border-l-gray-300 w-full">
                            <img src={IconDownload} alt="downloads" />
                            <p>Downloads</p>
                            <p className="font-extrabold text-4xl">{details.downloads >= 1000000000 ? `${details.downloads/1000000000}B` : details.downloads >= 1000000 ? `${details.downloads/1000000}M` : details.downloads >= 1000 ? `${details.downloads/1000}K` : details.downloads}</p>
                        </span>
                        <span className="flex flex-col items-center justify-center border-l-2 border-l-gray-300 w-full">
                            <img src={IconRatings} alt="ratings" />
                            <p>Average Rating</p>
                            <p className="font-extrabold text-4xl">{details.ratingAvg}</p>
                        </span>
                    </div>
                    <button className="-bg-linear-45 from-emerald-700 to-green-400 text-white font-bold px-9 py-3 rounded-sm hover:shadow-md/50 shadow-gray-500 cursor-pointer transition-all duration-300 transition-discrete">Install <span className="font-normal text-sm">({details.size} MB)</span></button>
                </aside>
            </section>
            <section className="w-11/12 mx-auto">
                <p className="font-bold text-gray-700">Description</p>
                <p className="text-sm font-medium text-gray-500">{details.description}</p>
            </section>
        </main>
    )
}