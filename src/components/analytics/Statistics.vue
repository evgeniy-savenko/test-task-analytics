<template>
  <div class="statistics">
    <div class="statistics__ratings">
      <Counter
        counter-type="request"
        text="запросов отправлено"
        :number="statistics?.totalRequests"
      />
      <Counter counter-type="positive" text="прирост отзывов" :number="statistics?.review" />
      <Counter
        counter-type="negative"
        text="негатива перехвачено"
        :number="statistics?.negative"
      />
      <CounterStar :rating="statistics?.score.count" :rating-count="statistics?.score.total" />
    </div>
    <div class="statistics__table">
      <table>
        <thead>
          <tr>
            <th class="statistics-table-th-xl" rowspan="2">
              Площадки <br />
              и их активность
              <NPopover trigger="hover" :show-arrow="false">
                <template #trigger>
                  <IconMark class="description__icon" />
                </template>
                <span>Всплывающая подсказка про активность</span>
              </NPopover>
            </th>
            <th class="statistics-table-th-sm" colspan="2">Рейтинг и отзывы</th>
            <th class="statistics-table-th-md" rowspan="2">
              Прирост отзывов <br />
              и рейтинга
            </th>
            <th class="statistics-table-th-md" rowspan="2">
              Доля негативных <br />
              отзывов на сегодня
            </th>
            <th class="statistics-table-th-sm" rowspan="2">
              Место <br />
              в городе
            </th>
          </tr>
          <tr>
            <th class="statistics-table-th-sm">Начало</th>
            <th class="statistics-table-th-sm">Конец</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(platform, index) of platformsStatistics" :key="index">
            <TbodyTr :platform="platform" />
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import Counter from '../common/Counter.vue';
import CounterStar from '../common/CounterStar.vue';
import { NPopover } from 'naive-ui';
import { IconMark } from '../../components/common/icons';
import TbodyTr from '../../components/analytics/inner-components/TbodyTr.vue';
import {Statistics, PlatformStatistics} from '../../models/MockData'

withDefaults(
  defineProps<{
    statistics: Statistics | null;
    platformsStatistics: PlatformStatistics[] | null;
  }>(),
  {
    statistics: null,
    platformsStatistics: null
  }
);

</script>

<style lang="scss" scoped>
.statistics {
  display: flex;
  border: 1px solid #d2d2d2;
  padding: 1.5rem 2rem;
  border-radius: 0.625rem;
  flex-direction: column;

  &__ratings {
    display: flex;
    gap: 2.5rem;
  }

  &__table {
    margin-top: 1rem;
  }
}
</style>
