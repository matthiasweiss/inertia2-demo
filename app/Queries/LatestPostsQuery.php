<?php

namespace App\Queries;

use App\Dto\PostDto;

class LatestPostsQuery
{
    /** @return PostDto[] */
    public function get(): array
    {
        /** @var User $user */
        $user = auth()->user();
        $myLatestPosts = $user->posts()
            ->with('creator')
            ->latest()
            ->get();

        return PostDto::collect($myLatestPosts)->all();
    }
}
