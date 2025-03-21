# @expo-google-fonts/kufam

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kufam)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kufam)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kufam)

This package lets you use the [**Kufam**](https://fonts.google.com/specimen/Kufam) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kufam

![Kufam](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Kufam_400Regular`
- `Kufam_500Medium`
- `Kufam_600SemiBold`
- `Kufam_700Bold`
- `Kufam_800ExtraBold`
- `Kufam_900Black`
- `Kufam_400Regular_Italic`
- `Kufam_500Medium_Italic`
- `Kufam_600SemiBold_Italic`
- `Kufam_700Bold_Italic`
- `Kufam_800ExtraBold_Italic`
- `Kufam_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/kufam expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Kufam_400Regular,
  Kufam_500Medium,
  Kufam_600SemiBold,
  Kufam_700Bold,
  Kufam_800ExtraBold,
  Kufam_900Black,
  Kufam_400Regular_Italic,
  Kufam_500Medium_Italic,
  Kufam_600SemiBold_Italic,
  Kufam_700Bold_Italic,
  Kufam_800ExtraBold_Italic,
  Kufam_900Black_Italic,
} from '@expo-google-fonts/kufam';

export default () => {
  let [fontsLoaded] = useFonts({
    Kufam_400Regular,
    Kufam_500Medium,
    Kufam_600SemiBold,
    Kufam_700Bold,
    Kufam_800ExtraBold,
    Kufam_900Black,
    Kufam_400Regular_Italic,
    Kufam_500Medium_Italic,
    Kufam_600SemiBold_Italic,
    Kufam_700Bold_Italic,
    Kufam_800ExtraBold_Italic,
    Kufam_900Black_Italic,
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
            fontFamily: 'Kufam_400Regular',
          }}>
          Kufam Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kufam_500Medium',
          }}>
          Kufam Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kufam_600SemiBold',
          }}>
          Kufam Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kufam_700Bold',
          }}>
          Kufam Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kufam_800ExtraBold',
          }}>
          Kufam Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kufam_900Black',
          }}>
          Kufam Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kufam_400Regular_Italic',
          }}>
          Kufam Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kufam_500Medium_Italic',
          }}>
          Kufam Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kufam_600SemiBold_Italic',
          }}>
          Kufam Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kufam_700Bold_Italic',
          }}>
          Kufam Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kufam_800ExtraBold_Italic',
          }}>
          Kufam Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Kufam_900Black_Italic',
          }}>
          Kufam Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Kufam_400Regular](./Kufam_400Regular.ttf.png)|![Kufam_500Medium](./Kufam_500Medium.ttf.png)|![Kufam_600SemiBold](./Kufam_600SemiBold.ttf.png)||
|![Kufam_700Bold](./Kufam_700Bold.ttf.png)|![Kufam_800ExtraBold](./Kufam_800ExtraBold.ttf.png)|![Kufam_900Black](./Kufam_900Black.ttf.png)||
|![Kufam_400Regular_Italic](./Kufam_400Regular_Italic.ttf.png)|![Kufam_500Medium_Italic](./Kufam_500Medium_Italic.ttf.png)|![Kufam_600SemiBold_Italic](./Kufam_600SemiBold_Italic.ttf.png)||
|![Kufam_700Bold_Italic](./Kufam_700Bold_Italic.ttf.png)|![Kufam_800ExtraBold_Italic](./Kufam_800ExtraBold_Italic.ttf.png)|![Kufam_900Black_Italic](./Kufam_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/kufam` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kufam page on Google Fonts](https://fonts.google.com/specimen/Kufam) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kufam on Google Fonts](https://fonts.google.com/specimen/Kufam)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kufam)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kufam)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
