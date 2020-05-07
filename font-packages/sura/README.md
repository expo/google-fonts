# @expo-google-fonts/sura

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sura)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sura)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sura)

This package lets you use the [**Sura**](https://fonts.google.com/specimen/Sura) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Sura

![Sura](./font-family.png)

This font family contains [2 styles](#gallery).

- `Sura_Regular400`
- `Sura_Bold700`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sura expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Sura_Regular400, Sura_Bold700 } from '@expo-google-fonts/sura';

export default () => {
  let [fontsLoaded] = useFonts({
    Sura_Regular400,
    Sura_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sura_Regular400' }}>
          Sura_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sura_Bold700' }}>Sura_Bold700</Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Sura_Regular400
![Sura_Regular400](./701cc1c8fa22221123e6045f90d0db8d42edadf3b831862ce801b57bb14ac1b1.ttf.png)

##### Sura_Bold700
![Sura_Bold700](./a88482ddb9067b01125775fc0f780c4b615bc72ad86cbec920ee03b2756d8d90.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/sura` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sura page on Google Fonts](https://fonts.google.com/specimen/Sura) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sura on Google Fonts](https://fonts.google.com/specimen/Sura)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sura)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sura)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
