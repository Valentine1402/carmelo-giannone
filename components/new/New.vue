<template>
  <section>
    <h1
      class="font-semibold bg-backgroundBlue text-headingBlue md:h-20 py-3 text-xl text-center md:text-4xl md:pt-7"
    >
      Nuova pubblicazione
    </h1>
    <div class= "bg-backgroundBlue  text-headingBlue md:px-10 px-6">  
      <span v-if="!readMoreActivated">{{longText.slice(0, 188)}}</span>
      <a class="font-bold cursor-pointer" v-if="!readMoreActivated" @click="activateReadMore">
            leggi di più...
        </a>
        <span  v-if="readMoreActivated" v-html="longText"></span>
    </div>
    <div class="text-headingBlue text-center bg-backgroundBlue flex flex-row justify-center items-center" >
    
     <p class="text-lg">Acquista il nuovo libro su </p>

         <a href="https://www.amazon.it/dp/B0CCT1Y412?ref_=cm_sw_r_apin_dp_J79A41BRS2SSSYCK4VYM" target="_blank" class="cursor-pointer font-bold ">
          <div class="flex justify-center flex-row items-center">
  
          <img
          class="w-14 md:w-20 ml-2 mr-2 mb-4 mt-4"
          src="~/assets/img/amz.png"
          alt=""
        />
      
     <p class="font-bold cursor-pointer ">CLICCA QUI</p> 
      </div>
     </a>
     <div>

    
   
     </div>
      </div>
    <div class="bg-backgroundBlue pb-10 flex justify-center ">
      <a href="https://www.amazon.it/dp/B0CCT1Y412?ref_=cm_sw_r_apin_dp_J79A41BRS2SSSYCK4VYM" target="_blank" class="cursor-pointer font-bold relative">
        <div class="absolute top-0 right-0"> <img
        class="w-20"
        src="~/assets/img/novita.png"
        alt=""
      /></div>
      <img
        class=" md:w-80"
        src="~/assets/img/books/piramidi.jpg"
        alt=""
      />
</a>
    </div>
  </section>
</template>
<script>
export default {
  name: "new",
      data(){
        return {longText: `Umande, figlia di un ex ufficiale dell'esercito tedesco di stanza in Tanganica e di una principessa masai, rimane orfana alla fine della Prima guerra mondiale dopo l'uccisione dei genitori avvenuta per mano di un gruppo di disertori inglesi. Costretta a riparare in Germania insieme ai suoi nonni e all'ex scudiero del padre, diventata maggiorenne promette all'anziano nonno, ormai morente, di ritornare in Tanganica e recuperare i resti di suo figlio e di sua nuora e dare loro, finalmente, una degna sepoltura. Il viaggio che Umande affronterà insieme al fedele Chausiku, riserverà alla giovane ragazza avventure e incredibili incontri. Ladruncoli, predoni, profanatori di antiche tombe Egizie, danzatrici, sultani, regine, frequentatori e frequentatrici di bettole e luoghi di malaffare saranno protagonisti insieme alla giovane nel lungo viaggio che la porterà dalla Germania in Tanganica. L'Egitto, terra ricca di storia, di arte e di leggende sarà per la protagonista una tappa fondamentale dove conoscerà alcuni personaggi che stravolgeranno la sua esistenza. Lungo il viaggio non mancano incontri straordinari ed emozionanti. La lussureggiante savana africana, il deserto, ma soprattutto il Nilo faranno vivere a Umande emozioni uniche. Il viaggio, non privo di pericoli e suspense si rivelerà per la giovane una corsa inarrestabile verso il suo nuovo destino.`,
            readMoreActivated: false
        }
    },
    methods: {
        activateReadMore(){
            this.readMoreActivated = true;
        },}
};
</script>
