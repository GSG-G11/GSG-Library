const express = require('express')
const compression = require('compression')
const cookieParse = require('cookie-parser')
const { join } = require('path')

module.exports = (app) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(express.static(join(__dirname, '..', '..', 'client')))
  app.use(compression())
  app.disabled('x-powered-by')
  app.use(cookieParse())
}
