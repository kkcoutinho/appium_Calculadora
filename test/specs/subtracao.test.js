const { expect, browser, $ } = require('@wdio/globals');

const testData = require('../fixtures/subtracao.json');

describe('Cálculo de subtração - Data Driven', () => {
  beforeEach(async () => {
    // Limpa o visor antes de cada teste
    await driver.$('~clear').click();
  });

  testData.forEach(({ valor1, valor2, resultado }) => {
    it(`Deve calcular ${valor1} - ${valor2} e retornar ${resultado}`, async () => {
      // Digita o primeiro valor
      for (const digit of valor1) {
        await driver.$(`~${digit}`).click();
      }

      await driver.$('~minus').click();

      // Digita o segundo valor
      for (const digit of valor2) {
        await driver.$(`~${digit}`).click();
      }

      await driver.$('~equals').click();

      // Captura o resultado final
      const result = await driver.$('id:com.google.android.calculator:id/result_final');
      const resultText = await result.getText();

      expect(resultText).toBe(resultado);
    });
  });
});