<?php

namespace App\Http\Controllers;

use App\Data\StorePostData;
use App\Models\Post;
use Illuminate\Http\RedirectResponse;

class PostController extends Controller
{
    public function store(StorePostData $data): RedirectResponse
    {
        Post::create($data);

        return back();
    }
}
