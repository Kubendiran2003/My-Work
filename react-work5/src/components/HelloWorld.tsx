// src/components/HelloWorld.tsx

import React from 'react';

interface HelloWorldProps {
  greeting: string;
}

function HelloWorld({ greeting }: HelloWorldProps) {
  return (
    <div>
      <h1>{greeting}, World!</h1>
      <p>Welcome to your first React component with Vite and TypeScript.</p>
    </div>
  );
}

export default HelloWorld;