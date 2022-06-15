'use strict';

const OpenAPI = require('../');

const generate = async (input, output) => {
    await OpenAPI.generate({
        input,
        output,
        httpClient: OpenAPI.HttpClient.AXIOS,
        useOptions: true,
        useUnionTypes: false,
        exportCore: true,
        exportSchemas: false,
        exportModels: true,
        exportServices: true,
        exportClient: true,
        clientName: 'ContentClient',
    });
};

const main = async () => {
    await generate('./test/spec/api.yml', './test/generated/content/');
};

main();
