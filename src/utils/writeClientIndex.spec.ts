import type { Client } from '../client/interfaces/Client';
import { HttpClient } from '../HttpClient';
import { writeFile } from './fileSystem';
import { Templates } from './registerHandlebarTemplates';
import { writeClientIndex } from './writeClientIndex';

jest.mock('./fileSystem');

describe('writeClientIndex', () => {
    it('should write to filesystem', async () => {
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
                baseHttpRequest: () => 'baseHttpClient',
                concreteHttpRequest: () => 'concreteHttpClient',
            },
        };

        await writeClientIndex(
            client,
            templates,
            '/',
            'AppClient',
            true,
            true,
            true,
            true,
            false,
            'Service',
            HttpClient.AXIOS,
            false
        );
        expect(writeFile).toBeCalledWith('/index.ts', 'index');
    });
});
