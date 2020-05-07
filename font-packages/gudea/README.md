# @expo-google-fonts/gudea

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/gudea)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/gudea)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/gudea)

This package lets you use the [**Gudea**](https://fonts.google.com/specimen/Gudea) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Gudea

![Gudea](./font-family.png)

This font family contains [3 styles](#gallery).

- `Gudea_Regular400`
- `Gudea_Regular400_Italic`
- `Gudea_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/gudea expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Gudea_Regular400, Gudea_Regular400_Italic, Gudea_Bold700 } from '@expo-google-fonts/gudea';

export default () => {
  let [fontsLoaded] = useFonts({
    Gudea_Regular400,
    Gudea_Regular400_Italic,
    Gudea_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gudea_Regular400' }}>
          Gudea_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gudea_Regular400_Italic' }}>
          Gudea_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Gudea_Bold700' }}>
          Gudea_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Gudea_Regular400
![Gudea_Regular400](./4b41bce93d5a05ba71bb86e2be22eb03b270fa198be7df07c9c5a818a1724c0f.ttf.png)

##### Gudea_Regular400_Italic
![Gudea_Regular400_Italic](./ab00b4c571bb901b0d274550fab83154da5b8bb4529e382ae7d58962b0d05f80.ttf.png)

##### Gudea_Bold700
![Gudea_Bold700](./b1c48f399971799fe09414206e205ea8a5f37a1e17adc5ed4329ee9ddb9d074e.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/gudea` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Gudea page on Google Fonts](https://fonts.google.com/specimen/Gudea) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Gudea on Google Fonts](https://fonts.google.com/specimen/Gudea)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gudea)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gudea)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
