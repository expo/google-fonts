# @expo-google-fonts/maven-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/maven-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/maven-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/maven-pro)

This package lets you use the [**Maven Pro**](https://fonts.google.com/specimen/Maven+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Maven Pro

![Maven Pro](./font-family.png)

This font family contains [4 styles](#gallery).

- `MavenPro_Regular400`
- `MavenPro_Medium500`
- `MavenPro_Bold700`
- `MavenPro_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/maven-pro expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  MavenPro_Regular400,
  MavenPro_Medium500,
  MavenPro_Bold700,
  MavenPro_Black900,
} from '@expo-google-fonts/maven-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    MavenPro_Regular400,
    MavenPro_Medium500,
    MavenPro_Bold700,
    MavenPro_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'MavenPro_Regular400' }}>
          MavenPro_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MavenPro_Medium500' }}>
          MavenPro_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MavenPro_Bold700' }}>
          MavenPro_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'MavenPro_Black900' }}>
          MavenPro_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### MavenPro_Regular400
![MavenPro_Regular400](./20ff29ac0e19858eec2689ee81f18e45489d0afec4b61a21036d0c755edafcd7.ttf.png)

##### MavenPro_Medium500
![MavenPro_Medium500](./afd784d77bd20f7e76864636023d94a988f8732c47ec791f79d096b11d1c327c.ttf.png)

##### MavenPro_Bold700
![MavenPro_Bold700](./1f1c606af4cb59fd55c5e9d478e3c109eb47ee3c48c458ab10edcbcde15f0562.ttf.png)

##### MavenPro_Black900
![MavenPro_Black900](./9a922f263eff247f7ccc3823865c2b9241e10c305b6c64b3754dbb06ce6b5e33.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/maven-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Maven Pro page on Google Fonts](https://fonts.google.com/specimen/Maven+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Maven Pro on Google Fonts](https://fonts.google.com/specimen/Maven+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/maven-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/maven-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
