# @expo-google-fonts/bai-jamjuree

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bai-jamjuree)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bai-jamjuree)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bai-jamjuree)

This package lets you use the [**Bai Jamjuree**](https://fonts.google.com/specimen/Bai+Jamjuree) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bai Jamjuree

![Bai Jamjuree](./font-family.png)

This font family contains [12 styles](#-gallery).

- `BaiJamjuree_200ExtraLight`
- `BaiJamjuree_200ExtraLight_Italic`
- `BaiJamjuree_300Light`
- `BaiJamjuree_300Light_Italic`
- `BaiJamjuree_400Regular`
- `BaiJamjuree_400Regular_Italic`
- `BaiJamjuree_500Medium`
- `BaiJamjuree_500Medium_Italic`
- `BaiJamjuree_600SemiBold`
- `BaiJamjuree_600SemiBold_Italic`
- `BaiJamjuree_700Bold`
- `BaiJamjuree_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/bai-jamjuree expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  BaiJamjuree_200ExtraLight,
  BaiJamjuree_200ExtraLight_Italic,
  BaiJamjuree_300Light,
  BaiJamjuree_300Light_Italic,
  BaiJamjuree_400Regular,
  BaiJamjuree_400Regular_Italic,
  BaiJamjuree_500Medium,
  BaiJamjuree_500Medium_Italic,
  BaiJamjuree_600SemiBold,
  BaiJamjuree_600SemiBold_Italic,
  BaiJamjuree_700Bold,
  BaiJamjuree_700Bold_Italic,
} from '@expo-google-fonts/bai-jamjuree';

export default () => {
  let [fontsLoaded] = useFonts({
    BaiJamjuree_200ExtraLight,
    BaiJamjuree_200ExtraLight_Italic,
    BaiJamjuree_300Light,
    BaiJamjuree_300Light_Italic,
    BaiJamjuree_400Regular,
    BaiJamjuree_400Regular_Italic,
    BaiJamjuree_500Medium,
    BaiJamjuree_500Medium_Italic,
    BaiJamjuree_600SemiBold,
    BaiJamjuree_600SemiBold_Italic,
    BaiJamjuree_700Bold,
    BaiJamjuree_700Bold_Italic,
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
            fontFamily: 'BaiJamjuree_200ExtraLight',
          }}>
          Bai Jamjuree Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BaiJamjuree_200ExtraLight_Italic',
          }}>
          Bai Jamjuree Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BaiJamjuree_300Light',
          }}>
          Bai Jamjuree Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BaiJamjuree_300Light_Italic',
          }}>
          Bai Jamjuree Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BaiJamjuree_400Regular',
          }}>
          Bai Jamjuree Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BaiJamjuree_400Regular_Italic',
          }}>
          Bai Jamjuree Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BaiJamjuree_500Medium',
          }}>
          Bai Jamjuree Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BaiJamjuree_500Medium_Italic',
          }}>
          Bai Jamjuree Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BaiJamjuree_600SemiBold',
          }}>
          Bai Jamjuree Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BaiJamjuree_600SemiBold_Italic',
          }}>
          Bai Jamjuree Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BaiJamjuree_700Bold',
          }}>
          Bai Jamjuree Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BaiJamjuree_700Bold_Italic',
          }}>
          Bai Jamjuree Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### BaiJamjuree_200ExtraLight
![BaiJamjuree_200ExtraLight](./BaiJamjuree_200ExtraLight.ttf.png)

##### BaiJamjuree_200ExtraLight_Italic
![BaiJamjuree_200ExtraLight_Italic](./BaiJamjuree_200ExtraLight_Italic.ttf.png)

##### BaiJamjuree_300Light
![BaiJamjuree_300Light](./BaiJamjuree_300Light.ttf.png)

##### BaiJamjuree_300Light_Italic
![BaiJamjuree_300Light_Italic](./BaiJamjuree_300Light_Italic.ttf.png)

##### BaiJamjuree_400Regular
![BaiJamjuree_400Regular](./BaiJamjuree_400Regular.ttf.png)

##### BaiJamjuree_400Regular_Italic
![BaiJamjuree_400Regular_Italic](./BaiJamjuree_400Regular_Italic.ttf.png)

##### BaiJamjuree_500Medium
![BaiJamjuree_500Medium](./BaiJamjuree_500Medium.ttf.png)

##### BaiJamjuree_500Medium_Italic
![BaiJamjuree_500Medium_Italic](./BaiJamjuree_500Medium_Italic.ttf.png)

##### BaiJamjuree_600SemiBold
![BaiJamjuree_600SemiBold](./BaiJamjuree_600SemiBold.ttf.png)

##### BaiJamjuree_600SemiBold_Italic
![BaiJamjuree_600SemiBold_Italic](./BaiJamjuree_600SemiBold_Italic.ttf.png)

##### BaiJamjuree_700Bold
![BaiJamjuree_700Bold](./BaiJamjuree_700Bold.ttf.png)

##### BaiJamjuree_700Bold_Italic
![BaiJamjuree_700Bold_Italic](./BaiJamjuree_700Bold_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/bai-jamjuree` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bai Jamjuree page on Google Fonts](https://fonts.google.com/specimen/Bai+Jamjuree) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bai Jamjuree on Google Fonts](https://fonts.google.com/specimen/Bai+Jamjuree)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bai-jamjuree)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bai-jamjuree)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
