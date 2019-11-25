//   ****************   IMPORT   ************************
import $ from 'jquery';
import { makis } from './app/data/makis';


//   ****************   GENERAL   ***********************
const app = $('#app');
console.log(app);
app.addClass('container');
app.css({ 'background-color': 'yellow'});



// //   ****************   HEADER   ************************
const header = $('<header></header>');
const h2 =$('<h2>Promotion du jour</h2>');
header.append(h2);
app.append(header);
header.css({ 'background-color': 'grey'});


// //   ****************   SECTION   ***********************

// //   ---------  CREATE Liste MAKI ------------------
// //TODO function
const divSection = $('<div></div>');
app.append(divSection);
divSection.attr('id', 'divSection');

// const divMaki = $('div');
// divSection.append(divMaki);
// divMaki.attr('id', 'divMaki');

    // fetch('assets/data/makis.json')
    // .then((reponse) => reponse.json())
    // .then((data) => {
    //     const makis = data.makis;
        for (let maki of makis){
        $('#divSection').append(
            `<figure>
                <img src="${maki.image}" />
            </figure>
            <h3 id="description">${maki.description}</h3>
            <h3 id="nom">${maki.nom}</h3>
            <h3 id="prix">prix par piece : ${maki.prix}</h3>
            <h3 id="prixBoite">prix par boite : ${maki.prix * 8}&euro;</h3>`
        );
        }
        //  }
        // for (const maki of makis) {
        // $('h3').appendTo('#divMaki').text(maki.description);
        // $('h3').appendTo('#divMaki').text(maki.nom);
        // $('h3').appendTo('#divMaki').text(maki.prix);
        // $('figure').appendTo('#divMaki');
        // $('img').appendTo('figure').text(maki.image);
        // }


    // })


//   ****************   FOOTER   ************************
