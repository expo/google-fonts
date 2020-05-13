# @expo-google-fonts/frank-ruhl-libre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/frank-ruhl-libre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/frank-ruhl-libre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/frank-ruhl-libre)

This package lets you use the [**Frank Ruhl Libre**](https://fonts.google.com/specimen/Frank+Ruhl+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Frank Ruhl Libre

![Frank Ruhl Libre](./font-family.png)

This font family contains [5 styles](#-gallery).

- `FrankRuhlLibre_300Light`
- `FrankRuhlLibre_400Regular`
- `FrankRuhlLibre_500Medium`
- `FrankRuhlLibre_700Bold`
- `FrankRuhlLibre_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/frank-ruhl-libre expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  FrankRuhlLibre_300Light,
  FrankRuhlLibre_400Regular,
  FrankRuhlLibre_500Medium,
  FrankRuhlLibre_700Bold,
  FrankRuhlLibre_900Black,
} from '@expo-google-fonts/frank-ruhl-libre';

export default () => {
  let [fontsLoaded] = useFonts({
    FrankRuhlLibre_300Light,
    FrankRuhlLibre_400Regular,
    FrankRuhlLibre_500Medium,
    FrankRuhlLibre_700Bold,
    FrankRuhlLibre_900Black,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'FrankRuhlLibre_300Light' }}>
          FrankRuhlLibre_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FrankRuhlLibre_400Regular' }}>
          FrankRuhlLibre_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FrankRuhlLibre_500Medium' }}>
          FrankRuhlLibre_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FrankRuhlLibre_700Bold' }}>
          FrankRuhlLibre_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'FrankRuhlLibre_900Black' }}>
          FrankRuhlLibre_900Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### FrankRuhlLibre_300Light
![FrankRuhlLibre_300Light](./FrankRuhlLibre_300Light.ttf.png)

##### FrankRuhlLibre_400Regular
![FrankRuhlLibre_400Regular](./FrankRuhlLibre_400Regular.ttf.png)

##### FrankRuhlLibre_500Medium
![FrankRuhlLibre_500Medium](./FrankRuhlLibre_500Medium.ttf.png)

##### FrankRuhlLibre_700Bold
![FrankRuhlLibre_700Bold](./FrankRuhlLibre_700Bold.ttf.png)

##### FrankRuhlLibre_900Black
![FrankRuhlLibre_900Black](./FrankRuhlLibre_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/frank-ruhl-libre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Frank Ruhl Libre page on Google Fonts](https://fonts.google.com/specimen/Frank+Ruhl+Libre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Frank Ruhl Libre on Google Fonts](https://fonts.google.com/specimen/Frank+Ruhl+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/frank-ruhl-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/frank-ruhl-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
