'use client';

import React from 'react';

export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none bg-stone-50">
            {/* Static background replacement */}
            <div className="absolute inset-0 bg-stone-50" />
        </div>
    );
}
