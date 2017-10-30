# UPTech Boilerplate for React Native apps

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Boilerplate Info

Boilerplate consists of

* [Redux folders structure](http://redux.js.org/docs/faq/CodeStructure.html)
* [Redux-observable](https://github.com/redux-observable/redux-observable)
* [RxJS](https://github.com/Reactive-Extensions/RxJS)
* Redefined Fetch
* Unit Tests 
* Automated Tests
* [Sentry](https://github.com/getsentry/react-native-sentry)
* ESLint that extends [airbnb](https://gist.github.com/radiovisual/7c27e5a1d0f7aa56e0e3922c98e19ffc) rules
In branch *feature/wix_navigation*
* [wix-react-native-navigation](https://github.com/wix/react-native-navigation)

## Prerequisites

To rename your app use [react-native-rename](https://www.npmjs.com/package/react-native-rename):

```
yarn global add react-native-rename
or
npm install react-native-rename -g

Simply rename
react-native-rename <newName>

With custom Bundle Identifier
react-native-rename <newName> -b <bundleIdentifier>
```

## To get started

Delete *.git* folder and init git of your project:

```
rm -rf .git && git init
```

Installdependencies:

```
npm install
```

Link modules: 

```
react-native link
```
You will be asked to setup Sentry. To do it, you may use this [tutorial](https://docs.sentry.io/clients/react-native/)

## Authors

[UPTech Team](https://uptech.team/)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
