# Learn TypeScript With This Crash Course

TypeScript is a programming language developed and maintained by Microsoft. It is becoming increasingly popular.

We've released a crash course on the freeCodeCamp.org YouTube channel that will teach you the TypeScript programming language. By the end of the course you will understand all modern TypeScript features.

This course was developed by Alexander Kochergin. Alexander has a lot of experience developing courses for his YouTube channel.

TypeScript is similar to JavaScript, but adds additional features. TypeScript is used by Microsoft, Asana, Lyft, Slack, and many other top tech companies. Additionally, it is the primary programming language used in Angular 2+.

Here are the sections in this course:

- Do I need to learn Typescript?
- How to install Typescript tools?
- Typescript Type definitions introduction
- Introduction to Interfaces in Typescript
- Union & Type alias in Typescript
- Any never void unknown in Typescript
- Typescript Working with DOM
- Creating classes in Typescript
- Generics interfaces and functions in Typescript
- How to use Enums in Typescript

---

## Beginning

### Benefit

- Able to get error in developing phase but not in runtime which will see error in console.
- It helps to create entities which imposible in JavaScript.
- It just a superscipt of JavaScript.
- It is an enhancement for JavaScript skills.
- Can run simultaneously within a project.

### Do we need to learn?

- alot companies using this already.
- It helps us to thinking the data structure while designing system.

### Properties

- it needed to be transpile in order to run TypeScript.

### Installation

- Install Node.js. [link](https://nodejs.org/en/download/)
- to check Node.js version.
- then follow by install TypeScript, after that check the version.

```console
node -v
npm install -g typescript
tsc -v
```

### Create Project

1. create a index.html with basic markup [link](https://www.w3schools.com/html/html_basic.asp)
2. create main.ts
3. run transpile for main.ts, then you will able to see the main.js created.
4. we can check the error more clearly while transpile it by adding -w argument.

```console
tsc main.ts
tsc main.ts -w
```

### Configuration

tsconfig.json is to using for configuration on TypeScript [Link])(https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

1. create a tsconfig.json & write json inside [11:37].
2. move main.ts into src and remove main.js as it generated at dist folder.
3. with the help of tsconfig, now we just need to type the simple code to transpile the TypeScript as it will find the code inside.

```console
tsc -w
```

---

## Variable Delaration

1. TypeScript have "const", "let", "var" variables.

   - in const cannot assign which in ts it is really constant.
   - in let it will show type as string which allow to change, but it only allow to change to same type.
   - it is recommended to declare the type of variable explicitly.
   - try to use only const and let, because at the end transpile into var eventually.

2. Define function.

   - It is better defined input type and output type explicitly.
   - simply put, just put all argument with : and DataType.

## Interfaces

- Tyepscript itself able to understand directly from assignment.

```Typescript
const user: { name: string; age: number } = {
  name: "Monster",
  age: 30,
};
```

but to be simplified that reuses of object declaration (model in C#), we can create an interface as shown as below. By default, all value is mendatory in interface, else just add '?' to set it as optional.

```Typescript
interface UserInterface {
  name: string;
  age?: number;
}
```

### Function Interfaces

We can add function inside the interface, where it make the programming much more powerful.

```Typescript
interface User {
  name: string;
  age?: number;
  getMessage(): string;
}
```

### Union & Type alias

We can set multiple type into one variable, which we call it union as the definition of operator to combine data types. However, too many types will make the program very fragile which will caused alot of problem in term of design and implementation.

```Typescript
let pageName: string | number = "1";
let someProp: string | number | null | undefined | string[] | object
```

We can define the type as variable because we want our code as understantable as possible.

```Typescript
type ID = string
interface UserInterface{
   id: ID;
}
```

Ultimately, union and type alias can be use in very harmony way.

```Typescript
type PopularTag = string;
type MaybePopularTag = PopularTag | null;
```

### Any/ void/ never/ unknown

Typescript understand when do not return something it will automatically void.
We do not needed to add void to variable, we only use for function.

```Typescript
const doSomething = () => {
  console.log("do something");
};

const doSomething = (): void => {
  console.log("do something");
};
```

Any type is the one that will accept any types of which type off typescript check. Try to avoid this anytime because soon it will become a boom that not yet triggered.

```Typescript
const something:any = "";
```

Never will return the code that will never happen, usually people put throw for that.

```Typescript
const doSomething2 = (): never => {
  throw "never";
};
```

Unknown type usually only deal with unknown type. But we can assign "as" to convert the type to another.

```Typescript
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown;
```

but at some case it will caused some error let say from string to number.

```Typescript
let pageNumber: string = "1";
//let numericPageNumber: number = pageNumber as number; <- this will caused error
let numericPageNumber: number = pageNumber as unknown as number;
```

Try to stick with unkown or void to avoid any.

### Typescript working with DOM

Typescript able to understand DOM out of the box.

```Typescript
const someElement = document.querySelector(".foo") as HTMLInputElement;

console.log("someElement", someElement.value);


const someElement = document.querySelector(".foo");

someElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log("event", target.value);
});
```

### Creating class in Typescript

```Typescript
class User {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + "" + this.lastName;
  }
}

const user = new User("Monster", "lessons");
```

by default everything is public. public private or protected only available in Typescript which it is only available for code checking.

Another powerful type is readonly.

```Typescript
  readonly unchangableName: string;

  changeUnchangableName(): void {
    this.unchangableName = "foo";
  }
```

Implements: means class must implement under the interface

```Typescript
interface UserInteface {
  getFullName(): string;
}

class User implements UserInteface{

}
```

static is something where you can get from Classes itself

Inheritance in Typescript with extends

```Typescript
class Admin extends User {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}
```

### Generic in Typescript

We can return specifically certain object together with other object. we can do this.

```Typescript
const addId = (obj) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

const user = {
  name: "Jack",
};

const result = addId(user);
console.log("result", result);
```

All generic datatype is written in <>

```Typescript
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};
```

We can set generic interface.

```Typescript
interface UserInteface<T> {
  name: string;
  data: T;
}

const user: UserInteface<{ meta: string }> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
};

const user2: UserInteface<string[]> = {
  name: "John",
  data: ["foo", "bar", "barz"],
};
```

We can even passing several data types.

```Typescript
interface UserInteface<T, V> {
  name: string;
  data: T;
  meta: V;
}
```

Understanding function

- <T> means that we can provide different data types.
- Any return true if at least one element fits the condition.

```Typescript
const updateArray = append<string>("baz", ["foo", "bar"]);

const searchStr = "foo";
const _hasSearchedString = any<string>(
  (el: string) => el.contains(searchStr),
  ["foo", "bar", "baz"]
);
```

### Enum in Function

What is Enum?

It will return the position of the object or array to classify the structure iteration.

```Typescript
enum StatusEnum {
  NotStarted,  // 0
  InProgress,  // 1
  Done,        // 2
  Lock,        // 3
}

enum StatusEnum2 {
  NotStarted = 'notStarted',  // 0
  InProgress = 'inProgress',  // 1
  Done = 'Done',        // 2

}

interface Task{
   id:string;
   status: Status2;
}

// if no need assign
const notStartedStatus: Status = Status.NotStarted;

// if need assign
let notStartedStatus: Status = Status.NotStarted;

notStartedStatus = 2;

console.log(Status.InProgress);
console.log(Status.Done);
console.log(Status.Lock);
```
