<template>
 <div>
   <ul>
    <books :cards="books"></books>
  </ul>
 </div>
</template>

<script>
import books from '~/components/books/Books.vue'
export default {
  name:'shop',
  components: {
    books
  },
  data() {
    return {
      books: [
          {
          id: 0,
          title:'L\'ombra delle piramidi',
          description: "Umande, ormai diciannovenne, intraprende un viaggio, alla ricerca del suo passato. Attraverserà il sud est d'Europa e alcuni stati nord africani prima di raggiungere la sua meta, il Tanganika. L'Egitto rappresenterà, per lei, quanto di più immaginifico potesse sognare di vedere. Tradimenti, incontri con personaggi incredibili, animali feroci, ladri di reperti preziosi faranno da cornice al viaggio ma l'amore inaspettato e improvviso sarà ciò che determinerà il suo futuro.",
          image: 'piramidi.jpg',
          year: '2023',
          editor:'La bussola'
        },
        {
          id: 1,
          title:'Umande',
          description: "Un romanzo ambientato nell'ex Tanganika a cavallo della prima guerra mondiale dove il conflitto, gli animali, i personaggi vivono incredibili avventure nella sterminata savana africana. I dettagli delle descrizioni hanno un taglio cinematografico e non è difficile immergersi nei colori della Mia Africa o nei fotogrammi di Tarzan delle scimmie, le savane africane dei grandi Wilbur Smith, Ernst Hemingway e Karen Blixen.",
          image: 'umande1.jpg',
          year: '2016',
          editor:'Genius loci Editrice'
        },
         {
          id: 2,
          title:'Il teatro del sole',
          description: "Uno spaccato di vita siciliana ambientato nella città di Palermo, con i suoi odori, umori, vicoli, piazze e ci coinvolge emotivamente nelle vicende quotidiane, apparentemente banali e frivole ma profondamente umane dei suoi personaggi.",
          image: 'ilTeatro1.jpg',
          year: '2012',
          editor:'Genius Loci Editrice (Ragusa)'
        },
        {
          id: 3,
          title:'Latru ri tumazzu',
          description: "Nell'incantevole scenario delle nostre spiagge, all'ombra della famosa residenza del famigerato commissario Montalbano si svolge tra sollazzi e situazioni a dir poco incresciose, una trama mozzafiato con esito finale, come canonicamente avviene in un simile genere, im-pre-ve-di-bi-le.",
          image: 'latru.jpg',
          year: '2009',
          editor:'Officine Grafiche MODERNA (Modica)'
        },
        {
          id: 4,
          title:"Ch'an Rak Khun - Ti amo",
          description: "E' un romanzo che presenta una storia ambientata all'epoca dello Tsunami del 26 dicembre 2004 con riferimento all'isola Thailandese di Phuket. Tra scenari di distruzione e disperazione il protagonista sente crescere in se un sentimento più forte e vero della vita...",
          image: 'chan1.jpg',
          year: '2006',
          editor:'Associazione Culturale Dialogo (Modica)'
        },
        {
          id: 5,
          title:'Ti prego, fammi coraggio',
          description: "Viaggio nell'universo della terza età. Quello che si fa per gli anziani non è mai sufficiente la semplice solidarietà è inadeguata, l'assistenza materiale ed il sostegno morale forse non bastano.",
          image: 'TiPrego1.jpg',
          year: '2005',
          editor:'Officine Grafiche MODERNA (Modica)'
        },
        {
          id: 6,
          title:'Nnautru ccì nnè !!',
          description: "Storie vere, aneddoti, esperienze di un informatore medico-scientifico del farmaco...Con tratti essenziali e fluidi, ma realistici, ci mostra il lato più umano di quelle persone da noi medici chiamati collaboratori scientifici, volgarmente denominati commessi dai nostri bravi pazienti..",
          image: 'nautru1.jpg',
          year: '2003',
          editor:'Edizioni Tomaselli'
        },
        {
          id: 7,
          title:'BBummi su...nun ti scantari',
          description: "Il libro si inquadra in quel processo di recupero e valorizzazione delle tradizioni popolari, che è stato messo in atto da poeti e scrittori locali, al fine di salvaguardare dalla furia devastatrice del tempo quelle ricchezze e risorse che fanno parte integrante della nostra cultura e della nostra civiltà.",
          image: 'BummiSu1.jpg',
          year: '2000',
          editor:'Libreria Editrice Urso (Avola)'
        },
        {
          id: 8,
          title:'Innocenti evasioni',
          description: "Diario intimistico sull'amicizia. Gli amici della compagnia TDC ecco come eravamo etichettati da quanti amavano circondarsi della nostra compagnia. Amici. Ed è stato proprio questo sentimento, l'amicizia, a fare di noi un gruppo unico, straordinario ed irripetibile.",
          image: 'innocentiEvasioni1.jpg',
          year: '1998',
          editor:'Edizioni Cottonaro'
        }
      ]
    }
  }
}
</script>