import { JSX } from 'react';

import { FeatureComponentProps } from '../../props/feature-component-props';

export function FeatureComponent(props: FeatureComponentProps): JSX.Element {
    return (
        <div className='lg:w-[18rem] lg:h-[18rem] p-6 rounded-xl bg-white border border-secondary/30 hover:shadow-2xl transition hover:scale-105 cursor-pointer'>
            <h3 className='font-semibold text-xl border-b border-gray-300 pb-2 flex items-center justify-between'>
                <span>{props.title}</span>
                <span className='ml-2'>{props.icon}</span>
            </h3>
            <p className='text-gray-500 mt-2 text-lg leading-relaxed line-clamp-6 break-words'>{props.description}</p>
        </div>
    )
}

export default FeatureComponent