# @expo-google-fonts/manrope

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/manrope)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/manrope)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/manrope)

This package lets you use the [**Manrope**](https://fonts.google.com/specimen/Manrope) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Manrope

![Manrope](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Manrope_200ExtraLight`
- `Manrope_300Light`
- `Manrope_400Regular`
- `Manrope_500Medium`
- `Manrope_600SemiBold`
- `Manrope_700Bold`
- `Manrope_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/manrope expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from '@expo-google-fonts/manrope';

export default () => {
  let [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
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
            fontFamily: 'Manrope_200ExtraLight',
          }}>
          Manrope Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Manrope_300Light',
          }}>
          Manrope Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Manrope_400Regular',
          }}>
          Manrope Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Manrope_500Medium',
          }}>
          Manrope Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Manrope_600SemiBold',
          }}>
          Manrope Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Manrope_700Bold',
          }}>
          Manrope Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Manrope_800ExtraBold',
          }}>
          Manrope Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Manrope_200ExtraLight
![Manrope_200ExtraLight](./Manrope_200ExtraLight.ttf.png)

##### Manrope_300Light
![Manrope_300Light](./Manrope_300Light.ttf.png)

##### Manrope_400Regular
![Manrope_400Regular](./Manrope_400Regular.ttf.png)

##### Manrope_500Medium
![Manrope_500Medium](./Manrope_500Medium.ttf.png)

##### Manrope_600SemiBold
![Manrope_600SemiBold](./Manrope_600SemiBold.ttf.png)

##### Manrope_700Bold
![Manrope_700Bold](./Manrope_700Bold.ttf.png)

##### Manrope_800ExtraBold
![Manrope_800ExtraBold](./Manrope_800ExtraBold.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/manrope` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Manrope page on Google Fonts](https://fonts.google.com/specimen/Manrope) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Manrope on Google Fonts](https://fonts.google.com/specimen/Manrope)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/manrope)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/manrope)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
