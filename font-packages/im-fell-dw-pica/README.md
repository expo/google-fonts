# @expo-google-fonts/im-fell-dw-pica

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/im-fell-dw-pica)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/im-fell-dw-pica)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/im-fell-dw-pica)

This package lets you use the [**IM Fell DW Pica**](https://fonts.google.com/specimen/IM+Fell+DW+Pica) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## IM Fell DW Pica

![IM Fell DW Pica](./font-family.png)

This font family contains [2 styles](#-gallery).

- `IMFellDWPica_Regular400`
- `IMFellDWPica_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/im-fell-dw-pica expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  IMFellDWPica_Regular400,
  IMFellDWPica_Regular400_Italic,
} from '@expo-google-fonts/im-fell-dw-pica';

export default () => {
  let [fontsLoaded] = useFonts({
    IMFellDWPica_Regular400,
    IMFellDWPica_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'IMFellDWPica_Regular400' }}>
          IMFellDWPica_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'IMFellDWPica_Regular400_Italic' }}>
          IMFellDWPica_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### IMFellDWPica_Regular400
![IMFellDWPica_Regular400](./04268ecc548fa2dfe787958a051a8e1b42b355a945f5a4d47f003e70886debc3.ttf.png)

##### IMFellDWPica_Regular400_Italic
![IMFellDWPica_Regular400_Italic](./d2109f0f97280a92b37673b7bf664eee72f3b3874097dcbf1906740841b17fb0.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/im-fell-dw-pica` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IM Fell DW Pica page on Google Fonts](https://fonts.google.com/specimen/IM+Fell+DW+Pica) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IM Fell DW Pica on Google Fonts](https://fonts.google.com/specimen/IM+Fell+DW+Pica)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/im-fell-dw-pica)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/im-fell-dw-pica)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
