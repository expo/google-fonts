# @expo-google-fonts/rasa

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/rasa)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/rasa)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/rasa)

This package lets you use the [**Rasa**](https://fonts.google.com/specimen/Rasa) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Rasa

![Rasa](./font-family.png)

This font family contains [5 styles](#gallery).

- `Rasa_Light300`
- `Rasa_Regular400`
- `Rasa_Medium500`
- `Rasa_SemiBold600`
- `Rasa_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/rasa expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Rasa_Light300,
  Rasa_Regular400,
  Rasa_Medium500,
  Rasa_SemiBold600,
  Rasa_Bold700,
} from '@expo-google-fonts/rasa';

export default () => {
  let [fontsLoaded] = useFonts({
    Rasa_Light300,
    Rasa_Regular400,
    Rasa_Medium500,
    Rasa_SemiBold600,
    Rasa_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rasa_Light300' }}>
          Rasa_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rasa_Regular400' }}>
          Rasa_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rasa_Medium500' }}>
          Rasa_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rasa_SemiBold600' }}>
          Rasa_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Rasa_Bold700' }}>Rasa_Bold700</Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Rasa_Light300
![Rasa_Light300](./6d1458902052379a4c442fe3c08dfb90a878e6187abc480b52afc11943431dd3.ttf.png)

##### Rasa_Regular400
![Rasa_Regular400](./d5a933545a7d1e9a3ce0493c853f75c27dc067506d4c32398c0f724f726435cb.ttf.png)

##### Rasa_Medium500
![Rasa_Medium500](./f5a6e10ca22dc5d39cb49a70330bb3f3b7dc5361feb0b59693284816acf3dc6d.ttf.png)

##### Rasa_SemiBold600
![Rasa_SemiBold600](./0ce2031b3cd5dd01a2d4c96225c44fa6813df124cbf2f4f078c859e4e0abdd6d.ttf.png)

##### Rasa_Bold700
![Rasa_Bold700](./f756b8a84bfdccc709dbc00ba23c8852f077e23210d148b4a158e4feb7c1901e.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/rasa` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Rasa page on Google Fonts](https://fonts.google.com/specimen/Rasa) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Rasa on Google Fonts](https://fonts.google.com/specimen/Rasa)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rasa)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rasa)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
