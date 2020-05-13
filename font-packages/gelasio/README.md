# @expo-google-fonts/gelasio

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/gelasio)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/gelasio)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/gelasio)

This package lets you use the [**Gelasio**](https://fonts.google.com/specimen/Gelasio) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Gelasio

![Gelasio](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Gelasio_400Regular`
- `Gelasio_400Regular_Italic`
- `Gelasio_500Medium`
- `Gelasio_500Medium_Italic`
- `Gelasio_600SemiBold`
- `Gelasio_600SemiBold_Italic`
- `Gelasio_700Bold`
- `Gelasio_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/gelasio expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Gelasio_400Regular,
  Gelasio_400Regular_Italic,
  Gelasio_500Medium,
  Gelasio_500Medium_Italic,
  Gelasio_600SemiBold,
  Gelasio_600SemiBold_Italic,
  Gelasio_700Bold,
  Gelasio_700Bold_Italic,
} from '@expo-google-fonts/gelasio';

export default () => {
  let [fontsLoaded] = useFonts({
    Gelasio_400Regular,
    Gelasio_400Regular_Italic,
    Gelasio_500Medium,
    Gelasio_500Medium_Italic,
    Gelasio_600SemiBold,
    Gelasio_600SemiBold_Italic,
    Gelasio_700Bold,
    Gelasio_700Bold_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_400Regular' }}>
          Gelasio_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_400Regular_Italic' }}>
          Gelasio_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_500Medium' }}>
          Gelasio_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_500Medium_Italic' }}>
          Gelasio_500Medium_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_600SemiBold' }}>
          Gelasio_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_600SemiBold_Italic' }}>
          Gelasio_600SemiBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_700Bold' }}>
          Gelasio_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gelasio_700Bold_Italic' }}>
          Gelasio_700Bold_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Gelasio_400Regular
![Gelasio_400Regular](./Gelasio_400Regular.ttf.png)

##### Gelasio_400Regular_Italic
![Gelasio_400Regular_Italic](./Gelasio_400Regular_Italic.ttf.png)

##### Gelasio_500Medium
![Gelasio_500Medium](./Gelasio_500Medium.ttf.png)

##### Gelasio_500Medium_Italic
![Gelasio_500Medium_Italic](./Gelasio_500Medium_Italic.ttf.png)

##### Gelasio_600SemiBold
![Gelasio_600SemiBold](./Gelasio_600SemiBold.ttf.png)

##### Gelasio_600SemiBold_Italic
![Gelasio_600SemiBold_Italic](./Gelasio_600SemiBold_Italic.ttf.png)

##### Gelasio_700Bold
![Gelasio_700Bold](./Gelasio_700Bold.ttf.png)

##### Gelasio_700Bold_Italic
![Gelasio_700Bold_Italic](./Gelasio_700Bold_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/gelasio` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Gelasio page on Google Fonts](https://fonts.google.com/specimen/Gelasio) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Gelasio on Google Fonts](https://fonts.google.com/specimen/Gelasio)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gelasio)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gelasio)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
