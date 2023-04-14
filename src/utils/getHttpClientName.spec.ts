import { HttpClient } from '../HttpClient';
import { getHttpRequestName } from './getHttpRequestName';

describe('getHttpClientName', () => {
    it('should convert the AXIOS client', () => {
        expect(getHttpRequestName(HttpClient.AXIOS)).toEqual('AxiosHttpRequest');
    });
});
