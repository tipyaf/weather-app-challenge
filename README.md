# Weather app

## Get started

#### 1. Install project

#### In terminal, at project's root:

```
 $ bash scripts/install.sh
```

This script will propose to you run json-server:

```
press "1" and enter to start it
```

#### 2. Run project

To finish, ***open a new terminal*** and run client in dev mode:

```
$ bash scripts/run-client.sh
```
#### **In scripts don't work case, make check LF or CRLF file format.**

### Uninstall

```
$ bash scripts/reset.sh
```

## Tools and dependencies

- [Angular 6](https://angular.io/) (CLI): [Angular CLI](https://cli.angular.io/)  and [Typescript](https://www.typescriptlang.org/)
- [Angular Material](https://material.angular.io/) : material design components.
- [Lodash](https://lodash.com/docs/4.17.5) : unavoidable, usefull, and awesome library
- [Json-server](https://github.com/typicode/json-server): A really great solution to mock API server. 

## My choices

- I choose to create configurations settings with fake API and add weather data: I would have choice to evoluate to a configurable widgets in app.
- I choose to split as possible code in app: The architecture of project is thought with parent, child, brother concept. The services serve to manage and distriribute data to parents who distribute to children.  
- I choose to do dashbord like child of app but dasboard is parrent of the rest. We can add easly add a login page and manage settings by users... in the future.
- I skip test ... no more time.
- I skip to create a real API server with Nodejs because I prefer to be sure that's will run everywhere. (Docker?!) ... no more time. **But json-server is great !** 

***Sorry for my English ;) ...***
