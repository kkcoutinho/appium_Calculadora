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

## Estrutura do projeto

```
appium_Calculadora/
├── test/
│   ├── specs/              # Scripts de teste
│   │   ├── percentual.test.js
│   │   ├── raiz.test.js
│   │   ├── elevado.test.js
│   │   └── zinv.test.js
│   └── fixtures/           # Massa de dados (JSON)
│       ├── percentual.json
│       ├── raiz.json
│       ├── elevado.json
│       └── zinv.json
├── wdio.conf.js            # Configuração do WebdriverIO
├── package.json            # Dependências e scripts
└── .gitignore              # Arquivos ignorados no Git
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

### 3. Rodar todos os testes

```bash
npx wdio run wdio.conf.js --spec \

```

---

🎥 **Vídeo da execução dos testes:**  
[Assista aqui](https://1drv.ms/v/c/f9b6ddc2788df047/EaiF_3pt3AtMinFpeHYNsmsBpol3KMkfKYjMy9p475WYrg?e=ip9OCZ)


