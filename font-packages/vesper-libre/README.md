# @expo-google-fonts/vesper-libre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/vesper-libre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/vesper-libre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/vesper-libre)

This package lets you use the [**Vesper Libre**](https://fonts.google.com/specimen/Vesper+Libre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Vesper Libre

![Vesper Libre](./font-family.png)

This font family contains [4 styles](#-gallery).

- `VesperLibre_Regular400`
- `VesperLibre_Medium500`
- `VesperLibre_Bold700`
- `VesperLibre_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/vesper-libre expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  VesperLibre_Regular400,
  VesperLibre_Medium500,
  VesperLibre_Bold700,
  VesperLibre_Black900,
} from '@expo-google-fonts/vesper-libre';

export default () => {
  let [fontsLoaded] = useFonts({
    VesperLibre_Regular400,
    VesperLibre_Medium500,
    VesperLibre_Bold700,
    VesperLibre_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'VesperLibre_Regular400' }}>
          VesperLibre_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'VesperLibre_Medium500' }}>
          VesperLibre_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'VesperLibre_Bold700' }}>
          VesperLibre_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'VesperLibre_Black900' }}>
          VesperLibre_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### VesperLibre_Regular400
![VesperLibre_Regular400](./23ebf9650e07e0d9fc46ae2eba26ac2ec4ce96fb1c5dfe8d1e68697caa450075.ttf.png)

##### VesperLibre_Medium500
![VesperLibre_Medium500](./0d1943717826e25f00193643ca5cef6a8e84d9949f43eea2e7fcbbcf7eac6472.ttf.png)

##### VesperLibre_Bold700
![VesperLibre_Bold700](./c45aa4f922411d07c89ae4f96d05177e84e280aecdda0fdee999b1a617b4c1ce.ttf.png)

##### VesperLibre_Black900
![VesperLibre_Black900](./0f6179f3446d68f20aa486aed461cc68f86028fd02217a13559a2bf5c3e60702.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/vesper-libre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Vesper Libre page on Google Fonts](https://fonts.google.com/specimen/Vesper+Libre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Vesper Libre on Google Fonts](https://fonts.google.com/specimen/Vesper+Libre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/vesper-libre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/vesper-libre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
