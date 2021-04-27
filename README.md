# README
Este repositório tem como objetivo mostrar um exemplo simples utilizando o Ruby on Rails com as Bibliotecas [Stimulus](https://stimulus.hotwire.dev/), [View Component](https://viewcomponent.org/) e [Materialize](https://materializecss.com/).

Este exemplo foi feito utilizando o Rails 6.1 e ruby 2.7.

---

## Criando o Projeto
Crie uma pasta para seu projeto e dentro dessa pasta execute o seguinte comando para inicializar o projeto:
```
rails new . --webpack
```

---

## Configurando as Bibliotecas

Adicione as bibliotecas javascript que vamos utilizar
```
yarn add stimulus
```
```
yarn add materialize-css
```

Agora, adicione todas as Gym que vamos utilizar no arquivo Gemfile
```gym
# Add Materialize
gem 'jquery-rails'
gem 'materialize-sass'
gem 'material_icons'

# ViewComponent allows you to write reusable and easy-to-test view components
gem "view_component", require: "view_component/engine"
```

Após isso, execute o comando para atualizar as gyms
```
bundle update
```

Toque o nome do arquivo `app/assets/stylesheets/application.css` para `app/assets/stylesheets/application.scss` e adicione o seguinte css:
```css
@import "materialize/components/color-variables";
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);

$primary-color: color("grey", "darken-4") !default;
$secondary-color: color("blue", "base") !default;

@import "materialize";
@import "material_icons";
```

Configure a inicialização do JavaScript no arquivo `app/javascript/packs/application.js`:

```javascript
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import "materialize-css/dist/js/materialize"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

const application = Application.start()
const context = require.context("../controllers/", true, /\.js$/)
const contextComponents = require.context("../../components/", true, /_controller\.js$/)

application.load(
  definitionsFromContext(context).concat(
    definitionsFromContext(contextComponents)
  )
)
```

Toque `additional_paths: []` por `additional_paths: ["app/components"]` no arquivo `config/webpacker.yml`

Pronto, agora as bibliotecas estão configuradas!