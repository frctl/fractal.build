---
title: Welcome to the Fractal user guide
handle: guide
---

Fractal is a tool to help you **build** and **document** web component libraries and then **integrate** them into your projects.

Component (or pattern) libraries are a way of designing and building websites in a modular fashion, breaking up the UI into small, reusable chunks that can then later be assembled in a variety of ways to build anything from larger components right up to whole pages.

Fractal helps you assemble, preview and document website component libraries, and then integrate them into your web sites, apps and build processes to create joined up, 'living' projects.

Fractal can be run from the command line or integrated into your project via it's API.

<div class="Page-badges">
[![Build Status](https://img.shields.io/travis/frctl/fractal/master.svg?style=flat-square)](https://travis-ci.org/frctl/fractal)
[![NPM Version](https://img.shields.io/npm/v/@frctl/fractal.svg?style=flat-square)](https://www.npmjs.com/package/@frctl/fractal)
[![Github](https://img.shields.io/github/stars/frctl/fractal.svg?style=social&label=Star)](http://github.com/frctl/fractal)
</div>

## Requirements

Fractal requires [Node.js](https://nodejs.org) v4.0+ to run.

## Why Fractal?

Existing tools to help you build these component libraries often force you to use a particular template language, a specific build tool or a pre-determined way to organise the individual elements within your library. They generate a web preview to allow you to browse your rendered components, but generally aren't able to help much when it comes to integrating your component library into your build process or live site.

**Fractal is different:**

* **Flexible**: Complete freedom to use whichever templating language, build tool and organisational model best suits your project. Build your components using the same tools that you use for your production site.
* **Integrated**: Fractal can help you seamlessly integrate your component library into your site, app or build tools by including it as a dependency in your build. Custom commands and API integration can help you build a smart, component-focussed workflow to ensure your component library is a living part of your application.
* **Data-driven**: Component preview data can hardcoded or dynamically generated any way you like - for instance using libraries such as Faker or from HTTP API calls.

The web UI provides a web-based way to browse your component library, either running as a local web server or as a static HTML export. A powerful theme API means you can create your own web UI themes from scratch or by customising the default theme to your liking.

A companion CLI tool helps make running tasks and adding your own CLI commands built upon the Fractal API quick and easy.


## About this guide

This guide will assume basic knowledge of the command line, Node.js and how to use NPM to install and manage project dependencies.

## Credits

Fractal is developed and maintained by [Mark Perkins](http://github.com/allmarkedup) and the team at [Clearleft](http://clearleft.com).

[{{ image('clearleft-logo.png', 'Clearleft') }}](http://clearleft.com)
