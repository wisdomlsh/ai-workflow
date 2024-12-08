import {get} from "@/app/utils/request";

export function getGithubLogin<T = any>(data: any) {
    return get<T>({
        url: `/api/github/login`,
        data,
    });
}
