# @expo-google-fonts/sansita

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sansita)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sansita)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sansita)

This package lets you use the [**Sansita**](https://fonts.google.com/specimen/Sansita) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Sansita

![Sansita](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Sansita_Regular400`
- `Sansita_Regular400_Italic`
- `Sansita_Bold700`
- `Sansita_Bold700_Italic`
- `Sansita_ExtraBold800`
- `Sansita_ExtraBold800_Italic`
- `Sansita_Black900`
- `Sansita_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/sansita expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Sansita_Regular400,
  Sansita_Regular400_Italic,
  Sansita_Bold700,
  Sansita_Bold700_Italic,
  Sansita_ExtraBold800,
  Sansita_ExtraBold800_Italic,
  Sansita_Black900,
  Sansita_Black900_Italic,
  useFonts,
} from '@expo-google-fonts/sansita';

export default () => {
  let [fontsLoaded] = useFonts({
    Sansita_Regular400,
    Sansita_Regular400_Italic,
    Sansita_Bold700,
    Sansita_Bold700_Italic,
    Sansita_ExtraBold800,
    Sansita_ExtraBold800_Italic,
    Sansita_Black900,
    Sansita_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sansita_Regular400' }}>
          Sansita_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sansita_Regular400_Italic' }}>
          Sansita_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sansita_Bold700' }}>
          Sansita_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sansita_Bold700_Italic' }}>
          Sansita_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sansita_ExtraBold800' }}>
          Sansita_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sansita_ExtraBold800_Italic' }}>
          Sansita_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sansita_Black900' }}>
          Sansita_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Sansita_Black900_Italic' }}>
          Sansita_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Sansita_Regular400
![Sansita_Regular400](./7e365aa3bbe93b56d5d0182d955c0e71da391d8d6a95479cab79fa24ced4e21e.ttf.png)

##### Sansita_Regular400_Italic
![Sansita_Regular400_Italic](./5aadd2db25ea4fcdeb76680b8b44761b6914ed6b874b5861a9e8c52412b66918.ttf.png)

##### Sansita_Bold700
![Sansita_Bold700](./b4828652c6bf26cd36ad5741e616104c91b8c4023c6a891b4460029e6642a4cb.ttf.png)

##### Sansita_Bold700_Italic
![Sansita_Bold700_Italic](./50757fb78ba6b455ca114555fcedffe03432f6fd4eb385544018c427a43c0430.ttf.png)

##### Sansita_ExtraBold800
![Sansita_ExtraBold800](./45499f61b5c2d545e14c3d78cc4a76d906ae3a15bacbf4b5479233e04c979cad.ttf.png)

##### Sansita_ExtraBold800_Italic
![Sansita_ExtraBold800_Italic](./6639d72f7bea1c80dcce732810166ac07da8ae78f5bb5cc798d11f97ce256a0b.ttf.png)

##### Sansita_Black900
![Sansita_Black900](./21bb47cdb40ec87c2ddbbfcb8b02a2af52cab2e20147315381b65d54d1ae0e5f.ttf.png)

##### Sansita_Black900_Italic
![Sansita_Black900_Italic](./2d3308301f6e427d108e0dab0cd6ed936a27d83cfd3dbfbc8693b260574b7cd3.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/sansita` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sansita page on Google Fonts](https://fonts.google.com/specimen/Sansita) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sansita on Google Fonts](https://fonts.google.com/specimen/Sansita)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sansita)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sansita)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
