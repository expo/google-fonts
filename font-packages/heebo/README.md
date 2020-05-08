# @expo-google-fonts/heebo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/heebo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/heebo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/heebo)

This package lets you use the [**Heebo**](https://fonts.google.com/specimen/Heebo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Heebo

![Heebo](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Heebo_Thin100`
- `Heebo_Light300`
- `Heebo_Regular400`
- `Heebo_Medium500`
- `Heebo_Bold700`
- `Heebo_ExtraBold800`
- `Heebo_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/heebo expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Heebo_Thin100,
  Heebo_Light300,
  Heebo_Regular400,
  Heebo_Medium500,
  Heebo_Bold700,
  Heebo_ExtraBold800,
  Heebo_Black900,
} from '@expo-google-fonts/heebo';

export default () => {
  let [fontsLoaded] = useFonts({
    Heebo_Thin100,
    Heebo_Light300,
    Heebo_Regular400,
    Heebo_Medium500,
    Heebo_Bold700,
    Heebo_ExtraBold800,
    Heebo_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Heebo_Thin100' }}>
          Heebo_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Heebo_Light300' }}>
          Heebo_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Heebo_Regular400' }}>
          Heebo_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Heebo_Medium500' }}>
          Heebo_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Heebo_Bold700' }}>
          Heebo_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Heebo_ExtraBold800' }}>
          Heebo_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Heebo_Black900' }}>
          Heebo_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Heebo_Thin100
![Heebo_Thin100](./2f2d859884539805a307db5a1953174f56bbb1e6903e915be95fe2a03d9ccacf.ttf.png)

##### Heebo_Light300
![Heebo_Light300](./eca72d49e0e063205daeaedb86fcdfc0cc36c5aaeb2d564ace316302e6ae62d9.ttf.png)

##### Heebo_Regular400
![Heebo_Regular400](./afb3fdd559b309c81c88a054148d94587299a397f1e8a3798cfb7cc2d485369c.ttf.png)

##### Heebo_Medium500
![Heebo_Medium500](./6655017f4c44bf09c5f66243feddb0c2cc8654284f24057da878243794d13286.ttf.png)

##### Heebo_Bold700
![Heebo_Bold700](./61bb78902136df2bcd0ef85590cbe95a59a3d85b975e0778906df1211029bd34.ttf.png)

##### Heebo_ExtraBold800
![Heebo_ExtraBold800](./c1324f3250d2f9405f19d63450423cd5a8a8cf6c6b7129e3afda9592f69c2df4.ttf.png)

##### Heebo_Black900
![Heebo_Black900](./500b1881e185310128c33157aa1484b2a52573bfe32f11d60065e0deffe8471c.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/heebo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Heebo page on Google Fonts](https://fonts.google.com/specimen/Heebo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Heebo on Google Fonts](https://fonts.google.com/specimen/Heebo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/heebo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/heebo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
