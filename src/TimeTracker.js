import React, { useState, useEffect } from "react";

function TimeTracker() {
    const [isTrackingTime, setIsTrackingTime] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [totalTime, setTotalTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isTrackingTime) {
            const interval = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
                setEndTime(Date.now());
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isTrackingTime, startTime]);

    const startTimer = () => {
        setIsTrackingTime(true);
        setStartTime(Date.now());
    };

    const stopTimer = () => {
        setIsTrackingTime(false);
        setTotalTime(totalTime + (endTime - startTime));
    };

    const resetTimer = () => {
        setIsTrackingTime(false);
        setStartTime(null);
        setEndTime(null);
        setTotalTime(0);
        setElapsedTime(0);
    };

    const formatTime = (time) => {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / 1000 / 60 / 60) % 24);
        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    const formatCurrentTime = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    return (
        <div className="basic-container">
            <div className="basic-container">
                <div>Current Time: {formatCurrentTime(currentTime)}</div>
                <div>Elapsed Time: {formatTime(elapsedTime)}</div>
                <div>Total Time: {formatTime(totalTime)}</div>
            </div>
            {!isTrackingTime && <button onClick={startTimer}>Start</button>}
            {isTrackingTime && <button onClick={stopTimer}>Stop</button>}
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
}

export default TimeTracker;
