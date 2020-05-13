# @expo-google-fonts/noto-serif-kr

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-kr)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-kr)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-kr)

This package lets you use the [**Noto Serif KR**](https://fonts.google.com/specimen/Noto+Serif+KR) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif KR

![Noto Serif KR](./font-family.png)

This font family contains [7 styles](#-gallery).

- `NotoSerifKR_200ExtraLight`
- `NotoSerifKR_300Light`
- `NotoSerifKR_400Regular`
- `NotoSerifKR_500Medium`
- `NotoSerifKR_600SemiBold`
- `NotoSerifKR_700Bold`
- `NotoSerifKR_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-serif-kr expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  NotoSerifKR_200ExtraLight,
  NotoSerifKR_300Light,
  NotoSerifKR_400Regular,
  NotoSerifKR_500Medium,
  NotoSerifKR_600SemiBold,
  NotoSerifKR_700Bold,
  NotoSerifKR_900Black,
} from '@expo-google-fonts/noto-serif-kr';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSerifKR_200ExtraLight,
    NotoSerifKR_300Light,
    NotoSerifKR_400Regular,
    NotoSerifKR_500Medium,
    NotoSerifKR_600SemiBold,
    NotoSerifKR_700Bold,
    NotoSerifKR_900Black,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSerifKR_200ExtraLight' }}>
          NotoSerifKR_200ExtraLight
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSerifKR_300Light' }}>
          NotoSerifKR_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSerifKR_400Regular' }}>
          NotoSerifKR_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSerifKR_500Medium' }}>
          NotoSerifKR_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSerifKR_600SemiBold' }}>
          NotoSerifKR_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSerifKR_700Bold' }}>
          NotoSerifKR_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSerifKR_900Black' }}>
          NotoSerifKR_900Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### NotoSerifKR_200ExtraLight
![NotoSerifKR_200ExtraLight](./NotoSerifKR_200ExtraLight.ttf.png)

##### NotoSerifKR_300Light
![NotoSerifKR_300Light](./NotoSerifKR_300Light.ttf.png)

##### NotoSerifKR_400Regular
![NotoSerifKR_400Regular](./NotoSerifKR_400Regular.ttf.png)

##### NotoSerifKR_500Medium
![NotoSerifKR_500Medium](./NotoSerifKR_500Medium.ttf.png)

##### NotoSerifKR_600SemiBold
![NotoSerifKR_600SemiBold](./NotoSerifKR_600SemiBold.ttf.png)

##### NotoSerifKR_700Bold
![NotoSerifKR_700Bold](./NotoSerifKR_700Bold.ttf.png)

##### NotoSerifKR_900Black
![NotoSerifKR_900Black](./NotoSerifKR_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-serif-kr` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif KR page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+KR) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif KR on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+KR)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-kr)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-kr)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
