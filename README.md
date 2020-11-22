# Assembly Solutions Ltd

## Running Assembly Solutions Ltd website locally with Netlify CMS

### Prerequisites
- Node (I recommend using v8.2.0 or higher)
- Gatsby CLI
- Netlify CLI

Clone the Assembly Solutions Ltd Github repo

```
$ git clone git@github.com:we-are-magma/assembly-solutions-ltd.git`
$ cd assembly-solutions-ltd
$ yarn
$ netlify dev
```

To test the CMS locally, you'll need to run a production build of the site:

```
$ npm run build
$ netlify dev # or ntl dev
```

Open another terminal window and run the following command;

`npx netlify-cms-proxy-server`
