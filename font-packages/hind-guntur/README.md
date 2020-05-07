# @expo-google-fonts/hind-guntur

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/hind-guntur)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/hind-guntur)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/hind-guntur)

This package lets you use the [**Hind Guntur**](https://fonts.google.com/specimen/Hind+Guntur) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Hind Guntur

![Hind Guntur](./font-family.png)

This font family contains [5 styles](#gallery).

- `HindGuntur_Light300`
- `HindGuntur_Regular400`
- `HindGuntur_Medium500`
- `HindGuntur_SemiBold600`
- `HindGuntur_Bold700`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/hind-guntur expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  HindGuntur_Light300,
  HindGuntur_Regular400,
  HindGuntur_Medium500,
  HindGuntur_SemiBold600,
  HindGuntur_Bold700,
} from '@expo-google-fonts/hind-guntur';

export default () => {
  let [fontsLoaded] = useFonts({
    HindGuntur_Light300,
    HindGuntur_Regular400,
    HindGuntur_Medium500,
    HindGuntur_SemiBold600,
    HindGuntur_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindGuntur_Light300' }}>
          HindGuntur_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindGuntur_Regular400' }}>
          HindGuntur_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindGuntur_Medium500' }}>
          HindGuntur_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindGuntur_SemiBold600' }}>
          HindGuntur_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'HindGuntur_Bold700' }}>
          HindGuntur_Bold700
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### HindGuntur_Light300
![HindGuntur_Light300](./83f2591cf78a025ae8e85ebecda4a590c393eb80bf83f18bace7e5d144b57bc8.ttf.png)

##### HindGuntur_Regular400
![HindGuntur_Regular400](./58962c61fd64e7df2aa4d0fbf8b7044df4531b4098533fd14348043d05fb8b42.ttf.png)

##### HindGuntur_Medium500
![HindGuntur_Medium500](./1548c29a01fac4cf5904cd44cf584eaec84e08ed0b15f96638c1cb9ff8995583.ttf.png)

##### HindGuntur_SemiBold600
![HindGuntur_SemiBold600](./12aa908469a5d74ca315816664934ede78906a4593e2310e5ea1894cd964c2a1.ttf.png)

##### HindGuntur_Bold700
![HindGuntur_Bold700](./751c8dd12898b1caafe20c6458531dce8773242b36537ea2e341d9a4bd01bafe.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/hind-guntur` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Hind Guntur page on Google Fonts](https://fonts.google.com/specimen/Hind+Guntur) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Hind Guntur on Google Fonts](https://fonts.google.com/specimen/Hind+Guntur)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/hind-guntur)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/hind-guntur)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
