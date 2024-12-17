<?php

namespace App\Dto;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class PostDto extends Data
{
    public function __construct(
        public int $id,
        public string $content,
        public UserDto $creator,
        public CarbonImmutable $createdAt
    ) {}
}
