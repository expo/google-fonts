# @expo-google-fonts/changa

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/changa)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/changa)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/changa)

This package lets you use the [**Changa**](https://fonts.google.com/specimen/Changa) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Changa

![Changa](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Changa_ExtraLight200`
- `Changa_Light300`
- `Changa_Regular400`
- `Changa_Medium500`
- `Changa_SemiBold600`
- `Changa_Bold700`
- `Changa_ExtraBold800`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/changa expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Changa_ExtraLight200,
  Changa_Light300,
  Changa_Regular400,
  Changa_Medium500,
  Changa_SemiBold600,
  Changa_Bold700,
  Changa_ExtraBold800,
} from '@expo-google-fonts/changa';

export default () => {
  let [fontsLoaded] = useFonts({
    Changa_ExtraLight200,
    Changa_Light300,
    Changa_Regular400,
    Changa_Medium500,
    Changa_SemiBold600,
    Changa_Bold700,
    Changa_ExtraBold800,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_ExtraLight200' }}>
          Changa_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_Light300' }}>
          Changa_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_Regular400' }}>
          Changa_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_Medium500' }}>
          Changa_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_SemiBold600' }}>
          Changa_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_Bold700' }}>
          Changa_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Changa_ExtraBold800' }}>
          Changa_ExtraBold800
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Changa_ExtraLight200
![Changa_ExtraLight200](./e248c51b3bc1f8fd1d6b980400670c54bf2cdf89f4c5e075bca29f09ecdb936b.ttf.png)

##### Changa_Light300
![Changa_Light300](./f083dc8e9965f9e9b8c6c977bcfac5a504f4ef820e8c8237f1217d4edf3bdd9a.ttf.png)

##### Changa_Regular400
![Changa_Regular400](./01d71ec0cc7235bb908cc0c3ae45d1e10a2f87e4a61ad5ef855af157f39e8a80.ttf.png)

##### Changa_Medium500
![Changa_Medium500](./fb1d544301460f01712f06d94a05af7420497d1b5791bdf43b542c0351227242.ttf.png)

##### Changa_SemiBold600
![Changa_SemiBold600](./c22f4b8d7a97aaa32759b9336354bdcf999861dac5d589a4e02e7e5bb9504f98.ttf.png)

##### Changa_Bold700
![Changa_Bold700](./0a274e0c0a7aa46f455bf65caff8b972998ce8fc975bf677ae154d5765ac4c0f.ttf.png)

##### Changa_ExtraBold800
![Changa_ExtraBold800](./5d419cee41ca204d194f089cfd5d8d35ea6bc706a8f606ecaa69132df9854893.ttf.png)


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


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
