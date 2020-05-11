# @expo-google-fonts/frank-ruhl-libre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/frank-ruhl-libre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/frank-ruhl-libre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/frank-ruhl-libre)

This package lets you use the [**Frank Ruhl Libre**](https://fonts.google.com/specimen/Frank+Ruhl+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Frank Ruhl Libre

![Frank Ruhl Libre](./font-family.png)

This font family contains [5 styles](#-gallery).

- `FrankRuhlLibre_Light300`
- `FrankRuhlLibre_Regular400`
- `FrankRuhlLibre_Medium500`
- `FrankRuhlLibre_Bold700`
- `FrankRuhlLibre_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/frank-ruhl-libre expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  FrankRuhlLibre_Light300,
  FrankRuhlLibre_Regular400,
  FrankRuhlLibre_Medium500,
  FrankRuhlLibre_Bold700,
  FrankRuhlLibre_Black900,
  useFonts,
} from '@expo-google-fonts/frank-ruhl-libre';

export default () => {
  let [fontsLoaded] = useFonts({
    FrankRuhlLibre_Light300,
    FrankRuhlLibre_Regular400,
    FrankRuhlLibre_Medium500,
    FrankRuhlLibre_Bold700,
    FrankRuhlLibre_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'FrankRuhlLibre_Light300' }}>
          FrankRuhlLibre_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FrankRuhlLibre_Regular400' }}>
          FrankRuhlLibre_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FrankRuhlLibre_Medium500' }}>
          FrankRuhlLibre_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FrankRuhlLibre_Bold700' }}>
          FrankRuhlLibre_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FrankRuhlLibre_Black900' }}>
          FrankRuhlLibre_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### FrankRuhlLibre_Light300
![FrankRuhlLibre_Light300](./a5522476a201c815bdc0a30e19c5eb768edd4ddbe563647bf958a6326d7de351.ttf.png)

##### FrankRuhlLibre_Regular400
![FrankRuhlLibre_Regular400](./9a33b30005cd2b612a70785a7205c43bf5f1a43c839b44d7ab7ddb581503e7ea.ttf.png)

##### FrankRuhlLibre_Medium500
![FrankRuhlLibre_Medium500](./009ea0ba06f79de2ac7a440b5f01b2aa767bbe10be39cfb151cef128d8c5c378.ttf.png)

##### FrankRuhlLibre_Bold700
![FrankRuhlLibre_Bold700](./bf711279089d27a7d3707704287cee15972baf963565dccb30e23486a65697cf.ttf.png)

##### FrankRuhlLibre_Black900
![FrankRuhlLibre_Black900](./1be4c921fb7b84259c4252c3caadda7f65b0ed5ad332ce0b680224f76e280363.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/frank-ruhl-libre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Frank Ruhl Libre page on Google Fonts](https://fonts.google.com/specimen/Frank+Ruhl+Libre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Frank Ruhl Libre on Google Fonts](https://fonts.google.com/specimen/Frank+Ruhl+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/frank-ruhl-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/frank-ruhl-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
