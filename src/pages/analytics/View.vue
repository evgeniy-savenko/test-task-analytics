<template>
  <NSpin :show="isDataLoading">
    <template #description> Загрузка данных... </template>
    <div class="analytics">
      <h1 class="analytics__title">{{ analyticsTitle }}</h1>
      <Filter
        class="analytics__filter"
        :filter="analytics?.filter"
        @update:filter="onUpdateFilter"
      />
      <div class="analytics__description description">
        <h3 class="description__text">{{ analyticsDescription }}</h3>
        <NPopover trigger="hover" :show-arrow="false">
          <template #trigger>
            <IconMark class="description__icon" />
          </template>
          <span>Всплывающая подсказка про активность</span>
        </NPopover>
      </div>
      <Statistics
        :statistics="analytics?.statistics"
        :platforms-statistics="analytics?.platformsStatistics"
      />
    </div>
  </NSpin>
</template>

<script setup lang="ts">
//Нет алиасов - нет глобальных путей - плохо
import { computed, ref, onMounted } from 'vue';
import { NSpin } from 'naive-ui';
import Filter from '../../components/analytics/Filter.vue';
import { FilterEnum } from '../../models/Filter';
import { MockData } from '../../models/MockData';
import { IconMark } from '../../components/common/icons';
import { NPopover } from 'naive-ui';
import Statistics from '../../components/analytics/Statistics.vue';
import { AnaliticApiProvider } from '../../api/AnaliticApiProvider';
//Глобально если думать, то тут заголовок который мы будем брать или из внешнего шлюза или из роутера (который тоже может приходить в виде джсон с бека)
const analyticsTitle = computed(() => 'Аналитика по Автозаводской');
const currentFilter = ref<FilterEnum>(FilterEnum.MONTH);
const analyticsDescription = computed(() => {
  switch (true) {
    case currentFilter.value === FilterEnum.YESTERDAY:
      return 'Динамика рейтинга и отзывов за вчера';
    case currentFilter.value === FilterEnum.WEEK:
      return 'Динамика рейтинга и отзывов за неделю';
    case currentFilter.value === FilterEnum.MONTH:
      return 'Динамика рейтинга и отзывов за 30 дней';
    case currentFilter.value === FilterEnum.QUARTER:
      return 'Динамика рейтинга и отзывов за 90 дней';
    case currentFilter.value === FilterEnum.YEAR:
      return 'Динамика рейтинга и отзывов за год';
  }
});
const onUpdateFilter = (value: FilterEnum) => {
  currentFilter.value = value;
  fetchMockData(currentFilter.value);
};
const analytics = ref<MockData>();
const apiProvider = new AnaliticApiProvider();
const isDataLoading = ref(false)
const fetchMockData = (filter: FilterEnum) => {
  isDataLoading.value = true
  apiProvider
    .get(filter)
    .then((data) => {
      console.log(`Полученные данные:`, data);
      analytics.value = data;
      isDataLoading.value = false
    })
    .catch((error) => {
      isDataLoading.value = false
      console.error(`Произошла ошибка при получении данных:`, error);
    });
};

onMounted(() => {
  fetchMockData(currentFilter.value);
});
</script>

<style scoped lang="scss">
.analytics {
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.description {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
