<?php

namespace App\Dto;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class FeedDto extends Data
{
    /**
     * @param  array<int, PostDto>  $posts
     */
    public function __construct(
        /** @var PostDto[] */
        public array $posts
    ) {}
}
