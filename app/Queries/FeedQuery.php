<?php

namespace App\Queries;

use App\Dto\FeedDto;
use App\Dto\PostDto;
use App\Models\Post;

class FeedQuery
{
    public function get(): FeedDto
    {
        sleep(seconds: 2);

        /** @var User $user */
        $user = auth()->user();
        $followingIds = $user->following->pluck('id');

        $posts = Post::with('creator')
            ->whereIn('user_id', $followingIds)
            ->orderBy('created_at', 'desc')
            ->get();

        $posts = PostDto::collect($posts);

        return FeedDto::from(['posts' => $posts]);
    }
}
