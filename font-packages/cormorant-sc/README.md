# @expo-google-fonts/cormorant-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cormorant-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cormorant-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cormorant-sc)

This package lets you use the [**Cormorant SC**](https://fonts.google.com/specimen/Cormorant+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cormorant SC

![Cormorant SC](./font-family.png)

This font family contains [5 styles](#-gallery).

- `CormorantSC_Light300`
- `CormorantSC_Regular400`
- `CormorantSC_Medium500`
- `CormorantSC_SemiBold600`
- `CormorantSC_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cormorant-sc expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  CormorantSC_Light300,
  CormorantSC_Regular400,
  CormorantSC_Medium500,
  CormorantSC_SemiBold600,
  CormorantSC_Bold700,
  useFonts,
} from '@expo-google-fonts/cormorant-sc';

export default () => {
  let [fontsLoaded] = useFonts({
    CormorantSC_Light300,
    CormorantSC_Regular400,
    CormorantSC_Medium500,
    CormorantSC_SemiBold600,
    CormorantSC_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantSC_Light300' }}>
          CormorantSC_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantSC_Regular400' }}>
          CormorantSC_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantSC_Medium500' }}>
          CormorantSC_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantSC_SemiBold600' }}>
          CormorantSC_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantSC_Bold700' }}>
          CormorantSC_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### CormorantSC_Light300
![CormorantSC_Light300](./20075e607eb45ea2e8f60f9365f2bf608df1251f443ae12295d751b425dd9b62.ttf.png)

##### CormorantSC_Regular400
![CormorantSC_Regular400](./e8c091c9484c2f6ac490d1613295b59e76d359ad34e1c52fb2f853a8c2ea0aac.ttf.png)

##### CormorantSC_Medium500
![CormorantSC_Medium500](./85cf334d625e0deec8283f8aa03ec6295e20a52c371096595411dcee4bef2039.ttf.png)

##### CormorantSC_SemiBold600
![CormorantSC_SemiBold600](./2a187b0fe3cebc137da0b069c1017ad0c1cfb10ef8992089d21b8261bbc9ad0c.ttf.png)

##### CormorantSC_Bold700
![CormorantSC_Bold700](./29e53a056b50572310c96ff3a83932d488c6954871aced226c122e7f3ff8b00b.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cormorant-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cormorant SC page on Google Fonts](https://fonts.google.com/specimen/Cormorant+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cormorant SC on Google Fonts](https://fonts.google.com/specimen/Cormorant+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cormorant-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cormorant-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
