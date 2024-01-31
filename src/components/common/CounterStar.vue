<template>
  <div class="counter-star">
    <div class="counter-star__rating">
      {{ rating }}
    </div>
    <div class="counter__rating-count count-rating">
      <div class="count-rating__wrapper">
        <NRate allow-half readonly :value="rating" />
        {{ formattedRatingCount }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NRate } from 'naive-ui';

const props = withDefaults(
  defineProps<{
    ratingCount: string | undefined;
    rating: string | undefined;
  }>(),
  {
    ratingCount: undefined,
    rating: undefined,
  }
);

//похожая функция используется в другом компоненте, конечно ее стоит вынести в отдельный composables
const formattedRatingCount = computed(() => {
  if (props.ratingCount === undefined) {
    return '';
  }

  const count = parseInt(props.ratingCount, 10);

  if (isNaN(count)) {
    return '';
  }

  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `${count} отзыв`;
  } else if (
    [2, 3, 4].includes(lastDigit) &&
    ![12, 13, 14].includes(lastTwoDigits)
  ) {
    return `${count} отзыва`;
  } else {
    return `${count} отзывов`;
  }
});
</script>

<style lang="scss" scoped>
.counter-star {
  display: flex;
  gap: 0.5rem;

  &__rating {
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;
  }

  &__rating-count {
    padding: 0.25rem;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    word-wrap: break-word;
    max-width: 5rem;
  }
}

.count-rating {
  &__wrapper {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
