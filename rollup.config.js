import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const extensions = ['.ts', '.tsx'];
const input = 'src/index.ts';
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const plugins = [
  typescript({
    typescript: require('typescript'),
  }),
];

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'es',
      sourcemap: 'inline',
    },
    plugins,
    external,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: 'es',
      sourcemap: 'inline',
    },
    plugins,
    external,
  },
];
