import { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'flex flex-col gap-4 rounded bg-white p-4 shadow md:p-8',
                className,
            )}
            {...props}
        ></div>
    );
}
