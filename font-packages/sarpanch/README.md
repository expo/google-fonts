# @expo-google-fonts/sarpanch

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sarpanch)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sarpanch)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sarpanch)

This package lets you use the [**Sarpanch**](https://fonts.google.com/specimen/Sarpanch) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Sarpanch

![Sarpanch](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Sarpanch_Regular400`
- `Sarpanch_Medium500`
- `Sarpanch_SemiBold600`
- `Sarpanch_Bold700`
- `Sarpanch_ExtraBold800`
- `Sarpanch_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sarpanch expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Sarpanch_Regular400,
  Sarpanch_Medium500,
  Sarpanch_SemiBold600,
  Sarpanch_Bold700,
  Sarpanch_ExtraBold800,
  Sarpanch_Black900,
} from '@expo-google-fonts/sarpanch';

export default () => {
  let [fontsLoaded] = useFonts({
    Sarpanch_Regular400,
    Sarpanch_Medium500,
    Sarpanch_SemiBold600,
    Sarpanch_Bold700,
    Sarpanch_ExtraBold800,
    Sarpanch_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarpanch_Regular400' }}>
          Sarpanch_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarpanch_Medium500' }}>
          Sarpanch_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarpanch_SemiBold600' }}>
          Sarpanch_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarpanch_Bold700' }}>
          Sarpanch_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarpanch_ExtraBold800' }}>
          Sarpanch_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sarpanch_Black900' }}>
          Sarpanch_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Sarpanch_Regular400
![Sarpanch_Regular400](./a694e1d94a3cd59dead878c6ef1da8eb55274eb3b10e6f667a4506f4d2bf6a36.ttf.png)

##### Sarpanch_Medium500
![Sarpanch_Medium500](./c7dedb13d24392e5c3e796641d50cce4643a03762ea0df2936f01cbdf94976bd.ttf.png)

##### Sarpanch_SemiBold600
![Sarpanch_SemiBold600](./6bf8e038e00a3b7997da00d55f7715433a7c61351b1434e3659fb806f0c25a0e.ttf.png)

##### Sarpanch_Bold700
![Sarpanch_Bold700](./5e1a7afd37c3b896e4eeb5de1bd8a3414b6966b45f7a9652b041ae80cb3b1855.ttf.png)

##### Sarpanch_ExtraBold800
![Sarpanch_ExtraBold800](./a9575bc7bbbe80afa882bd838018d60f95a70408b16be48f2ce3f32eefebc620.ttf.png)

##### Sarpanch_Black900
![Sarpanch_Black900](./353bbda31bbbf4d1b499d676bded12b04e4aabafae78f929c4e5e875ecd09a19.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/sarpanch` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sarpanch page on Google Fonts](https://fonts.google.com/specimen/Sarpanch) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sarpanch on Google Fonts](https://fonts.google.com/specimen/Sarpanch)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sarpanch)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sarpanch)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
