# @expo-google-fonts/chathura

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/chathura)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/chathura)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/chathura)

This package lets you use the [**Chathura**](https://fonts.google.com/specimen/Chathura) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Chathura

![Chathura](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Chathura_Thin100`
- `Chathura_Light300`
- `Chathura_Regular400`
- `Chathura_Bold700`
- `Chathura_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/chathura expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Chathura_Thin100,
  Chathura_Light300,
  Chathura_Regular400,
  Chathura_Bold700,
  Chathura_ExtraBold800,
} from '@expo-google-fonts/chathura';

export default () => {
  let [fontsLoaded] = useFonts({
    Chathura_Thin100,
    Chathura_Light300,
    Chathura_Regular400,
    Chathura_Bold700,
    Chathura_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chathura_Thin100' }}>
          Chathura_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chathura_Light300' }}>
          Chathura_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chathura_Regular400' }}>
          Chathura_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chathura_Bold700' }}>
          Chathura_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Chathura_ExtraBold800' }}>
          Chathura_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Chathura_Thin100
![Chathura_Thin100](./78a5a2532fd10bcf3317ec8440d1e758a309bd152369607ccea764abddbcb168.ttf.png)

##### Chathura_Light300
![Chathura_Light300](./7b8357f2b60bfe270ca77801978a0bd5e729870ffad8b19d54ff69cded800a1f.ttf.png)

##### Chathura_Regular400
![Chathura_Regular400](./f8abdba026fb7a58e3f5b2cbe302ab4d9e817e69dfd7c6fce0ffbf22fe9600f5.ttf.png)

##### Chathura_Bold700
![Chathura_Bold700](./129573e675c52db3364e6d6ac3d517a6cb8113531a3bc2b54276e1d28d28c11a.ttf.png)

##### Chathura_ExtraBold800
![Chathura_ExtraBold800](./c6190f40f502b8b950146bbe4ba7b7b02eea38047766ba5b56895059e3b6c655.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/chathura` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Chathura page on Google Fonts](https://fonts.google.com/specimen/Chathura) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Chathura on Google Fonts](https://fonts.google.com/specimen/Chathura)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/chathura)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/chathura)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
