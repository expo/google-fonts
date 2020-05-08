# @expo-google-fonts/inria-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/inria-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/inria-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/inria-sans)

This package lets you use the [**Inria Sans**](https://fonts.google.com/specimen/Inria+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Inria Sans

![Inria Sans](./font-family.png)

This font family contains [6 styles](#-gallery).

- `InriaSans_Light300`
- `InriaSans_Light300_Italic`
- `InriaSans_Regular400`
- `InriaSans_Regular400_Italic`
- `InriaSans_Bold700`
- `InriaSans_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/inria-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  InriaSans_Light300,
  InriaSans_Light300_Italic,
  InriaSans_Regular400,
  InriaSans_Regular400_Italic,
  InriaSans_Bold700,
  InriaSans_Bold700_Italic,
} from '@expo-google-fonts/inria-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    InriaSans_Light300,
    InriaSans_Light300_Italic,
    InriaSans_Regular400,
    InriaSans_Regular400_Italic,
    InriaSans_Bold700,
    InriaSans_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'InriaSans_Light300' }}>
          InriaSans_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InriaSans_Light300_Italic' }}>
          InriaSans_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InriaSans_Regular400' }}>
          InriaSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InriaSans_Regular400_Italic' }}>
          InriaSans_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InriaSans_Bold700' }}>
          InriaSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InriaSans_Bold700_Italic' }}>
          InriaSans_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### InriaSans_Light300
![InriaSans_Light300](./3bde5e08b5ec7274f1c28704b62bd581c28724f8cf4412d56a9e24435e927789.ttf.png)

##### InriaSans_Light300_Italic
![InriaSans_Light300_Italic](./e33d8e62a895c0402146425676e4254906218e07c6adde8532ae0f436aff96ae.ttf.png)

##### InriaSans_Regular400
![InriaSans_Regular400](./78a5989461a98cf7daa6612f5b9240f06cf592fcaeb0684a49a73d5616085753.ttf.png)

##### InriaSans_Regular400_Italic
![InriaSans_Regular400_Italic](./dea0c172e0ec1669869a55587b188534d474341d049a62012e316cdd79e82f22.ttf.png)

##### InriaSans_Bold700
![InriaSans_Bold700](./7747b367f8106ba29552aff3126864e3d6b20c008e33d214252ca30fff47f65c.ttf.png)

##### InriaSans_Bold700_Italic
![InriaSans_Bold700_Italic](./70544f369add81b1bf7a0b8f3d4108c7bdca0f1426f9251c47d8d54ae6820b90.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/inria-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Inria Sans page on Google Fonts](https://fonts.google.com/specimen/Inria+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Inria Sans on Google Fonts](https://fonts.google.com/specimen/Inria+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/inria-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/inria-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
