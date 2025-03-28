# @expo-google-fonts/noto-serif-nyiakeng-puachue-hmong

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-nyiakeng-puachue-hmong)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-nyiakeng-puachue-hmong)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-nyiakeng-puachue-hmong)

This package lets you use the [**Noto Serif Nyiakeng Puachue Hmong**](https://fonts.google.com/specimen/Noto+Serif+Nyiakeng+Puachue+Hmong) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Nyiakeng Puachue Hmong

![Noto Serif Nyiakeng Puachue Hmong](./font-family.png)

This font family contains [4 styles](#-gallery).

- `NotoSerifNyiakengPuachueHmong_400Regular`
- `NotoSerifNyiakengPuachueHmong_500Medium`
- `NotoSerifNyiakengPuachueHmong_600SemiBold`
- `NotoSerifNyiakengPuachueHmong_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-serif-nyiakeng-puachue-hmong expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NotoSerifNyiakengPuachueHmong_400Regular,
  NotoSerifNyiakengPuachueHmong_500Medium,
  NotoSerifNyiakengPuachueHmong_600SemiBold,
  NotoSerifNyiakengPuachueHmong_700Bold,
} from '@expo-google-fonts/noto-serif-nyiakeng-puachue-hmong';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerifNyiakengPuachueHmong_400Regular,
    NotoSerifNyiakengPuachueHmong_500Medium,
    NotoSerifNyiakengPuachueHmong_600SemiBold,
    NotoSerifNyiakengPuachueHmong_700Bold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifNyiakengPuachueHmong_400Regular',
          }}>
          Noto Serif Nyiakeng Puachue Hmong Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifNyiakengPuachueHmong_500Medium',
          }}>
          Noto Serif Nyiakeng Puachue Hmong Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifNyiakengPuachueHmong_600SemiBold',
          }}>
          Noto Serif Nyiakeng Puachue Hmong Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NotoSerifNyiakengPuachueHmong_700Bold',
          }}>
          Noto Serif Nyiakeng Puachue Hmong Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifNyiakengPuachueHmong_400Regular](./NotoSerifNyiakengPuachueHmong_400Regular.ttf.png)|![NotoSerifNyiakengPuachueHmong_500Medium](./NotoSerifNyiakengPuachueHmong_500Medium.ttf.png)|![NotoSerifNyiakengPuachueHmong_600SemiBold](./NotoSerifNyiakengPuachueHmong_600SemiBold.ttf.png)||
|![NotoSerifNyiakengPuachueHmong_700Bold](./NotoSerifNyiakengPuachueHmong_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-serif-nyiakeng-puachue-hmong` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Nyiakeng Puachue Hmong page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Nyiakeng+Puachue+Hmong) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Nyiakeng Puachue Hmong on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Nyiakeng+Puachue+Hmong)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-nyiakeng-puachue-hmong)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-nyiakeng-puachue-hmong)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
