<template>
  <main> 
    <h1>{{ headline }}</h1>
    <div>
      <Carousel :cards='cards' />
    </div>
  </main>
</template>

<script>
import Carousel from '~/components/carousel/Carousel'
export default {
  name: 'TheCarousel',
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
          headline: 'Corrado Rendo - Bbummi su nun ti scantari',
          text:
            'Noi non vogliamo perdere o dimenticare questa Sicilia tradizionale che è nel nostro cuore, ma vogliamo ricordarla con la stessa tenerezza e nostalgia che stempera il ricordo di un amore passato.',
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