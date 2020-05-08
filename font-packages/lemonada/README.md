# @expo-google-fonts/lemonada

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lemonada)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lemonada)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lemonada)

This package lets you use the [**Lemonada**](https://fonts.google.com/specimen/Lemonada) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Lemonada

![Lemonada](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Lemonada_Light300`
- `Lemonada_Regular400`
- `Lemonada_SemiBold600`
- `Lemonada_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/lemonada expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Lemonada_Light300,
  Lemonada_Regular400,
  Lemonada_SemiBold600,
  Lemonada_Bold700,
} from '@expo-google-fonts/lemonada';

export default () => {
  let [fontsLoaded] = useFonts({
    Lemonada_Light300,
    Lemonada_Regular400,
    Lemonada_SemiBold600,
    Lemonada_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lemonada_Light300' }}>
          Lemonada_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lemonada_Regular400' }}>
          Lemonada_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lemonada_SemiBold600' }}>
          Lemonada_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lemonada_Bold700' }}>
          Lemonada_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Lemonada_Light300
![Lemonada_Light300](./cd1018b5355f76f3e9ff9d859172bbccef3a0e0bb0b6956ed913a2edba4e9673.ttf.png)

##### Lemonada_Regular400
![Lemonada_Regular400](./6c9760a51ed4b78cf2a172836b2cbc10f540963fdcaf88ef76d10cd4559ee07e.ttf.png)

##### Lemonada_SemiBold600
![Lemonada_SemiBold600](./b17674113757a97537383dc22f4c28496ce5d1fc8274386430fd9d602216a6a7.ttf.png)

##### Lemonada_Bold700
![Lemonada_Bold700](./9f8159cd531775a6fab18432a618771064672ca7a1c6c7db49780d18de0d87d0.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/lemonada` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lemonada page on Google Fonts](https://fonts.google.com/specimen/Lemonada) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lemonada on Google Fonts](https://fonts.google.com/specimen/Lemonada)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lemonada)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lemonada)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
