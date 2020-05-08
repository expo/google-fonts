# @expo-google-fonts/tajawal

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tajawal)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tajawal)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tajawal)

This package lets you use the [**Tajawal**](https://fonts.google.com/specimen/Tajawal) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Tajawal

![Tajawal](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Tajawal_ExtraLight200`
- `Tajawal_Light300`
- `Tajawal_Regular400`
- `Tajawal_Medium500`
- `Tajawal_Bold700`
- `Tajawal_ExtraBold800`
- `Tajawal_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/tajawal expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Tajawal_ExtraLight200,
  Tajawal_Light300,
  Tajawal_Regular400,
  Tajawal_Medium500,
  Tajawal_Bold700,
  Tajawal_ExtraBold800,
  Tajawal_Black900,
} from '@expo-google-fonts/tajawal';

export default () => {
  let [fontsLoaded] = useFonts({
    Tajawal_ExtraLight200,
    Tajawal_Light300,
    Tajawal_Regular400,
    Tajawal_Medium500,
    Tajawal_Bold700,
    Tajawal_ExtraBold800,
    Tajawal_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_ExtraLight200' }}>
          Tajawal_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_Light300' }}>
          Tajawal_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_Regular400' }}>
          Tajawal_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_Medium500' }}>
          Tajawal_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_Bold700' }}>
          Tajawal_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_ExtraBold800' }}>
          Tajawal_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_Black900' }}>
          Tajawal_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Tajawal_ExtraLight200
![Tajawal_ExtraLight200](./1591b1d4b425865ad56f27769d7904f608af3a947ce4a365c5e6f1a66ed36c5c.ttf.png)

##### Tajawal_Light300
![Tajawal_Light300](./96516512d599f345601934621e5ddc2b61c7967d59e4ee3bea24cb11c9f720d8.ttf.png)

##### Tajawal_Regular400
![Tajawal_Regular400](./6008a589c04e1cca5b78ecd73eb5f54a525670df2d3627fcddac202dac0b8db5.ttf.png)

##### Tajawal_Medium500
![Tajawal_Medium500](./efce394f1ebd252328bf21261a39ead5a083741b090a73e22bec34acbd910611.ttf.png)

##### Tajawal_Bold700
![Tajawal_Bold700](./647958c651db7515a77fab543f70f06386720821399060f8b1791b1dc23a845b.ttf.png)

##### Tajawal_ExtraBold800
![Tajawal_ExtraBold800](./354e92ab2c7c9b84b1e80ee6431ea8e8bc0fe58113d4afa3fbf186b193168ca5.ttf.png)

##### Tajawal_Black900
![Tajawal_Black900](./9953e51150483dc38b632c494f68d39e59b6c474716bc0ac3e9d997c4ec0df52.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/tajawal` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tajawal page on Google Fonts](https://fonts.google.com/specimen/Tajawal) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tajawal on Google Fonts](https://fonts.google.com/specimen/Tajawal)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tajawal)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tajawal)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
