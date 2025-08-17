const { expect, browser, $ } = require('@wdio/globals');

const testData = require('../fixtures/soma.json');

describe('Cálculo de soma - Data Driven', () => {
  beforeEach(async () => {
    await driver.pause(1000);
    await driver.$('~clear').click();
  });

  testData.forEach(({ valor1, valor2, resultadoEsperado }) => {
    it(`Deve somar ${valor1} + ${valor2} e retornar ${resultadoEsperado}`, async () => {
      // Digita o primeiro valor
      for (const digit of valor1) {
        await driver.$(`~${digit}`).click();
      }

      // Clica no botão de soma
      await driver.$('~plus').click();

      // Digita o segundo valor
      for (const digit of valor2) {
        await driver.$(`~${digit}`).click();
      }

      // Clica em igual
      await driver.$('~equals').click();

      // Captura o resultado
      const result = await driver.$('id:com.google.android.calculator:id/result_final');
      const resultText = await result.getText();

      expect(resultText).toBe(resultadoEsperado);
    });
  });
});