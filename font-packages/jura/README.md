# @expo-google-fonts/jura

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/jura)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/jura)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/jura)

This package lets you use the [**Jura**](https://fonts.google.com/specimen/Jura) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Jura

![Jura](./font-family.png)

This font family contains [5 styles](#gallery).

- `Jura_Light300`
- `Jura_Regular400`
- `Jura_Medium500`
- `Jura_SemiBold600`
- `Jura_Bold700`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/jura expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Jura_Light300,
  Jura_Regular400,
  Jura_Medium500,
  Jura_SemiBold600,
  Jura_Bold700,
} from '@expo-google-fonts/jura';

export default () => {
  let [fontsLoaded] = useFonts({
    Jura_Light300,
    Jura_Regular400,
    Jura_Medium500,
    Jura_SemiBold600,
    Jura_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Jura_Light300' }}>
          Jura_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Jura_Regular400' }}>
          Jura_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Jura_Medium500' }}>
          Jura_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Jura_SemiBold600' }}>
          Jura_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Jura_Bold700' }}>Jura_Bold700</Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Jura_Light300
![Jura_Light300](./77bf0cc35f4472e54d1b2daf9d1bfc5f02b062280d8dccd089869c247b4787ee.ttf.png)

##### Jura_Regular400
![Jura_Regular400](./33eb5cfd183074e05fa8299bd75531ec22a6a6d5f8778170d27310d95b1bbbb6.ttf.png)

##### Jura_Medium500
![Jura_Medium500](./77d5a89082924bbe692443c95c536a679eef0891bfbe46d7e30f206f8486631f.ttf.png)

##### Jura_SemiBold600
![Jura_SemiBold600](./85ee38dc27e08fef91f43a628bfb4a044e79102b07af8ea7d859b249c169aada.ttf.png)

##### Jura_Bold700
![Jura_Bold700](./8215e86097df83eb3473c6f3ee4d3c63cd00dce9d02b9cd816d27f4e13616183.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/jura` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Jura page on Google Fonts](https://fonts.google.com/specimen/Jura) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Jura on Google Fonts](https://fonts.google.com/specimen/Jura)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/jura)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/jura)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
