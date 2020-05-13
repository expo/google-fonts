# @expo-google-fonts/krub

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/krub)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/krub)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/krub)

This package lets you use the [**Krub**](https://fonts.google.com/specimen/Krub) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Krub

![Krub](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Krub_200ExtraLight`
- `Krub_200ExtraLight_Italic`
- `Krub_300Light`
- `Krub_300Light_Italic`
- `Krub_400Regular`
- `Krub_400Regular_Italic`
- `Krub_500Medium`
- `Krub_500Medium_Italic`
- `Krub_600SemiBold`
- `Krub_600SemiBold_Italic`
- `Krub_700Bold`
- `Krub_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/krub expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Krub_200ExtraLight,
  Krub_200ExtraLight_Italic,
  Krub_300Light,
  Krub_300Light_Italic,
  Krub_400Regular,
  Krub_400Regular_Italic,
  Krub_500Medium,
  Krub_500Medium_Italic,
  Krub_600SemiBold,
  Krub_600SemiBold_Italic,
  Krub_700Bold,
  Krub_700Bold_Italic,
} from '@expo-google-fonts/krub';

export default () => {
  let [fontsLoaded] = useFonts({
    Krub_200ExtraLight,
    Krub_200ExtraLight_Italic,
    Krub_300Light,
    Krub_300Light_Italic,
    Krub_400Regular,
    Krub_400Regular_Italic,
    Krub_500Medium,
    Krub_500Medium_Italic,
    Krub_600SemiBold,
    Krub_600SemiBold_Italic,
    Krub_700Bold,
    Krub_700Bold_Italic,
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
            fontFamily: 'Krub_200ExtraLight',
          }}>
          Krub Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Krub_200ExtraLight_Italic',
          }}>
          Krub Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Krub_300Light',
          }}>
          Krub Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Krub_300Light_Italic',
          }}>
          Krub Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Krub_400Regular',
          }}>
          Krub Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Krub_400Regular_Italic',
          }}>
          Krub Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Krub_500Medium',
          }}>
          Krub Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Krub_500Medium_Italic',
          }}>
          Krub Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Krub_600SemiBold',
          }}>
          Krub Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Krub_600SemiBold_Italic',
          }}>
          Krub Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Krub_700Bold',
          }}>
          Krub Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Krub_700Bold_Italic',
          }}>
          Krub Bold Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Krub_200ExtraLight
![Krub_200ExtraLight](./Krub_200ExtraLight.ttf.png)

##### Krub_200ExtraLight_Italic
![Krub_200ExtraLight_Italic](./Krub_200ExtraLight_Italic.ttf.png)

##### Krub_300Light
![Krub_300Light](./Krub_300Light.ttf.png)

##### Krub_300Light_Italic
![Krub_300Light_Italic](./Krub_300Light_Italic.ttf.png)

##### Krub_400Regular
![Krub_400Regular](./Krub_400Regular.ttf.png)

##### Krub_400Regular_Italic
![Krub_400Regular_Italic](./Krub_400Regular_Italic.ttf.png)

##### Krub_500Medium
![Krub_500Medium](./Krub_500Medium.ttf.png)

##### Krub_500Medium_Italic
![Krub_500Medium_Italic](./Krub_500Medium_Italic.ttf.png)

##### Krub_600SemiBold
![Krub_600SemiBold](./Krub_600SemiBold.ttf.png)

##### Krub_600SemiBold_Italic
![Krub_600SemiBold_Italic](./Krub_600SemiBold_Italic.ttf.png)

##### Krub_700Bold
![Krub_700Bold](./Krub_700Bold.ttf.png)

##### Krub_700Bold_Italic
![Krub_700Bold_Italic](./Krub_700Bold_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/krub` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Krub page on Google Fonts](https://fonts.google.com/specimen/Krub) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Krub on Google Fonts](https://fonts.google.com/specimen/Krub)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/krub)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/krub)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
