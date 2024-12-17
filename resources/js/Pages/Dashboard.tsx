import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="flex max-w-7xl gap-8 sm:px-6 lg:px-8">
                    <div className="grow rounded-lg bg-white p-8 shadow">
                        <h3 className="font-semibold">Your latest posts</h3>
                    </div>

                    <div className="grow rounded-lg bg-white p-8 shadow">
                        <h3 className="font-semibold">Feed</h3>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
