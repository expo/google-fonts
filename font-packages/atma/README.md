# @expo-google-fonts/atma

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/atma)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/atma)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/atma)

This package lets you use the [**Atma**](https://fonts.google.com/specimen/Atma) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Atma

![Atma](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Atma_Light300`
- `Atma_Regular400`
- `Atma_Medium500`
- `Atma_SemiBold600`
- `Atma_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/atma expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Atma_Light300,
  Atma_Regular400,
  Atma_Medium500,
  Atma_SemiBold600,
  Atma_Bold700,
} from '@expo-google-fonts/atma';

export default () => {
  let [fontsLoaded] = useFonts({
    Atma_Light300,
    Atma_Regular400,
    Atma_Medium500,
    Atma_SemiBold600,
    Atma_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Atma_Light300' }}>
          Atma_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Atma_Regular400' }}>
          Atma_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Atma_Medium500' }}>
          Atma_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Atma_SemiBold600' }}>
          Atma_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Atma_Bold700' }}>Atma_Bold700</Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Atma_Light300
![Atma_Light300](./d691cbd1df6f6a53328f8d9d9514102c915be55e93a8c1f0cb0826a27a60e4f2.ttf.png)

##### Atma_Regular400
![Atma_Regular400](./702ceed58c58203ab0c8ad4bbbbda56c77b89a29496d748322180acbed120201.ttf.png)

##### Atma_Medium500
![Atma_Medium500](./cc558572cee6afca8a8d34b8cb8a2397d749e0c22f9d9977f39eb0e84d636967.ttf.png)

##### Atma_SemiBold600
![Atma_SemiBold600](./b569b84d6ee492ead3f4c73af6244137b0e4c604c9e98cc57627162221d498bb.ttf.png)

##### Atma_Bold700
![Atma_Bold700](./127f716e96fc47aee7624acf9cebd859693a19f2fc1f7d832f33835e5bd3b834.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/atma` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Atma page on Google Fonts](https://fonts.google.com/specimen/Atma) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Atma on Google Fonts](https://fonts.google.com/specimen/Atma)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/atma)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/atma)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
