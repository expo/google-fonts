# @expo-google-fonts/jaldi

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/jaldi)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/jaldi)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/jaldi)

This package lets you use the [**Jaldi**](https://fonts.google.com/specimen/Jaldi) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Jaldi

![Jaldi](./font-family.png)

This font family contains [2 styles](#gallery).

- `Jaldi_Regular400`
- `Jaldi_Bold700`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/jaldi expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Jaldi_Regular400, Jaldi_Bold700 } from '@expo-google-fonts/jaldi';

export default () => {
  let [fontsLoaded] = useFonts({
    Jaldi_Regular400,
    Jaldi_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Jaldi_Regular400' }}>
          Jaldi_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Jaldi_Bold700' }}>
          Jaldi_Bold700
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Jaldi_Regular400
![Jaldi_Regular400](./2fd0aecfd94af32615e102201a3d6b70dd7b98a317a4b6457f9d5683435f2680.ttf.png)

##### Jaldi_Bold700
![Jaldi_Bold700](./1eb9040b249dbbf98470eca20e05d667c64d16570d20f4f3b5c8082472d03566.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/jaldi` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Jaldi page on Google Fonts](https://fonts.google.com/specimen/Jaldi) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Jaldi on Google Fonts](https://fonts.google.com/specimen/Jaldi)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/jaldi)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/jaldi)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
