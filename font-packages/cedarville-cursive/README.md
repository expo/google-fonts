# @expo-google-fonts/cedarville-cursive

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cedarville-cursive)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cedarville-cursive)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cedarville-cursive)

This package lets you use the [**Cedarville Cursive**](https://fonts.google.com/specimen/Cedarville+Cursive) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cedarville Cursive

![Cedarville Cursive](./font-family.png)

This font family contains [1 style](#-gallery).

- `CedarvilleCursive_Regular400`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cedarville-cursive expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { CedarvilleCursive_Regular400, useFonts } from '@expo-google-fonts/cedarville-cursive';

export default () => {
  let [fontsLoaded] = useFonts({
    CedarvilleCursive_Regular400,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CedarvilleCursive_Regular400' }}>
          CedarvilleCursive_Regular400
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### CedarvilleCursive_Regular400
![CedarvilleCursive_Regular400](./b1296a081a20bf4a1936ace5eac4d05fa6702cdfaab5f94a5088af4c0aa46c3d.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cedarville-cursive` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cedarville Cursive page on Google Fonts](https://fonts.google.com/specimen/Cedarville+Cursive) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cedarville Cursive on Google Fonts](https://fonts.google.com/specimen/Cedarville+Cursive)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cedarville-cursive)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cedarville-cursive)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
