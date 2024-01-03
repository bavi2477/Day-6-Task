class Person {
    constructor(name, age, email, place) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.place = place;
    }
  
    introduce() {
        console.log("Hi, I am " + this.name + " and I am from " + this.place);
    }
  }
  

  const person1 = new Person("Bavithra", 25, "bavithra.sjh@gmail.com", "sivakasi");
  person1.introduce();