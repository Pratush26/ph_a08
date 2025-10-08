import { useLoaderData, useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import IconDownload from '../assets/icon-downloads.png'
import IconRatings from '../assets/icon-ratings.png'
import IconReviews from '../assets/icon-review.png'
import AppNotFoundImg from '../assets/App-Error.png'
import { ValueStringifier, wait } from "../utility/Functions";
import { AddToInstalledList, findDB } from "../utility/localDb";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AppsDetailsPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data } = useLoaderData()
    const details = data.find(e => e.id == id)
    const localData = findDB('installedApps')
    const [installed, setInstalled] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleClick = async (i, n) => {
        setLoading(true);
        await wait(3000);
        setLoading(false);
        setInstalled(true)
        AddToInstalledList(i, n)
    }
    useEffect(() => {
        if (localData.includes(parseInt(id))) setInstalled(true)
    }, [localData, id])
    if (!details) {
        return (
            <main className='flex flex-col items-center justify-center gap-2 m-4 min-h-[70vh]'>
                <img src={AppNotFoundImg} alt="not found" className='h-[40vh] w-auto' />
                <h1 className='text-4xl font-bold uppercase'>Oops!! app not found!</h1>
                <p className='text-sm text-gray-600'>The App you are requesting is not found on our system.  please try another apps</p>
                <button
                    onClick={() => navigate(-1)}
                    className="-bg-linear-45 from-purple-500 to-indigo-500 text-white font-semibold px-6 py-2 rounded-sm hover:shadow-md/50 shadow-gray-500 cursor-pointer transition-all duration-300 transition-discrete"
                >
                    Go Back!
                </button>
            </main>
        )
    }
    return (
        <main>
            <section className="grid grid-cols-[25%_70%] items-center-safe justify-items-center-safe gap-4 w-11/12 mx-auto my-6 text-gray-800">
                <img src={details.image} alt={details.title} className="rounded-2xl bg-white p-4 shadow-md/50 shadow-gray-400 aspect-square w-11/12 object-cover" />
                <aside className="w-full space-y-5">
                    <div className="flex w-full items-center justify-between gap-3">
                        <h1 className="text-4xl font-extrabold text-black">{details.title}</h1>
                        <span>
                            <p className="text-xs text-gray-500">Developed By</p>
                            <p className="text-sm text-purple-500 font-bold">{details.companyName}</p>
                        </span>
                    </div>
                    <div className="flex items-center justify-around gap-2 text-sm font-medium">
                        <span className="flex flex-col items-center justify-center w-full">
                            <img src={IconReviews} alt="reviews" className="h-7 aspect-square" />
                            <p>Reviews</p>
                            <p className="font-extrabold text-3xl">{ValueStringifier(details.reviews)}</p>
                        </span>
                        <span className="flex flex-col items-center justify-center border-l-2 border-l-gray-300 w-full">
                            <img src={IconDownload} alt="downloads" className="h-7 aspect-square" />
                            <p>Downloads</p>
                            <p className="font-extrabold text-3xl">{ValueStringifier(details.downloads)}</p>
                        </span>
                        <span className="flex flex-col items-center justify-center border-l-2 border-l-gray-300 w-full">
                            <img src={IconRatings} alt="ratings" className="h-7 aspect-square" />
                            <p>Average Rating</p>
                            <p className="font-extrabold text-3xl">{details.ratingAvg}</p>
                        </span>
                    </div>
                    <button
                        disabled={installed || loading}
                        onClick={() => handleClick(details.id, details.title)}
                        className="-bg-linear-45 from-emerald-700 to-green-400 text-white font-bold px-9 py-3 rounded-sm hover:shadow-md/50 shadow-gray-500 cursor-pointer transition-all duration-300 transition-discrete">
                        {
                            loading ?
                                <span className="loading loading-bars loading-md"></span>
                                :
                                installed ? (
                                    'Installed'
                                ) : (
                                    <>
                                        Install <span className="font-normal text-sm">({details.size} MB)</span>
                                    </>
                                )
                        }

                    </button>
                </aside>
            </section>
            <section className="w-11/12 mx-auto my-4 space-y-4">
            <h4 className="font-bold text-gray-800">Ratings</h4>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={[...details.ratings].reverse()}
                        layout="vertical"
                        margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="count" fill="#FFA500" />
                    </BarChart>
                </ResponsiveContainer>
                <h4 className="font-bold text-gray-800">Description</h4>
                <p className="text-sm font-medium text-gray-500">{details.description}</p>
            </section>
        </main>
    )
}