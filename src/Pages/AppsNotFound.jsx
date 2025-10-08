import { useNavigate } from "react-router"
import AppNotFoundImg from '../assets/App-Error.png'

export default function AppsNotFound () {
    const navigate = useNavigate()
    return (
                <main className='flex flex-col items-center justify-center gap-2 m-4 min-h-[80vh] text-center'>
                    <img src={AppNotFoundImg} alt="not found" className='h-auto w-5/6 max-w-sm' />
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