# @expo-google-fonts/trirong

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/trirong)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/trirong)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/trirong)

This package lets you use the [**Trirong**](https://fonts.google.com/specimen/Trirong) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Trirong

![Trirong](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Trirong_100Thin`
- `Trirong_100Thin_Italic`
- `Trirong_200ExtraLight`
- `Trirong_200ExtraLight_Italic`
- `Trirong_300Light`
- `Trirong_300Light_Italic`
- `Trirong_400Regular`
- `Trirong_400Regular_Italic`
- `Trirong_500Medium`
- `Trirong_500Medium_Italic`
- `Trirong_600SemiBold`
- `Trirong_600SemiBold_Italic`
- `Trirong_700Bold`
- `Trirong_700Bold_Italic`
- `Trirong_800ExtraBold`
- `Trirong_800ExtraBold_Italic`
- `Trirong_900Black`
- `Trirong_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/trirong expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Trirong_100Thin,
  Trirong_100Thin_Italic,
  Trirong_200ExtraLight,
  Trirong_200ExtraLight_Italic,
  Trirong_300Light,
  Trirong_300Light_Italic,
  Trirong_400Regular,
  Trirong_400Regular_Italic,
  Trirong_500Medium,
  Trirong_500Medium_Italic,
  Trirong_600SemiBold,
  Trirong_600SemiBold_Italic,
  Trirong_700Bold,
  Trirong_700Bold_Italic,
  Trirong_800ExtraBold,
  Trirong_800ExtraBold_Italic,
  Trirong_900Black,
  Trirong_900Black_Italic,
} from '@expo-google-fonts/trirong';

export default () => {
  let [fontsLoaded] = useFonts({
    Trirong_100Thin,
    Trirong_100Thin_Italic,
    Trirong_200ExtraLight,
    Trirong_200ExtraLight_Italic,
    Trirong_300Light,
    Trirong_300Light_Italic,
    Trirong_400Regular,
    Trirong_400Regular_Italic,
    Trirong_500Medium,
    Trirong_500Medium_Italic,
    Trirong_600SemiBold,
    Trirong_600SemiBold_Italic,
    Trirong_700Bold,
    Trirong_700Bold_Italic,
    Trirong_800ExtraBold,
    Trirong_800ExtraBold_Italic,
    Trirong_900Black,
    Trirong_900Black_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_100Thin' }}>
          Trirong_100Thin
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_100Thin_Italic' }}>
          Trirong_100Thin_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_200ExtraLight' }}>
          Trirong_200ExtraLight
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_200ExtraLight_Italic' }}>
          Trirong_200ExtraLight_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_300Light' }}>
          Trirong_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_300Light_Italic' }}>
          Trirong_300Light_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_400Regular' }}>
          Trirong_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_400Regular_Italic' }}>
          Trirong_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_500Medium' }}>
          Trirong_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_500Medium_Italic' }}>
          Trirong_500Medium_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_600SemiBold' }}>
          Trirong_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_600SemiBold_Italic' }}>
          Trirong_600SemiBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_700Bold' }}>
          Trirong_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_700Bold_Italic' }}>
          Trirong_700Bold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_800ExtraBold' }}>
          Trirong_800ExtraBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_800ExtraBold_Italic' }}>
          Trirong_800ExtraBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_900Black' }}>
          Trirong_900Black
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Trirong_900Black_Italic' }}>
          Trirong_900Black_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Trirong_100Thin
![Trirong_100Thin](./Trirong_100Thin.ttf.png)

##### Trirong_100Thin_Italic
![Trirong_100Thin_Italic](./Trirong_100Thin_Italic.ttf.png)

##### Trirong_200ExtraLight
![Trirong_200ExtraLight](./Trirong_200ExtraLight.ttf.png)

##### Trirong_200ExtraLight_Italic
![Trirong_200ExtraLight_Italic](./Trirong_200ExtraLight_Italic.ttf.png)

##### Trirong_300Light
![Trirong_300Light](./Trirong_300Light.ttf.png)

##### Trirong_300Light_Italic
![Trirong_300Light_Italic](./Trirong_300Light_Italic.ttf.png)

##### Trirong_400Regular
![Trirong_400Regular](./Trirong_400Regular.ttf.png)

##### Trirong_400Regular_Italic
![Trirong_400Regular_Italic](./Trirong_400Regular_Italic.ttf.png)

##### Trirong_500Medium
![Trirong_500Medium](./Trirong_500Medium.ttf.png)

##### Trirong_500Medium_Italic
![Trirong_500Medium_Italic](./Trirong_500Medium_Italic.ttf.png)

##### Trirong_600SemiBold
![Trirong_600SemiBold](./Trirong_600SemiBold.ttf.png)

##### Trirong_600SemiBold_Italic
![Trirong_600SemiBold_Italic](./Trirong_600SemiBold_Italic.ttf.png)

##### Trirong_700Bold
![Trirong_700Bold](./Trirong_700Bold.ttf.png)

##### Trirong_700Bold_Italic
![Trirong_700Bold_Italic](./Trirong_700Bold_Italic.ttf.png)

##### Trirong_800ExtraBold
![Trirong_800ExtraBold](./Trirong_800ExtraBold.ttf.png)

##### Trirong_800ExtraBold_Italic
![Trirong_800ExtraBold_Italic](./Trirong_800ExtraBold_Italic.ttf.png)

##### Trirong_900Black
![Trirong_900Black](./Trirong_900Black.ttf.png)

##### Trirong_900Black_Italic
![Trirong_900Black_Italic](./Trirong_900Black_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/trirong` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Trirong page on Google Fonts](https://fonts.google.com/specimen/Trirong) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Trirong on Google Fonts](https://fonts.google.com/specimen/Trirong)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/trirong)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/trirong)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
