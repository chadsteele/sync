/**
 * Sync - simplifies events for synchronizing state
 */

 let log = msg=>{}  // msg => {console.log(msg)}
export class Sync {
    constructor(node) {
        this.node = node || this.node || window;
        this.cache = {};  // old events
    }

    //returns the last time this event was dispatched - even prior to your "listener"
    get(event) {
        return this.cache[event];
    }

    echo(event) {
        this.dispatch(this.get(event));
    }

    addListener(event, handler, options) {
        if (!event) return;

        handler =
            handler ||
            function (e) {
                return e ? e.detail : null;
            };

        this.node.addEventListener(event, handler, options);
    }

    removeListener(event, handler) {
        if (event) {
            this.node.removeEventListener(event, handler);
        }
    }

    dispatch(event, params) {
        if (!event) return;
        if (!event.type) {
            let e = event;
            let n = e.event || e.name || e;
            let p = e.params || e.data || params;
            if (typeof p === 'object') {
                p = Object.assign({}, e.params, e.data, params);
            }
            event = new CustomEvent(n, { detail: p });
        }

        //debugger;
        log({Sync: 'dispatch', event});

        this.node.dispatchEvent(event);
        this.cache[event.type] = event;
    }
}

export default new Sync()
