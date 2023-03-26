import React, { useState } from 'react';

const Device = () => {
    const [steps, setSteps] = useState(0);
    return (
        <div>
            <button onClick={()=> setSteps((steps) => steps +1)}>Steps {steps}</button>
        </div>
    );
};

export default Device;