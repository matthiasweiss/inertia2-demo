<?php

namespace App\Http\Controllers;

use App\Dto\PostDto;
use App\Queries\FeedQuery;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(FeedQuery $query): Response
    {
        /** @var User $user */
        $user = auth()->user();
        $myLatestPosts = $user->posts()
            ->with('creator')
            ->latest()
            ->get();

        return Inertia::render('Dashboard/Dashboard', [
            'myLatestPosts' => PostDto::collect($myLatestPosts),
            'feed' => Inertia::defer(fn () => $query->get()),
        ]);
    }
}
