import { cn } from '@/utils/cn';
import { PropsWithChildren, ReactNode } from 'react';

type FormFieldProps = PropsWithChildren & {
    className?: string;
    hasError?: boolean;
};

export function FormField({ children, className, hasError }: FormFieldProps) {
    return (
        <div
            className={cn(
                'flex flex-col gap-2 [&>.form-field-error]:hidden',
                className,
                hasError &&
                    '[&>.form-field-error]:flex [&>.select-trigger]:border-rose-200/70 [&>input]:border-rose-200/70',
            )}
        >
            {children}
        </div>
    );
}

type ErrorProps = {
    children: ReactNode;
};

function Error({ children }: ErrorProps) {
    return (
        <div
            className={cn(
                'form-field-error w-fit rounded bg-rose-50 px-2 py-1 text-sm text-rose-400',
            )}
        >
            {children}
        </div>
    );
}

FormField.Error = Error;
