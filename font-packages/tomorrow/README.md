# @expo-google-fonts/tomorrow

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tomorrow)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tomorrow)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tomorrow)

This package lets you use the [**Tomorrow**](https://fonts.google.com/specimen/Tomorrow) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Tomorrow

![Tomorrow](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Tomorrow_100Thin`
- `Tomorrow_100Thin_Italic`
- `Tomorrow_200ExtraLight`
- `Tomorrow_200ExtraLight_Italic`
- `Tomorrow_300Light`
- `Tomorrow_300Light_Italic`
- `Tomorrow_400Regular`
- `Tomorrow_400Regular_Italic`
- `Tomorrow_500Medium`
- `Tomorrow_500Medium_Italic`
- `Tomorrow_600SemiBold`
- `Tomorrow_600SemiBold_Italic`
- `Tomorrow_700Bold`
- `Tomorrow_700Bold_Italic`
- `Tomorrow_800ExtraBold`
- `Tomorrow_800ExtraBold_Italic`
- `Tomorrow_900Black`
- `Tomorrow_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/tomorrow expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Tomorrow_100Thin,
  Tomorrow_100Thin_Italic,
  Tomorrow_200ExtraLight,
  Tomorrow_200ExtraLight_Italic,
  Tomorrow_300Light,
  Tomorrow_300Light_Italic,
  Tomorrow_400Regular,
  Tomorrow_400Regular_Italic,
  Tomorrow_500Medium,
  Tomorrow_500Medium_Italic,
  Tomorrow_600SemiBold,
  Tomorrow_600SemiBold_Italic,
  Tomorrow_700Bold,
  Tomorrow_700Bold_Italic,
  Tomorrow_800ExtraBold,
  Tomorrow_800ExtraBold_Italic,
  Tomorrow_900Black,
  Tomorrow_900Black_Italic,
} from '@expo-google-fonts/tomorrow';

export default () => {
  let [fontsLoaded] = useFonts({
    Tomorrow_100Thin,
    Tomorrow_100Thin_Italic,
    Tomorrow_200ExtraLight,
    Tomorrow_200ExtraLight_Italic,
    Tomorrow_300Light,
    Tomorrow_300Light_Italic,
    Tomorrow_400Regular,
    Tomorrow_400Regular_Italic,
    Tomorrow_500Medium,
    Tomorrow_500Medium_Italic,
    Tomorrow_600SemiBold,
    Tomorrow_600SemiBold_Italic,
    Tomorrow_700Bold,
    Tomorrow_700Bold_Italic,
    Tomorrow_800ExtraBold,
    Tomorrow_800ExtraBold_Italic,
    Tomorrow_900Black,
    Tomorrow_900Black_Italic,
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
            fontFamily: 'Tomorrow_100Thin',
          }}>
          Tomorrow Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_100Thin_Italic',
          }}>
          Tomorrow Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_200ExtraLight',
          }}>
          Tomorrow Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_200ExtraLight_Italic',
          }}>
          Tomorrow Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_300Light',
          }}>
          Tomorrow Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_300Light_Italic',
          }}>
          Tomorrow Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_400Regular',
          }}>
          Tomorrow Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_400Regular_Italic',
          }}>
          Tomorrow Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_500Medium',
          }}>
          Tomorrow Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_500Medium_Italic',
          }}>
          Tomorrow Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_600SemiBold',
          }}>
          Tomorrow Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_600SemiBold_Italic',
          }}>
          Tomorrow Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_700Bold',
          }}>
          Tomorrow Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_700Bold_Italic',
          }}>
          Tomorrow Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_800ExtraBold',
          }}>
          Tomorrow Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_800ExtraBold_Italic',
          }}>
          Tomorrow Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_900Black',
          }}>
          Tomorrow Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Tomorrow_900Black_Italic',
          }}>
          Tomorrow Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Tomorrow_100Thin](./Tomorrow_100Thin.ttf.png)|![Tomorrow_100Thin_Italic](./Tomorrow_100Thin_Italic.ttf.png)|![Tomorrow_200ExtraLight](./Tomorrow_200ExtraLight.ttf.png)||
|![Tomorrow_200ExtraLight_Italic](./Tomorrow_200ExtraLight_Italic.ttf.png)|![Tomorrow_300Light](./Tomorrow_300Light.ttf.png)|![Tomorrow_300Light_Italic](./Tomorrow_300Light_Italic.ttf.png)||
|![Tomorrow_400Regular](./Tomorrow_400Regular.ttf.png)|![Tomorrow_400Regular_Italic](./Tomorrow_400Regular_Italic.ttf.png)|![Tomorrow_500Medium](./Tomorrow_500Medium.ttf.png)||
|![Tomorrow_500Medium_Italic](./Tomorrow_500Medium_Italic.ttf.png)|![Tomorrow_600SemiBold](./Tomorrow_600SemiBold.ttf.png)|![Tomorrow_600SemiBold_Italic](./Tomorrow_600SemiBold_Italic.ttf.png)||
|![Tomorrow_700Bold](./Tomorrow_700Bold.ttf.png)|![Tomorrow_700Bold_Italic](./Tomorrow_700Bold_Italic.ttf.png)|![Tomorrow_800ExtraBold](./Tomorrow_800ExtraBold.ttf.png)||
|![Tomorrow_800ExtraBold_Italic](./Tomorrow_800ExtraBold_Italic.ttf.png)|![Tomorrow_900Black](./Tomorrow_900Black.ttf.png)|![Tomorrow_900Black_Italic](./Tomorrow_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/tomorrow` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tomorrow page on Google Fonts](https://fonts.google.com/specimen/Tomorrow) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tomorrow on Google Fonts](https://fonts.google.com/specimen/Tomorrow)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tomorrow)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tomorrow)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
