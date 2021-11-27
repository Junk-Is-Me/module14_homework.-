const object = {
    name: "Ivan",
    surname: "Andreev",
    age: 23
  };
  
    function person(object){
      
  for (let key in object) {
  
      console.log(key);
  }
  
  for (let key in object) {
  
      console.log(object[key]);
  
  }
  }
  
  console.log(person(object));