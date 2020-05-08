# @expo-google-fonts/diplomata

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/diplomata)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/diplomata)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/diplomata)

This package lets you use the [**Diplomata**](https://fonts.google.com/specimen/Diplomata) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Diplomata

![Diplomata](./font-family.png)

This font family contains [1 style](#-gallery).

- `Diplomata_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/diplomata expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Diplomata_Regular400 } from '@expo-google-fonts/diplomata';

export default () => {
  let [fontsLoaded] = useFonts({
    Diplomata_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Diplomata_Regular400' }}>
          Diplomata_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Diplomata_Regular400
![Diplomata_Regular400](./ff25ccc70ef0385bf72a71864293132375bd427ee6e3f974f22a732523948936.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/diplomata` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Diplomata page on Google Fonts](https://fonts.google.com/specimen/Diplomata) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Diplomata on Google Fonts](https://fonts.google.com/specimen/Diplomata)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/diplomata)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/diplomata)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
