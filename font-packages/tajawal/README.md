# @expo-google-fonts/tajawal

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tajawal)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tajawal)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tajawal)

This package lets you use the [**Tajawal**](https://fonts.google.com/specimen/Tajawal) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Tajawal

![Tajawal](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Tajawal_200ExtraLight`
- `Tajawal_300Light`
- `Tajawal_400Regular`
- `Tajawal_500Medium`
- `Tajawal_700Bold`
- `Tajawal_800ExtraBold`
- `Tajawal_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/tajawal expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Tajawal_200ExtraLight,
  Tajawal_300Light,
  Tajawal_400Regular,
  Tajawal_500Medium,
  Tajawal_700Bold,
  Tajawal_800ExtraBold,
  Tajawal_900Black,
} from '@expo-google-fonts/tajawal';

export default () => {
  let [fontsLoaded] = useFonts({
    Tajawal_200ExtraLight,
    Tajawal_300Light,
    Tajawal_400Regular,
    Tajawal_500Medium,
    Tajawal_700Bold,
    Tajawal_800ExtraBold,
    Tajawal_900Black,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_200ExtraLight' }}>
          Tajawal_200ExtraLight
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_300Light' }}>
          Tajawal_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_400Regular' }}>
          Tajawal_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_500Medium' }}>
          Tajawal_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_700Bold' }}>
          Tajawal_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_800ExtraBold' }}>
          Tajawal_800ExtraBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tajawal_900Black' }}>
          Tajawal_900Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Tajawal_200ExtraLight
![Tajawal_200ExtraLight](./Tajawal_200ExtraLight.ttf.png)

##### Tajawal_300Light
![Tajawal_300Light](./Tajawal_300Light.ttf.png)

##### Tajawal_400Regular
![Tajawal_400Regular](./Tajawal_400Regular.ttf.png)

##### Tajawal_500Medium
![Tajawal_500Medium](./Tajawal_500Medium.ttf.png)

##### Tajawal_700Bold
![Tajawal_700Bold](./Tajawal_700Bold.ttf.png)

##### Tajawal_800ExtraBold
![Tajawal_800ExtraBold](./Tajawal_800ExtraBold.ttf.png)

##### Tajawal_900Black
![Tajawal_900Black](./Tajawal_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/tajawal` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tajawal page on Google Fonts](https://fonts.google.com/specimen/Tajawal) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tajawal on Google Fonts](https://fonts.google.com/specimen/Tajawal)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tajawal)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tajawal)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
