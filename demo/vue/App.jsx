import { createVNode, defineComponent } from 'vue';
import { MDXProvider } from '@mdx-js/vue';

import Hello from './Hello.mdx';

const MyHeading = defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  setup(props, { slots }) {
    return () =>
      createVNode(`div`, { ...props }, slots.default && slots.default());
  }
});

export default defineComponent(() => {
  return () => (
    <MDXProvider
      components={{
        h1: MyHeading
      }}
    >
      <Hello />
    </MDXProvider>
  );
});
