import { somar } from "../src"

test('Deve somar dois números', () => {
    expect(somar(1, 2)).toBe(3);
})