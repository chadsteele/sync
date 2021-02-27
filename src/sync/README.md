# Sync.js

This is an agnostic javascript library that synchronizes shared data/state throughout your app.  It is tiny, unopinionated and can interface with and/or replace Redux.  It can easily be extended to coordinate with an API or something like firebase or pubnub.  It is optimized for high performance and low foot print and has zero dependencies.

You can use sync with or without React, Redux, or any other framework.

raw usage without React or Redux:

```javascript
    import sync from 'ez-sync-js/Sync

    // update a value
    sync.dispatch('myVar', 'some value')

    // repeat the last update
    sync.echo('myVar')
    
    ...

    // gets the latest update
    const myVar = sync.get('myVar').detail 

    ...

    // subscribe to future updates
    sync.addListener('myVar', callback)
    
    // unsubscribe
    sync.removeListener('myVar', callback)
```

## useSync - React

Is used just like useState except now you can have different React components anywhere in the app or dom that share the same values (sync) without depending on Redux or Context, nor do the components have to be running concurrently to stay syncrhonized.

See the [demo](https://chadsteele.github.io/sync/)

React usage:

```javascript
    import {useSync} from 'ez-sync-js'

    const [myVar, setVar] = useSync('myVar','optional initial value')
```

![diagram](https://chadsteele.github.io/sync/img/useSync.jpg)

# Source Code - git
[https://github.com/chadsteele/sync](https://github.com/chadsteele/sync)

# NPM
It's called ez-sync-js
[https://www.npmjs.com/package/ez-sync-js](https://www.npmjs.com/package/ez-sync-js)