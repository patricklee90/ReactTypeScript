// const a = "1";
// console.log("aaa", a);

// const hello = "world";

// // better to assign with declaration
// let hello: string = "world";

// const getFullName = (name: string, surname: string): string => {
//   return name + " " + surname;
// };

// console.log(getFullName("Monster", "Lessons"));

// interface UserInterface {
//   name: string;
//   age?: number;
//   getMessage(): string;
// }

// const user: UserInterface = {
//   name: "Monster",
//   age: 30,
//   getMessage() {
//     return "Hello" + this.name;
//   },
// };

// const user2: UserInterface = {
//   name: "Jack",
//   age: 20,
//   getMessage() {
//     return "Hello" + this.name;
//   },
// };

//// Union & task alias

// type ID = string;
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null;

// interface UserInterface {
//   id: ID;
//   name: string;
//   surname: string;
// }

// const popularTags: PopularTag[] = ["dragon", "coffee"];

// const dragonsTag: MaybePopularTag = "dragon";

// let username: string = "alex";

// let pageName: string | number = "1";

// let errorMessage: string | null = null;

// let user: UserInterface | null = null;

// let someProp: string | number | null | undefined | string[] | object;

// ### Any/ void/ never/ unknown

// const doSomething = (): void => {
//   console.log("do something");
// };

// const foo: any = "foo";

// const doSomething2 = (): never => {
//   throw "never";
// };

// let vAny: any = 10;
// let vUnknown: unknown = 10;

// let s1: string = vAny;
// let s2: unknown = vUnknown as string;

// let pageNumber: string = "1";
// let numericPageNumber: number = pageNumber as unknown as number;

// // console.log(vAny.foo());
// // console.log(vUnknown.foo());

//// Working with DOM

// const someElement = document.querySelector(".foo") as HTMLInputElement;

// console.log("someElement", someElement.value);

// const someElement = document.querySelector(".foo");

// someElement.addEventListener("blur", (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log("event", target.value);
// });

// Creating Class in Tyepscript

interface UserInteface {
  getFullName(): string;
}

class User implements UserInteface {
  private firstName: string;
  private lastName: string;
  readonly unchangableName: string;
  static readonly maxAge = 50;

  // changeUnchangableName(): void {
  //   this.unchangableName = "foo";
  // }

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
  }

  getFullName(): string {
    return this.firstName + "" + this.lastName;
  }
}

class Admin extends User {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const user = new User("Monster", "lessons");
console.log(User.maxAge);

const admin = new Admin("Foo", "Bar");
console.log(admin.getEditor);
