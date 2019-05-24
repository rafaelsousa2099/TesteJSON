const fs = require('fs');
var path_1 = './okada2018.tei.json';
var path_2 = './zhou2018.tei.json';

var json = JSON.parse(fs.readFileSync(path_2, "utf8"));

// Titulo -------------------------------------------------------------------------------------------------------------//
console.log(" + Title : "+json.TEI[0].teiHeader[0].fileDesc[0].titleStmt[0].title[0]._text);

// Título* - Outro jeito de acessar o título --------------------------------------------------------------------------//
console.log(" + Title* : "+json.TEI[0].teiHeader[0].fileDesc[0].sourceDesc[0].biblStruct[0].analytic[0].title[0]._text);

// Data da Publicação -------------------------------------------------------------------------------------------------//
console.log(" + Publication Date : "+json.TEI[0].teiHeader[0].fileDesc[0].publicationStmt[0].date[0]._text);

// Autores ------------------------------------------------------------------------------------------------------------//
var length_author = json.TEI[0].teiHeader[0].fileDesc[0].sourceDesc[0].biblStruct[0].analytic[0].
    author.length;
for(var i = 0; i<length_author; i++) {
    console.log(" + Author : "+json.TEI[0].teiHeader[0].fileDesc[0].sourceDesc[0].biblStruct[0].analytic[0].
        author[i].persName[0].surname[0]._text
        +" "+json.TEI[0].teiHeader[0].fileDesc[0].sourceDesc[0].biblStruct[0].analytic[0].
        author[i].persName[0].forename[0]._text);
}

// DOI ----------------------------------------------------------------------------------------------------------------//
try {
    console.log(" + DOI : "+json.TEI[0].teiHeader[0].fileDesc[0].sourceDesc[0].biblStruct[0].idno[0]._text);
}
catch(err) {
    console.log(" + DOI não foi encontrado");
}

// Keyword ------------------------------------------------------------------------------------------------------------//
console.log(" + KeyWords :");

var length_term = json.TEI[0].teiHeader[0].profileDesc[0].textClass[0].keywords[0].term.length;
for(var l = 0; l<length_term; l++) {
    console.log("   -" + json.TEI[0].teiHeader[0].profileDesc[0].textClass[0].keywords[0].term[l]._text);
}

// Abstract -----------------------------------------------------------------------------------------------------------//

try {
    if(json.TEI[0].teiHeader[0].profileDesc[0].abstract[0].div[0].hasOwnProperty('head')){
        console.log(" + Abstract : " + json.TEI[0].teiHeader[0].profileDesc[0].abstract[0].div[0].head[0]._text);
    }else console.log(" + Abstract : " + json.TEI[0].teiHeader[0].profileDesc[0].abstract[0].div[0].p[0]._text);
}
catch(err) {
    console.log(" + Abstract não foi encontrado");
}

/*
// Bibliografia -------------------------------------------------------------------------------------------------------//

var indice = 0;
var length_bibleStruct = json.TEI[0].text[0].back[0].div[0].listBibl[0].biblStruct.length;
var length_bibleStruct_author;


console.log("");
console.log("");
console.log("[List BiblStruct]");

for(var j = 0; j<length_bibleStruct; j++) {
    try{
        // Nesse if, é testado se referência possui título com valor null. Se for null, é gerado um erro.
        if(json.TEI[0].text[0].back[0].div[indice].listBibl[indice].biblStruct[j].analytic[0].title[0]._text == null) {
            throw new Error();
        }
        if(json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].hasOwnProperty('analytic')) {
            length_bibleStruct_author = json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].analytic[0].author.length;
        }else {
            length_bibleStruct_author = json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].monogr[0].author.length;
        }

        if(json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].hasOwnProperty('analytic')) {
            console.log(" - Title : " + json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].analytic[0].title[0]._text);
        }else {
            console.log(" - Title : "+json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].monogr[0].title[0]._text);
        }

        for(var k = 0; k<length_bibleStruct_author; k++) {
            if(json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].hasOwnProperty('analytic')) {
                console.log(" - Author : " + json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].analytic[0].author[k].persName[0].surname[0]._text
                    + " " + json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].analytic[0].author[k].persName[0].forename[0]._text);
            }else {
                console.log(" - Author : " + json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].monogr[0].author[k].persName[0].surname[0]._text
                    + " " + json.TEI[0].text[0].back[0].div[indice0].listBibl[0].biblStruct[j].monogr[0].author[k].persName[0].forename[0]._text);
            }
        }

        console.log(" - Publication : "+json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].monogr[0].title[0]._text);
        console.log(" - Year : "+json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].monogr[0].imprint[0].date[0]._attr.when._value);
    }catch(err){
        console.log("---")
    }
    console.log("");
}
*/

// Bibliografia -------------------------------------------------------------------------------------------------------//
var indice = 1;
var length_bibleStruct = json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct.length;
var length_bibleStruct_author;

console.log("");
console.log("");
console.log("[List BiblStruct]");

for(var j = 0; j<length_bibleStruct; j++) {
    try{
        if(json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].analytic[0].title[0]._text == null) {
            throw new Error();
        }

        if(json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].hasOwnProperty('analytic')) {
            length_bibleStruct_author = json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].analytic[0].author.length;
        }else {
            length_bibleStruct_author = json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].monogr[0].author.length;
        }

        if(json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].hasOwnProperty('analytic')) {
            console.log(" - Title : " + json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].analytic[0].title[0]._text);
        }else {
            console.log(" - Title : "+json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].monogr[0].title[0]._text);
        }

        for(var k = 0; k<length_bibleStruct_author; k++) {
            if(json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].hasOwnProperty('analytic')) {
                console.log(" - Author : " + json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].analytic[0].author[k].persName[0].surname[0]._text
                    + " " + json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].analytic[0].author[k].persName[0].forename[0]._text);
            }else {
                console.log(" - Author : " + json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].monogr[0].author[k].persName[0].surname[0]._text
                    + " " + json.TEI[0].text[0].back[0].div[indice0].listBibl[0].biblStruct[j].monogr[0].author[k].persName[0].forename[0]._text);
            }
        }

        console.log(" - Publication : "+json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].monogr[0].title[0]._text);
        console.log(" - Year : "+json.TEI[0].text[0].back[0].div[indice].listBibl[0].biblStruct[j].monogr[0].imprint[0].date[0]._attr.when._value);

    }catch(err){
        console.log("---")
    }
    console.log("");
}