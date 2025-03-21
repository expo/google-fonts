# @expo-google-fonts/jetbrains-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/jetbrains-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/jetbrains-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/jetbrains-mono)

This package lets you use the [**JetBrains Mono**](https://fonts.google.com/specimen/JetBrains+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## JetBrains Mono

![JetBrains Mono](./font-family.png)

This font family contains [16 styles](#-gallery).

- `JetBrainsMono_100Thin`
- `JetBrainsMono_200ExtraLight`
- `JetBrainsMono_300Light`
- `JetBrainsMono_400Regular`
- `JetBrainsMono_500Medium`
- `JetBrainsMono_600SemiBold`
- `JetBrainsMono_700Bold`
- `JetBrainsMono_800ExtraBold`
- `JetBrainsMono_100Thin_Italic`
- `JetBrainsMono_200ExtraLight_Italic`
- `JetBrainsMono_300Light_Italic`
- `JetBrainsMono_400Regular_Italic`
- `JetBrainsMono_500Medium_Italic`
- `JetBrainsMono_600SemiBold_Italic`
- `JetBrainsMono_700Bold_Italic`
- `JetBrainsMono_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/jetbrains-mono expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  JetBrainsMono_100Thin,
  JetBrainsMono_200ExtraLight,
  JetBrainsMono_300Light,
  JetBrainsMono_400Regular,
  JetBrainsMono_500Medium,
  JetBrainsMono_600SemiBold,
  JetBrainsMono_700Bold,
  JetBrainsMono_800ExtraBold,
  JetBrainsMono_100Thin_Italic,
  JetBrainsMono_200ExtraLight_Italic,
  JetBrainsMono_300Light_Italic,
  JetBrainsMono_400Regular_Italic,
  JetBrainsMono_500Medium_Italic,
  JetBrainsMono_600SemiBold_Italic,
  JetBrainsMono_700Bold_Italic,
  JetBrainsMono_800ExtraBold_Italic,
} from '@expo-google-fonts/jetbrains-mono';

export default () => {
  let [fontsLoaded] = useFonts({
    JetBrainsMono_100Thin,
    JetBrainsMono_200ExtraLight,
    JetBrainsMono_300Light,
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
    JetBrainsMono_600SemiBold,
    JetBrainsMono_700Bold,
    JetBrainsMono_800ExtraBold,
    JetBrainsMono_100Thin_Italic,
    JetBrainsMono_200ExtraLight_Italic,
    JetBrainsMono_300Light_Italic,
    JetBrainsMono_400Regular_Italic,
    JetBrainsMono_500Medium_Italic,
    JetBrainsMono_600SemiBold_Italic,
    JetBrainsMono_700Bold_Italic,
    JetBrainsMono_800ExtraBold_Italic,
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
            fontFamily: 'JetBrainsMono_100Thin',
          }}>
          JetBrains Mono Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_200ExtraLight',
          }}>
          JetBrains Mono Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_300Light',
          }}>
          JetBrains Mono Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_400Regular',
          }}>
          JetBrains Mono Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_500Medium',
          }}>
          JetBrains Mono Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_600SemiBold',
          }}>
          JetBrains Mono Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_700Bold',
          }}>
          JetBrains Mono Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_800ExtraBold',
          }}>
          JetBrains Mono Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_100Thin_Italic',
          }}>
          JetBrains Mono Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_200ExtraLight_Italic',
          }}>
          JetBrains Mono Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_300Light_Italic',
          }}>
          JetBrains Mono Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_400Regular_Italic',
          }}>
          JetBrains Mono Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_500Medium_Italic',
          }}>
          JetBrains Mono Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_600SemiBold_Italic',
          }}>
          JetBrains Mono Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_700Bold_Italic',
          }}>
          JetBrains Mono Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'JetBrainsMono_800ExtraBold_Italic',
          }}>
          JetBrains Mono Extra Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![JetBrainsMono_100Thin](./JetBrainsMono_100Thin.ttf.png)|![JetBrainsMono_200ExtraLight](./JetBrainsMono_200ExtraLight.ttf.png)|![JetBrainsMono_300Light](./JetBrainsMono_300Light.ttf.png)||
|![JetBrainsMono_400Regular](./JetBrainsMono_400Regular.ttf.png)|![JetBrainsMono_500Medium](./JetBrainsMono_500Medium.ttf.png)|![JetBrainsMono_600SemiBold](./JetBrainsMono_600SemiBold.ttf.png)||
|![JetBrainsMono_700Bold](./JetBrainsMono_700Bold.ttf.png)|![JetBrainsMono_800ExtraBold](./JetBrainsMono_800ExtraBold.ttf.png)|![JetBrainsMono_100Thin_Italic](./JetBrainsMono_100Thin_Italic.ttf.png)||
|![JetBrainsMono_200ExtraLight_Italic](./JetBrainsMono_200ExtraLight_Italic.ttf.png)|![JetBrainsMono_300Light_Italic](./JetBrainsMono_300Light_Italic.ttf.png)|![JetBrainsMono_400Regular_Italic](./JetBrainsMono_400Regular_Italic.ttf.png)||
|![JetBrainsMono_500Medium_Italic](./JetBrainsMono_500Medium_Italic.ttf.png)|![JetBrainsMono_600SemiBold_Italic](./JetBrainsMono_600SemiBold_Italic.ttf.png)|![JetBrainsMono_700Bold_Italic](./JetBrainsMono_700Bold_Italic.ttf.png)||
|![JetBrainsMono_800ExtraBold_Italic](./JetBrainsMono_800ExtraBold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/jetbrains-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [JetBrains Mono page on Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [JetBrains Mono on Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/jetbrains-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/jetbrains-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
