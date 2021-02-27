import { useEffect, useState } from 'react'
import sync from './Sync'

// sync - synchronizes state variables in different components
// kinda like shared memory, this hook enables two different state variables in different components to share the same value
export function useSync(name, initial, handler, options) {
    const eventName = name || "useSync";

    if (initial === undefined) {
        // get the current value prior to my instance
        const event = sync.get(eventName) || {}
        initial = event.detail
    } else {
        // update the subscribers with my new instance and so, use the initial value sparingly else you may over write your siblings unintentionally
        sync.dispatch(eventName, initial);  
    }

    const [data, setData] = useState(initial);

    function myHandler(e) {
        const { detail: eventData } = e;
        setData(eventData);
        handler && handler(eventData);
    }

    useEffect(() => {
        data && sync.dispatch(eventName, data);
        sync.addListener(eventName, myHandler, options);

        return () => {
            sync.removeListener(eventName, myHandler);
        }

    }, []);  //eslint-disable-line

    function set(detail) {
        setData(detail);
        sync.dispatch(eventName, detail)
    }

    return [data, set];
}

export default useSync;