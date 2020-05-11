# @expo-google-fonts/bitter

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bitter)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bitter)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bitter)

This package lets you use the [**Bitter**](https://fonts.google.com/specimen/Bitter) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Bitter

![Bitter](./font-family.png)

This font family contains [3 styles](#-gallery).

- `Bitter_Regular400`
- `Bitter_Regular400_Italic`
- `Bitter_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/bitter expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Bitter_Regular400,
  Bitter_Regular400_Italic,
  Bitter_Bold700,
  useFonts,
} from '@expo-google-fonts/bitter';

export default () => {
  let [fontsLoaded] = useFonts({
    Bitter_Regular400,
    Bitter_Regular400_Italic,
    Bitter_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Bitter_Regular400' }}>
          Bitter_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Bitter_Regular400_Italic' }}>
          Bitter_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Bitter_Bold700' }}>
          Bitter_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Bitter_Regular400
![Bitter_Regular400](./937e0cb8bbc92b1b89eafc86f73c06dec677f4e8d2c39de72208ae4fffedc7fa.ttf.png)

##### Bitter_Regular400_Italic
![Bitter_Regular400_Italic](./7a9ae7d2a6428de7df36662a7014e91b880c5d09663ae9c66abb8a928c0ad371.ttf.png)

##### Bitter_Bold700
![Bitter_Bold700](./c41cd10ef080e4d415bc6da6d86b29b73fe87ba84afe455423476109ed6addbd.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/bitter` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bitter page on Google Fonts](https://fonts.google.com/specimen/Bitter) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bitter on Google Fonts](https://fonts.google.com/specimen/Bitter)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bitter)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bitter)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
