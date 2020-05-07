# @expo-google-fonts/lato

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lato)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lato)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lato)

This package lets you use the [**Lato**](https://fonts.google.com/specimen/Lato) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Lato

![Lato](./font-family.png)

This font family contains [10 styles](#gallery).

- `Lato_Thin100`
- `Lato_Thin100_Italic`
- `Lato_Light300`
- `Lato_Light300_Italic`
- `Lato_Regular400`
- `Lato_Regular400_Italic`
- `Lato_Bold700`
- `Lato_Bold700_Italic`
- `Lato_Black900`
- `Lato_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/lato expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Lato_Thin100,
  Lato_Thin100_Italic,
  Lato_Light300,
  Lato_Light300_Italic,
  Lato_Regular400,
  Lato_Regular400_Italic,
  Lato_Bold700,
  Lato_Bold700_Italic,
  Lato_Black900,
  Lato_Black900_Italic,
} from '@expo-google-fonts/lato';

export default () => {
  let [fontsLoaded] = useFonts({
    Lato_Thin100,
    Lato_Thin100_Italic,
    Lato_Light300,
    Lato_Light300_Italic,
    Lato_Regular400,
    Lato_Regular400_Italic,
    Lato_Bold700,
    Lato_Bold700_Italic,
    Lato_Black900,
    Lato_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lato_Thin100' }}>Lato_Thin100</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lato_Thin100_Italic' }}>
          Lato_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lato_Light300' }}>
          Lato_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lato_Light300_Italic' }}>
          Lato_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lato_Regular400' }}>
          Lato_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lato_Regular400_Italic' }}>
          Lato_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lato_Bold700' }}>Lato_Bold700</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lato_Bold700_Italic' }}>
          Lato_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lato_Black900' }}>
          Lato_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lato_Black900_Italic' }}>
          Lato_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Lato_Thin100
![Lato_Thin100](./2e734a39ad0b4a1dffd327f552cce678e867791007200be49b6a93a6c7c71b27.ttf.png)

##### Lato_Thin100_Italic
![Lato_Thin100_Italic](./00d4076b836620336e608f16588994045e53f8aca14d9e430205db56649a8a55.ttf.png)

##### Lato_Light300
![Lato_Light300](./9b25850654f3dd59daf526a3d63dcca1c435e231c9fa2dd949ccde9cea994366.ttf.png)

##### Lato_Light300_Italic
![Lato_Light300_Italic](./4cf23877950718d8775e526ee06380072a1bba6692d47bb5fb623fefb650b74b.ttf.png)

##### Lato_Regular400
![Lato_Regular400](./a649aaf21573a59079c46db19314fd95648f531e610fa932101f2705616b2882.ttf.png)

##### Lato_Regular400_Italic
![Lato_Regular400_Italic](./484dd58cc095656f129f756067ede55183de20d70a6260c22ac747ed583672d6.ttf.png)

##### Lato_Bold700
![Lato_Bold700](./407592da08cb1f6060fbc69262ad33edd0b61ec9160521455eca8f726bbd4353.ttf.png)

##### Lato_Bold700_Italic
![Lato_Bold700_Italic](./6449b474d050304983a9431099406936e7f6978e22025a4a5ff8533871529bba.ttf.png)

##### Lato_Black900
![Lato_Black900](./abae7ec6de16f8108f1a3e1e3dc9edf11c5903ab89b3513821f4e079a51ae175.ttf.png)

##### Lato_Black900_Italic
![Lato_Black900_Italic](./60407472b091a98e26c61f47900329eb3f971651fa76edc26d9f32f87e27f13f.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/lato` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lato page on Google Fonts](https://fonts.google.com/specimen/Lato) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lato on Google Fonts](https://fonts.google.com/specimen/Lato)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lato)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lato)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
