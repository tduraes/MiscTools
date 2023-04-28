import React, { useState, useEffect } from "react";

const Game = () => {
    const [position, setPosition] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const [jumping, setJumping] = useState(false);
    const [obstacles, setObstacles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Update position and velocity based on jumping and gravity
            const gravity = 0.1;
            const maxVelocity = 10;
            const newPosition = position + velocity;
            const newVelocity = jumping ? velocity - gravity : velocity + gravity;
            const clampedVelocity = Math.max(-maxVelocity, Math.min(newVelocity, maxVelocity));

            // Check if the player hits an obstacle
            const playerRect = { x: 50, y: 300, width: 50, height: 50 };
            const hitObstacle = obstacles.some((obstacle) => {
                const obstacleRect = { x: obstacle.x, y: 0, width: obstacle.width, height: obstacle.height };
                return intersects(playerRect, obstacleRect);
            });

            if (newPosition < 0 || newPosition > 300 || hitObstacle) {
                // Game over
                clearInterval(interval);
                alert("Game over!");
            } else {
                // Move obstacles and add new ones
                const newObstacles = obstacles.map((obstacle) => ({ ...obstacle, x: obstacle.x - 5 }));
                const lastObstacle = newObstacles[newObstacles.length - 1];
                if (lastObstacle && lastObstacle.x + lastObstacle.width < 300) {
                    newObstacles.push({ x: 400, height: Math.random() * 100 + 50, width: 50 });
                }
                setObstacles(newObstacles);

                // Update position and velocity
                setPosition(newPosition);
                setVelocity(clampedVelocity);
            }
        }, 1000 / 60);

        // Listen for space key presses to make the player jump
        const handleKeyDown = (event) => {
            if (event.keyCode === 32) {
                setJumping(true);
            }
        };
        const handleKeyUp = (event) => {
            if (event.keyCode === 32) {
                setJumping(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        // Clean up the event listeners when the component unmounts
        return () => {
            clearInterval(interval);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [position, velocity, jumping, obstacles]);

    //return (
    //    <div style={{ position: "relative", height: "400px", width: "400px", backgroundColor: "gray" }}>
    //        <div style={{ position: "absolute", left: "50px", top: `${position}px`, height: "50px", width: "50px", backgroundColor: "red" }}></div>
    //        {obstacles.map((obstacle, index) => (
    //            <div key={index} style={{ position: "absolute", left: `${obstacle.x}px`, bottom: "0", height: `${obstacle.height}px`, width: `${obstacle.width}px`, backgroundColor: "green" }}></div>
    //        ))}
    //    </div>
    //);

    return (
        <div>
            <div className="game-container">
                <div className="player" style={{ top: `${position}px` }}></div>
                    {obstacles.map((obstacle, index) => (
                        <div
                            key={index}
                            className="obstacle"
                            style={{ left: `${obstacle.x}px`, width: `${obstacle.width}px` }}>
                        </div>
                    ))}
            </div>
        </div>
       
    );
};

export default Game;

const intersects = (rect1, rect2) => {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
};