/////////fuction declarations

const cats = ["Milo", "Otis", "Garfield"];
function Arrayfunction(){
    beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
}

  function destructivelyAppendCat(){
    cats.push("Ralph");
    return cats
  }

  function destructivelyPrependCat(){
    cats.unshift("Bob");
    return cats
  }

  function destructivelyRemoveLastCat(){
    cats.pop();
    return cats
  }

  function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats
  }

  function appendCat(){
    let newCats = [...cats,"Broom"]
    return newCats
  }

  function prependCat(){
    let newCats = ["Arnold",...cats,]
    return newCats
  }
  
  function removeLastCat(){
    let newCats = cats.slice(0,2);
    return newCats
  }

  function removeFirstCat(){
    let newCats = cats.slice(1);
    return newCats
  }


  //////////////Function invocations.
  Arrayfunction();
  destructivelyAppendCat();
  destructivelyPrependCat();
  destructivelyRemoveLastCat();
  console.log(cats)
  

