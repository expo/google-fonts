# @expo-google-fonts/teko

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/teko)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/teko)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/teko)

This package lets you use the [**Teko**](https://fonts.google.com/specimen/Teko) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Teko

![Teko](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Teko_Light300`
- `Teko_Regular400`
- `Teko_Medium500`
- `Teko_SemiBold600`
- `Teko_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/teko expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Teko_Light300,
  Teko_Regular400,
  Teko_Medium500,
  Teko_SemiBold600,
  Teko_Bold700,
} from '@expo-google-fonts/teko';

export default () => {
  let [fontsLoaded] = useFonts({
    Teko_Light300,
    Teko_Regular400,
    Teko_Medium500,
    Teko_SemiBold600,
    Teko_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Teko_Light300' }}>
          Teko_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Teko_Regular400' }}>
          Teko_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Teko_Medium500' }}>
          Teko_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Teko_SemiBold600' }}>
          Teko_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Teko_Bold700' }}>Teko_Bold700</Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Teko_Light300
![Teko_Light300](./b31400af25afcb1ea24b0a3b59e18957132c4df53084ec09f2978ddfd1e67fc5.ttf.png)

##### Teko_Regular400
![Teko_Regular400](./d796b7d93c33a941a6521bb31d3ce37f381b87f97447077405c1cf841c4cb586.ttf.png)

##### Teko_Medium500
![Teko_Medium500](./88b2962aecc7ff0d4a09258f8eff7210ff6c72abd16a8229f30da45d3c428b44.ttf.png)

##### Teko_SemiBold600
![Teko_SemiBold600](./93c13926efeae26ea7017e3777dd33149524c7eb3907c791e4b8c8edc57848f6.ttf.png)

##### Teko_Bold700
![Teko_Bold700](./8c33b42189d0afc837f06ec5fd8b20cc431d75823356156ab00af8dcb949fa69.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/teko` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Teko page on Google Fonts](https://fonts.google.com/specimen/Teko) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Teko on Google Fonts](https://fonts.google.com/specimen/Teko)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/teko)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/teko)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
