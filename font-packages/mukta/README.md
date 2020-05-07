# @expo-google-fonts/mukta

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mukta)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mukta)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mukta)

This package lets you use the [**Mukta**](https://fonts.google.com/specimen/Mukta) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Mukta

![Mukta](./font-family.png)

This font family contains [7 styles](#gallery).

- `Mukta_ExtraLight200`
- `Mukta_Light300`
- `Mukta_Regular400`
- `Mukta_Medium500`
- `Mukta_SemiBold600`
- `Mukta_Bold700`
- `Mukta_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/mukta expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Mukta_ExtraLight200,
  Mukta_Light300,
  Mukta_Regular400,
  Mukta_Medium500,
  Mukta_SemiBold600,
  Mukta_Bold700,
  Mukta_ExtraBold800,
} from '@expo-google-fonts/mukta';

export default () => {
  let [fontsLoaded] = useFonts({
    Mukta_ExtraLight200,
    Mukta_Light300,
    Mukta_Regular400,
    Mukta_Medium500,
    Mukta_SemiBold600,
    Mukta_Bold700,
    Mukta_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mukta_ExtraLight200' }}>
          Mukta_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mukta_Light300' }}>
          Mukta_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mukta_Regular400' }}>
          Mukta_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mukta_Medium500' }}>
          Mukta_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mukta_SemiBold600' }}>
          Mukta_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mukta_Bold700' }}>
          Mukta_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Mukta_ExtraBold800' }}>
          Mukta_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Mukta_ExtraLight200
![Mukta_ExtraLight200](./4a09d53371d63ff1a2007025ba620e2d49a10d6fa1cfd9771079b881fb10260b.ttf.png)

##### Mukta_Light300
![Mukta_Light300](./afd7468706fa0ed52e0b848541b4e7443296d0e40213e7903e1d85de5b78c259.ttf.png)

##### Mukta_Regular400
![Mukta_Regular400](./7a26594f60f0a156f11685565fac877993f2081741d7eafc7a67d82010f730f8.ttf.png)

##### Mukta_Medium500
![Mukta_Medium500](./a8691ddcdc7892d423b4906d2316da09de32309d3d68b21b5d3d640e28901896.ttf.png)

##### Mukta_SemiBold600
![Mukta_SemiBold600](./7d8e1e1ee78a611bd420d3ad4fb7812e49164acc68f473ee133666fe5376d477.ttf.png)

##### Mukta_Bold700
![Mukta_Bold700](./e6fcac27938712ebc52654eee052ffee3cb5608feef54db55a22964fe8c7d974.ttf.png)

##### Mukta_ExtraBold800
![Mukta_ExtraBold800](./861cea1030f95eb8f746e95524c8440b56afdd6606e07782193fe436cc52f46b.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/mukta` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mukta page on Google Fonts](https://fonts.google.com/specimen/Mukta) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mukta on Google Fonts](https://fonts.google.com/specimen/Mukta)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mukta)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mukta)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
