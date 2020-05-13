# @expo-google-fonts/saira

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/saira)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/saira)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/saira)

This package lets you use the [**Saira**](https://fonts.google.com/specimen/Saira) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Saira

![Saira](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Saira_100Thin`
- `Saira_200ExtraLight`
- `Saira_300Light`
- `Saira_400Regular`
- `Saira_500Medium`
- `Saira_600SemiBold`
- `Saira_700Bold`
- `Saira_800ExtraBold`
- `Saira_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/saira expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Saira_100Thin,
  Saira_200ExtraLight,
  Saira_300Light,
  Saira_400Regular,
  Saira_500Medium,
  Saira_600SemiBold,
  Saira_700Bold,
  Saira_800ExtraBold,
  Saira_900Black,
} from '@expo-google-fonts/saira';

export default () => {
  let [fontsLoaded] = useFonts({
    Saira_100Thin,
    Saira_200ExtraLight,
    Saira_300Light,
    Saira_400Regular,
    Saira_500Medium,
    Saira_600SemiBold,
    Saira_700Bold,
    Saira_800ExtraBold,
    Saira_900Black,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_100Thin' }}>
          Saira_100Thin
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_200ExtraLight' }}>
          Saira_200ExtraLight
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_300Light' }}>
          Saira_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_400Regular' }}>
          Saira_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_500Medium' }}>
          Saira_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_600SemiBold' }}>
          Saira_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_700Bold' }}>
          Saira_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_800ExtraBold' }}>
          Saira_800ExtraBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_900Black' }}>
          Saira_900Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Saira_100Thin
![Saira_100Thin](./Saira_100Thin.ttf.png)

##### Saira_200ExtraLight
![Saira_200ExtraLight](./Saira_200ExtraLight.ttf.png)

##### Saira_300Light
![Saira_300Light](./Saira_300Light.ttf.png)

##### Saira_400Regular
![Saira_400Regular](./Saira_400Regular.ttf.png)

##### Saira_500Medium
![Saira_500Medium](./Saira_500Medium.ttf.png)

##### Saira_600SemiBold
![Saira_600SemiBold](./Saira_600SemiBold.ttf.png)

##### Saira_700Bold
![Saira_700Bold](./Saira_700Bold.ttf.png)

##### Saira_800ExtraBold
![Saira_800ExtraBold](./Saira_800ExtraBold.ttf.png)

##### Saira_900Black
![Saira_900Black](./Saira_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/saira` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Saira page on Google Fonts](https://fonts.google.com/specimen/Saira) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Saira on Google Fonts](https://fonts.google.com/specimen/Saira)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/saira)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/saira)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
