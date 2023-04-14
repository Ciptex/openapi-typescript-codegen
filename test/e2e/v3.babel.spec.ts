'use strict';

const { executeBrowserTestsWithInstanceClient } = require('./tests');
const compileWithBabel = require('./scripts/compileWithBabel');

describe('v3/babel', () => {
    describe('instance client', () => {
        executeBrowserTestsWithInstanceClient('v3/babel_client', 'v3', 'axios', false, true, true, compileWithBabel);
    });
});
