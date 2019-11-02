function initPigLatinGenerator() {
    //alert("Let's start coding...");
    setupTranslateButton();
}

// if a, e, i, o, u => in = inyay
// else the = hetay
// if sonderzeichen im wort nix machen

function setupTranslateButton() {
    // Eventlistener auf Knopf
    let translateButton = document.getElementById("generate_pig_latin_button");
    translateButton.addEventListener("click", translateText);
}

function translateText() {
    // Eingegebenen Satz holen
    let sentence = document.getElementById("input_sentence").value;
    // Satz to lower case
    sentence = sentence.toLowerCase();
    console.log(sentence);

    // Satz in einzelwörter teilen Array
    let words = splitText(sentence);

    // pigLatin Übersetzter
    sentence = pigLatinGenerator(words);


    // Text ausgeben
    textOutput(sentence);
}

function textOutput(text) {
    let output = document.getElementById("pig_latin_output");
    output.innerHTML = text;
}

function splitText(text) {
    let words = [];
    let count = 0;
    words[count] = "";
    for (let i = 0; i <= text.length; i++) {
        if (text.charAt(i) != " ") {
            words[count] += text.charAt(i);
        } else {
            count++;
            words[count] = "";
        }
    }
    // Debug
    for (let i = 0; i < words.length; i++) {
        console.log(words[i]);
    }

    return words;
}

function pigLatinGenerator(text) {
    let sentence = "";

    for (let i = 0; i < text.length; i++) {
        if (symbolTest(text[i]) === true) {
            // wort hat Sonderzeichen
            sentence += text[i];
            sentence += " ";
        } else if (firstLetterTest(text[i]) == true) {
            // Erster Buchstabe ist ein Vokal
            console.log("vokal enthalten")
            sentence += text[i];
            sentence += "yay";
            sentence += " ";
        } else {
            // Erster Buchstabe ist ein Konsonant
            console.log("konsonant enthalten")
            sentence += konsonantSwitch(text[i]);
            sentence += "ay";
            sentence += " ";
        }
    }

    return sentence;
}

function symbolTest(wort) {
    if (/^[a-zA-Z]+$/.test(wort) == false) {
        // Wort hat Sonderzeichen
        console.log("Hat sonderzeichen");
        return true;
    } else {
        // Wort hat keine Sonderzeichen
        console.log("Hat keine sonderzeichen");
        return false;
    }
}

function firstLetterTest(wort) {
    let vokal = 'aeiou';
    for (let i = 0; i < vokal.length; i++) {
        if (wort.charAt(0) === vokal.charAt(i)) {
            // Vokal enthalten
            return true;
        }
    }
    // Konsonant enthalten
    return false;
}

function konsonantSwitch(wort) {
    let firstLetter = wort.charAt(0);
    let newWord = "";
    for (let i = 1; i < wort.length; i++) {
        newWord += wort.charAt(i);
    }
    newWord += firstLetter;
    return newWord;
}
