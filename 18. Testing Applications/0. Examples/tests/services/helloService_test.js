import { assertEquals } from "https://deno.land/std@0.222.1/testing/asserts.ts";
import { getHello, setHello } from "../../services/helloService.js";

Deno.test("Function getHello returns 'Hello service world!'", () => {
  assertEquals(getHello(), "Hello service world!");
});

Deno.test("Message set using setHello returned from getHello", () => {
  setHello("hello world!");
  assertEquals(getHello(), "hello world!");
});

Deno.test("Secrets returned with 'secrets'", () => {
  setHello("secrets");
  assertEquals(getHello(), "Here are the secrets");
});