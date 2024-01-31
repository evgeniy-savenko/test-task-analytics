<template>
  <tr>
    <td>
      <div class="platform">
        <NSwitch :value="platform.isActive" />
        <div class="platform__wrapper">
          <component class="platform-icon" :is="icons[platform.company]" />
          <a class="platform-name" href="#">
            <u>{{ platform.company }}</u>
          </a>
        </div>
      </div>
    </td>
    <td>
      <div class="rating">
        <div class="rating__count" :class="ratingClass">
          {{ platform.rating.startPeriod.rating }}
        </div>
        <div class="rating__total">
          {{ platform.rating.startPeriod.total }}
        </div>
      </div>
    </td>
    <td>
      <div class="review">
        <div class="review__count" :class="reviewClass">
          {{ platform.rating.endPeriod.rating }}
        </div>
        <div class="review__total">{{ platform.rating.endPeriod.total }}</div>
      </div>
    </td>
    <td>
      <div class="rating-up">
        <div class="rating-up__count">
          {{ platform.ratingChanges.rating }}
        </div>
        <div class="rating-up__review">
          {{ platform.ratingChanges.review }}
        </div>
      </div>
    </td>
    <td>
      <div class="negative-review">
        <div class="negative-review__percentage">
          {{ platform.negativeRatingToday.percentage }}
        </div>
        <div class="negative-review__text">
          <a href="#">{{ formattedReviewCount }}</a> из
          {{ platform.total }}
        </div>
      </div>
    </td>
    <td>
      <div class="place">
        <template v-if="platform.place">
          <div class="place__text">{{ platform.place }} из 2023</div>
          <div class="place__icon">🠕</div>
        </template>
        <template v-else>
          <div class="place__text">Скоро</div>
        </template>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NSwitch } from 'naive-ui';
import {
  IconYandex,
  IconProdoctorov,
  IconGoogle,
  IconZoon,
  IconTwoGis,
  IconYell,
} from '../../../components/common/icons/customIcons';
import { PlatformStatistics } from '../../../models/MockData';

const props = withDefaults(
  defineProps<{
    platform: PlatformStatistics | null;
  }>(),
  {
    platform: null,
  }
);

const icons = {
  Яндекс: IconYandex,
  Продокторов: IconProdoctorov,
  Google: IconGoogle,
  Zoon: IconZoon,
  '2ГИС': IconTwoGis,
  Yell: IconYell,
};

const ratingClass = computed(() => {
  const rating = parseFloat(props.platform.rating.startPeriod.rating);

  if (isNaN(rating)) {
    return '';
  } else if (rating < 4.0) {
    return 'rating__count_red';
  } else if (rating >= 4.0 && rating < 4.5) {
    return 'rating__count_yellow';
  } else {
    return 'rating__count_green';
  }
});

const reviewClass = computed(() => {
  const review = parseFloat(props.platform.rating.endPeriod.rating);

  if (isNaN(review)) {
    return '';
  } else if (review < 4.0) {
    return 'review__count_red';
  } else if (review >= 4.0 && review < 4.5) {
    return 'review__count_yellow';
  } else {
    return 'review__count_green';
  }
});

const formattedReviewCount = computed(() => {
  const count = parseFloat(props.platform.negativeRatingToday.count);

  if (count > 0) {
    return `${count} отзыв${pluralize(count)}`;
  } else {
    return 'Нет отзывов';
  }
});

function pluralize(number: number) {
  if (number % 10 === 1 && number % 100 !== 11) {
    return '';
  } else if (
    [2, 3, 4].includes(number % 10) &&
    ![12, 13, 14].includes(number % 100)
  ) {
    return 'а';
  } else {
    return 'ов';
  }
}
</script>

<style lang="scss" scoped>
.platform {
  display: flex;
  gap: 1rem;
  align-items: center;

  &__wrapper {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }
}

.platform-name {
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
}

.rating {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__count {
    border-radius: 0.3125rem;
    background: #fcf0ea;
    padding: 0.15rem 0.35rem;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;

    &_red {
      background: #fcf0ea;
    }

    &_yellow {
      background: #fffbd8;
    }

    &_green {
      background: #e9f6f0;
    }
  }

  &__total {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    color: #9a9a9a;
  }
}

.review {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__count {
    border-radius: 0.3125rem;
    background: #fcf0ea;
    padding: 0.15rem 0.35rem;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;

    &_red {
      background: #fcf0ea;
    }

    &_yellow {
      background: #fffbd8;
    }

    &_green {
      background: #e9f6f0;
    }
  }

  &__total {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    color: #9a9a9a;
  }
}

.negative-review {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  margin-right: 1rem;

  &__percentage {
    border-radius: 0.3125rem;
    background: #e9f6f0;
    padding: 0.15rem 0.35rem;
  }

  &__text {
    text-wrap: nowrap;
    :first-child {
      color: #d8602a;
    }
  }
}

.place {
  display: flex;
  flex-direction: row;

  &__text {
    margin-right: 0.5rem;
    text-wrap: nowrap;
  }

  &__icon {
    color: #219b60;
  }
}

.rating-up {
  &__count {
    color: #219b60;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
  }
  &__review {
    color: #9a9a9a;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
  }
}
</style>
