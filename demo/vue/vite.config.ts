import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueMdx from '../../src/index';

export default defineConfig({
  plugins: [vueMdx(), vueJsx({ include: /\.(tsx|jsx|mdx)/ })]
});
