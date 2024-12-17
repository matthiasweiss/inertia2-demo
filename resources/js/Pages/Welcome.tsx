import GuestLayout from '@/Layouts/GuestLayout';
import { PageProps } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export default function Welcome({ auth }: PageProps) {
    console.log(usePage());

    return (
        <GuestLayout>
            {auth.user ? (
                <Link href="/dashboard">Dashboard</Link>
            ) : (
                <Link href="/login">Log In</Link>
            )}
        </GuestLayout>
    );
}
