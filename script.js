class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = Number(_age);
    this.location = _location;
  }
  ageCompare(userX) {
    if (this.age > userX.age) {
      return `${this.firstName} è più vecchio di ${userX.firstName}`;
    } else {
      return `${userX.firstName} è più vecchio di ${this.firstName}`;
    }
  }
}

const user1 = new User("Gandalf", "Mitrandir", "312", "Middle Earth");
const user2 = new User("Bilbo", "Baggins", "111", "The Shire");
const user3 = new User("Sauron", "The Eye", "3019", "Barah-Dur");
const user4 = new User("Aragorn", "Granpasso", "96", "Numenor");
const user5 = new User("Thorin", "Durin", "250", "Erebohr");

console.log(user1.ageCompare(user2));
console.log(user3.ageCompare(user4));
console.log(user5.ageCompare(user1));

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  getPetInfo() {
    return ` Pet Name: ${this.petName}, Owner Name: ${this.ownerName}, Species: ${this.species}, Breed: ${this.breed}`;
  }
  sameName(owner) {
    if (this.ownerName === owner.ownerName) {
      return `${this.petName} e  ${owner.petName} hanno lo stesso padrone`;
    } else {
      return null;
    }
  }
}

const form = document.getElementById("petForm");
const pets = [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const petName = document.getElementById("name").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.forEach((pet) => {
    const message = newPet.sameName(pet);
    if (message) {
      console.log(message); // Stampa il messaggio in console
    }
  });

  // Aggiungi il nuovo pet all'array
  pets.push(newPet);
  const output = document.getElementById("output");
  const petInfo = document.createElement("li");
  petInfo.textContent = newPet.getPetInfo();
  output.appendChild(petInfo);

  form.reset();
});
