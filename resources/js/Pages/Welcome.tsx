import GuestLayout from '@/Layouts/GuestLayout';
import { PageProps } from '@/types';
import { Deferred, Link, usePoll } from '@inertiajs/react';
import { ClipLoader } from 'react-spinners';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps & { laravelVersion: string; phpVersion?: string }) {
    usePoll(5000, { only: ['laravelVersion'] });

    return (
        <GuestLayout>
            <div>
                Hello from Laravel {laravelVersion} on
                <Deferred data="phpVersion" fallback={<ClipLoader />}>
                    <div>PHP {phpVersion}</div>
                </Deferred>
            </div>
            {auth.user ? (
                <Link href="/dashboard">Dashboard</Link>
            ) : (
                <Link href="/login">Log In</Link>
            )}
        </GuestLayout>
    );
}
