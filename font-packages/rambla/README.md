# @expo-google-fonts/rambla

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/rambla)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/rambla)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/rambla)

This package lets you use the [**Rambla**](https://fonts.google.com/specimen/Rambla) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Rambla

![Rambla](./font-family.png)

This font family contains [4 styles](#gallery).

- `Rambla_Regular400`
- `Rambla_Regular400_Italic`
- `Rambla_Bold700`
- `Rambla_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/rambla expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Rambla_Regular400,
  Rambla_Regular400_Italic,
  Rambla_Bold700,
  Rambla_Bold700_Italic,
} from '@expo-google-fonts/rambla';

export default () => {
  let [fontsLoaded] = useFonts({
    Rambla_Regular400,
    Rambla_Regular400_Italic,
    Rambla_Bold700,
    Rambla_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rambla_Regular400' }}>
          Rambla_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rambla_Regular400_Italic' }}>
          Rambla_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rambla_Bold700' }}>
          Rambla_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rambla_Bold700_Italic' }}>
          Rambla_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Rambla_Regular400
![Rambla_Regular400](./8cc56fcd2e3777d5c3699b8db651965ee39a057e20813adb1a07b181a8511e65.ttf.png)

##### Rambla_Regular400_Italic
![Rambla_Regular400_Italic](./6486467dd0269443e3b474df8d13f8a02e42791674f0fcf5964b9ee8419cdbae.ttf.png)

##### Rambla_Bold700
![Rambla_Bold700](./3c855f5e3c26200aeb6e55a7d0bbf80b16fceb67ab65b97d50a788c68d315379.ttf.png)

##### Rambla_Bold700_Italic
![Rambla_Bold700_Italic](./f20b77570105aff68e4179538c4243221228d9f13bc6eb988847fdf6800b97b4.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/rambla` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Rambla page on Google Fonts](https://fonts.google.com/specimen/Rambla) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Rambla on Google Fonts](https://fonts.google.com/specimen/Rambla)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rambla)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rambla)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
