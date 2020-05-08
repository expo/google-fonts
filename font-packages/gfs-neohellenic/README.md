# @expo-google-fonts/gfs-neohellenic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/gfs-neohellenic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/gfs-neohellenic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/gfs-neohellenic)

This package lets you use the [**GFS Neohellenic**](https://fonts.google.com/specimen/GFS+Neohellenic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## GFS Neohellenic

![GFS Neohellenic](./font-family.png)

This font family contains [4 styles](#-gallery).

- `GFSNeohellenic_Regular400`
- `GFSNeohellenic_Regular400_Italic`
- `GFSNeohellenic_Bold700`
- `GFSNeohellenic_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/gfs-neohellenic expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  GFSNeohellenic_Regular400,
  GFSNeohellenic_Regular400_Italic,
  GFSNeohellenic_Bold700,
  GFSNeohellenic_Bold700_Italic,
} from '@expo-google-fonts/gfs-neohellenic';

export default () => {
  let [fontsLoaded] = useFonts({
    GFSNeohellenic_Regular400,
    GFSNeohellenic_Regular400_Italic,
    GFSNeohellenic_Bold700,
    GFSNeohellenic_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'GFSNeohellenic_Regular400' }}>
          GFSNeohellenic_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GFSNeohellenic_Regular400_Italic' }}>
          GFSNeohellenic_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GFSNeohellenic_Bold700' }}>
          GFSNeohellenic_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'GFSNeohellenic_Bold700_Italic' }}>
          GFSNeohellenic_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### GFSNeohellenic_Regular400
![GFSNeohellenic_Regular400](./bd8b39a679957cee00c5e50a23c2e6d3d6ba8d207873672a245c1de120f75028.ttf.png)

##### GFSNeohellenic_Regular400_Italic
![GFSNeohellenic_Regular400_Italic](./44d41c717d709e6a615d33a24a85f8bd9bb4eff83466d4fafb85844a41ac142b.ttf.png)

##### GFSNeohellenic_Bold700
![GFSNeohellenic_Bold700](./07ff63886ca5101d1a9bc31d7fb3f8dba0dfe2b725183cfb5349444e2ad8d4ad.ttf.png)

##### GFSNeohellenic_Bold700_Italic
![GFSNeohellenic_Bold700_Italic](./3317aac2c90d40a458f2817b4d514af6fa109becec2a0735a3415f2fda7a4603.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/gfs-neohellenic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [GFS Neohellenic page on Google Fonts](https://fonts.google.com/specimen/GFS+Neohellenic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [GFS Neohellenic on Google Fonts](https://fonts.google.com/specimen/GFS+Neohellenic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/gfs-neohellenic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/gfs-neohellenic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
