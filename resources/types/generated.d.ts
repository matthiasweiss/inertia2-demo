declare namespace App.Dto {
    export type DashboardResponseDto = {
        feed: App.Dto.FeedDto;
        myLatestPosts: Array<App.Dto.PostDto>;
    };
    export type FeedDto = {
        posts: Array<App.Dto.PostDto>;
    };
    export type PostDto = {
        id: number;
        content: string;
        creator: App.Dto.UserDto;
        createdAt: string;
    };
    export type UserDto = {
        email: string;
    };
}
