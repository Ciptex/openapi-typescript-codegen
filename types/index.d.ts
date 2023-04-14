export declare enum HttpClient {
    AXIOS = 'axios',
}

export type Options = {
    input: string | Record<string, any>;
    output: string;
    httpClient?: HttpClient | 'axios';
    useOptions?: boolean;
    useUnionTypes?: boolean;
    exportCore?: boolean;
    exportServices?: boolean;
    exportModels?: boolean;
    exportSchemas?: boolean;
    postfix?: string;
    request?: string;
    write?: boolean;
    clientName?: string;
    awsSign?: false;
};

export declare function generate(options: Options): Promise<void>;
