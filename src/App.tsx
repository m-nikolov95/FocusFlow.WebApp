import { JSX } from 'react';

import * as FaIcons from 'react-icons/fa';

import { HeaderComponent } from './components/header-component/HeaderComponent';
import { FeatureComponent } from './components/feature-component/FeatureComponent';

export function App(): JSX.Element {
    return (
        <div className='flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-100'>
            <HeaderComponent />
            <div className='mt-10 flex flex-col lg:flex-row gap-6 lg:gap-12 px-10 lg:px-0'>
                <FeatureComponent title='WEEKLY INSIGHTS'
                    icon={FaIcons.FaRegClock({ className: 'text-secondary' })}
                    description='Keep track of your own thoughts and processes. Reflect on your week, identify patterns, and gain valuable insights to help you grow.' />
                <FeatureComponent title='PRODUCTIVITY'
                    icon={FaIcons.FaHourglassHalf({ className: 'text-secondary' })}
                    description='Keep track of what time of the day you are most productive. Analyze your daily routines, discover your peak performance hours.' />
                <FeatureComponent title='CALENDAR'
                    icon={FaIcons.FaCalendarAlt({ className: 'text-secondary' })}
                    description='Synchronise your schedule and manage your tasks and events. Stay organized with seamless calendar integration and never miss deadlines or meetings.' />
            </div>
        </div>
    );
}

export default App;