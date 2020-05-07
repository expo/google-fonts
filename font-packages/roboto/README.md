# @expo-google-fonts/roboto

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/roboto)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/roboto)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/roboto)

This package lets you use the [**Roboto**](https://fonts.google.com/specimen/Roboto) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Roboto

![Roboto](./font-family.png)

This font family contains [12 styles](#gallery).

- `Roboto_Thin100`
- `Roboto_Thin100_Italic`
- `Roboto_Light300`
- `Roboto_Light300_Italic`
- `Roboto_Regular400`
- `Roboto_Regular400_Italic`
- `Roboto_Medium500`
- `Roboto_Medium500_Italic`
- `Roboto_Bold700`
- `Roboto_Bold700_Italic`
- `Roboto_Black900`
- `Roboto_Black900_Italic`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/roboto expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Roboto_Thin100,
  Roboto_Thin100_Italic,
  Roboto_Light300,
  Roboto_Light300_Italic,
  Roboto_Regular400,
  Roboto_Regular400_Italic,
  Roboto_Medium500,
  Roboto_Medium500_Italic,
  Roboto_Bold700,
  Roboto_Bold700_Italic,
  Roboto_Black900,
  Roboto_Black900_Italic,
} from '@expo-google-fonts/roboto';

export default () => {
  let [fontsLoaded] = useFonts({
    Roboto_Thin100,
    Roboto_Thin100_Italic,
    Roboto_Light300,
    Roboto_Light300_Italic,
    Roboto_Regular400,
    Roboto_Regular400_Italic,
    Roboto_Medium500,
    Roboto_Medium500_Italic,
    Roboto_Bold700,
    Roboto_Bold700_Italic,
    Roboto_Black900,
    Roboto_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Roboto_Thin100' }}>
          Roboto_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Roboto_Thin100_Italic' }}>
          Roboto_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Roboto_Light300' }}>
          Roboto_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Roboto_Light300_Italic' }}>
          Roboto_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Roboto_Regular400' }}>
          Roboto_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Roboto_Regular400_Italic' }}>
          Roboto_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Roboto_Medium500' }}>
          Roboto_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Roboto_Medium500_Italic' }}>
          Roboto_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Roboto_Bold700' }}>
          Roboto_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Roboto_Bold700_Italic' }}>
          Roboto_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Roboto_Black900' }}>
          Roboto_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Roboto_Black900_Italic' }}>
          Roboto_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Roboto_Thin100
![Roboto_Thin100](./e735762739638d19335103f8e7a343545560f4b2265fd35a4f0f516f512a7760.ttf.png)

##### Roboto_Thin100_Italic
![Roboto_Thin100_Italic](./aece4c53901fff188a2cb1aab1024ea53b459e2181d47d9b3700c13d33ade89e.ttf.png)

##### Roboto_Light300
![Roboto_Light300](./9d1bd6e2cc14a33517018f1bbfdc878cb18e7894f39fc7c36436ae18440621e7.ttf.png)

##### Roboto_Light300_Italic
![Roboto_Light300_Italic](./0810007c837dfd034071c166e5f3ed111b0180b2f6af17a5c14e006a8e05784f.ttf.png)

##### Roboto_Regular400
![Roboto_Regular400](./030868028bda24a27a45e0be44c8ae15544762b94f80da746c8b8a1c05f8e952.ttf.png)

##### Roboto_Regular400_Italic
![Roboto_Regular400_Italic](./6a79346603274d80f27fb4de32a0e7a60f62c53c8069df2750e79b8f10e30649.ttf.png)

##### Roboto_Medium500
![Roboto_Medium500](./388ace661d10e5756d4de58035d6687cf35c0b11c8185b098468741ca2e8a6d4.ttf.png)

##### Roboto_Medium500_Italic
![Roboto_Medium500_Italic](./257c7750d0c1570dc2324571f2998d43e18649848595361a6b136bb0d3d2efb2.ttf.png)

##### Roboto_Bold700
![Roboto_Bold700](./ba3855457bdc103784c39219f0ce666683084df07dbd7eb7d8c35a40cf8f1c8b.ttf.png)

##### Roboto_Bold700_Italic
![Roboto_Bold700_Italic](./8c9936227e9fe936594819bbf4aa9a26d9b044f0b440800a4ade3e3e749f54aa.ttf.png)

##### Roboto_Black900
![Roboto_Black900](./a1ba74d13db1b16771b1d8e705e4c9282ef1d09492783304ebc025adb6ba1914.ttf.png)

##### Roboto_Black900_Italic
![Roboto_Black900_Italic](./a4c423dcbda812fa36cb0325f3aad0fd9847e8a5b0a26f31094db0666e721c8c.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/roboto` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Roboto page on Google Fonts](https://fonts.google.com/specimen/Roboto) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Roboto on Google Fonts](https://fonts.google.com/specimen/Roboto)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/roboto)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/roboto)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
