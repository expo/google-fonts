# @expo-google-fonts/marhey

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/marhey)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/marhey)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/marhey)

This package lets you use the [**Marhey**](https://fonts.google.com/specimen/Marhey) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Marhey

![Marhey](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Marhey_300Light`
- `Marhey_400Regular`
- `Marhey_500Medium`
- `Marhey_600SemiBold`
- `Marhey_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/marhey expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Marhey_300Light,
  Marhey_400Regular,
  Marhey_500Medium,
  Marhey_600SemiBold,
  Marhey_700Bold,
} from '@expo-google-fonts/marhey';

export default () => {
  let [fontsLoaded] = useFonts({
    Marhey_300Light,
    Marhey_400Regular,
    Marhey_500Medium,
    Marhey_600SemiBold,
    Marhey_700Bold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Marhey_300Light',
          }}>
          Marhey Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Marhey_400Regular',
          }}>
          Marhey Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Marhey_500Medium',
          }}>
          Marhey Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Marhey_600SemiBold',
          }}>
          Marhey Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Marhey_700Bold',
          }}>
          Marhey Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![Marhey_300Light](./Marhey_300Light.ttf.png)|![Marhey_400Regular](./Marhey_400Regular.ttf.png)|![Marhey_500Medium](./Marhey_500Medium.ttf.png)||
|![Marhey_600SemiBold](./Marhey_600SemiBold.ttf.png)|![Marhey_700Bold](./Marhey_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/marhey` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Marhey page on Google Fonts](https://fonts.google.com/specimen/Marhey) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Marhey on Google Fonts](https://fonts.google.com/specimen/Marhey)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/marhey)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/marhey)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
