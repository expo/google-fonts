# @expo-google-fonts/sarpanch

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sarpanch)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sarpanch)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sarpanch)

This package lets you use the [**Sarpanch**](https://fonts.google.com/specimen/Sarpanch) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Sarpanch

![Sarpanch](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Sarpanch_400Regular`
- `Sarpanch_500Medium`
- `Sarpanch_600SemiBold`
- `Sarpanch_700Bold`
- `Sarpanch_800ExtraBold`
- `Sarpanch_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sarpanch expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Sarpanch_400Regular,
  Sarpanch_500Medium,
  Sarpanch_600SemiBold,
  Sarpanch_700Bold,
  Sarpanch_800ExtraBold,
  Sarpanch_900Black,
} from '@expo-google-fonts/sarpanch';

export default () => {
  let [fontsLoaded] = useFonts({
    Sarpanch_400Regular,
    Sarpanch_500Medium,
    Sarpanch_600SemiBold,
    Sarpanch_700Bold,
    Sarpanch_800ExtraBold,
    Sarpanch_900Black,
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
            fontFamily: 'Sarpanch_400Regular',
          }}>
          Sarpanch Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarpanch_500Medium',
          }}>
          Sarpanch Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarpanch_600SemiBold',
          }}>
          Sarpanch Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarpanch_700Bold',
          }}>
          Sarpanch Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarpanch_800ExtraBold',
          }}>
          Sarpanch Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Sarpanch_900Black',
          }}>
          Sarpanch Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Sarpanch_400Regular
![Sarpanch_400Regular](./Sarpanch_400Regular.ttf.png)

##### Sarpanch_500Medium
![Sarpanch_500Medium](./Sarpanch_500Medium.ttf.png)

##### Sarpanch_600SemiBold
![Sarpanch_600SemiBold](./Sarpanch_600SemiBold.ttf.png)

##### Sarpanch_700Bold
![Sarpanch_700Bold](./Sarpanch_700Bold.ttf.png)

##### Sarpanch_800ExtraBold
![Sarpanch_800ExtraBold](./Sarpanch_800ExtraBold.ttf.png)

##### Sarpanch_900Black
![Sarpanch_900Black](./Sarpanch_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/sarpanch` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sarpanch page on Google Fonts](https://fonts.google.com/specimen/Sarpanch) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sarpanch on Google Fonts](https://fonts.google.com/specimen/Sarpanch)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sarpanch)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sarpanch)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
