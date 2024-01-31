<template>
  <div class="filter">
    <NButton ref="button" @click="onClickPickFilter(FilterEnum.YESTERDAY)"
      >Вчера</NButton
    >
    <NButton ghost @click="onClickPickFilter(FilterEnum.WEEK)">Неделя</NButton>
    <NButton ghost @click="onClickPickFilter(FilterEnum.MONTH)"
      >30 дней</NButton
    >
    <NButton ghost @click="onClickPickFilter(FilterEnum.QUARTER)"
      >90 дней</NButton
    >
    <NButton ghost @click="onClickPickFilter(FilterEnum.YEAR)">Год</NButton>
    <NDatePicker v-model:value="datePickerRange" :disabled="true" type="daterange" clearable />
  </div>
</template>

<script setup lang="ts">
import { NButton, NDatePicker } from 'naive-ui';
import { FilterEnum } from '../../models/Filter';
import { ref } from 'vue';
const emit = defineEmits<{
  (e: 'update:filter', value: FilterEnum): void;
}>();
//Тут можно было бы ставить кнопку в фокус при перезагрузке страницы
// const button = ref(null)

//Не совсем понял это инпут или дейтПикер, потому что на макете при пикнутом фильтре 30 дней это поле задизейблено, вставил дейтПикер, но по сути сейчас он ничего не делает
const datePickerRange = ref<[number, number]>([1183135260000, Date.now()])
const onClickPickFilter = (value: FilterEnum) => {
  emit('update:filter', value);
};
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  gap: 1.25rem;
}
</style>
