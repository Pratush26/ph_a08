import { useLoaderData } from "react-router";
import { AddToInstalledList, findDB } from "../utility/localDb";
import { useState } from "react";
import { wait } from "../utility/Functions";
import InstalledListCard from "../Components/InstalledListCard";

export default function InstalledAppListPage() {
    const { data } = useLoaderData()
    const [dataSet, setDataSet] = useState(data.filter(e => findDB('installedApps').includes(parseInt(e.id))))
    const handleClick = async (i, n, setLoading) => {
        setLoading(true);
        await wait(3000);
        setLoading(false);
        AddToInstalledList(i, n);
        setDataSet(data.filter(e => findDB('installedApps').includes(parseInt(e.id))));
    };
    return (
        <main className="min-h-[70vh]">
            <div className="flex flex-col items-center justify-center min-h-[40vh]">
                <h1 className="text-center text-gray-800 text-3xl font-bold">Your Installed Apps</h1>
                <p className="text-center text-gray-500 text-sm font-medium m-2">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <section className="w-11/12 mx-auto my-2 space-y-4">
                <p className="font-bold text-xl">{dataSet.length} App found</p>
                {dataSet.map(e => ( <InstalledListCard e={e} key={e.id} handleClick={handleClick} />))}
            </section>
        </main>
    )
}