# @expo-google-fonts/halant

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/halant)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/halant)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/halant)

This package lets you use the [**Halant**](https://fonts.google.com/specimen/Halant) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Halant

![Halant](./font-family.png)

This font family contains [5 styles](#gallery).

- `Halant_Light300`
- `Halant_Regular400`
- `Halant_Medium500`
- `Halant_SemiBold600`
- `Halant_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/halant expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Halant_Light300,
  Halant_Regular400,
  Halant_Medium500,
  Halant_SemiBold600,
  Halant_Bold700,
} from '@expo-google-fonts/halant';

export default () => {
  let [fontsLoaded] = useFonts({
    Halant_Light300,
    Halant_Regular400,
    Halant_Medium500,
    Halant_SemiBold600,
    Halant_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Halant_Light300' }}>
          Halant_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Halant_Regular400' }}>
          Halant_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Halant_Medium500' }}>
          Halant_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Halant_SemiBold600' }}>
          Halant_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Halant_Bold700' }}>
          Halant_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Halant_Light300
![Halant_Light300](./efbf1567d1ee285b609cc33198f6bf85b75ffc137871c0c74b770bda82fe5f96.ttf.png)

##### Halant_Regular400
![Halant_Regular400](./d2becc2fc9d31bd06f7378b501b26b4eb057167cc3722297588a277f45b05fba.ttf.png)

##### Halant_Medium500
![Halant_Medium500](./e6e6c9b73832eb91900f4298ec5c6b73e8d537163220299fa6213b8d702b9f37.ttf.png)

##### Halant_SemiBold600
![Halant_SemiBold600](./c38923af0ef17edd914dfb2737891b725cd1cc9dfc36bd72ba413213e99839a3.ttf.png)

##### Halant_Bold700
![Halant_Bold700](./4d09a5ce42fc23e8619b6c817a9bc5522bc64ede74b5a75d99fe2815244ca6a8.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/halant` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Halant page on Google Fonts](https://fonts.google.com/specimen/Halant) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Halant on Google Fonts](https://fonts.google.com/specimen/Halant)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/halant)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/halant)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
