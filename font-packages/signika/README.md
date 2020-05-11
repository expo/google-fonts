# @expo-google-fonts/signika

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/signika)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/signika)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/signika)

This package lets you use the [**Signika**](https://fonts.google.com/specimen/Signika) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Signika

![Signika](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Signika_Light300`
- `Signika_Regular400`
- `Signika_SemiBold600`
- `Signika_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/signika expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Signika_Light300,
  Signika_Regular400,
  Signika_SemiBold600,
  Signika_Bold700,
  useFonts,
} from '@expo-google-fonts/signika';

export default () => {
  let [fontsLoaded] = useFonts({
    Signika_Light300,
    Signika_Regular400,
    Signika_SemiBold600,
    Signika_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Signika_Light300' }}>
          Signika_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Signika_Regular400' }}>
          Signika_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Signika_SemiBold600' }}>
          Signika_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Signika_Bold700' }}>
          Signika_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Signika_Light300
![Signika_Light300](./57a28a3623e1ad46bb9a9d87d09811b72a87364aeb2d326a4df99bf0e23c0874.ttf.png)

##### Signika_Regular400
![Signika_Regular400](./028c027c049948e0a67c1a20b73992c9449bec50376131d3a57d3f98ad790c63.ttf.png)

##### Signika_SemiBold600
![Signika_SemiBold600](./2d6ed6b2f09f8f763304a07135b4a8dca9de0b7e1aea586a5f033133ae2e83cd.ttf.png)

##### Signika_Bold700
![Signika_Bold700](./9ffc0cf7832a52fdacc4833c2d951e529281b9eb803b1eeac14f4e69a0b5d1f7.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/signika` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Signika page on Google Fonts](https://fonts.google.com/specimen/Signika) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Signika on Google Fonts](https://fonts.google.com/specimen/Signika)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/signika)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/signika)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
