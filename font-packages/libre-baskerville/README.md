# @expo-google-fonts/libre-baskerville

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/libre-baskerville)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/libre-baskerville)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/libre-baskerville)

This package lets you use the [**Libre Baskerville**](https://fonts.google.com/specimen/Libre+Baskerville) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Libre Baskerville

![Libre Baskerville](./font-family.png)

This font family contains [3 styles](#-gallery).

- `LibreBaskerville_Regular400`
- `LibreBaskerville_Regular400_Italic`
- `LibreBaskerville_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/libre-baskerville expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  LibreBaskerville_Regular400,
  LibreBaskerville_Regular400_Italic,
  LibreBaskerville_Bold700,
} from '@expo-google-fonts/libre-baskerville';

export default () => {
  let [fontsLoaded] = useFonts({
    LibreBaskerville_Regular400,
    LibreBaskerville_Regular400_Italic,
    LibreBaskerville_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreBaskerville_Regular400' }}>
          LibreBaskerville_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'LibreBaskerville_Regular400_Italic' }}>
          LibreBaskerville_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'LibreBaskerville_Bold700' }}>
          LibreBaskerville_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### LibreBaskerville_Regular400
![LibreBaskerville_Regular400](./9823638a0177e6fb752280379b200fdaa407e687c8c8e2e7f67bb73b6098f478.ttf.png)

##### LibreBaskerville_Regular400_Italic
![LibreBaskerville_Regular400_Italic](./47c63ebb507fc5ce683210642c5b0529745a907c2a98ca886eef85e798558b3b.ttf.png)

##### LibreBaskerville_Bold700
![LibreBaskerville_Bold700](./e4f9416f4d8d90e78dc3993de94575a0c44a72da6b4216e5f6346cfee242d201.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/libre-baskerville` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Libre Baskerville page on Google Fonts](https://fonts.google.com/specimen/Libre+Baskerville) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Libre Baskerville on Google Fonts](https://fonts.google.com/specimen/Libre+Baskerville)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/libre-baskerville)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/libre-baskerville)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
