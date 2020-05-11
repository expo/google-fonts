# @expo-google-fonts/yantramanav

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/yantramanav)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/yantramanav)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/yantramanav)

This package lets you use the [**Yantramanav**](https://fonts.google.com/specimen/Yantramanav) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Yantramanav

![Yantramanav](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Yantramanav_Thin100`
- `Yantramanav_Light300`
- `Yantramanav_Regular400`
- `Yantramanav_Medium500`
- `Yantramanav_Bold700`
- `Yantramanav_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/yantramanav expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Yantramanav_Thin100,
  Yantramanav_Light300,
  Yantramanav_Regular400,
  Yantramanav_Medium500,
  Yantramanav_Bold700,
  Yantramanav_Black900,
  useFonts,
} from '@expo-google-fonts/yantramanav';

export default () => {
  let [fontsLoaded] = useFonts({
    Yantramanav_Thin100,
    Yantramanav_Light300,
    Yantramanav_Regular400,
    Yantramanav_Medium500,
    Yantramanav_Bold700,
    Yantramanav_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Yantramanav_Thin100' }}>
          Yantramanav_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Yantramanav_Light300' }}>
          Yantramanav_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Yantramanav_Regular400' }}>
          Yantramanav_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Yantramanav_Medium500' }}>
          Yantramanav_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Yantramanav_Bold700' }}>
          Yantramanav_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Yantramanav_Black900' }}>
          Yantramanav_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Yantramanav_Thin100
![Yantramanav_Thin100](./86689d7a0f2e854d67499f3b138d736bbc906760e4ce2965a494ede2bd7bebca.ttf.png)

##### Yantramanav_Light300
![Yantramanav_Light300](./4ab0f6ae96b7ee1e64385a964c2e10db696f46e64a3c7e9966131d0a0e2d4584.ttf.png)

##### Yantramanav_Regular400
![Yantramanav_Regular400](./41c02d7da7c104c3ea5207122b178f4cbcf308b4911dbc4e4a460b23ba64f09e.ttf.png)

##### Yantramanav_Medium500
![Yantramanav_Medium500](./14362b0efe1ebbde59b45ed4e1f345c1a41e777d03fce97684b6bd8b67ecc385.ttf.png)

##### Yantramanav_Bold700
![Yantramanav_Bold700](./6036c39566fdfe4d7a96f8959775282729df41c691b5791efb80a530d96732e6.ttf.png)

##### Yantramanav_Black900
![Yantramanav_Black900](./117b18180127afc0bb9a28d0aa5d5aa9bcd8090b84d34a9adf571661c1896578.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/yantramanav` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Yantramanav page on Google Fonts](https://fonts.google.com/specimen/Yantramanav) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Yantramanav on Google Fonts](https://fonts.google.com/specimen/Yantramanav)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/yantramanav)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/yantramanav)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
