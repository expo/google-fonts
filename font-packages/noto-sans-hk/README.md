# @expo-google-fonts/noto-sans-hk

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-hk)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-hk)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-hk)

This package lets you use the [**Noto Sans HK**](https://fonts.google.com/specimen/Noto+Sans+HK) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans HK

![Noto Sans HK](./font-family.png)

This font family contains [6 styles](#-gallery).

- `NotoSansHK_100Thin`
- `NotoSansHK_300Light`
- `NotoSansHK_400Regular`
- `NotoSansHK_500Medium`
- `NotoSansHK_700Bold`
- `NotoSansHK_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/noto-sans-hk expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  NotoSansHK_100Thin,
  NotoSansHK_300Light,
  NotoSansHK_400Regular,
  NotoSansHK_500Medium,
  NotoSansHK_700Bold,
  NotoSansHK_900Black,
} from '@expo-google-fonts/noto-sans-hk';

export default () => {
  let [fontsLoaded] = useFonts({
    NotoSansHK_100Thin,
    NotoSansHK_300Light,
    NotoSansHK_400Regular,
    NotoSansHK_500Medium,
    NotoSansHK_700Bold,
    NotoSansHK_900Black,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSansHK_100Thin' }}>
          NotoSansHK_100Thin
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSansHK_300Light' }}>
          NotoSansHK_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSansHK_400Regular' }}>
          NotoSansHK_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSansHK_500Medium' }}>
          NotoSansHK_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSansHK_700Bold' }}>
          NotoSansHK_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'NotoSansHK_900Black' }}>
          NotoSansHK_900Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### NotoSansHK_100Thin
![NotoSansHK_100Thin](./NotoSansHK_100Thin.ttf.png)

##### NotoSansHK_300Light
![NotoSansHK_300Light](./NotoSansHK_300Light.ttf.png)

##### NotoSansHK_400Regular
![NotoSansHK_400Regular](./NotoSansHK_400Regular.ttf.png)

##### NotoSansHK_500Medium
![NotoSansHK_500Medium](./NotoSansHK_500Medium.ttf.png)

##### NotoSansHK_700Bold
![NotoSansHK_700Bold](./NotoSansHK_700Bold.ttf.png)

##### NotoSansHK_900Black
![NotoSansHK_900Black](./NotoSansHK_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/noto-sans-hk` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans HK page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+HK) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans HK on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+HK)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-hk)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-hk)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
