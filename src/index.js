//   ****************   IMPORT   ************************
import $ from 'jquery';
import { makis } from './app/data/makis';


//   ****************   GENERAL   ***********************
$('#app').addClass('container');



//   ****************   HEADER   ************************



//   ****************   SECTION   ***********************

//   ---------  CREATE Liste MAKI ------------------
//TODO function
const divSection = $('div');
$('#app').append(divSection);
divSection.attr('id','divSection');
//  $('div').appendTo('#app').attr('id','divSection');
//  $('div').appendTo('#divSection').attr('id','divMaki');

    // fetch('assets/data/makis.json')
    // .then((reponse) => reponse.json())
    // .then((data) => {
    //     const makis = data.makis;
        // for (let maki of makis){
        // $('#divMaki').text(
        //     `<figure>
        //         <img src="${maki.image}" />
        //     </figure>
        //     <h3 id="description">${maki.description}</h3>
        //     <h3 id="nom">${maki.nom}</h3>
        //     <h3 id="prix">prix par piece : ${maki.prix}</h3>
        //     <h3 id="prixBoite">prix par boite : ${maki.prix * 8}&euro;</h3>`
        // );
        //  }
        // for (let maki of makis){
        // $('h3').appendTo('#divMaki').text(maki.description);
        // $('h3').appendTo('#divMaki').text(maki.nom);
        // $('h3').appendTo('#divMaki').text(maki.prix);
        // $('figure').appendTo('#divMaki');
        // $('img').appendTo('figure').text(maki.image);
        // }



    // })







//   ****************   FOOTER   ************************
