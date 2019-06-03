# shraga-example

This is an example app for the implementation of [passport-shraga](https://github.com/ShragaUser/passport-shraga)

With Express.js to Authenticate via [Shraga service](https://shragauser.github.io/adfs-proxy/#/) (adfs-proxy).

### Docker compose:

For easy development a docker-compose is in this projects source. 
the compose created a three layer container with these services: 
* [sample-saml-idp](https://github.com/kristophjunge/docker-test-saml-idp) running on port 8080
* [Shraga](https://shragauser.github.io/adfs-proxy/#/) (adfs-proxy) running on port 3000
* shraga-example running on port 8747

How to Run: 
```
cd ./example-compose 
docker-compose -f "docker-compose.yml" up -d --build
```
