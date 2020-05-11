# @expo-google-fonts/radley

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/radley)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/radley)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/radley)

This package lets you use the [**Radley**](https://fonts.google.com/specimen/Radley) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Radley

![Radley](./font-family.png)

This font family contains [2 styles](#-gallery).

- `Radley_Regular400`
- `Radley_Regular400_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/radley expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { Radley_Regular400, Radley_Regular400_Italic, useFonts } from '@expo-google-fonts/radley';

export default () => {
  let [fontsLoaded] = useFonts({
    Radley_Regular400,
    Radley_Regular400_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Radley_Regular400' }}>
          Radley_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Radley_Regular400_Italic' }}>
          Radley_Regular400_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Radley_Regular400
![Radley_Regular400](./6793fc8150706eb473a493107e09c2e519147ccf8d28dea89f49427c0dca0481.ttf.png)

##### Radley_Regular400_Italic
![Radley_Regular400_Italic](./d01dd3f7b9c28e1f719a10c2a9dc88cd2827fcc64c09173e01e8b397f7615442.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/radley` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Radley page on Google Fonts](https://fonts.google.com/specimen/Radley) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Radley on Google Fonts](https://fonts.google.com/specimen/Radley)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/radley)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/radley)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
