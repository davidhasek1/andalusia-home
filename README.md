# andalsiahome

# :warning: ⚠️ NOTE

After installing deps `yarn` you NEED to run this command from root of the project
because of https://github.com/apollographql/apollo-server/issues/7895

```
"postinstall": "patch-package"
```
This temporarly fix issue with `resolveable` pkg which apollo server uses