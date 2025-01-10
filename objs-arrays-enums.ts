// const person: {
//   name: string;
//   nickname: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Burak",
//   nickname: "CodeCaptain",
//   age: 35,
//   hobbies: ["Coding", "Cooking", "Learning"],
//   role: [2, "author"],
// };

enum Role { ADMIN = 'ADMIN', AUTHOR = 100, READ_ONLY = 0}

const person = {
  name: "Burak",
  nickname: "CodeCaptain",
  age: 35,
  hobbies: ["Coding", "Cooking", "Learning"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports", "Swimming", "Fishing"];

console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("Nickname: " + person.nickname);

person.hobbies.forEach((hobby) => {
  console.log("Hobby: " + hobby.toUpperCase());
});

person.hobbies.push(...favoriteActivities);

person.hobbies.forEach((hobby) => {
  console.log("Hobby: " + hobby.toUpperCase());
});

//person.role.push("admin"); // push operation is a exception. Need to be avoided for tuples cuz typescript can not detect it
//person.role[1] = 10; // this error will be thrown by typescript

if(person.role === Role.ADMIN) {
    console.log("is admin");
}else {
    console.log("is not admin");
}
console.log(person.role);
