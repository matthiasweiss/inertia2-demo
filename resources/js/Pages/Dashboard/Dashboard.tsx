import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Deferred, Head, usePoll } from '@inertiajs/react';
import { ClipLoader } from 'react-spinners';
import { Post } from './Post';

export default function Dashboard({
    feed,
    myLatestPosts,
}: App.Dto.DashboardDto) {
    usePoll(5000, { except: ['feed'] });

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 p-8 md:grid-cols-2">
                <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow md:p-8">
                    <h3 className="font-semibold">Your latest posts</h3>

                    <div className="contents">
                        {myLatestPosts?.map((post) => (
                            <Post key={post.id} post={post} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow md:p-8">
                    <h3 className="font-semibold">Feed</h3>

                    <Deferred data="feed" fallback={<ClipLoader />}>
                        <div className="contents">
                            {feed?.posts.map((post) => (
                                <Post key={post.id} post={post} />
                            ))}
                        </div>
                    </Deferred>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
