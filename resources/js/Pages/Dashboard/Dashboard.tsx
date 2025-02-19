import { Card } from '@/Components/Card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Deferred, Head, usePoll } from '@inertiajs/react';
import { ClipLoader } from 'react-spinners';
import { CreatePostForm } from './CreatePostForm';
import { Post } from './Post';

export default function Dashboard({
    errors,
    feed,
    myLatestPosts,
}: PageProps<App.Data.DashboardData>) {
    usePoll(5000, { except: ['feed'] });

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 p-8 md:grid-cols-2">
                <Card className="col-span-2">
                    <CreatePostForm errors={errors} />
                </Card>

                <Card>
                    <h3 className="font-semibold">Your latest posts</h3>

                    <div className="contents">
                        {myLatestPosts?.map((post) => (
                            <Post key={post.id} post={post} />
                        ))}
                    </div>
                </Card>

                <Card>
                    <h3 className="font-semibold">Feed</h3>

                    <Deferred data="feed" fallback={<ClipLoader />}>
                        <div className="contents">
                            {feed?.posts.map((post) => (
                                <Post key={post.id} post={post} />
                            ))}
                        </div>
                    </Deferred>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
