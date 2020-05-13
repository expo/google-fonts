# @expo-google-fonts/old-standard-tt

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/old-standard-tt)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/old-standard-tt)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/old-standard-tt)

This package lets you use the [**Old Standard TT**](https://fonts.google.com/specimen/Old+Standard+TT) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Old Standard TT

![Old Standard TT](./font-family.png)

This font family contains [3 styles](#-gallery).

- `OldStandardTT_400Regular`
- `OldStandardTT_400Regular_Italic`
- `OldStandardTT_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/old-standard-tt expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  OldStandardTT_400Regular,
  OldStandardTT_400Regular_Italic,
  OldStandardTT_700Bold,
} from '@expo-google-fonts/old-standard-tt';

export default () => {
  let [fontsLoaded] = useFonts({
    OldStandardTT_400Regular,
    OldStandardTT_400Regular_Italic,
    OldStandardTT_700Bold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'OldStandardTT_400Regular' }}>
          OldStandardTT_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OldStandardTT_400Regular_Italic' }}>
          OldStandardTT_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'OldStandardTT_700Bold' }}>
          OldStandardTT_700Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### OldStandardTT_400Regular
![OldStandardTT_400Regular](./OldStandardTT_400Regular.ttf.png)

##### OldStandardTT_400Regular_Italic
![OldStandardTT_400Regular_Italic](./OldStandardTT_400Regular_Italic.ttf.png)

##### OldStandardTT_700Bold
![OldStandardTT_700Bold](./OldStandardTT_700Bold.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/old-standard-tt` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Old Standard TT page on Google Fonts](https://fonts.google.com/specimen/Old+Standard+TT) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Old Standard TT on Google Fonts](https://fonts.google.com/specimen/Old+Standard+TT)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/old-standard-tt)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/old-standard-tt)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
