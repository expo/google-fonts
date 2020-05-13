# @expo-google-fonts/ruda

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ruda)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ruda)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ruda)

This package lets you use the [**Ruda**](https://fonts.google.com/specimen/Ruda) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ruda

![Ruda](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Ruda_400Regular`
- `Ruda_500Medium`
- `Ruda_600SemiBold`
- `Ruda_700Bold`
- `Ruda_800ExtraBold`
- `Ruda_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/ruda expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Ruda_400Regular,
  Ruda_500Medium,
  Ruda_600SemiBold,
  Ruda_700Bold,
  Ruda_800ExtraBold,
  Ruda_900Black,
} from '@expo-google-fonts/ruda';

export default () => {
  let [fontsLoaded] = useFonts({
    Ruda_400Regular,
    Ruda_500Medium,
    Ruda_600SemiBold,
    Ruda_700Bold,
    Ruda_800ExtraBold,
    Ruda_900Black,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ruda_400Regular' }}>
          Ruda_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ruda_500Medium' }}>
          Ruda_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ruda_600SemiBold' }}>
          Ruda_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ruda_700Bold' }}>Ruda_700Bold</Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ruda_800ExtraBold' }}>
          Ruda_800ExtraBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Ruda_900Black' }}>
          Ruda_900Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Ruda_400Regular
![Ruda_400Regular](./Ruda_400Regular.ttf.png)

##### Ruda_500Medium
![Ruda_500Medium](./Ruda_500Medium.ttf.png)

##### Ruda_600SemiBold
![Ruda_600SemiBold](./Ruda_600SemiBold.ttf.png)

##### Ruda_700Bold
![Ruda_700Bold](./Ruda_700Bold.ttf.png)

##### Ruda_800ExtraBold
![Ruda_800ExtraBold](./Ruda_800ExtraBold.ttf.png)

##### Ruda_900Black
![Ruda_900Black](./Ruda_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/ruda` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ruda page on Google Fonts](https://fonts.google.com/specimen/Ruda) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ruda on Google Fonts](https://fonts.google.com/specimen/Ruda)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ruda)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ruda)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
