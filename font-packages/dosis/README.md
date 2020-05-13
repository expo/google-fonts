# @expo-google-fonts/dosis

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/dosis)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/dosis)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/dosis)

This package lets you use the [**Dosis**](https://fonts.google.com/specimen/Dosis) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Dosis

![Dosis](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Dosis_200ExtraLight`
- `Dosis_300Light`
- `Dosis_400Regular`
- `Dosis_500Medium`
- `Dosis_600SemiBold`
- `Dosis_700Bold`
- `Dosis_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/dosis expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Dosis_200ExtraLight,
  Dosis_300Light,
  Dosis_400Regular,
  Dosis_500Medium,
  Dosis_600SemiBold,
  Dosis_700Bold,
  Dosis_800ExtraBold,
} from '@expo-google-fonts/dosis';

export default () => {
  let [fontsLoaded] = useFonts({
    Dosis_200ExtraLight,
    Dosis_300Light,
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_600SemiBold,
    Dosis_700Bold,
    Dosis_800ExtraBold,
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
            fontFamily: 'Dosis_200ExtraLight',
          }}>
          Dosis Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Dosis_300Light',
          }}>
          Dosis Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Dosis_400Regular',
          }}>
          Dosis Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Dosis_500Medium',
          }}>
          Dosis Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Dosis_600SemiBold',
          }}>
          Dosis Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Dosis_700Bold',
          }}>
          Dosis Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Dosis_800ExtraBold',
          }}>
          Dosis Extra Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Dosis_200ExtraLight
![Dosis_200ExtraLight](./Dosis_200ExtraLight.ttf.png)

##### Dosis_300Light
![Dosis_300Light](./Dosis_300Light.ttf.png)

##### Dosis_400Regular
![Dosis_400Regular](./Dosis_400Regular.ttf.png)

##### Dosis_500Medium
![Dosis_500Medium](./Dosis_500Medium.ttf.png)

##### Dosis_600SemiBold
![Dosis_600SemiBold](./Dosis_600SemiBold.ttf.png)

##### Dosis_700Bold
![Dosis_700Bold](./Dosis_700Bold.ttf.png)

##### Dosis_800ExtraBold
![Dosis_800ExtraBold](./Dosis_800ExtraBold.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/dosis` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Dosis page on Google Fonts](https://fonts.google.com/specimen/Dosis) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Dosis on Google Fonts](https://fonts.google.com/specimen/Dosis)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/dosis)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/dosis)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
