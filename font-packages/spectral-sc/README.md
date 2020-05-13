# @expo-google-fonts/spectral-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/spectral-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/spectral-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/spectral-sc)

This package lets you use the [**Spectral SC**](https://fonts.google.com/specimen/Spectral+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Spectral SC

![Spectral SC](./font-family.png)

This font family contains [14 styles](#-gallery).

- `SpectralSC_200ExtraLight`
- `SpectralSC_200ExtraLight_Italic`
- `SpectralSC_300Light`
- `SpectralSC_300Light_Italic`
- `SpectralSC_400Regular`
- `SpectralSC_400Regular_Italic`
- `SpectralSC_500Medium`
- `SpectralSC_500Medium_Italic`
- `SpectralSC_600SemiBold`
- `SpectralSC_600SemiBold_Italic`
- `SpectralSC_700Bold`
- `SpectralSC_700Bold_Italic`
- `SpectralSC_800ExtraBold`
- `SpectralSC_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/spectral-sc expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  SpectralSC_200ExtraLight,
  SpectralSC_200ExtraLight_Italic,
  SpectralSC_300Light,
  SpectralSC_300Light_Italic,
  SpectralSC_400Regular,
  SpectralSC_400Regular_Italic,
  SpectralSC_500Medium,
  SpectralSC_500Medium_Italic,
  SpectralSC_600SemiBold,
  SpectralSC_600SemiBold_Italic,
  SpectralSC_700Bold,
  SpectralSC_700Bold_Italic,
  SpectralSC_800ExtraBold,
  SpectralSC_800ExtraBold_Italic,
} from '@expo-google-fonts/spectral-sc';

export default () => {
  let [fontsLoaded] = useFonts({
    SpectralSC_200ExtraLight,
    SpectralSC_200ExtraLight_Italic,
    SpectralSC_300Light,
    SpectralSC_300Light_Italic,
    SpectralSC_400Regular,
    SpectralSC_400Regular_Italic,
    SpectralSC_500Medium,
    SpectralSC_500Medium_Italic,
    SpectralSC_600SemiBold,
    SpectralSC_600SemiBold_Italic,
    SpectralSC_700Bold,
    SpectralSC_700Bold_Italic,
    SpectralSC_800ExtraBold,
    SpectralSC_800ExtraBold_Italic,
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
            fontFamily: 'SpectralSC_200ExtraLight',
          }}>
          Spectral SC Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpectralSC_200ExtraLight_Italic',
          }}>
          Spectral SC Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpectralSC_300Light',
          }}>
          Spectral SC Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpectralSC_300Light_Italic',
          }}>
          Spectral SC Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpectralSC_400Regular',
          }}>
          Spectral SC Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpectralSC_400Regular_Italic',
          }}>
          Spectral SC Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpectralSC_500Medium',
          }}>
          Spectral SC Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpectralSC_500Medium_Italic',
          }}>
          Spectral SC Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpectralSC_600SemiBold',
          }}>
          Spectral SC Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpectralSC_600SemiBold_Italic',
          }}>
          Spectral SC Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpectralSC_700Bold',
          }}>
          Spectral SC Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpectralSC_700Bold_Italic',
          }}>
          Spectral SC Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpectralSC_800ExtraBold',
          }}>
          Spectral SC Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SpectralSC_800ExtraBold_Italic',
          }}>
          Spectral SC Extra Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### SpectralSC_200ExtraLight
![SpectralSC_200ExtraLight](./SpectralSC_200ExtraLight.ttf.png)

##### SpectralSC_200ExtraLight_Italic
![SpectralSC_200ExtraLight_Italic](./SpectralSC_200ExtraLight_Italic.ttf.png)

##### SpectralSC_300Light
![SpectralSC_300Light](./SpectralSC_300Light.ttf.png)

##### SpectralSC_300Light_Italic
![SpectralSC_300Light_Italic](./SpectralSC_300Light_Italic.ttf.png)

##### SpectralSC_400Regular
![SpectralSC_400Regular](./SpectralSC_400Regular.ttf.png)

##### SpectralSC_400Regular_Italic
![SpectralSC_400Regular_Italic](./SpectralSC_400Regular_Italic.ttf.png)

##### SpectralSC_500Medium
![SpectralSC_500Medium](./SpectralSC_500Medium.ttf.png)

##### SpectralSC_500Medium_Italic
![SpectralSC_500Medium_Italic](./SpectralSC_500Medium_Italic.ttf.png)

##### SpectralSC_600SemiBold
![SpectralSC_600SemiBold](./SpectralSC_600SemiBold.ttf.png)

##### SpectralSC_600SemiBold_Italic
![SpectralSC_600SemiBold_Italic](./SpectralSC_600SemiBold_Italic.ttf.png)

##### SpectralSC_700Bold
![SpectralSC_700Bold](./SpectralSC_700Bold.ttf.png)

##### SpectralSC_700Bold_Italic
![SpectralSC_700Bold_Italic](./SpectralSC_700Bold_Italic.ttf.png)

##### SpectralSC_800ExtraBold
![SpectralSC_800ExtraBold](./SpectralSC_800ExtraBold.ttf.png)

##### SpectralSC_800ExtraBold_Italic
![SpectralSC_800ExtraBold_Italic](./SpectralSC_800ExtraBold_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/spectral-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Spectral SC page on Google Fonts](https://fonts.google.com/specimen/Spectral+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Spectral SC on Google Fonts](https://fonts.google.com/specimen/Spectral+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/spectral-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/spectral-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
