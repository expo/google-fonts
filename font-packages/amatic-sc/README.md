# @expo-google-fonts/amatic-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/amatic-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/amatic-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/amatic-sc)

This package lets you use the [**Amatic SC**](https://fonts.google.com/specimen/Amatic+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Amatic SC

![Amatic SC](./font-family.png)

This font family contains [2 styles](#gallery).

- `AmaticSC_Regular400`
- `AmaticSC_Bold700`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/amatic-sc expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { AmaticSC_Regular400, AmaticSC_Bold700 } from '@expo-google-fonts/amatic-sc';

export default () => {
  let [fontsLoaded] = useFonts({
    AmaticSC_Regular400,
    AmaticSC_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AmaticSC_Regular400' }}>
          AmaticSC_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AmaticSC_Bold700' }}>
          AmaticSC_Bold700
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### AmaticSC_Regular400
![AmaticSC_Regular400](./9da6405b57357f309f00592371cf54bb3c1d57b8e7d9fc40fff6f364d6ca80fe.ttf.png)

##### AmaticSC_Bold700
![AmaticSC_Bold700](./81f4df2ecbc8d2fcae65290f5075ff98149f4f95ea00bb6bf3a0711e4e1afd75.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/amatic-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Amatic SC page on Google Fonts](https://fonts.google.com/specimen/Amatic+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Amatic SC on Google Fonts](https://fonts.google.com/specimen/Amatic+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/amatic-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/amatic-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
