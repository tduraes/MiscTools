import React, { useState, useEffect } from "react";

function TimeTracker() {
    const [isTrackingTime, setIsTrackingTime] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [totalTime, setTotalTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [elapsedTime, setElapsedTime] = useState(0);
    const [taskName, setTaskName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    //const [remainingTime, setRemainingTime] = useState('');
    const [timeLogs, setTimeLogs] = useState([]);

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
        if (!taskName || !projectName) {
            alert('Please enter task name and project name before starting the timer.');
            return;
        }
        setIsTrackingTime(true);
        setStartTime(Date.now());
    };

    const stopTimer = () => {
        if (!endTime) {
            alert('The timer is not running. Please start the timer first.');
            return;
        }
        setIsTrackingTime(false);
        const timeSpent = endTime - startTime;
        //const remainingTime = estimatedTime - timeSpent;
        const timeLog = {
            taskName,
            projectName,
            taskDescription,
            estimatedTime,
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            totalTime: timeSpent,
            //remainingTime: remainingTime
        };
        setTimeLogs([...timeLogs, timeLog]);
        //setRemainingTime(remainingTime);
        //setTaskName('');
        //setProjectName('');
        //setTaskDescription('');
        //setEstimatedTime('');
        //setStartTime(null);
        //setEndTime(null);
        //setTotalTime(0);
        //setElapsedTime(0);
    };

    const resetTimer = () => {
        setIsTrackingTime(false);
        setTaskName('');
        setProjectName('');
        setTaskDescription('');
        setEstimatedTime('');
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
            <h3>Time Tracker</h3>
            <div className="basic-container">
                <div>
                    Current Time: {formatCurrentTime(currentTime)}
                </div>
                <div>Elapsed Time: {formatTime(elapsedTime)}</div>
                <div>Total Time: {formatTime(totalTime)}</div>
                <div>
                    <input
                        type="text"
                        placeholder="Task Name *"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Project Name *"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Task Description"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Estimated Time (in minutes)"
                        value={estimatedTime}
                        onChange={(e) => setEstimatedTime(e.target.value)}
                    />
                    {!isTrackingTime && (
                        <button onClick={startTimer}>Start</button>
                    )}
                    {isTrackingTime && (
                        <button onClick={stopTimer}>Stop</button>
                    )}
                    <button onClick={resetTimer}>Reset</button>
                </div>
            </div>
            {timeLogs.length > 0 && (
                <div className="basic-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Project Name</th>
                                <th>Task Description</th>
                                <th>Estimated Time</th>
                                <th>Time Spent</th>
                                {/*<th>Remaining Time</th>*/}
                            </tr>
                        </thead>
                        <tbody>
                            {timeLogs.map((log, index) => (
                                <tr key={index}>
                                    <td>{log.taskName}</td>
                                    <td>{log.projectName}</td>
                                    <td>{log.taskDescription}</td>
                                    <td>{log.estimatedTime}</td>
                                    <td>{formatTime(log.totalTime)}</td>
                                    {/*<td>{formatTime(log.remainingTime)}</td>*/}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );

}

export default TimeTracker;