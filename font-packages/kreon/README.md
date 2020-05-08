# @expo-google-fonts/kreon

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kreon)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kreon)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kreon)

This package lets you use the [**Kreon**](https://fonts.google.com/specimen/Kreon) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Kreon

![Kreon](./font-family.png)

This font family contains [3 styles](#-gallery).

- `Kreon_Light300`
- `Kreon_Regular400`
- `Kreon_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/kreon expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Kreon_Light300, Kreon_Regular400, Kreon_Bold700 } from '@expo-google-fonts/kreon';

export default () => {
  let [fontsLoaded] = useFonts({
    Kreon_Light300,
    Kreon_Regular400,
    Kreon_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kreon_Light300' }}>
          Kreon_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kreon_Regular400' }}>
          Kreon_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kreon_Bold700' }}>
          Kreon_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Kreon_Light300
![Kreon_Light300](./988fb49f563aec3452b26437e4cef99cd52bf368c5fb6c30e7b9e1419e4a3723.ttf.png)

##### Kreon_Regular400
![Kreon_Regular400](./95de76c3d8f95714fbfda4a89b6cf0b74a4285d9d0f81908cbd91c7146109d83.ttf.png)

##### Kreon_Bold700
![Kreon_Bold700](./9d9092c90a6173026afefda0a94456688b33166363b733d8d42200e68837b012.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/kreon` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kreon page on Google Fonts](https://fonts.google.com/specimen/Kreon) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kreon on Google Fonts](https://fonts.google.com/specimen/Kreon)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kreon)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kreon)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
