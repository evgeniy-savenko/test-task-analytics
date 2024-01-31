<template>
  <div class="counter">
    <div class="counter__number" :class="counterNumberComputedClasses">
      {{ number }}
    </div>
    <div class="counter__text">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type ColorVariant = 'request' | 'positive' | 'negative';

const props = withDefaults(
  defineProps<{
    counterType?: ColorVariant | null;
    text: string | undefined;
    number: string | undefined;
  }>(),
  {
    counterType: 'request',
    text: undefined,
    number: undefined,
  }
);

const counterNumberComputedClasses = computed(() => {
  if (props.counterType === 'request') {
    return [];
  }

  const isNegative = props.counterType === 'negative';
  return [
    {
      counter__number_positive: !isNegative,
      counter__number_negative: isNegative,
    },
  ];
});
</script>

<style lang="scss" scoped>
.counter {
  display: flex;

  &__number {
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;

    &_positive {
      color: #219b60;
    }

    &_negative {
      color: #d8602a;
    }
  }

  &__text {
    padding: 0.25rem;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    word-wrap: break-word;
    max-width: 5rem;
    text-align: left;
    margin-right: auto;
  }
}
</style>
