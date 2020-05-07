# @expo-google-fonts/nobile

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/nobile)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/nobile)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/nobile)

This package lets you use the [**Nobile**](https://fonts.google.com/specimen/Nobile) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Nobile

![Nobile](./font-family.png)

This font family contains [4 styles](#gallery).

- `Nobile_Regular400`
- `Nobile_Regular400_Italic`
- `Nobile_Bold700`
- `Nobile_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/nobile expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Nobile_Regular400,
  Nobile_Regular400_Italic,
  Nobile_Bold700,
  Nobile_Bold700_Italic,
} from '@expo-google-fonts/nobile';

export default () => {
  let [fontsLoaded] = useFonts({
    Nobile_Regular400,
    Nobile_Regular400_Italic,
    Nobile_Bold700,
    Nobile_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nobile_Regular400' }}>
          Nobile_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nobile_Regular400_Italic' }}>
          Nobile_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nobile_Bold700' }}>
          Nobile_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Nobile_Bold700_Italic' }}>
          Nobile_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Nobile_Regular400
![Nobile_Regular400](./d0fcaab1c3dc981d4dcbe2840d5a12039de03b68f4f2736ac648e6eb339249c1.ttf.png)

##### Nobile_Regular400_Italic
![Nobile_Regular400_Italic](./88fda8926ed6fdf634aeaf690e2d21e66e8e88231993df94bf3b2359a617491b.ttf.png)

##### Nobile_Bold700
![Nobile_Bold700](./809ce5e05bb84a8872fd7ec295e71892fab43593a18179bb43c2a0f94cca53d2.ttf.png)

##### Nobile_Bold700_Italic
![Nobile_Bold700_Italic](./c889dceebe4337abc148cab8adbcb5ad8e6277635316b13a75afb02db100212d.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/nobile` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Nobile page on Google Fonts](https://fonts.google.com/specimen/Nobile) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Nobile on Google Fonts](https://fonts.google.com/specimen/Nobile)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/nobile)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/nobile)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
