// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (cat) {
    return (cats.push(cat));
}

function destructivelyPrependCat(cat) {
    return (cats.unshift(cat));
}

function destructivelyRemoveLastCat(cat){
    return (cats.pop(cat));
}

function destructivelyRemoveFirstCat(cat){
    return (cats.shift(cat));
}

function appendCat(cat){
    return ([...cats, cat]);
}

function prependCat(cat){
    return ([cat, ...cats]);
}

function removeLastCat(){
    return(cats.slice(0, 2));
}

function removeFirstCat(){
    return(cats.slice(1));
}