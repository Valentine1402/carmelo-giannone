<template>
  <div>
    <main class="h-96">
      <h1>{{ headline }}</h1>
      <div class='section'>
        <h2>{{this.sections[0].headline}}</h2>
        <Carousel :cards='cards' />
      </div>
    </main>
  </div>
</template>

<script>
import Carousel from '~/components/carousel/Carousel'
export default {
  name: 'app',
  components: { Carousel },
  data() {
    return {
      headline: '',
      sections: [
        { headline: '' },
        {
          headline: ''
        }
      ],
      cards: [
        {
          headline: 'Slide 1',
          text:
            'By using the CachingAPI all static elements on an app can be pre-cached',
          imgName: 'setting.svg'
        },
        {
          headline: 'Slide 2',
          text:
            'User inputs entered when offline are sent in the background once they get connectivity.',
          imgName: 'cloud.svg'
        },
        {
          headline: 'Slide 3',
          text:
            'The Notifications API lets us send push notifications to re-engage users.',
          imgName: 'antenna.svg'
        }
      ]
    };
  }
};
</script>