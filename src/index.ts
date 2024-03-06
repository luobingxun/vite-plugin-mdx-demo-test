import { Plugin, TransformResult } from 'vite';
import { FilterPattern, createFilter } from '@rollup/pluginutils';
import { createProcessor } from '@mdx-js/mdx';

interface Options {
  exclude?: FilterPattern;
  include?: FilterPattern;
}

export default function vitePluginMdx(options: Options = {}): Plugin {
  const { exclude, include } = options;

  const filter = createFilter(include || /\.mdx$/, exclude);

  return {
    name: 'vite:plugin-mdx',
    config() {
      return {
        esbuild: {
          include: /\.ts$/
        }
      };
    },
    transform: (code, id) => {
      if (filter(id)) {
        const compiler = createProcessor({
          jsxImportSource: 'vue',
          providerImportSource: '@mdx-js/vue'
        });
        const mdxCode = compiler.processSync(code);

        return {
          code: mdxCode.value
        } as TransformResult;
      }
    }
  };
}
