<template>
<div>
  <div class="flex justify-center h-60 bg-blueMarine">
    <div class='card-carousel'>
      <ArrowButton
        class="hidden"
        arrowType='left'
        @click.native='showPrevElement'
        :disabled='this.reachedMaxLeft'
      />
      <Slider
        class='current-element'
        :headline='currentElement.headline'
        :text='currentElement.text'
        :imgName='currentElement.imgName'
      />
      <ArrowButton
        class="hidden"
        arrowType='right'
        @click.native='showNextElement'
        :disabled='this.reachedMaxRight'
      />
    </div>
  </div>
  <div class="bg-blueMarine">
    <Indicators
      :elements='this.cards'
      :currentElementIndex='this.currentElementIndex'
      :showElement='this.showElement'
    />
  </div>
  
</div>
</template>
<script>
import Slider from '~/components/carousel/Slider.vue';
import ArrowButton from '~/components/carousel/ArrowButton.vue';
import Indicators from '~/components/carousel/Indicators.vue';

export default {
  name: 'Carousel',
  props: { cards: Array },
  components: { Slider, ArrowButton, Indicators },

  data() {
    return {
      currentElementIndex: 0
    };
  },
  computed: {
    currentElement() {
      return this.cards[this.currentElementIndex];
    },
    reachedMaxLeft() {
      return this.currentElementIndex === 0;
    },
    reachedMaxRight() {
      return this.currentElementIndex === this.cards.length - 1;
    }
  },
  methods: {
    showNextElement() {
      this.currentElementIndex++;
    },
    showPrevElement() {
      this.currentElementIndex--;
    },
    showElement(elementIndex) {
      this.currentElementIndex = elementIndex;
    }
  }
};
</script>

<style scoped>
.card-carousel {
  display: flex;
  align-items: center;
}

.btn {
  height: 90px;
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: 0.5;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
  .btn {
    display: none;
  }
}

.btn:focus {
  outline: none;
}

.btn:hover {
  opacity: 0.7;
}

.btn:disabled {
  opacity: 0.2;
  cursor: default;
}

.icon {
  height: 90px;
  width: auto;
}
</style>