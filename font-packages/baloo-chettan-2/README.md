# @expo-google-fonts/baloo-chettan-2

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/baloo-chettan-2)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/baloo-chettan-2)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/baloo-chettan-2)

This package lets you use the [**Baloo Chettan 2**](https://fonts.google.com/specimen/Baloo+Chettan+2) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Baloo Chettan 2

![Baloo Chettan 2](./font-family.png)

This font family contains [5 styles](#-gallery).

- `BalooChettan2_400Regular`
- `BalooChettan2_500Medium`
- `BalooChettan2_600SemiBold`
- `BalooChettan2_700Bold`
- `BalooChettan2_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/baloo-chettan-2 expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  BalooChettan2_400Regular,
  BalooChettan2_500Medium,
  BalooChettan2_600SemiBold,
  BalooChettan2_700Bold,
  BalooChettan2_800ExtraBold,
} from '@expo-google-fonts/baloo-chettan-2';

export default () => {
  let [fontsLoaded] = useFonts({
    BalooChettan2_400Regular,
    BalooChettan2_500Medium,
    BalooChettan2_600SemiBold,
    BalooChettan2_700Bold,
    BalooChettan2_800ExtraBold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BalooChettan2_400Regular' }}>
          BalooChettan2_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BalooChettan2_500Medium' }}>
          BalooChettan2_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BalooChettan2_600SemiBold' }}>
          BalooChettan2_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BalooChettan2_700Bold' }}>
          BalooChettan2_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BalooChettan2_800ExtraBold' }}>
          BalooChettan2_800ExtraBold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### BalooChettan2_400Regular
![BalooChettan2_400Regular](./BalooChettan2_400Regular.ttf.png)

##### BalooChettan2_500Medium
![BalooChettan2_500Medium](./BalooChettan2_500Medium.ttf.png)

##### BalooChettan2_600SemiBold
![BalooChettan2_600SemiBold](./BalooChettan2_600SemiBold.ttf.png)

##### BalooChettan2_700Bold
![BalooChettan2_700Bold](./BalooChettan2_700Bold.ttf.png)

##### BalooChettan2_800ExtraBold
![BalooChettan2_800ExtraBold](./BalooChettan2_800ExtraBold.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/baloo-chettan-2` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Baloo Chettan 2 page on Google Fonts](https://fonts.google.com/specimen/Baloo+Chettan+2) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Baloo Chettan 2 on Google Fonts](https://fonts.google.com/specimen/Baloo+Chettan+2)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/baloo-chettan-2)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/baloo-chettan-2)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
