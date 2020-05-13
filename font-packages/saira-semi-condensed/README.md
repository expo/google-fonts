# @expo-google-fonts/saira-semi-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/saira-semi-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/saira-semi-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/saira-semi-condensed)

This package lets you use the [**Saira Semi Condensed**](https://fonts.google.com/specimen/Saira+Semi+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Saira Semi Condensed

![Saira Semi Condensed](./font-family.png)

This font family contains [9 styles](#-gallery).

- `SairaSemiCondensed_100Thin`
- `SairaSemiCondensed_200ExtraLight`
- `SairaSemiCondensed_300Light`
- `SairaSemiCondensed_400Regular`
- `SairaSemiCondensed_500Medium`
- `SairaSemiCondensed_600SemiBold`
- `SairaSemiCondensed_700Bold`
- `SairaSemiCondensed_800ExtraBold`
- `SairaSemiCondensed_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/saira-semi-condensed expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  SairaSemiCondensed_100Thin,
  SairaSemiCondensed_200ExtraLight,
  SairaSemiCondensed_300Light,
  SairaSemiCondensed_400Regular,
  SairaSemiCondensed_500Medium,
  SairaSemiCondensed_600SemiBold,
  SairaSemiCondensed_700Bold,
  SairaSemiCondensed_800ExtraBold,
  SairaSemiCondensed_900Black,
} from '@expo-google-fonts/saira-semi-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    SairaSemiCondensed_100Thin,
    SairaSemiCondensed_200ExtraLight,
    SairaSemiCondensed_300Light,
    SairaSemiCondensed_400Regular,
    SairaSemiCondensed_500Medium,
    SairaSemiCondensed_600SemiBold,
    SairaSemiCondensed_700Bold,
    SairaSemiCondensed_800ExtraBold,
    SairaSemiCondensed_900Black,
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
            fontFamily: 'SairaSemiCondensed_100Thin',
          }}>
          Saira Semi Condensed Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SairaSemiCondensed_200ExtraLight',
          }}>
          Saira Semi Condensed Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SairaSemiCondensed_300Light',
          }}>
          Saira Semi Condensed Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SairaSemiCondensed_400Regular',
          }}>
          Saira Semi Condensed Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SairaSemiCondensed_500Medium',
          }}>
          Saira Semi Condensed Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SairaSemiCondensed_600SemiBold',
          }}>
          Saira Semi Condensed Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SairaSemiCondensed_700Bold',
          }}>
          Saira Semi Condensed Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SairaSemiCondensed_800ExtraBold',
          }}>
          Saira Semi Condensed Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SairaSemiCondensed_900Black',
          }}>
          Saira Semi Condensed Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### SairaSemiCondensed_100Thin
![SairaSemiCondensed_100Thin](./SairaSemiCondensed_100Thin.ttf.png)

##### SairaSemiCondensed_200ExtraLight
![SairaSemiCondensed_200ExtraLight](./SairaSemiCondensed_200ExtraLight.ttf.png)

##### SairaSemiCondensed_300Light
![SairaSemiCondensed_300Light](./SairaSemiCondensed_300Light.ttf.png)

##### SairaSemiCondensed_400Regular
![SairaSemiCondensed_400Regular](./SairaSemiCondensed_400Regular.ttf.png)

##### SairaSemiCondensed_500Medium
![SairaSemiCondensed_500Medium](./SairaSemiCondensed_500Medium.ttf.png)

##### SairaSemiCondensed_600SemiBold
![SairaSemiCondensed_600SemiBold](./SairaSemiCondensed_600SemiBold.ttf.png)

##### SairaSemiCondensed_700Bold
![SairaSemiCondensed_700Bold](./SairaSemiCondensed_700Bold.ttf.png)

##### SairaSemiCondensed_800ExtraBold
![SairaSemiCondensed_800ExtraBold](./SairaSemiCondensed_800ExtraBold.ttf.png)

##### SairaSemiCondensed_900Black
![SairaSemiCondensed_900Black](./SairaSemiCondensed_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/saira-semi-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Saira Semi Condensed page on Google Fonts](https://fonts.google.com/specimen/Saira+Semi+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Saira Semi Condensed on Google Fonts](https://fonts.google.com/specimen/Saira+Semi+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/saira-semi-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/saira-semi-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
