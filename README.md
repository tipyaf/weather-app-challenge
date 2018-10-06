# Weather app v0.1.0

## Get started

#### 1. Install and run project


Use Docker. You can use: `docker-compose up `


## Tools and dependencies

- [Angular 6](https://angular.io/) (CLI): [Angular CLI](https://cli.angular.io/)  and [Typescript](https://www.typescriptlang.org/)
- [Angular Material](https://material.angular.io/) : material design components.
- [Lodash](https://lodash.com/docs/4.17.5) : unavoidable, usefull, and awesome library
- [Json-server](https://github.com/typicode/json-server): A really great solution to mock API server. 

## My choices

- I choose to create configurations settings with fake API and add weather data: I would have choice to evoluate to a configurable widgets in app.
- I choose to split as possible code in app: The architecture of project is thought with parent, child, brother concept. The services serve to manage and distriribute data to parents who distribute to children.  
- I choose to do dashbord like child of app but dasboard is parent of the rest. We can easly add a login page and manage settings by users... in the future.

***Sorry for my English ;) ...***
