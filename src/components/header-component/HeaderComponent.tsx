import { JSX } from 'react';

export function HeaderComponent(): JSX.Element {
    return (
        <div className='text-center'>
            <nav className='flex flex-col md:flex-row gap-4 md:gap-12 text-lg mt-5 border-b border-secondary/40 justify-center'>
                <a href='#' className='text-primary hover:text-secondary'>Dashboard</a>
                <a href='#' className='text-primary hover:text-secondary'>Tasks</a>
                <a href='#' className='text-primary hover:text-secondary'>Analytics</a>
            </nav>
            <h1 className='text-6xl font-bold text-primary mt-6'>FocusFlow</h1>
            <h2 className='text-5xl font-bold text-primary mt-3'>Work smarter. Stay focused.</h2>
            <p className='text-xl text-gray-600 mt-3'>FocusFlow helps you organise tasks, track focus time, and get AI guidance to boost your productivity.</p>
            <div className='mt-8 flex justify-center gap-4'>
                <button className='bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition'>
                    Start For Free
                </button>
                <button className='bg-secondary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition'>
                    View Demo
                </button>
            </div>
        </div>
    );
}

export default HeaderComponent;