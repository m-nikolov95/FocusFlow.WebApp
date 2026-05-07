import { JSX, useRef, useState } from 'react';

import * as FaIcons from 'react-icons/fa';

export function AiAssistantComponent(): JSX.Element {
    let [promptCountState, setPromptCountState] = useState<number>(5);

    let textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInput = (): void => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    };

    const onPromptAiButtonClicked = (): void => {
        setPromptCountState((prevCount) => {
            if (prevCount <= 0) {
                return prevCount;
            }

            if (textareaRef.current) {
                textareaRef.current.value = '';
                textareaRef.current.style.height = 'auto';
            }

            return prevCount - 1;
        });
    }

    return (
        <div className='w-full p-3 rounded-xl bg-white border border-secondary/30 shadow-md'>
            <h3 className='font-semibold text-lg pb-3'>AI Assistant</h3>
            <div className='flex justify-between items-end'>
                <textarea className='w-full p-3 focus:outline-none border-b border-gray-300 overflow-hidden resize-none'
                    placeholder='How may I help?'
                    ref={textareaRef}
                    rows={1}
                    onChange={handleInput} />
                <span onClick={onPromptAiButtonClicked} className='ml-3'>
                    {FaIcons.FaArrowAltCircleUp({ className: 'text-primary text-2xl cursor-pointer' })}
                </span>
            </div>
            <div className='flex items-center justify-between'>
                <button className='text-gray-400 text-3xl' aria-label='Make prompt'>+</button>
                <p className='text-gray-400 mt-1'>Prompts: {promptCountState}</p>
            </div>
        </div>
    )
}

export default AiAssistantComponent