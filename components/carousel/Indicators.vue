<template>
  <ul class="text-center pt-12 md:pt-4 py-3">
    <li
      v-for='(_, index) in elements'
      class='dot'
      :key='index'
      :class="{'dot-selected': currentElementIndex === index}"
    >
      <button
        class='indicator-btn'
        @click='showElement(index)'
        :disabled=' currentElementIndex === index'
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Indicators',
  props: { elements: Array, currentElementIndex: Number, showElement: Function }
};
</script>
<style scoped>
.dot {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: white;
  opacity: 0.2;
  cursor: pointer;
  position: relative;
  margin: 10px;
}

.dot-selected {
  opacity: 0.8;
  cursor: default;
}

.indicator-btn {
  position: absolute;
  left: 0px;
  padding: 0px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: transparent;
  border: none;
}

ul li{
  display: inline-block;
}
</style>
