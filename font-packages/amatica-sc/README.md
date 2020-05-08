# @expo-google-fonts/amatica-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/amatica-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/amatica-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/amatica-sc)

This package lets you use the [**Amatica SC**](https://fonts.google.com/specimen/Amatica+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Amatica SC

![Amatica SC](./font-family.png)

This font family contains [2 styles](#-gallery).

- `AmaticaSC_Regular400`
- `AmaticaSC_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/amatica-sc expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { AmaticaSC_Regular400, AmaticaSC_Bold700 } from '@expo-google-fonts/amatica-sc';

export default () => {
  let [fontsLoaded] = useFonts({
    AmaticaSC_Regular400,
    AmaticaSC_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AmaticaSC_Regular400' }}>
          AmaticaSC_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AmaticaSC_Bold700' }}>
          AmaticaSC_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### AmaticaSC_Regular400
![AmaticaSC_Regular400](./39a7e41edc371bdb0e8356c4e9f69ea62594cfd412fbb1f5c45a32c0a5e75516.ttf.png)

##### AmaticaSC_Bold700
![AmaticaSC_Bold700](./4ead630d51d6f70a5e14a17fec1bffc04c9a13118b217101fd42eac20be2ae66.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/amatica-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Amatica SC page on Google Fonts](https://fonts.google.com/specimen/Amatica+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Amatica SC on Google Fonts](https://fonts.google.com/specimen/Amatica+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/amatica-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/amatica-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
