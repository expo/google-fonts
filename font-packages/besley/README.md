# @expo-google-fonts/besley

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/besley)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/besley)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/besley)

This package lets you use the [**Besley**](https://fonts.google.com/specimen/Besley) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Besley

![Besley](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Besley_400Regular`
- `Besley_500Medium`
- `Besley_600SemiBold`
- `Besley_700Bold`
- `Besley_800ExtraBold`
- `Besley_900Black`
- `Besley_400Regular_Italic`
- `Besley_500Medium_Italic`
- `Besley_600SemiBold_Italic`
- `Besley_700Bold_Italic`
- `Besley_800ExtraBold_Italic`
- `Besley_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/besley expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Besley_400Regular,
  Besley_500Medium,
  Besley_600SemiBold,
  Besley_700Bold,
  Besley_800ExtraBold,
  Besley_900Black,
  Besley_400Regular_Italic,
  Besley_500Medium_Italic,
  Besley_600SemiBold_Italic,
  Besley_700Bold_Italic,
  Besley_800ExtraBold_Italic,
  Besley_900Black_Italic,
} from '@expo-google-fonts/besley';

export default () => {
  let [fontsLoaded] = useFonts({
    Besley_400Regular,
    Besley_500Medium,
    Besley_600SemiBold,
    Besley_700Bold,
    Besley_800ExtraBold,
    Besley_900Black,
    Besley_400Regular_Italic,
    Besley_500Medium_Italic,
    Besley_600SemiBold_Italic,
    Besley_700Bold_Italic,
    Besley_800ExtraBold_Italic,
    Besley_900Black_Italic,
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
            fontFamily: 'Besley_400Regular',
          }}>
          Besley Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Besley_500Medium',
          }}>
          Besley Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Besley_600SemiBold',
          }}>
          Besley Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Besley_700Bold',
          }}>
          Besley Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Besley_800ExtraBold',
          }}>
          Besley Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Besley_900Black',
          }}>
          Besley Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Besley_400Regular_Italic',
          }}>
          Besley Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Besley_500Medium_Italic',
          }}>
          Besley Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Besley_600SemiBold_Italic',
          }}>
          Besley Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Besley_700Bold_Italic',
          }}>
          Besley Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Besley_800ExtraBold_Italic',
          }}>
          Besley Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Besley_900Black_Italic',
          }}>
          Besley Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Besley_400Regular](./Besley_400Regular.ttf.png)|![Besley_500Medium](./Besley_500Medium.ttf.png)|![Besley_600SemiBold](./Besley_600SemiBold.ttf.png)||
|![Besley_700Bold](./Besley_700Bold.ttf.png)|![Besley_800ExtraBold](./Besley_800ExtraBold.ttf.png)|![Besley_900Black](./Besley_900Black.ttf.png)||
|![Besley_400Regular_Italic](./Besley_400Regular_Italic.ttf.png)|![Besley_500Medium_Italic](./Besley_500Medium_Italic.ttf.png)|![Besley_600SemiBold_Italic](./Besley_600SemiBold_Italic.ttf.png)||
|![Besley_700Bold_Italic](./Besley_700Bold_Italic.ttf.png)|![Besley_800ExtraBold_Italic](./Besley_800ExtraBold_Italic.ttf.png)|![Besley_900Black_Italic](./Besley_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/besley` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Besley page on Google Fonts](https://fonts.google.com/specimen/Besley) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Besley on Google Fonts](https://fonts.google.com/specimen/Besley)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/besley)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/besley)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
