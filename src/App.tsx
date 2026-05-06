import { JSX } from 'react';

import * as FaIcons from 'react-icons/fa';

import { HeaderComponent } from './components/header-component/HeaderComponent';
import { FeatureComponent } from './components/feature-component/FeatureComponent';
import { AiAssistantComponent } from './components/ai-assistent-component/AiAssistantComponent';
import { SessionFocusComponent } from './components/session-focus-component/SessionFocusComponent';
import { TasksComponent } from './components/tasks-component/TasksComponent';
import { FooterComponent } from './components/footer-component/FooterComponent';

export function App(): JSX.Element {
    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-100 via-violet-100 p-6 md:p-10 flex items-start justify-center'>
            <div className='flex flex-col items-center w-full max-w-6xl rounded-2xl shadow-2xl px-6 py-8 md:px-12 md:py-10'>
                <HeaderComponent />
                <div className='mt-10 flex justify-center w-full sm:w-[30rem] transition-all duration-300'>
                    <SessionFocusComponent />
                </div>
                <div className='mt-10 flex justify-center w-full transition-all duration-300'>
                    <TasksComponent />
                </div>
                <div className='mt-10 flex justify-center w-full transition-all duration-300'>
                    <AiAssistantComponent />
                </div>
                <div className='mt-10 mb-4 flex flex-wrap flex-col lg:flex-row justify-center gap-6 lg:gap-12 w-full'>
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
                <FooterComponent />
            </div>
        </div>
    );
}

export default App;