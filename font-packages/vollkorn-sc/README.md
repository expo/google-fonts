# @expo-google-fonts/vollkorn-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/vollkorn-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/vollkorn-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/vollkorn-sc)

This package lets you use the [**Vollkorn SC**](https://fonts.google.com/specimen/Vollkorn+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Vollkorn SC

![Vollkorn SC](./font-family.png)

This font family contains [4 styles](#-gallery).

- `VollkornSC_Regular400`
- `VollkornSC_SemiBold600`
- `VollkornSC_Bold700`
- `VollkornSC_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/vollkorn-sc expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  VollkornSC_Regular400,
  VollkornSC_SemiBold600,
  VollkornSC_Bold700,
  VollkornSC_Black900,
} from '@expo-google-fonts/vollkorn-sc';

export default () => {
  let [fontsLoaded] = useFonts({
    VollkornSC_Regular400,
    VollkornSC_SemiBold600,
    VollkornSC_Bold700,
    VollkornSC_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'VollkornSC_Regular400' }}>
          VollkornSC_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'VollkornSC_SemiBold600' }}>
          VollkornSC_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'VollkornSC_Bold700' }}>
          VollkornSC_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'VollkornSC_Black900' }}>
          VollkornSC_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### VollkornSC_Regular400
![VollkornSC_Regular400](./3a204e8e6e256d182887114991a86b3853bd7b370eb298c5c5358a4924e94326.ttf.png)

##### VollkornSC_SemiBold600
![VollkornSC_SemiBold600](./c3f8bc857ab58e19ba62ee008373ba5b707f586065cc0a59e68cf3781b1075f5.ttf.png)

##### VollkornSC_Bold700
![VollkornSC_Bold700](./0281449b729b1b8cb680dbcd00fd7d2e9d40ff24c858a834e3670997a561aea3.ttf.png)

##### VollkornSC_Black900
![VollkornSC_Black900](./b95dc90d6b58551cd5cadf844986de95a70432ebf303eaf23270184113144a67.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/vollkorn-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Vollkorn SC page on Google Fonts](https://fonts.google.com/specimen/Vollkorn+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Vollkorn SC on Google Fonts](https://fonts.google.com/specimen/Vollkorn+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/vollkorn-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/vollkorn-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
