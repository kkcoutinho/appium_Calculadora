const { expect, browser, $ } = require('@wdio/globals')

const testData = require('../fixtures/percentual.json');

describe('Cálculo de percentual - Data Driven', () => {
  beforeEach(async () => {
    // Limpa o visor antes de cada teste
    await driver.$('~clear').click();
  });

  testData.forEach(({ valorBase, percentual, resultadoEsperado }) => {
    it(`Deve calcular ${percentual}% de ${valorBase} e retornar ${resultadoEsperado}`, async () => {
      // Digita valor base
      for (const digit of valorBase) {
        await driver.$(`~${digit}`).click();
      }

      await driver.$('~multiply').click();

      // Digita percentual
      for (const digit of percentual) {
        await driver.$(`~${digit}`).click();
      }

      await driver.$('~percent').click();
      await driver.$('~equals').click();

      // Captura o resultado final
      const result = await driver.$('id:com.google.android.calculator:id/result_final');
      const resultText = await result.getText();

      expect(resultText).toBe(resultadoEsperado);
    });
  });
});