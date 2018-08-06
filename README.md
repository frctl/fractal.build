# Fractal website

Site and docs for Fractal, a tool for building website component libraries: http://fractal.build

Built using Fractal's own documentation engine with a custom theme, exported to a static HTML build for deployment.

## Running locally

1. Download or clone this repo
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

# fractal.build deployment and hosting

http://fractal.build is hosted using [Zeit Now](https://zeit.co/now). In order to deploy updates to the live site you need to be a member of the frctl team on Zeit.

You can generate a new Now-compatible export and automatically deploy a new instance using the `npm run deploy` command.

> Note that this will deploy a new instance at a temporary URL - if you are happy with the changes you must then [alias the fractal.build domain to the latest deployment](https://zeit.co/docs/getting-started/assign-a-domain-name#2.-using-a-custom-domain,-managed-by-now) - i.e. `now alias temporary-domain-name.now.sh fractal.build`
