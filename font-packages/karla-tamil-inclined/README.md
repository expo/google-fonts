# @expo-google-fonts/karla-tamil-inclined

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/karla-tamil-inclined)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/karla-tamil-inclined)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/karla-tamil-inclined)

This package lets you use the [**Karla Tamil Inclined**](https://fonts.google.com/specimen/Karla+Tamil+Inclined) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Karla Tamil Inclined

![Karla Tamil Inclined](./font-family.png)

This font family contains [2 styles](#-gallery).

- `KarlaTamilInclined_400Regular`
- `KarlaTamilInclined_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/karla-tamil-inclined expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  KarlaTamilInclined_400Regular,
  KarlaTamilInclined_700Bold,
} from '@expo-google-fonts/karla-tamil-inclined';

export default () => {
  let [fontsLoaded] = useFonts({
    KarlaTamilInclined_400Regular,
    KarlaTamilInclined_700Bold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KarlaTamilInclined_400Regular',
          }}>
          Karla Tamil Inclined Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KarlaTamilInclined_700Bold',
          }}>
          Karla Tamil Inclined Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![KarlaTamilInclined_400Regular](./KarlaTamilInclined_400Regular.ttf.png)|![KarlaTamilInclined_700Bold](./KarlaTamilInclined_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/karla-tamil-inclined` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Karla Tamil Inclined page on Google Fonts](https://fonts.google.com/specimen/Karla+Tamil+Inclined) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Karla Tamil Inclined on Google Fonts](https://fonts.google.com/specimen/Karla+Tamil+Inclined)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/karla-tamil-inclined)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/karla-tamil-inclined)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
