import { useLoaderData, Link } from "react-router";
import IconDownload from '../assets/icon-downloads.png';
import IconRatings from '../assets/icon-ratings.png';

export default function AllAppsPage() {
    const { data } = useLoaderData()
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-[40vh]">
            <h1 className="text-center text-gray-800 text-3xl font-bold">Our All Applications</h1>
            <p className="text-center text-gray-500 text-sm font-medium m-2">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <section className="w-11/12 mx-auto flex items-center justify-between gap-4">
                <h2 className="text-lg font-bold">({data.length}) Apps Found</h2>
                <form action="">
                    <input type="text" name="" id="" />
                </form>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto my-6">
                {data.map(e => (
                    <Link to={`/details/${e.id}`} key={e.id} className="flex flex-col items-center justify-between p-6 border gap-4 border-gray-300 shadow-md/50 shadow-gray-400 rounded-2xl">
                        <img src={e.image} alt={e.title} className="rounded-xl w-2/3 aspect-square" />
                        <p className="font-semibold w-full">{e.title}</p>
                        <div className="flex items-center justify-between w-full gap-2">
                            <span className="rounded px-2 py-1 bg-green-100 flex items-center justify-between gap-2 text-xs w-fit text-green-600 font-semibold"><img src={IconDownload} alt="ratings" className="h-3 w-auto" /> {e.downloads}</span>
                            <span className="rounded px-2 py-1 bg-amber-100 flex items-center justify-between gap-2 text-xs w-fit text-amber-600 font-semibold"><img src={IconRatings} alt="ratings" className="h-3 w-auto" /> {e.ratingAvg}</span>
                        </div>
                    </Link>
                ))}
            </section>
        </main>
    )
}