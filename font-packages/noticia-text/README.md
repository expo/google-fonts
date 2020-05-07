# @expo-google-fonts/noticia-text

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noticia-text)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noticia-text)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noticia-text)

This package lets you use the [**Noticia Text**](https://fonts.google.com/specimen/Noticia+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Noticia Text

![Noticia Text](./font-family.png)

This font family contains [4 styles](#gallery).

- `NoticiaText_Regular400`
- `NoticiaText_Regular400_Italic`
- `NoticiaText_Bold700`
- `NoticiaText_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noticia-text expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  NoticiaText_Regular400,
  NoticiaText_Regular400_Italic,
  NoticiaText_Bold700,
  NoticiaText_Bold700_Italic,
} from '@expo-google-fonts/noticia-text';

export default () => {
  let [fontsLoaded] = useFonts({
    NoticiaText_Regular400,
    NoticiaText_Regular400_Italic,
    NoticiaText_Bold700,
    NoticiaText_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'NoticiaText_Regular400' }}>
          NoticiaText_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NoticiaText_Regular400_Italic' }}>
          NoticiaText_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NoticiaText_Bold700' }}>
          NoticiaText_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NoticiaText_Bold700_Italic' }}>
          NoticiaText_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### NoticiaText_Regular400
![NoticiaText_Regular400](./8aa05df6db1fd8277eb2791ce573473314c741b8b6b0779c1f5156a33c24e54c.ttf.png)

##### NoticiaText_Regular400_Italic
![NoticiaText_Regular400_Italic](./eae99ba15e584587a39b40e2c6b930d2c6da34555025ef2fcecdad8b5d1096ec.ttf.png)

##### NoticiaText_Bold700
![NoticiaText_Bold700](./16462e88dea5568eff3522e2b0e80ac4943e7ade072e98099a0ced914809837a.ttf.png)

##### NoticiaText_Bold700_Italic
![NoticiaText_Bold700_Italic](./89293c9cb0897a9fbf4e63241a6b72e62599bf45fe58a6163b953a9c980ad1f8.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noticia-text` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noticia Text page on Google Fonts](https://fonts.google.com/specimen/Noticia+Text) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noticia Text on Google Fonts](https://fonts.google.com/specimen/Noticia+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noticia-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noticia-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
