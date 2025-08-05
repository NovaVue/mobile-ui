import { computed, useAttrs } from 'vue';

// 只透传 class style 和 data-* 属性
export function useFilterAttrs() {
  const attrs = useAttrs();
  return computed(() => {
    const { class: cls, style, ...rest } = attrs;
    return {
      class: cls,
      style,
      ...Object.fromEntries(
        Object.entries(rest).filter(([key]) => key.startsWith('data-')),
      ),
    };
  });
}

export function useProps(fn: Function) {
  const attrs = useFilterAttrs();
  const value = computed(fn());
  return {
    ...attrs,
    ...value.value as Object,
  };
}
