# @expo-google-fonts/miriam-libre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/miriam-libre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/miriam-libre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/miriam-libre)

This package lets you use the [**Miriam Libre**](https://fonts.google.com/specimen/Miriam+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Miriam Libre

![Miriam Libre](./font-family.png)

This font family contains [2 styles](#gallery).

- `MiriamLibre_Regular400`
- `MiriamLibre_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/miriam-libre expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { MiriamLibre_Regular400, MiriamLibre_Bold700 } from '@expo-google-fonts/miriam-libre';

export default () => {
  let [fontsLoaded] = useFonts({
    MiriamLibre_Regular400,
    MiriamLibre_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MiriamLibre_Regular400' }}>
          MiriamLibre_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MiriamLibre_Bold700' }}>
          MiriamLibre_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### MiriamLibre_Regular400
![MiriamLibre_Regular400](./c4dc8662662a1708ab4d397f59152bba9bde4ce4c524d9286d49d078a8c58dc6.ttf.png)

##### MiriamLibre_Bold700
![MiriamLibre_Bold700](./cbe1ade0a4a8eddd786eb1050d18d81c71465545f3f80392927a36af9035c775.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/miriam-libre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Miriam Libre page on Google Fonts](https://fonts.google.com/specimen/Miriam+Libre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Miriam Libre on Google Fonts](https://fonts.google.com/specimen/Miriam+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/miriam-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/miriam-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
