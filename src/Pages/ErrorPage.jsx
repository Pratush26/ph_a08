import { useNavigate } from 'react-router'
import notFound from '../assets/error-404.png'

export default function ErrorPage() {
    const navigate = useNavigate()
    return (
        <main className='flex flex-col items-center justify-center gap-2 m-4 min-h-[70vh]'>
            <img src={notFound} alt="not found" className='h-[40vh] w-auto' />
            <h1 className='text-4xl font-bold'>Oops, page not found!</h1>
            <p className='text-sm text-gray-600'>The page you are looking for is not available.</p>
            <button
                onClick={() => navigate(-1)}
                className="-bg-linear-45 from-purple-500 to-indigo-500 text-white font-semibold px-6 py-2 rounded-sm hover:shadow-md/50 shadow-gray-500 cursor-pointer transition-all duration-300 transition-discrete"
            >
                Go Back!
            </button>
        </main>
    )
}