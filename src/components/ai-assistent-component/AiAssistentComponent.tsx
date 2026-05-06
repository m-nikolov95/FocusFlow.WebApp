import { JSX, useRef } from 'react';

export function AiAssistentComponent(): JSX.Element {
    let textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    };

    return (
        <div className='w-full p-3 rounded-xl bg-white border border-secondary/30 shadow-md'>
            <h3 className='font-semibold text-lg pb-3'>AI Assistent</h3>
            <textarea className='w-full p-3 focus:outline-none border-b border-gray-300 overflow-hidden resize-none'
                placeholder='How may I help?'
                ref={textareaRef}
                rows={1}
                onChange={handleInput} />
            <div className='flex items-center justify-between'>
                <button className='text-gray-400 text-3xl'>+</button>
                <p className='text-gray-400 mt-1'>Prompts: 5</p>
            </div>
        </div>
    )
}

export default AiAssistentComponent