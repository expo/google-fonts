# @expo-google-fonts/overlock

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/overlock)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/overlock)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/overlock)

This package lets you use the [**Overlock**](https://fonts.google.com/specimen/Overlock) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Overlock

![Overlock](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Overlock_Regular400`
- `Overlock_Regular400_Italic`
- `Overlock_Bold700`
- `Overlock_Bold700_Italic`
- `Overlock_Black900`
- `Overlock_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/overlock expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Overlock_Regular400,
  Overlock_Regular400_Italic,
  Overlock_Bold700,
  Overlock_Bold700_Italic,
  Overlock_Black900,
  Overlock_Black900_Italic,
} from '@expo-google-fonts/overlock';

export default () => {
  let [fontsLoaded] = useFonts({
    Overlock_Regular400,
    Overlock_Regular400_Italic,
    Overlock_Bold700,
    Overlock_Bold700_Italic,
    Overlock_Black900,
    Overlock_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overlock_Regular400' }}>
          Overlock_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overlock_Regular400_Italic' }}>
          Overlock_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overlock_Bold700' }}>
          Overlock_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overlock_Bold700_Italic' }}>
          Overlock_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overlock_Black900' }}>
          Overlock_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Overlock_Black900_Italic' }}>
          Overlock_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Overlock_Regular400
![Overlock_Regular400](./f4eb336168d4c74d8a4795ef601c2c88a8c6e58cc2029bb029abde86dba8de8d.ttf.png)

##### Overlock_Regular400_Italic
![Overlock_Regular400_Italic](./862e0a21cd810bed2e0c1809a8799cab17a8a9c3a1b24486e797286d12bd47e0.ttf.png)

##### Overlock_Bold700
![Overlock_Bold700](./c181ce17a8b786d224bdfb18e0b0fd345243fcdf4fcdd4a301a6b68c6898e1bc.ttf.png)

##### Overlock_Bold700_Italic
![Overlock_Bold700_Italic](./ac1a5a813f6667fe8e4a60d3450a57e9e8dcbb9beaa2619a979bafcf0261698f.ttf.png)

##### Overlock_Black900
![Overlock_Black900](./2f8bded0796145dd91249b13aecd8e185ea1d9222a3846c3873ad486679f5524.ttf.png)

##### Overlock_Black900_Italic
![Overlock_Black900_Italic](./dd19e6be709bf9ee365d90ee333b1766e7714578cd954bb3b5dcb1fae2e2022a.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/overlock` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Overlock page on Google Fonts](https://fonts.google.com/specimen/Overlock) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Overlock on Google Fonts](https://fonts.google.com/specimen/Overlock)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/overlock)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/overlock)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
