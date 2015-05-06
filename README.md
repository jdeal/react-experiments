```js
npm install
webpack-dev-server
```

## Naive version

1. Go to http://localhost:8080/webpack-dev-server/#naive
2. Open up the console.
3. Add some notes.
4. Delete some notes.

Note that for each note you add, all notes get re-rendered. For each note
you delete, all the other notes get re-rendered.

## Immutable version (no fancy libs, just simple use of `concat` and `filter`)

1. Go to http://localhost:8080/webpack-dev-server/#immutable
2. Open up the console.
3. Add some notes.
4. Delete some notes.

Note that for each note you add, only the new note gets rendered. If you delete
a note, nothing else gets re-rendered.
