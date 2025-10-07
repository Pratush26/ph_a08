import notFound from '../assets/error-404.png'

export default function ErrorPage () {
    return (
        <main className='flex flex-col items-center justify-center gap-2 min-h-screen'>
        <img src={notFound} alt="not found" />
        <p>Page not found! Try again or reload the page</p>
        </main>
    )
}