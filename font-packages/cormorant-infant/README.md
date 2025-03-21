# @expo-google-fonts/cormorant-infant

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cormorant-infant)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cormorant-infant)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cormorant-infant)

This package lets you use the [**Cormorant Infant**](https://fonts.google.com/specimen/Cormorant+Infant) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Cormorant Infant

![Cormorant Infant](./font-family.png)

This font family contains [10 styles](#-gallery).

- `CormorantInfant_300Light`
- `CormorantInfant_400Regular`
- `CormorantInfant_500Medium`
- `CormorantInfant_600SemiBold`
- `CormorantInfant_700Bold`
- `CormorantInfant_300Light_Italic`
- `CormorantInfant_400Regular_Italic`
- `CormorantInfant_500Medium_Italic`
- `CormorantInfant_600SemiBold_Italic`
- `CormorantInfant_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/cormorant-infant expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  CormorantInfant_300Light,
  CormorantInfant_400Regular,
  CormorantInfant_500Medium,
  CormorantInfant_600SemiBold,
  CormorantInfant_700Bold,
  CormorantInfant_300Light_Italic,
  CormorantInfant_400Regular_Italic,
  CormorantInfant_500Medium_Italic,
  CormorantInfant_600SemiBold_Italic,
  CormorantInfant_700Bold_Italic,
} from '@expo-google-fonts/cormorant-infant';

export default () => {
  let [fontsLoaded] = useFonts({
    CormorantInfant_300Light,
    CormorantInfant_400Regular,
    CormorantInfant_500Medium,
    CormorantInfant_600SemiBold,
    CormorantInfant_700Bold,
    CormorantInfant_300Light_Italic,
    CormorantInfant_400Regular_Italic,
    CormorantInfant_500Medium_Italic,
    CormorantInfant_600SemiBold_Italic,
    CormorantInfant_700Bold_Italic,
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
            fontFamily: 'CormorantInfant_300Light',
          }}>
          Cormorant Infant Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CormorantInfant_400Regular',
          }}>
          Cormorant Infant Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CormorantInfant_500Medium',
          }}>
          Cormorant Infant Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CormorantInfant_600SemiBold',
          }}>
          Cormorant Infant Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CormorantInfant_700Bold',
          }}>
          Cormorant Infant Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CormorantInfant_300Light_Italic',
          }}>
          Cormorant Infant Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CormorantInfant_400Regular_Italic',
          }}>
          Cormorant Infant Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CormorantInfant_500Medium_Italic',
          }}>
          Cormorant Infant Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CormorantInfant_600SemiBold_Italic',
          }}>
          Cormorant Infant Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'CormorantInfant_700Bold_Italic',
          }}>
          Cormorant Infant Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![CormorantInfant_300Light](./CormorantInfant_300Light.ttf.png)|![CormorantInfant_400Regular](./CormorantInfant_400Regular.ttf.png)|![CormorantInfant_500Medium](./CormorantInfant_500Medium.ttf.png)||
|![CormorantInfant_600SemiBold](./CormorantInfant_600SemiBold.ttf.png)|![CormorantInfant_700Bold](./CormorantInfant_700Bold.ttf.png)|![CormorantInfant_300Light_Italic](./CormorantInfant_300Light_Italic.ttf.png)||
|![CormorantInfant_400Regular_Italic](./CormorantInfant_400Regular_Italic.ttf.png)|![CormorantInfant_500Medium_Italic](./CormorantInfant_500Medium_Italic.ttf.png)|![CormorantInfant_600SemiBold_Italic](./CormorantInfant_600SemiBold_Italic.ttf.png)||
|![CormorantInfant_700Bold_Italic](./CormorantInfant_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cormorant-infant` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cormorant Infant page on Google Fonts](https://fonts.google.com/specimen/Cormorant+Infant) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cormorant Infant on Google Fonts](https://fonts.google.com/specimen/Cormorant+Infant)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cormorant-infant)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cormorant-infant)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
