# @expo-google-fonts/grenze

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/grenze)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/grenze)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/grenze)

This package lets you use the [**Grenze**](https://fonts.google.com/specimen/Grenze) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Grenze

![Grenze](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Grenze_100Thin`
- `Grenze_100Thin_Italic`
- `Grenze_200ExtraLight`
- `Grenze_200ExtraLight_Italic`
- `Grenze_300Light`
- `Grenze_300Light_Italic`
- `Grenze_400Regular`
- `Grenze_400Regular_Italic`
- `Grenze_500Medium`
- `Grenze_500Medium_Italic`
- `Grenze_600SemiBold`
- `Grenze_600SemiBold_Italic`
- `Grenze_700Bold`
- `Grenze_700Bold_Italic`
- `Grenze_800ExtraBold`
- `Grenze_800ExtraBold_Italic`
- `Grenze_900Black`
- `Grenze_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/grenze expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Grenze_100Thin,
  Grenze_100Thin_Italic,
  Grenze_200ExtraLight,
  Grenze_200ExtraLight_Italic,
  Grenze_300Light,
  Grenze_300Light_Italic,
  Grenze_400Regular,
  Grenze_400Regular_Italic,
  Grenze_500Medium,
  Grenze_500Medium_Italic,
  Grenze_600SemiBold,
  Grenze_600SemiBold_Italic,
  Grenze_700Bold,
  Grenze_700Bold_Italic,
  Grenze_800ExtraBold,
  Grenze_800ExtraBold_Italic,
  Grenze_900Black,
  Grenze_900Black_Italic,
} from '@expo-google-fonts/grenze';

export default () => {
  let [fontsLoaded] = useFonts({
    Grenze_100Thin,
    Grenze_100Thin_Italic,
    Grenze_200ExtraLight,
    Grenze_200ExtraLight_Italic,
    Grenze_300Light,
    Grenze_300Light_Italic,
    Grenze_400Regular,
    Grenze_400Regular_Italic,
    Grenze_500Medium,
    Grenze_500Medium_Italic,
    Grenze_600SemiBold,
    Grenze_600SemiBold_Italic,
    Grenze_700Bold,
    Grenze_700Bold_Italic,
    Grenze_800ExtraBold,
    Grenze_800ExtraBold_Italic,
    Grenze_900Black,
    Grenze_900Black_Italic,
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
            fontFamily: 'Grenze_100Thin',
          }}>
          Grenze Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_100Thin_Italic',
          }}>
          Grenze Thin Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_200ExtraLight',
          }}>
          Grenze Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_200ExtraLight_Italic',
          }}>
          Grenze Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_300Light',
          }}>
          Grenze Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_300Light_Italic',
          }}>
          Grenze Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_400Regular',
          }}>
          Grenze Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_400Regular_Italic',
          }}>
          Grenze Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_500Medium',
          }}>
          Grenze Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_500Medium_Italic',
          }}>
          Grenze Medium Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_600SemiBold',
          }}>
          Grenze Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_600SemiBold_Italic',
          }}>
          Grenze Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_700Bold',
          }}>
          Grenze Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_700Bold_Italic',
          }}>
          Grenze Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_800ExtraBold',
          }}>
          Grenze Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_800ExtraBold_Italic',
          }}>
          Grenze Extra Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_900Black',
          }}>
          Grenze Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Grenze_900Black_Italic',
          }}>
          Grenze Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Grenze_100Thin
![Grenze_100Thin](./Grenze_100Thin.ttf.png)

##### Grenze_100Thin_Italic
![Grenze_100Thin_Italic](./Grenze_100Thin_Italic.ttf.png)

##### Grenze_200ExtraLight
![Grenze_200ExtraLight](./Grenze_200ExtraLight.ttf.png)

##### Grenze_200ExtraLight_Italic
![Grenze_200ExtraLight_Italic](./Grenze_200ExtraLight_Italic.ttf.png)

##### Grenze_300Light
![Grenze_300Light](./Grenze_300Light.ttf.png)

##### Grenze_300Light_Italic
![Grenze_300Light_Italic](./Grenze_300Light_Italic.ttf.png)

##### Grenze_400Regular
![Grenze_400Regular](./Grenze_400Regular.ttf.png)

##### Grenze_400Regular_Italic
![Grenze_400Regular_Italic](./Grenze_400Regular_Italic.ttf.png)

##### Grenze_500Medium
![Grenze_500Medium](./Grenze_500Medium.ttf.png)

##### Grenze_500Medium_Italic
![Grenze_500Medium_Italic](./Grenze_500Medium_Italic.ttf.png)

##### Grenze_600SemiBold
![Grenze_600SemiBold](./Grenze_600SemiBold.ttf.png)

##### Grenze_600SemiBold_Italic
![Grenze_600SemiBold_Italic](./Grenze_600SemiBold_Italic.ttf.png)

##### Grenze_700Bold
![Grenze_700Bold](./Grenze_700Bold.ttf.png)

##### Grenze_700Bold_Italic
![Grenze_700Bold_Italic](./Grenze_700Bold_Italic.ttf.png)

##### Grenze_800ExtraBold
![Grenze_800ExtraBold](./Grenze_800ExtraBold.ttf.png)

##### Grenze_800ExtraBold_Italic
![Grenze_800ExtraBold_Italic](./Grenze_800ExtraBold_Italic.ttf.png)

##### Grenze_900Black
![Grenze_900Black](./Grenze_900Black.ttf.png)

##### Grenze_900Black_Italic
![Grenze_900Black_Italic](./Grenze_900Black_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/grenze` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Grenze page on Google Fonts](https://fonts.google.com/specimen/Grenze) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Grenze on Google Fonts](https://fonts.google.com/specimen/Grenze)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/grenze)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/grenze)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
