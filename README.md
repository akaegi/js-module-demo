---
marp: true
theme: default
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')

---

# History of JavaScript module systems 

https://www.zachgollwitzer.com/posts/scripts-commonjs-umd-amd-es6-modules

- Initially `<script>` tags only
    - Everything is global
    - Name clashes when libraries use the same identifiers

- CommonJS (CJS) (2009)
    - `exports` object and `require()` function
    - came with Node.js
    - `require()` is synchronous and thus not suitable for browsers

---

## Alternatives for the browser

- AMD (Asynchronous module definition) and RequireJS (2009)
    `define()` function

- UMD (universal module definition) pattern (2015)

- ECMAScript modules (esm) since ES6/ECMAScript 2015

- Bundlers like Webpack (2012)

---

## esm modules

- JavaScript file that contains an `import`  or `export` statement is considered a module

- `export`s define the public interface of the module

- `import` is used to import other modules

- `import` as static statement vs. `import` [operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) 
(function that returns a promise with the Module namespace object used for dynamic module loading)

- "Equivalent" to Typescript modules

---

### Default export problem



---


Webpack (2012)

Start writing!

Used typescript starter project:\
https://github.com/bitjson/typescript-starter


History of JavaScript modules:\
https://www.zachgollwitzer.com/posts/scripts-commonjs-umd-amd-es6-modules

Explanation of "modern" ECMAScript Modules (esm):\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules


- dayjs example with UMD and esm

---

slide 2