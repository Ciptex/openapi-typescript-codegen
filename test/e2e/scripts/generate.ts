import { generate as __generate } from '../../../';

export const generate = async (
    dir: string,
    version: string,
    client: 'axios',
    useOptions: boolean = false,
    useUnionTypes: boolean = false
) => {
    await __generate({
        input: `./test/spec/${version}.json`,
        output: `./test/e2e/generated/${dir}/`,
        httpClient: client,
        useOptions,
        useUnionTypes,
    });
};
