import type {
    AxiosProgressEvent,
    AxiosResponse,
    GenericAbortSignal,
} from "axios";
import request from "./axios";

export interface HttpOption {
    url: string;
    data?: any;
    method?: string;
    headers?: any;
    onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void;
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
    signal?: GenericAbortSignal;
    beforeRequest?: () => void;
    afterRequest?: () => void;
    noBase?: boolean;
}

export interface Response<T = any> {
    fileUrl: any;
    data: T;
    message: string | null;
    status: string;
    code?: number;
}

function http<T = any>({
                           url,
                           data,
                           method,
                           headers,
                           onDownloadProgress,
                           signal,
                           beforeRequest,
                           afterRequest,
                           onUploadProgress,
                       }: HttpOption) {
    const successHandler = (res: AxiosResponse<Response<T>>) => {
        if (
            res.data?.status === "Success" ||
            typeof res.data === "string" ||
            res.data?.code === 200
        ) {
            return res.data;
        }

        return Promise.reject(res.data);
    };

    const failHandler = (error: any) => {
        afterRequest?.();

        throw new Error(error?.message || "Error");
    };

    beforeRequest?.();

    method = method || "GET";

    const params = Object.assign(
        typeof data === "function" ? data() : (data ?? {}),
        {},
    );

    return method === "GET"
        ? request
            .get(url, {params, signal, onDownloadProgress, onUploadProgress})
            .then(successHandler, failHandler)
        : request
            .post(url, params, {
                headers,
                signal,
                onDownloadProgress,
                onUploadProgress,
            })
            .then(successHandler, failHandler);
}

export function get<T = any>({
                                 url,
                                 data,
                                 method = "GET",
                                 onDownloadProgress,
                                 signal,
                                 beforeRequest,
                                 afterRequest,
                             }: HttpOption): Promise<Response<T>> {
    return http<T>({
        url,
        method,
        data,
        onDownloadProgress,
        signal,
        beforeRequest,
        afterRequest,
    });
}

export function post<T = any>({
                                  url,
                                  data,
                                  method = "POST",
                                  headers,
                                  onDownloadProgress,
                                  signal,
                                  beforeRequest,
                                  afterRequest,
                                  onUploadProgress,
                              }: HttpOption): Promise<Response<T>> {
    return http<T>({
        url,
        method,
        data,
        headers,
        onDownloadProgress,
        signal,
        beforeRequest,
        afterRequest,
        onUploadProgress,
    });
}

export default post;
