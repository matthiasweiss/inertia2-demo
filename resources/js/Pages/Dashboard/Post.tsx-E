import { formatRelativeDate } from '@/utils/format-relative-date';

type PostProps = {
    post: App.Dto.PostDto;
};

export function Post({ post: { creator, createdAt, content } }: PostProps) {
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
