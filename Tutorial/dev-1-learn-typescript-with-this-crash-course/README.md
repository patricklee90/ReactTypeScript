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

## Interfaces [22:04]
