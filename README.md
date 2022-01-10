# lerna-react-demo
## Motivation
You are working on multiple React projects and have some shared components throughout them. In the event of a change, instead of having edit one component multiple times, you can have edit the component just once with a **monorepo** file structure.


## File Structure
```
packages
  |__ common
  |__ webapp

lerna.json
package.json
```
The **common** folder would be where you store your shared components.  
The **webapp** folder is your React project.

## Setup
1) `lerna bootstrap` # Installs all of their dependencies and links any cross-dependencies.
2) `lerna run build-common` # Build **common** project
3) `lerna run start` # Start **webapp**

## Author

CoolSnow

Email: coolsnow2020@gmail.com

Twitter: https://twitter.com/CoolSnow0927