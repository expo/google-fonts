# @expo-google-fonts/rasa

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/rasa)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/rasa)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/rasa)

This package lets you use the [**Rasa**](https://fonts.google.com/specimen/Rasa) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Rasa

![Rasa](./font-family.png)

This font family contains [10 styles](#-gallery).

- `Rasa_300Light`
- `Rasa_400Regular`
- `Rasa_500Medium`
- `Rasa_600SemiBold`
- `Rasa_700Bold`
- `Rasa_300Light_Italic`
- `Rasa_400Regular_Italic`
- `Rasa_500Medium_Italic`
- `Rasa_600SemiBold_Italic`
- `Rasa_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/rasa expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Rasa_300Light,
  Rasa_400Regular,
  Rasa_500Medium,
  Rasa_600SemiBold,
  Rasa_700Bold,
  Rasa_300Light_Italic,
  Rasa_400Regular_Italic,
  Rasa_500Medium_Italic,
  Rasa_600SemiBold_Italic,
  Rasa_700Bold_Italic,
} from '@expo-google-fonts/rasa';

export default () => {
  let [fontsLoaded] = useFonts({
    Rasa_300Light,
    Rasa_400Regular,
    Rasa_500Medium,
    Rasa_600SemiBold,
    Rasa_700Bold,
    Rasa_300Light_Italic,
    Rasa_400Regular_Italic,
    Rasa_500Medium_Italic,
    Rasa_600SemiBold_Italic,
    Rasa_700Bold_Italic,
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
            fontFamily: 'Rasa_300Light',
          }}>
          Rasa Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rasa_400Regular',
          }}>
          Rasa Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rasa_500Medium',
          }}>
          Rasa Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rasa_600SemiBold',
          }}>
          Rasa Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rasa_700Bold',
          }}>
          Rasa Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rasa_300Light_Italic',
          }}>
          Rasa Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rasa_400Regular_Italic',
          }}>
          Rasa Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rasa_500Medium_Italic',
          }}>
          Rasa Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rasa_600SemiBold_Italic',
          }}>
          Rasa Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Rasa_700Bold_Italic',
          }}>
          Rasa Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Rasa_300Light](./Rasa_300Light.ttf.png)|![Rasa_400Regular](./Rasa_400Regular.ttf.png)|![Rasa_500Medium](./Rasa_500Medium.ttf.png)||
|![Rasa_600SemiBold](./Rasa_600SemiBold.ttf.png)|![Rasa_700Bold](./Rasa_700Bold.ttf.png)|![Rasa_300Light_Italic](./Rasa_300Light_Italic.ttf.png)||
|![Rasa_400Regular_Italic](./Rasa_400Regular_Italic.ttf.png)|![Rasa_500Medium_Italic](./Rasa_500Medium_Italic.ttf.png)|![Rasa_600SemiBold_Italic](./Rasa_600SemiBold_Italic.ttf.png)||
|![Rasa_700Bold_Italic](./Rasa_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/rasa` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Rasa page on Google Fonts](https://fonts.google.com/specimen/Rasa) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Rasa on Google Fonts](https://fonts.google.com/specimen/Rasa)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rasa)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rasa)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
