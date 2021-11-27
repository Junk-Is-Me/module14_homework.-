const object = {
    name: "Ivan",
    surname: "Andreev",
    age: 23
  };

  const string = "string";

  function check(object, string){
 if ("name" in object){
     return true;
     }
     else if("string" in string){
         return true;
     }
     else if ("apple" in object){
         return false;
     }
  }
