# @expo-google-fonts/karma

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/karma)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/karma)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/karma)

This package lets you use the [**Karma**](https://fonts.google.com/specimen/Karma) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Karma

![Karma](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Karma_300Light`
- `Karma_400Regular`
- `Karma_500Medium`
- `Karma_600SemiBold`
- `Karma_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/karma expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Karma_300Light,
  Karma_400Regular,
  Karma_500Medium,
  Karma_600SemiBold,
  Karma_700Bold,
} from '@expo-google-fonts/karma';

export default () => {
  let [fontsLoaded] = useFonts({
    Karma_300Light,
    Karma_400Regular,
    Karma_500Medium,
    Karma_600SemiBold,
    Karma_700Bold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karma_300Light' }}>
          Karma_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karma_400Regular' }}>
          Karma_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karma_500Medium' }}>
          Karma_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karma_600SemiBold' }}>
          Karma_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Karma_700Bold' }}>
          Karma_700Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Karma_300Light
![Karma_300Light](./Karma_300Light.ttf.png)

##### Karma_400Regular
![Karma_400Regular](./Karma_400Regular.ttf.png)

##### Karma_500Medium
![Karma_500Medium](./Karma_500Medium.ttf.png)

##### Karma_600SemiBold
![Karma_600SemiBold](./Karma_600SemiBold.ttf.png)

##### Karma_700Bold
![Karma_700Bold](./Karma_700Bold.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/karma` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Karma page on Google Fonts](https://fonts.google.com/specimen/Karma) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Karma on Google Fonts](https://fonts.google.com/specimen/Karma)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/karma)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/karma)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
