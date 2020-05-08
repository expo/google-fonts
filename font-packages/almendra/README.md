# @expo-google-fonts/almendra

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/almendra)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/almendra)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/almendra)

This package lets you use the [**Almendra**](https://fonts.google.com/specimen/Almendra) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Almendra

![Almendra](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Almendra_Regular400`
- `Almendra_Regular400_Italic`
- `Almendra_Bold700`
- `Almendra_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/almendra expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Almendra_Regular400,
  Almendra_Regular400_Italic,
  Almendra_Bold700,
  Almendra_Bold700_Italic,
} from '@expo-google-fonts/almendra';

export default () => {
  let [fontsLoaded] = useFonts({
    Almendra_Regular400,
    Almendra_Regular400_Italic,
    Almendra_Bold700,
    Almendra_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Almendra_Regular400' }}>
          Almendra_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Almendra_Regular400_Italic' }}>
          Almendra_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Almendra_Bold700' }}>
          Almendra_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Almendra_Bold700_Italic' }}>
          Almendra_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Almendra_Regular400
![Almendra_Regular400](./08fa6c15ee1bba267ec0f0f30bd11a5be545d922ebd057f450a702f87aa9aaa8.ttf.png)

##### Almendra_Regular400_Italic
![Almendra_Regular400_Italic](./d40d53b865a76778b1362d4e74f6c6294fbde5ae31f24f0173d9401c3fabcddc.ttf.png)

##### Almendra_Bold700
![Almendra_Bold700](./b0792b18907bbbe9c24855a75a53fc8ac926ae12e181ec5bbc70fae19df05bfa.ttf.png)

##### Almendra_Bold700_Italic
![Almendra_Bold700_Italic](./eb34d628f80f6ab95c12f0ef6dd4138d2182b94042d615028af5353e58b9f1ee.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/almendra` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Almendra page on Google Fonts](https://fonts.google.com/specimen/Almendra) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Almendra on Google Fonts](https://fonts.google.com/specimen/Almendra)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/almendra)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/almendra)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
