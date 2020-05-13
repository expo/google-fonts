# @expo-google-fonts/changa

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/changa)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/changa)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/changa)

This package lets you use the [**Changa**](https://fonts.google.com/specimen/Changa) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Changa

![Changa](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Changa_200ExtraLight`
- `Changa_300Light`
- `Changa_400Regular`
- `Changa_500Medium`
- `Changa_600SemiBold`
- `Changa_700Bold`
- `Changa_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/changa expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Changa_200ExtraLight,
  Changa_300Light,
  Changa_400Regular,
  Changa_500Medium,
  Changa_600SemiBold,
  Changa_700Bold,
  Changa_800ExtraBold,
} from '@expo-google-fonts/changa';

export default () => {
  let [fontsLoaded] = useFonts({
    Changa_200ExtraLight,
    Changa_300Light,
    Changa_400Regular,
    Changa_500Medium,
    Changa_600SemiBold,
    Changa_700Bold,
    Changa_800ExtraBold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_200ExtraLight' }}>
          Changa_200ExtraLight
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_300Light' }}>
          Changa_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_400Regular' }}>
          Changa_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_500Medium' }}>
          Changa_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_600SemiBold' }}>
          Changa_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_700Bold' }}>
          Changa_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_800ExtraBold' }}>
          Changa_800ExtraBold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Changa_200ExtraLight
![Changa_200ExtraLight](./Changa_200ExtraLight.ttf.png)

##### Changa_300Light
![Changa_300Light](./Changa_300Light.ttf.png)

##### Changa_400Regular
![Changa_400Regular](./Changa_400Regular.ttf.png)

##### Changa_500Medium
![Changa_500Medium](./Changa_500Medium.ttf.png)

##### Changa_600SemiBold
![Changa_600SemiBold](./Changa_600SemiBold.ttf.png)

##### Changa_700Bold
![Changa_700Bold](./Changa_700Bold.ttf.png)

##### Changa_800ExtraBold
![Changa_800ExtraBold](./Changa_800ExtraBold.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/changa` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Changa page on Google Fonts](https://fonts.google.com/specimen/Changa) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Changa on Google Fonts](https://fonts.google.com/specimen/Changa)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/changa)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/changa)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
