# @expo-google-fonts/thasadith

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/thasadith)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/thasadith)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/thasadith)

This package lets you use the [**Thasadith**](https://fonts.google.com/specimen/Thasadith) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Thasadith

![Thasadith](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Thasadith_Regular400`
- `Thasadith_Regular400_Italic`
- `Thasadith_Bold700`
- `Thasadith_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/thasadith expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Thasadith_Regular400,
  Thasadith_Regular400_Italic,
  Thasadith_Bold700,
  Thasadith_Bold700_Italic,
} from '@expo-google-fonts/thasadith';

export default () => {
  let [fontsLoaded] = useFonts({
    Thasadith_Regular400,
    Thasadith_Regular400_Italic,
    Thasadith_Bold700,
    Thasadith_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Thasadith_Regular400' }}>
          Thasadith_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Thasadith_Regular400_Italic' }}>
          Thasadith_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Thasadith_Bold700' }}>
          Thasadith_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Thasadith_Bold700_Italic' }}>
          Thasadith_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Thasadith_Regular400
![Thasadith_Regular400](./b9b28f00da26a27f2be523c47e0404d6bad035dead548d2418197cd755cc3ac5.ttf.png)

##### Thasadith_Regular400_Italic
![Thasadith_Regular400_Italic](./6c61662859aba973376a911040a9d141a67b1fa741ad54150e2bca1ec179e824.ttf.png)

##### Thasadith_Bold700
![Thasadith_Bold700](./45b2059a66559645a04c064051f3e3d8f18c0e883aab89bae7fff6d05ad0043b.ttf.png)

##### Thasadith_Bold700_Italic
![Thasadith_Bold700_Italic](./758c9bca5f80c1e919aa4821259cd1a773692ab770622c36f688ea4c8524b0ae.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/thasadith` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Thasadith page on Google Fonts](https://fonts.google.com/specimen/Thasadith) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Thasadith on Google Fonts](https://fonts.google.com/specimen/Thasadith)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/thasadith)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/thasadith)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
