import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import cleanup from 'rollup-plugin-cleanup';

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist',
            name: 'react-readmore2',
            format: 'es',
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss(),
        cleanup(),
    ],
};
