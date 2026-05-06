import { JSX, useEffect, useRef, useState } from 'react';

import { SessionStateModel } from '../../state/session-state-model';

export function SessionFocusComponent(): JSX.Element {
    let [sessionState, setSessionState] = useState<SessionStateModel>(new SessionStateModel());

    let intervalRef = useRef<NodeJS.Timeout | null>(null);
    let startTimeRef = useRef<number>(0);

    useEffect(() => {
        if (sessionState.isRunning) {
            intervalRef.current = setInterval(() => {
                setSessionState(prevState => ({
                    ...prevState,
                    elapsedTimeMs: Date.now() - startTimeRef.current
                }));
            }, 1000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [sessionState?.isRunning])

    const onStartButtonClick = (): void => {
        setSessionState(prevState => ({
            ...prevState,
            isRunning: true
        }));

        startTimeRef.current = Date.now() - sessionState.elapsedTimeMs;
    }

    const onPauseButtonClick = (): void => {
        setSessionState(prevState => ({
            ...prevState,
            isRunning: false
        }));
    }

    const onResetButtonClick = (): void => {
        setSessionState({
            isRunning: false,
            elapsedTimeMs: 0
        });
    }

    const formatTime = (): string => {
        let minutes = Math.floor(sessionState.elapsedTimeMs / (1000 * 60)) % 60;
        let seconds = Math.floor(sessionState.elapsedTimeMs / 1000) % 60;

        const pad = (num: number) => num.toString().padStart(2, '0');

        return `${pad(minutes)}:${pad(seconds)}`;
    }

    return (
        <div className='w-full p-6 rounded-xl bg-white border border-secondary/30 hover:shadow-2xl shadow-md transition'>
            <h3 className='font-semibold text-lg'>
                Focus Session
            </h3>
            <p className="text-gray-500">Start a 25-minute deep work session.</p>
            <div className='flex justify-center py-6 mr-2'>
                <h3 className='font-semibold text-2xl text-gray-500'>
                    {formatTime()}
                </h3>
            </div>
            <div className='flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center'>
                <button onClick={onStartButtonClick} className='text-primary px-6 py-1 rounded-xl border border-primary font-semibold hover:bg-primary/10'>Start</button>
                <button onClick={onPauseButtonClick} className='text-secondary px-6 py-1 rounded-xl border border-secondary font-semibold hover:bg-secondary/10'>Pause</button>
                <button onClick={onResetButtonClick} className='text-primary px-6 py-1 rounded-xl border border-primary font-semibold hover:bg-primary/10'>Reset</button>
            </div>
        </div>
    )
}

export default SessionFocusComponent;