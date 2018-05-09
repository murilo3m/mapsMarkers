# mapsMarkers
Project to reproduce a bug for https://github.com/ionic-team/ionic-native-google-maps/issues/21


### Google API Keys
You have to generate you own API Keys

- [How to generate API keys?](./api_key/generate_api_key.md)

```
$> ionic cordova plugin add cordova-plugin-googlemaps \
  --variable API_KEY_FOR_ANDROID="(API_KEY_FOR_ANDROID)" \
  --variable API_KEY_FOR_IOS="(API_KEY_FOR_IOS)"

$> npm install --save @ionic-native/core@latest @ionic-native/google-maps@latest
```