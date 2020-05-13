# @expo-google-fonts/kanit

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kanit)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kanit)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kanit)

This package lets you use the [**Kanit**](https://fonts.google.com/specimen/Kanit) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kanit

![Kanit](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Kanit_100Thin`
- `Kanit_100Thin_Italic`
- `Kanit_200ExtraLight`
- `Kanit_200ExtraLight_Italic`
- `Kanit_300Light`
- `Kanit_300Light_Italic`
- `Kanit_400Regular`
- `Kanit_400Regular_Italic`
- `Kanit_500Medium`
- `Kanit_500Medium_Italic`
- `Kanit_600SemiBold`
- `Kanit_600SemiBold_Italic`
- `Kanit_700Bold`
- `Kanit_700Bold_Italic`
- `Kanit_800ExtraBold`
- `Kanit_800ExtraBold_Italic`
- `Kanit_900Black`
- `Kanit_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/kanit expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Kanit_100Thin,
  Kanit_100Thin_Italic,
  Kanit_200ExtraLight,
  Kanit_200ExtraLight_Italic,
  Kanit_300Light,
  Kanit_300Light_Italic,
  Kanit_400Regular,
  Kanit_400Regular_Italic,
  Kanit_500Medium,
  Kanit_500Medium_Italic,
  Kanit_600SemiBold,
  Kanit_600SemiBold_Italic,
  Kanit_700Bold,
  Kanit_700Bold_Italic,
  Kanit_800ExtraBold,
  Kanit_800ExtraBold_Italic,
  Kanit_900Black,
  Kanit_900Black_Italic,
} from '@expo-google-fonts/kanit';

export default () => {
  let [fontsLoaded] = useFonts({
    Kanit_100Thin,
    Kanit_100Thin_Italic,
    Kanit_200ExtraLight,
    Kanit_200ExtraLight_Italic,
    Kanit_300Light,
    Kanit_300Light_Italic,
    Kanit_400Regular,
    Kanit_400Regular_Italic,
    Kanit_500Medium,
    Kanit_500Medium_Italic,
    Kanit_600SemiBold,
    Kanit_600SemiBold_Italic,
    Kanit_700Bold,
    Kanit_700Bold_Italic,
    Kanit_800ExtraBold,
    Kanit_800ExtraBold_Italic,
    Kanit_900Black,
    Kanit_900Black_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_100Thin' }}>
          Kanit_100Thin
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_100Thin_Italic' }}>
          Kanit_100Thin_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_200ExtraLight' }}>
          Kanit_200ExtraLight
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_200ExtraLight_Italic' }}>
          Kanit_200ExtraLight_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_300Light' }}>
          Kanit_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_300Light_Italic' }}>
          Kanit_300Light_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_400Regular' }}>
          Kanit_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_400Regular_Italic' }}>
          Kanit_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_500Medium' }}>
          Kanit_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_500Medium_Italic' }}>
          Kanit_500Medium_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_600SemiBold' }}>
          Kanit_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_600SemiBold_Italic' }}>
          Kanit_600SemiBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_700Bold' }}>
          Kanit_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_700Bold_Italic' }}>
          Kanit_700Bold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_800ExtraBold' }}>
          Kanit_800ExtraBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_800ExtraBold_Italic' }}>
          Kanit_800ExtraBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_900Black' }}>
          Kanit_900Black
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kanit_900Black_Italic' }}>
          Kanit_900Black_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Kanit_100Thin
![Kanit_100Thin](./Kanit_100Thin.ttf.png)

##### Kanit_100Thin_Italic
![Kanit_100Thin_Italic](./Kanit_100Thin_Italic.ttf.png)

##### Kanit_200ExtraLight
![Kanit_200ExtraLight](./Kanit_200ExtraLight.ttf.png)

##### Kanit_200ExtraLight_Italic
![Kanit_200ExtraLight_Italic](./Kanit_200ExtraLight_Italic.ttf.png)

##### Kanit_300Light
![Kanit_300Light](./Kanit_300Light.ttf.png)

##### Kanit_300Light_Italic
![Kanit_300Light_Italic](./Kanit_300Light_Italic.ttf.png)

##### Kanit_400Regular
![Kanit_400Regular](./Kanit_400Regular.ttf.png)

##### Kanit_400Regular_Italic
![Kanit_400Regular_Italic](./Kanit_400Regular_Italic.ttf.png)

##### Kanit_500Medium
![Kanit_500Medium](./Kanit_500Medium.ttf.png)

##### Kanit_500Medium_Italic
![Kanit_500Medium_Italic](./Kanit_500Medium_Italic.ttf.png)

##### Kanit_600SemiBold
![Kanit_600SemiBold](./Kanit_600SemiBold.ttf.png)

##### Kanit_600SemiBold_Italic
![Kanit_600SemiBold_Italic](./Kanit_600SemiBold_Italic.ttf.png)

##### Kanit_700Bold
![Kanit_700Bold](./Kanit_700Bold.ttf.png)

##### Kanit_700Bold_Italic
![Kanit_700Bold_Italic](./Kanit_700Bold_Italic.ttf.png)

##### Kanit_800ExtraBold
![Kanit_800ExtraBold](./Kanit_800ExtraBold.ttf.png)

##### Kanit_800ExtraBold_Italic
![Kanit_800ExtraBold_Italic](./Kanit_800ExtraBold_Italic.ttf.png)

##### Kanit_900Black
![Kanit_900Black](./Kanit_900Black.ttf.png)

##### Kanit_900Black_Italic
![Kanit_900Black_Italic](./Kanit_900Black_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/kanit` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kanit page on Google Fonts](https://fonts.google.com/specimen/Kanit) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kanit on Google Fonts](https://fonts.google.com/specimen/Kanit)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kanit)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kanit)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
