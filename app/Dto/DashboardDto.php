<?php

namespace App\Dto;

use Inertia\DeferProp;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript()]
class DashboardDto extends Data
{
    public function __construct(
        /** @var array<PostDto> */
        public array $myLatestPosts,
        public DeferProp|FeedDto $feed
    ) {}
}
