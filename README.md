# node-nile
Node client library for interfacing with nile.chat

## Example

Pushing a chunk to a stream.

``` javascript
const Nile = require('node-nile');

const nile = new Nile();

nile.pushChunk('Hello, World!');
```
