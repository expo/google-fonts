# @expo-google-fonts/sarabun

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sarabun)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sarabun)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sarabun)

This package lets you use the [**Sarabun**](https://fonts.google.com/specimen/Sarabun) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Sarabun

![Sarabun](./font-family.png)

This font family contains [16 styles](#-gallery).

- `Sarabun_100Thin`
- `Sarabun_100Thin_Italic`
- `Sarabun_200ExtraLight`
- `Sarabun_200ExtraLight_Italic`
- `Sarabun_300Light`
- `Sarabun_300Light_Italic`
- `Sarabun_400Regular`
- `Sarabun_400Regular_Italic`
- `Sarabun_500Medium`
- `Sarabun_500Medium_Italic`
- `Sarabun_600SemiBold`
- `Sarabun_600SemiBold_Italic`
- `Sarabun_700Bold`
- `Sarabun_700Bold_Italic`
- `Sarabun_800ExtraBold`
- `Sarabun_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sarabun expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Sarabun_100Thin,
  Sarabun_100Thin_Italic,
  Sarabun_200ExtraLight,
  Sarabun_200ExtraLight_Italic,
  Sarabun_300Light,
  Sarabun_300Light_Italic,
  Sarabun_400Regular,
  Sarabun_400Regular_Italic,
  Sarabun_500Medium,
  Sarabun_500Medium_Italic,
  Sarabun_600SemiBold,
  Sarabun_600SemiBold_Italic,
  Sarabun_700Bold,
  Sarabun_700Bold_Italic,
  Sarabun_800ExtraBold,
  Sarabun_800ExtraBold_Italic,
} from '@expo-google-fonts/sarabun';

export default () => {
  let [fontsLoaded] = useFonts({
    Sarabun_100Thin,
    Sarabun_100Thin_Italic,
    Sarabun_200ExtraLight,
    Sarabun_200ExtraLight_Italic,
    Sarabun_300Light,
    Sarabun_300Light_Italic,
    Sarabun_400Regular,
    Sarabun_400Regular_Italic,
    Sarabun_500Medium,
    Sarabun_500Medium_Italic,
    Sarabun_600SemiBold,
    Sarabun_600SemiBold_Italic,
    Sarabun_700Bold,
    Sarabun_700Bold_Italic,
    Sarabun_800ExtraBold,
    Sarabun_800ExtraBold_Italic,
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
            fontFamily: 'Sarabun_100Thin',
          }}>
          Sarabun Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_100Thin_Italic',
          }}>
          Sarabun Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_200ExtraLight',
          }}>
          Sarabun Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_200ExtraLight_Italic',
          }}>
          Sarabun Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_300Light',
          }}>
          Sarabun Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_300Light_Italic',
          }}>
          Sarabun Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_400Regular',
          }}>
          Sarabun Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_400Regular_Italic',
          }}>
          Sarabun Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_500Medium',
          }}>
          Sarabun Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_500Medium_Italic',
          }}>
          Sarabun Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_600SemiBold',
          }}>
          Sarabun Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_600SemiBold_Italic',
          }}>
          Sarabun Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_700Bold',
          }}>
          Sarabun Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_700Bold_Italic',
          }}>
          Sarabun Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_800ExtraBold',
          }}>
          Sarabun Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarabun_800ExtraBold_Italic',
          }}>
          Sarabun Extra Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Sarabun_100Thin
![Sarabun_100Thin](./Sarabun_100Thin.ttf.png)

##### Sarabun_100Thin_Italic
![Sarabun_100Thin_Italic](./Sarabun_100Thin_Italic.ttf.png)

##### Sarabun_200ExtraLight
![Sarabun_200ExtraLight](./Sarabun_200ExtraLight.ttf.png)

##### Sarabun_200ExtraLight_Italic
![Sarabun_200ExtraLight_Italic](./Sarabun_200ExtraLight_Italic.ttf.png)

##### Sarabun_300Light
![Sarabun_300Light](./Sarabun_300Light.ttf.png)

##### Sarabun_300Light_Italic
![Sarabun_300Light_Italic](./Sarabun_300Light_Italic.ttf.png)

##### Sarabun_400Regular
![Sarabun_400Regular](./Sarabun_400Regular.ttf.png)

##### Sarabun_400Regular_Italic
![Sarabun_400Regular_Italic](./Sarabun_400Regular_Italic.ttf.png)

##### Sarabun_500Medium
![Sarabun_500Medium](./Sarabun_500Medium.ttf.png)

##### Sarabun_500Medium_Italic
![Sarabun_500Medium_Italic](./Sarabun_500Medium_Italic.ttf.png)

##### Sarabun_600SemiBold
![Sarabun_600SemiBold](./Sarabun_600SemiBold.ttf.png)

##### Sarabun_600SemiBold_Italic
![Sarabun_600SemiBold_Italic](./Sarabun_600SemiBold_Italic.ttf.png)

##### Sarabun_700Bold
![Sarabun_700Bold](./Sarabun_700Bold.ttf.png)

##### Sarabun_700Bold_Italic
![Sarabun_700Bold_Italic](./Sarabun_700Bold_Italic.ttf.png)

##### Sarabun_800ExtraBold
![Sarabun_800ExtraBold](./Sarabun_800ExtraBold.ttf.png)

##### Sarabun_800ExtraBold_Italic
![Sarabun_800ExtraBold_Italic](./Sarabun_800ExtraBold_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/sarabun` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sarabun page on Google Fonts](https://fonts.google.com/specimen/Sarabun) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sarabun on Google Fonts](https://fonts.google.com/specimen/Sarabun)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sarabun)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sarabun)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
