# @expo-google-fonts/quicksand

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/quicksand)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/quicksand)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/quicksand)

This package lets you use the [**Quicksand**](https://fonts.google.com/specimen/Quicksand) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Quicksand

![Quicksand](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Quicksand_Light300`
- `Quicksand_Regular400`
- `Quicksand_Medium500`
- `Quicksand_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/quicksand expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Quicksand_Light300,
  Quicksand_Regular400,
  Quicksand_Medium500,
  Quicksand_Bold700,
} from '@expo-google-fonts/quicksand';

export default () => {
  let [fontsLoaded] = useFonts({
    Quicksand_Light300,
    Quicksand_Regular400,
    Quicksand_Medium500,
    Quicksand_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Quicksand_Light300' }}>
          Quicksand_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Quicksand_Regular400' }}>
          Quicksand_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Quicksand_Medium500' }}>
          Quicksand_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Quicksand_Bold700' }}>
          Quicksand_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Quicksand_Light300
![Quicksand_Light300](./1d9cb44be0f4a238981aae2eb07e9157e00c48fae09163bea0866e136d1c3f1f.ttf.png)

##### Quicksand_Regular400
![Quicksand_Regular400](./0f408f35c3679417b5580701f3ac08830ce36535af5a643a2ef5b59e91c3c6b7.ttf.png)

##### Quicksand_Medium500
![Quicksand_Medium500](./76d743f0975259e38b62a1b671044d0a6584e7ae0a8389a9dca5d6d7e5e24031.ttf.png)

##### Quicksand_Bold700
![Quicksand_Bold700](./6bb475d143c61221c4ea174d3c51728268e58b12dbc14600d59020ef8deaaead.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/quicksand` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Quicksand page on Google Fonts](https://fonts.google.com/specimen/Quicksand) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Quicksand on Google Fonts](https://fonts.google.com/specimen/Quicksand)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/quicksand)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/quicksand)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
