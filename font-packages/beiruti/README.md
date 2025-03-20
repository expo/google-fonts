# @expo-google-fonts/beiruti

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/beiruti)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/beiruti)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/beiruti)

This package lets you use the [**Beiruti**](https://fonts.google.com/specimen/Beiruti) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Beiruti

![Beiruti](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Beiruti_200ExtraLight`
- `Beiruti_300Light`
- `Beiruti_400Regular`
- `Beiruti_500Medium`
- `Beiruti_600SemiBold`
- `Beiruti_700Bold`
- `Beiruti_800ExtraBold`
- `Beiruti_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/beiruti expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Beiruti_200ExtraLight,
  Beiruti_300Light,
  Beiruti_400Regular,
  Beiruti_500Medium,
  Beiruti_600SemiBold,
  Beiruti_700Bold,
  Beiruti_800ExtraBold,
  Beiruti_900Black,
} from '@expo-google-fonts/beiruti';

export default () => {
  let [fontsLoaded] = useFonts({
    Beiruti_200ExtraLight,
    Beiruti_300Light,
    Beiruti_400Regular,
    Beiruti_500Medium,
    Beiruti_600SemiBold,
    Beiruti_700Bold,
    Beiruti_800ExtraBold,
    Beiruti_900Black,
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
            fontFamily: 'Beiruti_200ExtraLight',
          }}>
          Beiruti Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Beiruti_300Light',
          }}>
          Beiruti Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Beiruti_400Regular',
          }}>
          Beiruti Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Beiruti_500Medium',
          }}>
          Beiruti Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Beiruti_600SemiBold',
          }}>
          Beiruti Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Beiruti_700Bold',
          }}>
          Beiruti Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Beiruti_800ExtraBold',
          }}>
          Beiruti Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Beiruti_900Black',
          }}>
          Beiruti Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Beiruti_200ExtraLight](./Beiruti_200ExtraLight.ttf.png)|![Beiruti_300Light](./Beiruti_300Light.ttf.png)|![Beiruti_400Regular](./Beiruti_400Regular.ttf.png)||
|![Beiruti_500Medium](./Beiruti_500Medium.ttf.png)|![Beiruti_600SemiBold](./Beiruti_600SemiBold.ttf.png)|![Beiruti_700Bold](./Beiruti_700Bold.ttf.png)||
|![Beiruti_800ExtraBold](./Beiruti_800ExtraBold.ttf.png)|![Beiruti_900Black](./Beiruti_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/beiruti` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Beiruti page on Google Fonts](https://fonts.google.com/specimen/Beiruti) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Beiruti on Google Fonts](https://fonts.google.com/specimen/Beiruti)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/beiruti)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/beiruti)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
