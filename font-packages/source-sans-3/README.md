# @expo-google-fonts/source-sans-3

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/source-sans-3)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/source-sans-3)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/source-sans-3)

This package lets you use the [**Source Sans 3**](https://fonts.google.com/specimen/Source+Sans+3) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Source Sans 3

![Source Sans 3](./font-family.png)

This font family contains [16 styles](#-gallery).

- `SourceSans3_200ExtraLight`
- `SourceSans3_300Light`
- `SourceSans3_400Regular`
- `SourceSans3_500Medium`
- `SourceSans3_600SemiBold`
- `SourceSans3_700Bold`
- `SourceSans3_800ExtraBold`
- `SourceSans3_900Black`
- `SourceSans3_200ExtraLight_Italic`
- `SourceSans3_300Light_Italic`
- `SourceSans3_400Regular_Italic`
- `SourceSans3_500Medium_Italic`
- `SourceSans3_600SemiBold_Italic`
- `SourceSans3_700Bold_Italic`
- `SourceSans3_800ExtraBold_Italic`
- `SourceSans3_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/source-sans-3 expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SourceSans3_200ExtraLight,
  SourceSans3_300Light,
  SourceSans3_400Regular,
  SourceSans3_500Medium,
  SourceSans3_600SemiBold,
  SourceSans3_700Bold,
  SourceSans3_800ExtraBold,
  SourceSans3_900Black,
  SourceSans3_200ExtraLight_Italic,
  SourceSans3_300Light_Italic,
  SourceSans3_400Regular_Italic,
  SourceSans3_500Medium_Italic,
  SourceSans3_600SemiBold_Italic,
  SourceSans3_700Bold_Italic,
  SourceSans3_800ExtraBold_Italic,
  SourceSans3_900Black_Italic,
} from '@expo-google-fonts/source-sans-3';

export default () => {
  let [fontsLoaded] = useFonts({
    SourceSans3_200ExtraLight,
    SourceSans3_300Light,
    SourceSans3_400Regular,
    SourceSans3_500Medium,
    SourceSans3_600SemiBold,
    SourceSans3_700Bold,
    SourceSans3_800ExtraBold,
    SourceSans3_900Black,
    SourceSans3_200ExtraLight_Italic,
    SourceSans3_300Light_Italic,
    SourceSans3_400Regular_Italic,
    SourceSans3_500Medium_Italic,
    SourceSans3_600SemiBold_Italic,
    SourceSans3_700Bold_Italic,
    SourceSans3_800ExtraBold_Italic,
    SourceSans3_900Black_Italic,
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
            fontFamily: 'SourceSans3_200ExtraLight',
          }}>
          Source Sans 3 Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_300Light',
          }}>
          Source Sans 3 Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_400Regular',
          }}>
          Source Sans 3 Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_500Medium',
          }}>
          Source Sans 3 Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_600SemiBold',
          }}>
          Source Sans 3 Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_700Bold',
          }}>
          Source Sans 3 Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_800ExtraBold',
          }}>
          Source Sans 3 Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_900Black',
          }}>
          Source Sans 3 Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_200ExtraLight_Italic',
          }}>
          Source Sans 3 Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_300Light_Italic',
          }}>
          Source Sans 3 Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_400Regular_Italic',
          }}>
          Source Sans 3 Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_500Medium_Italic',
          }}>
          Source Sans 3 Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_600SemiBold_Italic',
          }}>
          Source Sans 3 Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_700Bold_Italic',
          }}>
          Source Sans 3 Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_800ExtraBold_Italic',
          }}>
          Source Sans 3 Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSans3_900Black_Italic',
          }}>
          Source Sans 3 Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![SourceSans3_200ExtraLight](./SourceSans3_200ExtraLight.ttf.png)|![SourceSans3_300Light](./SourceSans3_300Light.ttf.png)|![SourceSans3_400Regular](./SourceSans3_400Regular.ttf.png)||
|![SourceSans3_500Medium](./SourceSans3_500Medium.ttf.png)|![SourceSans3_600SemiBold](./SourceSans3_600SemiBold.ttf.png)|![SourceSans3_700Bold](./SourceSans3_700Bold.ttf.png)||
|![SourceSans3_800ExtraBold](./SourceSans3_800ExtraBold.ttf.png)|![SourceSans3_900Black](./SourceSans3_900Black.ttf.png)|![SourceSans3_200ExtraLight_Italic](./SourceSans3_200ExtraLight_Italic.ttf.png)||
|![SourceSans3_300Light_Italic](./SourceSans3_300Light_Italic.ttf.png)|![SourceSans3_400Regular_Italic](./SourceSans3_400Regular_Italic.ttf.png)|![SourceSans3_500Medium_Italic](./SourceSans3_500Medium_Italic.ttf.png)||
|![SourceSans3_600SemiBold_Italic](./SourceSans3_600SemiBold_Italic.ttf.png)|![SourceSans3_700Bold_Italic](./SourceSans3_700Bold_Italic.ttf.png)|![SourceSans3_800ExtraBold_Italic](./SourceSans3_800ExtraBold_Italic.ttf.png)||
|![SourceSans3_900Black_Italic](./SourceSans3_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/source-sans-3` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Source Sans 3 page on Google Fonts](https://fonts.google.com/specimen/Source+Sans+3) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Source Sans 3 on Google Fonts](https://fonts.google.com/specimen/Source+Sans+3)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/source-sans-3)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/source-sans-3)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
