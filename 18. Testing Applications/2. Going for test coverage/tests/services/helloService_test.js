import { assertEquals } from "https://deno.land/std@0.222.1/testing/asserts.ts";
import { getHello, setHello } from "../../services/helloService.js";

Deno.test("Calling 'getHello()' returns 'Oh, hello there!'", async () => {
  assertEquals("Oh, hello there!", getHello());
});

Deno.test("Calling 'setHello()' returns 'undefined' if new message is not defined", async () => {
    assertEquals(setHello(""), undefined);
    assertEquals(setHello(), undefined);
    assertEquals(setHello(null), undefined);
    assertEquals(setHello(undefined), undefined);
});

Deno.test("Setting new hello message to 'hello' returns undefined and sets new message to 'hello'", async () => {
    assertEquals(setHello("hello"), undefined);
    assertEquals(getHello(), "hello");
});

Deno.test("Setting long hello message to 'hellohellohello' returns undefined and sets new message to 'hellohell...'", async () => {
    assertEquals(setHello("hellohellohello"), undefined);
    assertEquals(getHello(), "hellohell...");
});