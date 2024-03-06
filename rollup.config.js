import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import cjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: './src/index.ts',
  plugins: [resolve(), cjs(), typescript({ sourceMap: false })],
  output: [
    {
      format: 'cjs',
      file: 'dist/index.cjs.js',
      compact: true
    },
    {
      format: 'es',
      file: 'dist/index.es.js',
      compact: true
    }
  ]
});
