import { useState, useEffect } from 'react';

const Stopwatch = ({ id }) => {
    const [milliseconds, setMilliseconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        if (isActive) {
            setIsActive(false);
        }
        setMilliseconds(0);
    };

    useEffect(() => {
        if (isActive) {
            const intervalId = setInterval(() => {
                setMilliseconds(prevMilliseconds => prevMilliseconds + 10);
            }, 10);
            return () => clearInterval(intervalId);
        }
    }, [isActive, milliseconds]);

    const formattedTime = (() => {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const remainingSeconds = seconds % 60;

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    })();

    return (

        <div className='col-xl-6'>
            <div className='mb-4 d-flex flex-column  align-items-center shadow p-3 rounded-4'>
                <h1 className={!isActive ? "text-secondary" : "text-primary"}>{id}. {formattedTime}</h1>
                <div>
                    <button className={`btn btn-light border mx-3`} onClick={handleStart} disabled={isActive}>Başlat</button>
                    <button className={`btn btn-light border mx-3`} onClick={handleStop} disabled={!isActive}>Durdur</button>
                    <button className={`btn btn-light border mx-3`} onClick={handleReset} disabled={isActive}>Sıfırla</button>
                </div>
            </div>
        </div>
    );
};

export default Stopwatch;