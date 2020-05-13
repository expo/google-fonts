# @expo-google-fonts/nanum-myeongjo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/nanum-myeongjo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/nanum-myeongjo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/nanum-myeongjo)

This package lets you use the [**Nanum Myeongjo**](https://fonts.google.com/specimen/Nanum+Myeongjo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Nanum Myeongjo

![Nanum Myeongjo](./font-family.png)

This font family contains [3 styles](#-gallery).

- `NanumMyeongjo_400Regular`
- `NanumMyeongjo_700Bold`
- `NanumMyeongjo_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/nanum-myeongjo expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  NanumMyeongjo_400Regular,
  NanumMyeongjo_700Bold,
  NanumMyeongjo_800ExtraBold,
} from '@expo-google-fonts/nanum-myeongjo';

export default () => {
  let [fontsLoaded] = useFonts({
    NanumMyeongjo_400Regular,
    NanumMyeongjo_700Bold,
    NanumMyeongjo_800ExtraBold,
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
            fontFamily: 'NanumMyeongjo_400Regular',
          }}>
          Nanum Myeongjo Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NanumMyeongjo_700Bold',
          }}>
          Nanum Myeongjo Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'NanumMyeongjo_800ExtraBold',
          }}>
          Nanum Myeongjo Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![NanumMyeongjo_400Regular](./NanumMyeongjo_400Regular.ttf.png)|![NanumMyeongjo_700Bold](./NanumMyeongjo_700Bold.ttf.png)|![NanumMyeongjo_800ExtraBold](./NanumMyeongjo_800ExtraBold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/nanum-myeongjo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Nanum Myeongjo page on Google Fonts](https://fonts.google.com/specimen/Nanum+Myeongjo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Nanum Myeongjo on Google Fonts](https://fonts.google.com/specimen/Nanum+Myeongjo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/nanum-myeongjo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/nanum-myeongjo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
