declare namespace App.Dto {
    export type DashboardDto = {
        myLatestPosts: Array<App.Dto.PostDto>;
        feed: null | App.Dto.FeedDto;
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
