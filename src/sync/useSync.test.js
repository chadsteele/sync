import { renderHook, act } from "@testing-library/react-hooks";
import useSync from "./useSync";

describe("useSync", () => {
  test("initializes correctly", () => {
    const {
      result: { current },
    } = renderHook(() => useSync());
    const [data, setData] = current;
    expect(data).toEqual(undefined);
    expect(setData).not.toBeNull();
  });

  test("updates data correctly", () => {
    const { result } = renderHook(() => useSync());

    act(() => result.current[1]("test"));

    expect(result.current[0]).toEqual("test");
  });

  test("will sync values between two instances", () => {
    const { result: a } = renderHook(() => useSync());
    const { result: b } = renderHook(() => useSync());

    act(() => a.current[1]("test a"));

    expect(a.current[0]).toEqual("test a");
    expect(b.current[0]).toEqual("test a");

    act(() => b.current[1]("test b"));

    expect(a.current[0]).toEqual("test b");
    expect(b.current[0]).toEqual("test b");
  });
});
