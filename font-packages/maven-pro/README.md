# @expo-google-fonts/maven-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/maven-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/maven-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/maven-pro)

This package lets you use the [**Maven Pro**](https://fonts.google.com/specimen/Maven+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Maven Pro

![Maven Pro](./font-family.png)

This font family contains [6 styles](#-gallery).

- `MavenPro_400Regular`
- `MavenPro_500Medium`
- `MavenPro_600SemiBold`
- `MavenPro_700Bold`
- `MavenPro_800ExtraBold`
- `MavenPro_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/maven-pro expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  MavenPro_400Regular,
  MavenPro_500Medium,
  MavenPro_600SemiBold,
  MavenPro_700Bold,
  MavenPro_800ExtraBold,
  MavenPro_900Black,
} from '@expo-google-fonts/maven-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    MavenPro_400Regular,
    MavenPro_500Medium,
    MavenPro_600SemiBold,
    MavenPro_700Bold,
    MavenPro_800ExtraBold,
    MavenPro_900Black,
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
            fontFamily: 'MavenPro_400Regular',
          }}>
          Maven Pro Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MavenPro_500Medium',
          }}>
          Maven Pro Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MavenPro_600SemiBold',
          }}>
          Maven Pro Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MavenPro_700Bold',
          }}>
          Maven Pro Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MavenPro_800ExtraBold',
          }}>
          Maven Pro Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'MavenPro_900Black',
          }}>
          Maven Pro Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![MavenPro_400Regular](./MavenPro_400Regular.ttf.png)|![MavenPro_500Medium](./MavenPro_500Medium.ttf.png)|![MavenPro_600SemiBold](./MavenPro_600SemiBold.ttf.png)||
|![MavenPro_700Bold](./MavenPro_700Bold.ttf.png)|![MavenPro_800ExtraBold](./MavenPro_800ExtraBold.ttf.png)|![MavenPro_900Black](./MavenPro_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/maven-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Maven Pro page on Google Fonts](https://fonts.google.com/specimen/Maven+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Maven Pro on Google Fonts](https://fonts.google.com/specimen/Maven+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/maven-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/maven-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
