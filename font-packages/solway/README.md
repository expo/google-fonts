# @expo-google-fonts/solway

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/solway)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/solway)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/solway)

This package lets you use the [**Solway**](https://fonts.google.com/specimen/Solway) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Solway

![Solway](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Solway_Light300`
- `Solway_Regular400`
- `Solway_Medium500`
- `Solway_Bold700`
- `Solway_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/solway expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Solway_Light300,
  Solway_Regular400,
  Solway_Medium500,
  Solway_Bold700,
  Solway_ExtraBold800,
} from '@expo-google-fonts/solway';

export default () => {
  let [fontsLoaded] = useFonts({
    Solway_Light300,
    Solway_Regular400,
    Solway_Medium500,
    Solway_Bold700,
    Solway_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Solway_Light300' }}>
          Solway_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Solway_Regular400' }}>
          Solway_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Solway_Medium500' }}>
          Solway_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Solway_Bold700' }}>
          Solway_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Solway_ExtraBold800' }}>
          Solway_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Solway_Light300
![Solway_Light300](./30f12e709261a80d1a2f35d02c568e8080aa52e556cea38ec163ee09a6482606.ttf.png)

##### Solway_Regular400
![Solway_Regular400](./bc55ce65a041c9b5001bb030477677f6a44eeb3946a418259202a162382044d2.ttf.png)

##### Solway_Medium500
![Solway_Medium500](./c03b2ecebe399988e043ffcd0707d72b1327076b7c0f255c24c88e453a8163eb.ttf.png)

##### Solway_Bold700
![Solway_Bold700](./d3b46e3ef557420e377ce5924289b7f1987a6a99f5625aa5e6ef6f74002198fd.ttf.png)

##### Solway_ExtraBold800
![Solway_ExtraBold800](./6be411cbc685fc6716528e253c309c7af939f60f2bf83919a384384ee527a079.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/solway` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Solway page on Google Fonts](https://fonts.google.com/specimen/Solway) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Solway on Google Fonts](https://fonts.google.com/specimen/Solway)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/solway)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/solway)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
