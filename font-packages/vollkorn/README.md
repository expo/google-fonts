# @expo-google-fonts/vollkorn

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/vollkorn)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/vollkorn)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/vollkorn)

This package lets you use the [**Vollkorn**](https://fonts.google.com/specimen/Vollkorn) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Vollkorn

![Vollkorn](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Vollkorn_Regular400`
- `Vollkorn_Regular400_Italic`
- `Vollkorn_SemiBold600`
- `Vollkorn_SemiBold600_Italic`
- `Vollkorn_Bold700`
- `Vollkorn_Bold700_Italic`
- `Vollkorn_Black900`
- `Vollkorn_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/vollkorn expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Vollkorn_Regular400,
  Vollkorn_Regular400_Italic,
  Vollkorn_SemiBold600,
  Vollkorn_SemiBold600_Italic,
  Vollkorn_Bold700,
  Vollkorn_Bold700_Italic,
  Vollkorn_Black900,
  Vollkorn_Black900_Italic,
  useFonts,
} from '@expo-google-fonts/vollkorn';

export default () => {
  let [fontsLoaded] = useFonts({
    Vollkorn_Regular400,
    Vollkorn_Regular400_Italic,
    Vollkorn_SemiBold600,
    Vollkorn_SemiBold600_Italic,
    Vollkorn_Bold700,
    Vollkorn_Bold700_Italic,
    Vollkorn_Black900,
    Vollkorn_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Vollkorn_Regular400' }}>
          Vollkorn_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Vollkorn_Regular400_Italic' }}>
          Vollkorn_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Vollkorn_SemiBold600' }}>
          Vollkorn_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Vollkorn_SemiBold600_Italic' }}>
          Vollkorn_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Vollkorn_Bold700' }}>
          Vollkorn_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Vollkorn_Bold700_Italic' }}>
          Vollkorn_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Vollkorn_Black900' }}>
          Vollkorn_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Vollkorn_Black900_Italic' }}>
          Vollkorn_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Vollkorn_Regular400
![Vollkorn_Regular400](./9fd84335b1beb10505c201815682f7b543aa429a5a909e8b2126f15d36a0705a.ttf.png)

##### Vollkorn_Regular400_Italic
![Vollkorn_Regular400_Italic](./784ba33f30493ef78ca0217d7f6c243c8bf7bec2cd1b9c4d813af99941bf730e.ttf.png)

##### Vollkorn_SemiBold600
![Vollkorn_SemiBold600](./9d702c22f1d2ea4a1521efff825d5c362adca54b6fbe2343ab2ed6b7e2119610.ttf.png)

##### Vollkorn_SemiBold600_Italic
![Vollkorn_SemiBold600_Italic](./6cd6efd288ac8587690f7a7f5788bea147c0c5432224a04874dc4494a8691955.ttf.png)

##### Vollkorn_Bold700
![Vollkorn_Bold700](./14aa1fb5f42a8088a0d91ca54dbc7d6eea615db621929c7bdc35ae4a6c64fcb5.ttf.png)

##### Vollkorn_Bold700_Italic
![Vollkorn_Bold700_Italic](./ef717b899e1af61e2a62cfed23623b0d5c844e2745616be4a949bf84f6e7457e.ttf.png)

##### Vollkorn_Black900
![Vollkorn_Black900](./14e5d20d80ab9df765ef117415850050320fa766eb246296c67924737f88c2d1.ttf.png)

##### Vollkorn_Black900_Italic
![Vollkorn_Black900_Italic](./3953dfef7c1118f089612462105779d89da8f9df1aa11b74a8b2a58bb8359a44.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/vollkorn` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Vollkorn page on Google Fonts](https://fonts.google.com/specimen/Vollkorn) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Vollkorn on Google Fonts](https://fonts.google.com/specimen/Vollkorn)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/vollkorn)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/vollkorn)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
