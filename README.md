```markdown
# Testes Automatizados - Calculadora Android

Entrega da **Sprint 4** da **Squad 142 - Iterasys**  
Este projeto realiza testes funcionais automatizados no app **Calculadora do Android**

---

## Ferramentas utilizadas

- Appium
- WebdriverIO
- Appium Inspector
- Android Studio (emulador Android)
- Git e GitHub

---

## 📂 Estrutura do projeto

```
appium_Calculadora/
├── test/
│   ├── specs/           # Scripts de teste
│   │   ├── percentual.test.js
│   │   ├── raiz.test.js
│   │   ├── soma.test.js
│   │   └── subtracao.test.js
│   └── fixtures/        # Massa de dados (JSON)
│       ├── percentual.json
│       ├── raiz.json
│       ├── soma.json
│       └── subtracao.json
├── wdio.conf.js         # Configuração do WebdriverIO
├── package.json         # Dependências e scripts
└── .gitignore           # Arquivos ignorados no Git

```

---

## Como rodar os testes

### 1. Instalar dependências

```bash
npm install
```

### 2. Iniciar o Appium Server

```bash
appium
```

### 3. Rodar todos os testes na sequência

```bash
npx wdio run wdio.conf.js --spec \
test/specs/percentual.test.js \
test/specs/raiz.test.js \
test/specs/soma.test.js \
test/specs/subtracao.test.js
```

---

🎥 **Vídeo da execução dos testes:**  
[Assista aqui](https://1drv.ms/v/c/f9b6ddc2788df047/EZZNcW7YodhNr3TmkKajQycBPM9stq8sL3gSgXHo7LQD6A?e=APrCNh)





