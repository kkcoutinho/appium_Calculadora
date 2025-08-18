const { expect, driver } = require('@wdio/globals');
const testData = require('../fixtures/inv.json');

describe('Cálculo de potência ao quadrado via botão INV - Data Driven', () => {
  testData.forEach(({ numero, resultadoEsperado }, index) => {
    it(`Deve calcular ${numero}² e retornar ${resultadoEsperado}`, async () => {
      
      if (index === 0) {
        const el1 = await driver.$(`~${numero}`);
        await el1.click();

        const el2 = await driver.$('~Expand');
        await el2.click();

        const el3 = await driver.$('~show inverse functions');
        await el3.click();
      } else {
        const el = await driver.$(`~${numero}`);
        await el.click();
      }

      const elSquared = await driver.$('~squared');
      await elSquared.click();

      const elEquals = await driver.$('~equals');
      await elEquals.click();

      const elResult = await driver.$('id:com.google.android.calculator:id/result_final');
      const resultText = await elResult.getText();
      expect(resultText).toBe(resultadoEsperado);

      const elClear = await driver.$('~clear');
      await elClear.click();
    });
  });
});