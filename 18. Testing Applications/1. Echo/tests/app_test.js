import { assertEquals } from "https://deno.land/std@0.222.1/testing/asserts.ts";

import { echo } from "../app.js";

// implement tests here
Deno.test("echo should return 'echo'", () => {
    assertEquals(echo('echo'), 'echo');
});

Deno.test("echo should return ''", () => {
    assertEquals(echo(''), '');
});

Deno.test("echo should return 'echoechoecho!'", () => {
    assertEquals(echo(), 'echoechoecho!');
});

