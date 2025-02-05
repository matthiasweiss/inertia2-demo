import GuestLayout from '@/Layouts/GuestLayout';
import { PageProps } from '@/types';
import { Link, usePoll } from '@inertiajs/react';

export default function Welcome({ auth }: PageProps) {
    usePoll(5000, { only: ['laravelVersion'] });

    return (
        <GuestLayout>
            <div className="space-y-4">
                <h1 className="text-xl font-bold">
                    Bulletproofing your Inertia applications
                </h1>

                <p>
                    {auth.user ? (
                        <Link href="/dashboard">Dashboard</Link>
                    ) : (
                        <Link href="/login">Log In</Link>
                    )}
                </p>
            </div>
        </GuestLayout>
    );
}
