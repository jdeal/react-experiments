```js
npm install
npm start
```

## Naive version

1. Go to http://localhost:8080/webpack-dev-server/#naive (make sure you see
   the heading Naive App)
2. Open up the console.
3. Add some notes.
4. Delete some notes.

Note that for each note you add, all notes get re-rendered. For each note
you delete, all the other notes get re-rendered.

## Immutable version (no fancy libs, just simple use of `concat` and `filter`)

1. Go to http://localhost:8080/webpack-dev-server/#immutable (make sure you see
   the heading Immutable App)
2. Open up the console.
3. Add some notes.
4. Delete some notes.

Note that for each note you add, only the new note gets rendered. If you delete
a note, nothing else gets re-rendered.

## What's the difference?

Look at `lib/naive` for the naive version and `lib/immutable` for the immutable
version. They're almost identical except for a few differences.

- The immutable version uses PureRenderMixin in its components (except for the
  top-level component which takes no props anyway). Components with
  PureRenderMixin only re-render if the props change (meaning they don't pass
  equality tests).
- The store for the immutable version never mutates its data in place. It always
  creates new data. But it keeps as much of the old data around as possible, so
  that equality test will pass!

So, to do this:

- Just start adding in PureRenderMixin everywhere. You'll have no choice but to
  make your data immutable. :-)
- Don't naively clone your data, or you'll be right back to over-rendering.
- Make sure you don't mutate in place, or you'll under-render.
