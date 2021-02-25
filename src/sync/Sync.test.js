import Sync from './Sync';

const NODE = window;
const EVENT_TYPE = 'test';

let handler;
let event;
let eventParams;

beforeEach(() => {
  handler = jest.fn();
  eventParams = {
    name: 'Test event',
    date: new Date()
  };
  event = new CustomEvent(EVENT_TYPE, { detail: eventParams });

  NODE.__addEventListener = NODE.addEventListener;
  NODE.__dispatchEvent = NODE.dispatchEvent;
  NODE.__removeEventListener = NODE.removeEventListener;

  NODE.addEventListener = jest.fn();
  NODE.dispatchEvent = jest.fn();
  NODE.removeEventListener = jest.fn();
});

afterEach(() => {
  Sync.cache = {};

  NODE.addEventListener = NODE.__addEventListener;
  NODE.dispatchEvent = NODE.__dispatchEvent;
  NODE.removeEventListener = NODE.__removeEventListener;
});

test('initializes correctly', () => {
  expect(Sync).not.toBeNull();
  expect(Sync.cache).not.toBeNull();
  expect(Sync.node).not.toBeNull();
  expect(Sync.node).toEqual(NODE);
});

test('will successfully register event listener', () => {
  Sync.addListener(EVENT_TYPE, handler);
  expect(NODE.addEventListener).toHaveBeenCalled();
  expect(NODE.addEventListener).toHaveBeenCalledWith(EVENT_TYPE, handler, undefined);
});

test('will successfully dispatch event when called with (type, params)', () => {
  Sync.dispatch(EVENT_TYPE, eventParams);
  expect(NODE.dispatchEvent).toHaveBeenCalled();
  expect(NODE.dispatchEvent).toHaveBeenCalledTimes(1);
  const params = NODE.dispatchEvent.mock.calls[0];
  expect(params).toHaveLength(1);
  expect(params[0]).toBeInstanceOf(CustomEvent);
  expect(params[0].type).toEqual(EVENT_TYPE);
  expect(params[0].detail).toEqual(expect.objectContaining(eventParams));
});

test('will successfully dispatch event when called with ({ name, params })', () => {
  Sync.dispatch({ name: EVENT_TYPE, params: eventParams });
  expect(NODE.dispatchEvent).toHaveBeenCalled();
  expect(NODE.dispatchEvent).toHaveBeenCalledTimes(1);
  const params = NODE.dispatchEvent.mock.calls[0];
  expect(params).toHaveLength(1);
  expect(params[0]).toBeInstanceOf(CustomEvent);
  expect(params[0].type).toEqual(EVENT_TYPE);
  expect(params[0].detail).toEqual(expect.objectContaining(eventParams));
});

test('will successfully dispatch event when called with ({ name, data })', () => {
  Sync.dispatch({ name: EVENT_TYPE, data: eventParams });
  expect(NODE.dispatchEvent).toHaveBeenCalled();
  expect(NODE.dispatchEvent).toHaveBeenCalledTimes(1);
  const params = NODE.dispatchEvent.mock.calls[0];
  expect(params).toHaveLength(1);
  expect(params[0]).toBeInstanceOf(CustomEvent);
  expect(params[0].type).toEqual(EVENT_TYPE);
  expect(params[0].detail).toEqual(expect.objectContaining(eventParams));
});

test('will successfully dispatch event when called with ({ event, params })', () => {
  Sync.dispatch({ event: EVENT_TYPE, params: eventParams });
  expect(NODE.dispatchEvent).toHaveBeenCalled();
  expect(NODE.dispatchEvent).toHaveBeenCalledTimes(1);
  const params = NODE.dispatchEvent.mock.calls[0];
  expect(params).toHaveLength(1);
  expect(params[0]).toBeInstanceOf(CustomEvent);
  expect(params[0].type).toEqual(EVENT_TYPE);
  expect(params[0].detail).toEqual(expect.objectContaining(eventParams));
});

test('will successfully dispatch event when called with ({ event, data })', () => {
  Sync.dispatch({ event: EVENT_TYPE, data: eventParams });
  expect(NODE.dispatchEvent).toHaveBeenCalled();
  expect(NODE.dispatchEvent).toHaveBeenCalledTimes(1);
  const params = NODE.dispatchEvent.mock.calls[0];
  expect(params).toHaveLength(1);
  expect(params[0]).toBeInstanceOf(CustomEvent);
  expect(params[0].type).toEqual(EVENT_TYPE);
  expect(params[0].detail).toEqual(expect.objectContaining(eventParams));
});

test('will successfully dispatch event when called with (event)', () => {
  Sync.dispatch(event);
  expect(NODE.dispatchEvent).toHaveBeenCalled();
  expect(NODE.dispatchEvent).toHaveBeenCalledTimes(1);
  expect(NODE.dispatchEvent).toHaveBeenCalledWith(event);
});

test('will cache event after successfully dispatching it', () => {
  Sync.dispatch(EVENT_TYPE, eventParams);
  const dispatchedEvent = NODE.dispatchEvent.mock.calls[0][0];
  expect(Sync.cache[EVENT_TYPE]).toEqual(dispatchedEvent);
});

test('will retrieve requested cached event', () => {
  Sync.cache[EVENT_TYPE] = event;
  expect(Sync.get(EVENT_TYPE)).toEqual(event);
});

test('will successfully remove event listener', () => {
  Sync.removeListener(EVENT_TYPE, handler);
  expect(NODE.removeEventListener).toHaveBeenCalled();
  expect(NODE.removeEventListener).toHaveBeenCalledTimes(1);
  expect(NODE.removeEventListener).toHaveBeenCalledWith(EVENT_TYPE, handler);
});

test('will successfully echo cached event', () => {
  Sync.cache[EVENT_TYPE] = event;
  Sync.echo(EVENT_TYPE);
  expect(NODE.dispatchEvent).toHaveBeenCalled();
  expect(NODE.dispatchEvent).toHaveBeenCalledTimes(1);
  expect(NODE.dispatchEvent).toHaveBeenCalledWith(event);
});