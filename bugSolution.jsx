```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    //Improved cleanup
    const cleanup = () => clearInterval(interval);
    interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return cleanup; // cleanup function
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```