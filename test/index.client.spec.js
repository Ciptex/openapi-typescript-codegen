'use strict';

const OpenAPI = require('../dist');
const glob = require('glob');
const fs = require('fs');

async function gen(version, postfix) {
    await OpenAPI.generate({
        input: `./test/spec/v${version}${postfix}.json`,
        output: `./test/generated/v${version}_client${postfix}`,
        httpClient: OpenAPI.HttpClient.AXIOS,
        useOptions: false,
        useUnionTypes: false,
        exportCore: true,
        exportSchemas: true,
        exportModels: true,
        exportServices: true,
        clientName: 'TestClient',
    });
    return glob.sync(`./test/generated/v${version}_client${postfix}/**/*.ts`);
}

describe('v3', () => {
    it('should generate', async () => {
        (await gen(3, '')).forEach(file => {
            const content = fs.readFileSync(file, 'utf8').toString();
            expect(content).toMatchSnapshot(file);
        });
    });

    it('should generate with no tags', async () => {
        (await gen(3, '_no_tags')).forEach(file => {
            const content = fs.readFileSync(file, 'utf8').toString();
            expect(content).toMatchSnapshot(file);
        });
    });

    it('should generate with combined tags', async () => {
        (await gen(3, '_tags_combined')).forEach(file => {
            const content = fs.readFileSync(file, 'utf8').toString();
            expect(content).toMatchSnapshot(file);
        });
    });
});
