# @expo-google-fonts/koho

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/koho)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/koho)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/koho)

This package lets you use the [**KoHo**](https://fonts.google.com/specimen/KoHo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## KoHo

![KoHo](./font-family.png)

This font family contains [12 styles](#-gallery).

- `KoHo_200ExtraLight`
- `KoHo_200ExtraLight_Italic`
- `KoHo_300Light`
- `KoHo_300Light_Italic`
- `KoHo_400Regular`
- `KoHo_400Regular_Italic`
- `KoHo_500Medium`
- `KoHo_500Medium_Italic`
- `KoHo_600SemiBold`
- `KoHo_600SemiBold_Italic`
- `KoHo_700Bold`
- `KoHo_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/koho expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  KoHo_200ExtraLight,
  KoHo_200ExtraLight_Italic,
  KoHo_300Light,
  KoHo_300Light_Italic,
  KoHo_400Regular,
  KoHo_400Regular_Italic,
  KoHo_500Medium,
  KoHo_500Medium_Italic,
  KoHo_600SemiBold,
  KoHo_600SemiBold_Italic,
  KoHo_700Bold,
  KoHo_700Bold_Italic,
} from '@expo-google-fonts/koho';

export default () => {
  let [fontsLoaded] = useFonts({
    KoHo_200ExtraLight,
    KoHo_200ExtraLight_Italic,
    KoHo_300Light,
    KoHo_300Light_Italic,
    KoHo_400Regular,
    KoHo_400Regular_Italic,
    KoHo_500Medium,
    KoHo_500Medium_Italic,
    KoHo_600SemiBold,
    KoHo_600SemiBold_Italic,
    KoHo_700Bold,
    KoHo_700Bold_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_200ExtraLight' }}>
          KoHo_200ExtraLight
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_200ExtraLight_Italic' }}>
          KoHo_200ExtraLight_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_300Light' }}>
          KoHo_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_300Light_Italic' }}>
          KoHo_300Light_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_400Regular' }}>
          KoHo_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_400Regular_Italic' }}>
          KoHo_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_500Medium' }}>
          KoHo_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_500Medium_Italic' }}>
          KoHo_500Medium_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_600SemiBold' }}>
          KoHo_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_600SemiBold_Italic' }}>
          KoHo_600SemiBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_700Bold' }}>KoHo_700Bold</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'KoHo_700Bold_Italic' }}>
          KoHo_700Bold_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### KoHo_200ExtraLight
![KoHo_200ExtraLight](./KoHo_200ExtraLight.ttf.png)

##### KoHo_200ExtraLight_Italic
![KoHo_200ExtraLight_Italic](./KoHo_200ExtraLight_Italic.ttf.png)

##### KoHo_300Light
![KoHo_300Light](./KoHo_300Light.ttf.png)

##### KoHo_300Light_Italic
![KoHo_300Light_Italic](./KoHo_300Light_Italic.ttf.png)

##### KoHo_400Regular
![KoHo_400Regular](./KoHo_400Regular.ttf.png)

##### KoHo_400Regular_Italic
![KoHo_400Regular_Italic](./KoHo_400Regular_Italic.ttf.png)

##### KoHo_500Medium
![KoHo_500Medium](./KoHo_500Medium.ttf.png)

##### KoHo_500Medium_Italic
![KoHo_500Medium_Italic](./KoHo_500Medium_Italic.ttf.png)

##### KoHo_600SemiBold
![KoHo_600SemiBold](./KoHo_600SemiBold.ttf.png)

##### KoHo_600SemiBold_Italic
![KoHo_600SemiBold_Italic](./KoHo_600SemiBold_Italic.ttf.png)

##### KoHo_700Bold
![KoHo_700Bold](./KoHo_700Bold.ttf.png)

##### KoHo_700Bold_Italic
![KoHo_700Bold_Italic](./KoHo_700Bold_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/koho` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [KoHo page on Google Fonts](https://fonts.google.com/specimen/KoHo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [KoHo on Google Fonts](https://fonts.google.com/specimen/KoHo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/koho)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/koho)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
