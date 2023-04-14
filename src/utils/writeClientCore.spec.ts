import type { Client } from '../client/interfaces/Client';
import { HttpClient } from '../HttpClient';
import { writeFile } from './fileSystem';
import { Templates } from './registerHandlebarTemplates';
import { writeClientCore } from './writeClientCore';

jest.mock('./fileSystem');

describe('writeClientCore', () => {
    const client: Client = {
        server: 'http://localhost:8080',
        version: '1.0',
        edgeRegions: [],
        models: [],
        services: [],
    };

    const templates: Templates = {
        index: () => 'index',
        client: () => 'client',
        exports: {
            model: () => 'model',
            schema: () => 'schema',
            service: () => 'service',
        },
        core: {
            settings: () => 'settings',
            apiError: () => 'apiError',
            apiRequestOptions: () => 'apiRequestOptions',
            apiResult: () => 'apiResult',
            cancelablePromise: () => 'cancelablePromise',
            baseHttpRequest: () => 'baseHttpRequest',
            concreteHttpRequest: () => 'concreteHttpRequest',
        },
    };

    it('should write to filesystem', async () => {
        await writeClientCore(client, templates, '/', HttpClient.AXIOS, false);

        expect(writeFile).toBeCalledWith('/OpenAPI.ts', 'settings');
        expect(writeFile).toBeCalledWith('/ApiError.ts', 'apiError');
        expect(writeFile).toBeCalledWith('/ApiRequestOptions.ts', 'apiRequestOptions');
        expect(writeFile).toBeCalledWith('/ApiResult.ts', 'apiResult');
        expect(writeFile).toBeCalledWith('/CancelablePromise.ts', 'cancelablePromise');
        expect(writeFile).toBeCalledWith('/BaseHttpRequest.ts', 'baseHttpRequest');
        expect(writeFile).toBeCalledWith('/AxiosHttpRequest.ts', 'concreteHttpRequest');
    });
});
