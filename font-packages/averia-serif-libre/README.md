# @expo-google-fonts/averia-serif-libre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/averia-serif-libre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/averia-serif-libre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/averia-serif-libre)

This package lets you use the [**Averia Serif Libre**](https://fonts.google.com/specimen/Averia+Serif+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Averia Serif Libre

![Averia Serif Libre](./font-family.png)

This font family contains [6 styles](#-gallery).

- `AveriaSerifLibre_Light300`
- `AveriaSerifLibre_Light300_Italic`
- `AveriaSerifLibre_Regular400`
- `AveriaSerifLibre_Regular400_Italic`
- `AveriaSerifLibre_Bold700`
- `AveriaSerifLibre_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/averia-serif-libre expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  AveriaSerifLibre_Light300,
  AveriaSerifLibre_Light300_Italic,
  AveriaSerifLibre_Regular400,
  AveriaSerifLibre_Regular400_Italic,
  AveriaSerifLibre_Bold700,
  AveriaSerifLibre_Bold700_Italic,
  useFonts,
} from '@expo-google-fonts/averia-serif-libre';

export default () => {
  let [fontsLoaded] = useFonts({
    AveriaSerifLibre_Light300,
    AveriaSerifLibre_Light300_Italic,
    AveriaSerifLibre_Regular400,
    AveriaSerifLibre_Regular400_Italic,
    AveriaSerifLibre_Bold700,
    AveriaSerifLibre_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaSerifLibre_Light300' }}>
          AveriaSerifLibre_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaSerifLibre_Light300_Italic' }}>
          AveriaSerifLibre_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaSerifLibre_Regular400' }}>
          AveriaSerifLibre_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'AveriaSerifLibre_Regular400_Italic' }}>
          AveriaSerifLibre_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaSerifLibre_Bold700' }}>
          AveriaSerifLibre_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'AveriaSerifLibre_Bold700_Italic' }}>
          AveriaSerifLibre_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### AveriaSerifLibre_Light300
![AveriaSerifLibre_Light300](./605722d0534e8b2a7a4ce36ebc7ecfa14868d5aeae52ba3419e14a19e67c92ba.ttf.png)

##### AveriaSerifLibre_Light300_Italic
![AveriaSerifLibre_Light300_Italic](./4b675f9e2f2962fb69b7145f35ea9df241cdc9b91744abeac3cdfbf7aca1740b.ttf.png)

##### AveriaSerifLibre_Regular400
![AveriaSerifLibre_Regular400](./1939fc59e6192c78872b151f71d328c64c84552c1f8f7548f3278d3db023959f.ttf.png)

##### AveriaSerifLibre_Regular400_Italic
![AveriaSerifLibre_Regular400_Italic](./383c63d8878e96726e26c44d5a631030fcf28d4abdcb9bdadd86dbb01a623de9.ttf.png)

##### AveriaSerifLibre_Bold700
![AveriaSerifLibre_Bold700](./19af7d57b5ea32ff5df3f2405e0d51759fdbab503fa4cfd420a5eb4943805fcc.ttf.png)

##### AveriaSerifLibre_Bold700_Italic
![AveriaSerifLibre_Bold700_Italic](./164c3a01088756eebd948641705d6759b2fc7dabfd77d6e36490aa39befa0028.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/averia-serif-libre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Averia Serif Libre page on Google Fonts](https://fonts.google.com/specimen/Averia+Serif+Libre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Averia Serif Libre on Google Fonts](https://fonts.google.com/specimen/Averia+Serif+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/averia-serif-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/averia-serif-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
