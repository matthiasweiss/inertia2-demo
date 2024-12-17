<?php

namespace App\Http\Controllers;

use App\Queries\FeedQuery;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(FeedQuery $query): Response
    {
        /** @var User $user */
        $user = auth()->user();
        $latestPosts = $user->posts()
            ->with('creator')
            ->latest()
            ->get();

        return Inertia::render('Dashboard/Dashboard', [
            'latestPosts' => $latestPosts,
            'feed' => Inertia::defer(fn () => $query->get()),
        ]);
    }
}
