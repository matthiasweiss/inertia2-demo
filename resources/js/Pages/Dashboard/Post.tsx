import { formatRelativeDate } from '@/utils/format-relative-date';

export function Post({ content, creator, createdAt }: App.Dto.PostDto) {
    return (
        <div>
            <div className="flex justify-between gap-8 text-slate-400">
                <div>{creator.email}</div>
                <div>{formatRelativeDate(createdAt)}</div>
            </div>

            <div>{content}</div>
        </div>
    );
}
