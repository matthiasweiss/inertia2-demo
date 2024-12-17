<?php

namespace App\Dto;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class UserDto extends Data
{
    public function __construct(
        public string $email
    ) {}
}
