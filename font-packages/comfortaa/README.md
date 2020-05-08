# @expo-google-fonts/comfortaa

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/comfortaa)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/comfortaa)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/comfortaa)

This package lets you use the [**Comfortaa**](https://fonts.google.com/specimen/Comfortaa) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Comfortaa

![Comfortaa](./font-family.png)

This font family contains [3 styles](#-gallery).

- `Comfortaa_Light300`
- `Comfortaa_Regular400`
- `Comfortaa_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/comfortaa expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Comfortaa_Light300,
  Comfortaa_Regular400,
  Comfortaa_Bold700,
} from '@expo-google-fonts/comfortaa';

export default () => {
  let [fontsLoaded] = useFonts({
    Comfortaa_Light300,
    Comfortaa_Regular400,
    Comfortaa_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Comfortaa_Light300' }}>
          Comfortaa_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Comfortaa_Regular400' }}>
          Comfortaa_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Comfortaa_Bold700' }}>
          Comfortaa_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Comfortaa_Light300
![Comfortaa_Light300](./9c42dde162aca0ef35c66a372266676483320b31bd2d1069fd2ec3879d092000.ttf.png)

##### Comfortaa_Regular400
![Comfortaa_Regular400](./b1a86afe9202b2f23f62ea6a901f0f299515c34673aea8cf0d8ab2270b4d7013.ttf.png)

##### Comfortaa_Bold700
![Comfortaa_Bold700](./30b5d292bb0fe9543a8ae812c3a2ce1ca57f9fd6701afafad31156536db5f08d.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/comfortaa` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Comfortaa page on Google Fonts](https://fonts.google.com/specimen/Comfortaa) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Comfortaa on Google Fonts](https://fonts.google.com/specimen/Comfortaa)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/comfortaa)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/comfortaa)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
