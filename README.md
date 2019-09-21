# design-system

A corporate components libarary. It is monorepo, with configured CI script, storybooks for each package, and a bunch of scripts to ease development process. 

One can generate static documentation using `yan build-styleguide` script. It puts builded static docs to .out folder in repository's root. 

The packages are:
- atoms - basic building blocks
- molecules - a simple combinations of several atoms
- cells - complex components (for now - just wrappers over ant design datepickers, plus some proprietary HOC)
- utils - utility functions, used in other packages
- theme - colors, fonts, timing functions etc., plus Theme Provider. 

I used styled-components, and some external libraries to make production and support of the library fast and awesome. 

#### Main scripts
- `yarn build` - Builds all packages in individual `build` folder, using babel. Babel config is in root folder, packages just import it. 
- `yarn reinstall` - deletes all node_modules and reinstalls all packages. One can use `yarn reinstall-hard` to also delete yarn.lock file  
- `yarn atoms-storybook` - runs a storybook for atoms. Scripts `yarn molecules-storybook` and `yarn cells-storybook` do the same for molecules and cells
- `yarn make-oao-nexus` - publishes all packages to private nexus. 
- `yarn build-styleguide` - builds static docs from storybooks of atoms, cells, and molecules, to a `.out` folder in root of a repository 

#### Tests
I used Jest as a test suite, but as of 20.09.2019 test are broken, I'm fixing them right now.
  
