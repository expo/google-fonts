# @expo-google-fonts/cinzel

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cinzel)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cinzel)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cinzel)

This package lets you use the [**Cinzel**](https://fonts.google.com/specimen/Cinzel) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cinzel

![Cinzel](./font-family.png)

This font family contains [3 styles](#-gallery).

- `Cinzel_Regular400`
- `Cinzel_Bold700`
- `Cinzel_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cinzel expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Cinzel_Regular400,
  Cinzel_Bold700,
  Cinzel_Black900,
  useFonts,
} from '@expo-google-fonts/cinzel';

export default () => {
  let [fontsLoaded] = useFonts({
    Cinzel_Regular400,
    Cinzel_Bold700,
    Cinzel_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cinzel_Regular400' }}>
          Cinzel_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cinzel_Bold700' }}>
          Cinzel_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cinzel_Black900' }}>
          Cinzel_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Cinzel_Regular400
![Cinzel_Regular400](./1a1d67206903b7688f4187df3dd0563dce75a49b26d036c7e88798adcd6c8fab.ttf.png)

##### Cinzel_Bold700
![Cinzel_Bold700](./d385de045feb981ef4256fb3f82d128c1835f686ed5611dd1c5b01e8b615e7bb.ttf.png)

##### Cinzel_Black900
![Cinzel_Black900](./fbb068fbb60eb4c57957c490b9e8c4b00d9c8cc14bd064d85fca96516f5ae46f.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cinzel` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cinzel page on Google Fonts](https://fonts.google.com/specimen/Cinzel) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cinzel on Google Fonts](https://fonts.google.com/specimen/Cinzel)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cinzel)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cinzel)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
