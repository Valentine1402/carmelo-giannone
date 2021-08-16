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
          headline: 'Umande',
          text:
            "I dettagli delle descrizioni hanno un taglio cinematografico, non è difficile immergersi nei colori dell'africa. Il lettore p protetto verso straordinarie e caleidoscopiche atmosfere che solo il continente nero può offrire.",
          imgName: 'cloud.svg'
        },
        {
          headline: 'Corrado Rendo - Innocenti evasioni',
          text:
            "Amicizia, un gruppo di persone giovani che ha fatto di questo sentimento il fulcro di un'esperienza straordinaria e irripetibile.",
          imgName: 'antenna.svg'
        }
      ]
    };
  }
};
</script>