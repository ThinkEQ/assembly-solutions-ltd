# Assembly Solutions Ltd

## Running Assembly Solutions Ltd website locally with Netlify CMS

### Prerequisites

#### Node (I recommend using v8.2.0 or higher)
https://nodejs.org/en/


#### Gatsby CLI
https://www.gatsbyjs.com/docs/quick-start/#install-the-gatsby-cli

```
npm install -g gatsby-cli
```

If you receive a permission denied error e.g Error: EACCES: permission denied, access '/usr/local/lib/node_modules' please see this page - https://stackoverflow.com/questions/47252451/permission-denied-when-installing-npm-modules-in-osx

```
$ sudo chown -R $USER /usr/local/lib/node_modules
```

If you still receive an error e.g Error: EACCES: permission denied, symlink '../lib/node_modules/gatsby-cli/cli.js' -> '/usr/local/bin/gatsby' then run;

```
$ npm config get prefix
```

If the result is `/usr/local` then:

```
$ sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
$ npm install -g gatsby-cli
```


#### Netlify CLI
https://docs.netlify.com/cli/get-started/

#### MacOS 

Install Homebrew
https://brew.sh/

```
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install Yarn
https://classic.yarnpkg.com/en/docs/install/#mac-stable

```
$ brew install yarn
```

Clone the Assembly Solutions Ltd Github repo

```
$ git clone git@github.com:we-are-magma/assembly-solutions-ltd.git
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

```
$ npx netlify-cms-proxy-server
```
