# @expo-google-fonts/oleo-script

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/oleo-script)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/oleo-script)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/oleo-script)

This package lets you use the [**Oleo Script**](https://fonts.google.com/specimen/Oleo+Script) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Oleo Script

![Oleo Script](./font-family.png)

This font family contains [2 styles](#gallery).

- `OleoScript_Regular400`
- `OleoScript_Bold700`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/oleo-script expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { OleoScript_Regular400, OleoScript_Bold700 } from '@expo-google-fonts/oleo-script';

export default () => {
  let [fontsLoaded] = useFonts({
    OleoScript_Regular400,
    OleoScript_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'OleoScript_Regular400' }}>
          OleoScript_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OleoScript_Bold700' }}>
          OleoScript_Bold700
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### OleoScript_Regular400
![OleoScript_Regular400](./e45b8be9acc97bbb496e30675fa48edc79f4cfe2e8c66346914c8264acbe18b3.ttf.png)

##### OleoScript_Bold700
![OleoScript_Bold700](./5742e5a26ecfd414f7f87868d0fb5fefead55b1227f381bfefe5243750279804.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/oleo-script` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Oleo Script page on Google Fonts](https://fonts.google.com/specimen/Oleo+Script) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Oleo Script on Google Fonts](https://fonts.google.com/specimen/Oleo+Script)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/oleo-script)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/oleo-script)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
