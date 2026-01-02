import React from 'react';
import ServiceDetailClient from './ServiceDetailClient';

export function generateStaticParams() {
    return [
        { id: 'production' },
        { id: 'supply-chain' },
        { id: 'sourcing' },
    ];
}

export default async function ServiceDetailPage({ params }) {
    // Await params if necessary in newer Next.js versions, but for now passing it is fine.
    // In Next.js 15+ params should be awaited.
    // Since we are on 15+, let's be safe and access properties directly or await if it was async.
    // However, for static export, params is an object.
    const { id } = await params;
    return <ServiceDetailClient id={id} />;
}
