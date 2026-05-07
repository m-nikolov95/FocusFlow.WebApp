import { JSX } from 'react';

export function FooterComponent(): JSX.Element {
    return (
        <footer className='text-center border-t border-secondary/30 mt-10'>
            <h2 className='text-3xl font-semibold text-primary mt-10'>Build a calmer, more focused work experience.</h2>
            <p className='text-md text-gray-600 mt-2'>No noise. No clutter. Just flow.</p>
            <button className="mt-6 bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition">
                Try FocusFlow
            </button>
            <p className='text-gray-500 text-sm mt-6 mb-3'>© 2026 FocusFlow. All rights reserved.</p>
        </footer>
    )
}

export default FooterComponent;