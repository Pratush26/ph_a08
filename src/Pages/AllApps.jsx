import { useLoaderData, Link } from "react-router";
import IconDownload from '../assets/icon-downloads.png';
import IconRatings from '../assets/icon-ratings.png';
import { ValueStringifier } from "../utility/Functions";
import { useEffect, useState } from "react";
import AppsCard from "../Components/AppsCard";
import axios from "axios";

export default function AllAppsPage() {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(12)
    const [skip, setSkip] = useState(0)
    const [typed, setTyped] = useState("")
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      axios(`${import.meta.env.VITE_SERVER}/apps-card?search=${typed}&limit=${limit}&skip=${skip}`).then(res => {
        setData(res.data)
        setLoading(false)
      }).catch(err => console.error(err))
    }, [typed, limit, skip])
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-[40vh]">
                <h1 className="text-center text-gray-800 text-3xl font-bold">Our All Applications</h1>
                <p className="text-center text-gray-500 text-sm font-medium m-2">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <section className="w-11/12 mx-auto flex items-center justify-between gap-4 min-h-[20vh]">
                <h2 className="text-lg font-bold">({data.length}) Apps Found</h2>
                <form action="">
                    <input type="text" defaultValue={typed} onChange={e => setTyped(e.target.value)} placeholder="Type here" className="bg-white input" />
                </form>
            </section>
            {data.length === 0 ?
                <div className="flex items-center justify-center min-h-[30vh]">
                    <h4 className="text-3xl font-bold">No apps Found!</h4>
                </div>
                :
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto my-6">
                    {
                        loading ?
                            <>
                                {[...Array(8)].map((_, index) => (
                                    <div key={index} className="w-full h-70 animate-pulse bg-gray-300 rounded-xl"></div>
                                ))}
                            </>
                            :
                            data.map(e => <AppsCard key={e._id} e={e} />)}
                </section>
            }
        </main>
    )
}