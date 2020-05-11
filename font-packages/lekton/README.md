# @expo-google-fonts/lekton

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lekton)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lekton)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lekton)

This package lets you use the [**Lekton**](https://fonts.google.com/specimen/Lekton) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Lekton

![Lekton](./font-family.png)

This font family contains [3 styles](#-gallery).

- `Lekton_Regular400`
- `Lekton_Regular400_Italic`
- `Lekton_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/lekton expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  Lekton_Regular400,
  Lekton_Regular400_Italic,
  Lekton_Bold700,
  useFonts,
} from '@expo-google-fonts/lekton';

export default () => {
  let [fontsLoaded] = useFonts({
    Lekton_Regular400,
    Lekton_Regular400_Italic,
    Lekton_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lekton_Regular400' }}>
          Lekton_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lekton_Regular400_Italic' }}>
          Lekton_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Lekton_Bold700' }}>
          Lekton_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Lekton_Regular400
![Lekton_Regular400](./919f93dff330901c348455426b31bc6ad6270b29b4527387ab2f16ae1a8b1b37.ttf.png)

##### Lekton_Regular400_Italic
![Lekton_Regular400_Italic](./5bdc665e2f574f3cde6b0db13ba296956f6736f4277decf03a015151ca063072.ttf.png)

##### Lekton_Bold700
![Lekton_Bold700](./34d7bf522a1cd2ddb84bd57082d9651c5155029004a5a66c713dec61c865ab08.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/lekton` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lekton page on Google Fonts](https://fonts.google.com/specimen/Lekton) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lekton on Google Fonts](https://fonts.google.com/specimen/Lekton)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lekton)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lekton)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
