import React from 'react';
import Layout from '@/components/layout/Layout'

const page = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">House Page</h1>
                    <p className="text-gray-600">House page content will be here</p>
                </div>
            </div>
        </Layout>
    );
};

export default page;