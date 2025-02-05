<?php

namespace App\Http\Controllers;

use App\Dto\DashboardDto;
use App\Queries\FeedQuery;
use App\Queries\LatestPostsQuery;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(LatestPostsQuery $latestPostsQuery, FeedQuery $feedQuery): Response
    {
        $data = new DashboardDto(
            myLatestPosts: $latestPostsQuery->get(),
            feed: Inertia::defer(fn () => $feedQuery->get()),
        );

        return Inertia::render('Dashboard/Dashboard', $data);
    }
}
