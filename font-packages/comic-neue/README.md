# @expo-google-fonts/comic-neue

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/comic-neue)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/comic-neue)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/comic-neue)

This package lets you use the [**Comic Neue**](https://fonts.google.com/specimen/Comic+Neue) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Comic Neue

![Comic Neue](./font-family.png)

This font family contains [6 styles](#-gallery).

- `ComicNeue_300Light`
- `ComicNeue_300Light_Italic`
- `ComicNeue_400Regular`
- `ComicNeue_400Regular_Italic`
- `ComicNeue_700Bold`
- `ComicNeue_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/comic-neue expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  ComicNeue_300Light,
  ComicNeue_300Light_Italic,
  ComicNeue_400Regular,
  ComicNeue_400Regular_Italic,
  ComicNeue_700Bold,
  ComicNeue_700Bold_Italic,
} from '@expo-google-fonts/comic-neue';

export default () => {
  let [fontsLoaded] = useFonts({
    ComicNeue_300Light,
    ComicNeue_300Light_Italic,
    ComicNeue_400Regular,
    ComicNeue_400Regular_Italic,
    ComicNeue_700Bold,
    ComicNeue_700Bold_Italic,
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
            fontFamily: 'ComicNeue_300Light',
          }}>
          Comic Neue Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ComicNeue_300Light_Italic',
          }}>
          Comic Neue Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ComicNeue_400Regular',
          }}>
          Comic Neue Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ComicNeue_400Regular_Italic',
          }}>
          Comic Neue Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ComicNeue_700Bold',
          }}>
          Comic Neue Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ComicNeue_700Bold_Italic',
          }}>
          Comic Neue Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![ComicNeue_300Light](./ComicNeue_300Light.ttf.png)|![ComicNeue_300Light_Italic](./ComicNeue_300Light_Italic.ttf.png)|![ComicNeue_400Regular](./ComicNeue_400Regular.ttf.png)||
|![ComicNeue_400Regular_Italic](./ComicNeue_400Regular_Italic.ttf.png)|![ComicNeue_700Bold](./ComicNeue_700Bold.ttf.png)|![ComicNeue_700Bold_Italic](./ComicNeue_700Bold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/comic-neue` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Comic Neue page on Google Fonts](https://fonts.google.com/specimen/Comic+Neue) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Comic Neue on Google Fonts](https://fonts.google.com/specimen/Comic+Neue)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/comic-neue)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/comic-neue)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
