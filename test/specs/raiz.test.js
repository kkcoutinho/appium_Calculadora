const { expect, browser, $ } = require('@wdio/globals');

const testData = require('../fixtures/raiz.json');

describe('Cálculo de raiz quadrada - Data Driven', () => {
  beforeEach(async () => {
    await driver.pause(1500); // espera o app estabilizar
    await driver.$('~clear').click();
  });

  testData.forEach(({ valor, resultadoEsperado }) => {
    it(`Deve calcular √${valor} e retornar ${resultadoEsperado}`, async () => {
      // Clica no botão de raiz quadrada primeiro
      await driver.$('~square root').click();

      // Digita o número
      for (const digit of valor) {
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