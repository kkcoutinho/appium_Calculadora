const { expect } = require('@wdio/globals');
const testData = require('../fixtures/elevado.json');

describe('Cálculo de potência - Data Driven', () => {
  testData.forEach(({ valorBase, expoente, resultadoEsperado }) => {
    it(`Deve calcular ${valorBase} elevado a ${expoente} e retornar ${resultadoEsperado}`, async () => {
      const el1 = await driver.$(`accessibility id:${valorBase}`);
      await el1.click();

      const el2 = await driver.$('accessibility id:power');
      await el2.click();

      const el3 = await driver.$(`accessibility id:${expoente}`);
      await el3.click();

      const el4 = await driver.$('accessibility id:equals');
      await el4.click();

      const el5 = await driver.$('id:com.google.android.calculator:id/result_final');
      const resultText = await el5.getText();

      expect(resultText).toBe(resultadoEsperado);

      const el6 = await driver.$('accessibility id:clear');
      await el6.click();
    });
  });
});