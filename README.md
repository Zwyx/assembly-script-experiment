The classic algorithm to convert a string to an integer is quite slow in JavaScript, with big numbers (strings containing a few hundred thousand digits). So this was an experiment to make it faster with WebAssembly. It didn't work at all. Fortunately, I found a [much better algorithm](https://zwyx.dev/til/2023/12/31/Fast%20string-to-integer%20conversion).

To run:

(`serve` comes from `npm i -g serve`)

```
npm ci
npm run asbuild
serve .
```
