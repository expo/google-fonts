# @expo-google-fonts/karma

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/karma)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/karma)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/karma)

This package lets you use the [**Karma**](https://fonts.google.com/specimen/Karma) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Karma

![Karma](./font-family.png)

This font family contains [5 styles](#gallery).

- `Karma_Light300`
- `Karma_Regular400`
- `Karma_Medium500`
- `Karma_SemiBold600`
- `Karma_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/karma expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Karma_Light300,
  Karma_Regular400,
  Karma_Medium500,
  Karma_SemiBold600,
  Karma_Bold700,
} from '@expo-google-fonts/karma';

export default () => {
  let [fontsLoaded] = useFonts({
    Karma_Light300,
    Karma_Regular400,
    Karma_Medium500,
    Karma_SemiBold600,
    Karma_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karma_Light300' }}>
          Karma_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karma_Regular400' }}>
          Karma_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karma_Medium500' }}>
          Karma_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karma_SemiBold600' }}>
          Karma_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karma_Bold700' }}>
          Karma_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Karma_Light300
![Karma_Light300](./3efd1dc089cbb099173fc03a8bfc22d406db0671888af830ca7137e548369989.ttf.png)

##### Karma_Regular400
![Karma_Regular400](./8852b0f721a3603b10be618c6a5ad02f581025568b8db801a75130da5f0c8d48.ttf.png)

##### Karma_Medium500
![Karma_Medium500](./2701feff031a171c4d982c100c27cf15d52d5051c49481762f43eeecc4bd54bd.ttf.png)

##### Karma_SemiBold600
![Karma_SemiBold600](./932cd064de412606a66f2a06a29ed0003de9669fe26d7f1f9f3e76bfc74dbb78.ttf.png)

##### Karma_Bold700
![Karma_Bold700](./132e41c0f90df6a2646b59a685af793e0ce62b2b64245d2db081d1ab1f6889e8.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/karma` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Karma page on Google Fonts](https://fonts.google.com/specimen/Karma) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Karma on Google Fonts](https://fonts.google.com/specimen/Karma)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/karma)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/karma)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
