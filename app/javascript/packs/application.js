// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

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