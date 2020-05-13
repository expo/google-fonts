# @expo-google-fonts/gothic-a1

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/gothic-a1)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/gothic-a1)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/gothic-a1)

This package lets you use the [**Gothic A1**](https://fonts.google.com/specimen/Gothic+A1) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Gothic A1

![Gothic A1](./font-family.png)

This font family contains [9 styles](#-gallery).

- `GothicA1_100Thin`
- `GothicA1_200ExtraLight`
- `GothicA1_300Light`
- `GothicA1_400Regular`
- `GothicA1_500Medium`
- `GothicA1_600SemiBold`
- `GothicA1_700Bold`
- `GothicA1_800ExtraBold`
- `GothicA1_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/gothic-a1 expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  GothicA1_100Thin,
  GothicA1_200ExtraLight,
  GothicA1_300Light,
  GothicA1_400Regular,
  GothicA1_500Medium,
  GothicA1_600SemiBold,
  GothicA1_700Bold,
  GothicA1_800ExtraBold,
  GothicA1_900Black,
} from '@expo-google-fonts/gothic-a1';

export default () => {
  let [fontsLoaded] = useFonts({
    GothicA1_100Thin,
    GothicA1_200ExtraLight,
    GothicA1_300Light,
    GothicA1_400Regular,
    GothicA1_500Medium,
    GothicA1_600SemiBold,
    GothicA1_700Bold,
    GothicA1_800ExtraBold,
    GothicA1_900Black,
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
            fontFamily: 'GothicA1_100Thin',
          }}>
          Gothic A1 Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'GothicA1_200ExtraLight',
          }}>
          Gothic A1 Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'GothicA1_300Light',
          }}>
          Gothic A1 Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'GothicA1_400Regular',
          }}>
          Gothic A1 Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'GothicA1_500Medium',
          }}>
          Gothic A1 Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'GothicA1_600SemiBold',
          }}>
          Gothic A1 Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'GothicA1_700Bold',
          }}>
          Gothic A1 Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'GothicA1_800ExtraBold',
          }}>
          Gothic A1 Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'GothicA1_900Black',
          }}>
          Gothic A1 Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### GothicA1_100Thin
![GothicA1_100Thin](./GothicA1_100Thin.ttf.png)

##### GothicA1_200ExtraLight
![GothicA1_200ExtraLight](./GothicA1_200ExtraLight.ttf.png)

##### GothicA1_300Light
![GothicA1_300Light](./GothicA1_300Light.ttf.png)

##### GothicA1_400Regular
![GothicA1_400Regular](./GothicA1_400Regular.ttf.png)

##### GothicA1_500Medium
![GothicA1_500Medium](./GothicA1_500Medium.ttf.png)

##### GothicA1_600SemiBold
![GothicA1_600SemiBold](./GothicA1_600SemiBold.ttf.png)

##### GothicA1_700Bold
![GothicA1_700Bold](./GothicA1_700Bold.ttf.png)

##### GothicA1_800ExtraBold
![GothicA1_800ExtraBold](./GothicA1_800ExtraBold.ttf.png)

##### GothicA1_900Black
![GothicA1_900Black](./GothicA1_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/gothic-a1` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Gothic A1 page on Google Fonts](https://fonts.google.com/specimen/Gothic+A1) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Gothic A1 on Google Fonts](https://fonts.google.com/specimen/Gothic+A1)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gothic-a1)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gothic-a1)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
