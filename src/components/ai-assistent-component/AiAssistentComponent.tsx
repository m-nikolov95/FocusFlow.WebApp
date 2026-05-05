import { JSX } from 'react'

export function AiAssistentComponent(): JSX.Element {
    return (
        <div className='p-3 rounded-xl bg-white border border-secondary/30 w-[60rem] max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl transition-all duration-300 ease-in-out'>
            <h3 className='font-semibold text-lg'>AI Assistent</h3>
            <p className='text-gray-400 p-5'>How may I help?</p>
            <div className='flex items-center justify-between border-t border-gray-300 pt-3'>
                <button className='text-gray-400 text-3xl'>+</button>
                <p className='text-gray-400 mt-1'>Prompts: 5</p>
            </div>
        </div>
    )
}

export default AiAssistentComponent