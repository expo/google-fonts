# @expo-google-fonts/khand

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/khand)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/khand)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/khand)

This package lets you use the [**Khand**](https://fonts.google.com/specimen/Khand) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Khand

![Khand](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Khand_300Light`
- `Khand_400Regular`
- `Khand_500Medium`
- `Khand_600SemiBold`
- `Khand_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/khand expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Khand_300Light,
  Khand_400Regular,
  Khand_500Medium,
  Khand_600SemiBold,
  Khand_700Bold,
} from '@expo-google-fonts/khand';

export default () => {
  let [fontsLoaded] = useFonts({
    Khand_300Light,
    Khand_400Regular,
    Khand_500Medium,
    Khand_600SemiBold,
    Khand_700Bold,
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
            fontFamily: 'Khand_300Light',
          }}>
          Khand Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Khand_400Regular',
          }}>
          Khand Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Khand_500Medium',
          }}>
          Khand Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Khand_600SemiBold',
          }}>
          Khand Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Khand_700Bold',
          }}>
          Khand Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Khand_300Light
![Khand_300Light](./Khand_300Light.ttf.png)

##### Khand_400Regular
![Khand_400Regular](./Khand_400Regular.ttf.png)

##### Khand_500Medium
![Khand_500Medium](./Khand_500Medium.ttf.png)

##### Khand_600SemiBold
![Khand_600SemiBold](./Khand_600SemiBold.ttf.png)

##### Khand_700Bold
![Khand_700Bold](./Khand_700Bold.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/khand` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Khand page on Google Fonts](https://fonts.google.com/specimen/Khand) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Khand on Google Fonts](https://fonts.google.com/specimen/Khand)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/khand)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/khand)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
