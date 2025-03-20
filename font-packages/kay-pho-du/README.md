# @expo-google-fonts/kay-pho-du

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kay-pho-du)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kay-pho-du)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kay-pho-du)

This package lets you use the [**Kay Pho Du**](https://fonts.google.com/specimen/Kay+Pho+Du) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kay Pho Du

![Kay Pho Du](./font-family.png)

This font family contains [4 styles](#-gallery).

- `KayPhoDu_400Regular`
- `KayPhoDu_500Medium`
- `KayPhoDu_600SemiBold`
- `KayPhoDu_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/kay-pho-du expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  KayPhoDu_400Regular,
  KayPhoDu_500Medium,
  KayPhoDu_600SemiBold,
  KayPhoDu_700Bold,
} from '@expo-google-fonts/kay-pho-du';

export default () => {
  let [fontsLoaded] = useFonts({
    KayPhoDu_400Regular,
    KayPhoDu_500Medium,
    KayPhoDu_600SemiBold,
    KayPhoDu_700Bold,
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
            fontFamily: 'KayPhoDu_400Regular',
          }}>
          Kay Pho Du Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KayPhoDu_500Medium',
          }}>
          Kay Pho Du Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KayPhoDu_600SemiBold',
          }}>
          Kay Pho Du Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'KayPhoDu_700Bold',
          }}>
          Kay Pho Du Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![KayPhoDu_400Regular](./KayPhoDu_400Regular.ttf.png)|![KayPhoDu_500Medium](./KayPhoDu_500Medium.ttf.png)|![KayPhoDu_600SemiBold](./KayPhoDu_600SemiBold.ttf.png)||
|![KayPhoDu_700Bold](./KayPhoDu_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/kay-pho-du` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kay Pho Du page on Google Fonts](https://fonts.google.com/specimen/Kay+Pho+Du) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kay Pho Du on Google Fonts](https://fonts.google.com/specimen/Kay+Pho+Du)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kay-pho-du)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kay-pho-du)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
