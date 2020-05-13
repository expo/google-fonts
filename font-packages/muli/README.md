# @expo-google-fonts/muli

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/muli)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/muli)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/muli)

This package lets you use the [**Muli**](https://fonts.google.com/specimen/Muli) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Muli

![Muli](./font-family.png)

This font family contains [16 styles](#-gallery).

- `Muli_200ExtraLight`
- `Muli_300Light`
- `Muli_400Regular`
- `Muli_500Medium`
- `Muli_600SemiBold`
- `Muli_700Bold`
- `Muli_800ExtraBold`
- `Muli_900Black`
- `Muli_200ExtraLight_Italic`
- `Muli_300Light_Italic`
- `Muli_400Regular_Italic`
- `Muli_500Medium_Italic`
- `Muli_600SemiBold_Italic`
- `Muli_700Bold_Italic`
- `Muli_800ExtraBold_Italic`
- `Muli_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/muli expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Muli_200ExtraLight,
  Muli_300Light,
  Muli_400Regular,
  Muli_500Medium,
  Muli_600SemiBold,
  Muli_700Bold,
  Muli_800ExtraBold,
  Muli_900Black,
  Muli_200ExtraLight_Italic,
  Muli_300Light_Italic,
  Muli_400Regular_Italic,
  Muli_500Medium_Italic,
  Muli_600SemiBold_Italic,
  Muli_700Bold_Italic,
  Muli_800ExtraBold_Italic,
  Muli_900Black_Italic,
} from '@expo-google-fonts/muli';

export default () => {
  let [fontsLoaded] = useFonts({
    Muli_200ExtraLight,
    Muli_300Light,
    Muli_400Regular,
    Muli_500Medium,
    Muli_600SemiBold,
    Muli_700Bold,
    Muli_800ExtraBold,
    Muli_900Black,
    Muli_200ExtraLight_Italic,
    Muli_300Light_Italic,
    Muli_400Regular_Italic,
    Muli_500Medium_Italic,
    Muli_600SemiBold_Italic,
    Muli_700Bold_Italic,
    Muli_800ExtraBold_Italic,
    Muli_900Black_Italic,
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
            fontFamily: 'Muli_200ExtraLight',
          }}>
          Muli Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_300Light',
          }}>
          Muli Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_400Regular',
          }}>
          Muli Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_500Medium',
          }}>
          Muli Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_600SemiBold',
          }}>
          Muli Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_700Bold',
          }}>
          Muli Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_800ExtraBold',
          }}>
          Muli Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_900Black',
          }}>
          Muli Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_200ExtraLight_Italic',
          }}>
          Muli Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_300Light_Italic',
          }}>
          Muli Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_400Regular_Italic',
          }}>
          Muli Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_500Medium_Italic',
          }}>
          Muli Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_600SemiBold_Italic',
          }}>
          Muli Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_700Bold_Italic',
          }}>
          Muli Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_800ExtraBold_Italic',
          }}>
          Muli Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Muli_900Black_Italic',
          }}>
          Muli Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Muli_200ExtraLight](./Muli_200ExtraLight.ttf.png)|![Muli_300Light](./Muli_300Light.ttf.png)|![Muli_400Regular](./Muli_400Regular.ttf.png)||
|![Muli_500Medium](./Muli_500Medium.ttf.png)|![Muli_600SemiBold](./Muli_600SemiBold.ttf.png)|![Muli_700Bold](./Muli_700Bold.ttf.png)||
|![Muli_800ExtraBold](./Muli_800ExtraBold.ttf.png)|![Muli_900Black](./Muli_900Black.ttf.png)|![Muli_200ExtraLight_Italic](./Muli_200ExtraLight_Italic.ttf.png)||
|![Muli_300Light_Italic](./Muli_300Light_Italic.ttf.png)|![Muli_400Regular_Italic](./Muli_400Regular_Italic.ttf.png)|![Muli_500Medium_Italic](./Muli_500Medium_Italic.ttf.png)||
|![Muli_600SemiBold_Italic](./Muli_600SemiBold_Italic.ttf.png)|![Muli_700Bold_Italic](./Muli_700Bold_Italic.ttf.png)|![Muli_800ExtraBold_Italic](./Muli_800ExtraBold_Italic.ttf.png)||
|![Muli_900Black_Italic](./Muli_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/muli` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Muli page on Google Fonts](https://fonts.google.com/specimen/Muli) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Muli on Google Fonts](https://fonts.google.com/specimen/Muli)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/muli)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/muli)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
