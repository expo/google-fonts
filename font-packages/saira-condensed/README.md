# @expo-google-fonts/saira-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/saira-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/saira-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/saira-condensed)

This package lets you use the [**Saira Condensed**](https://fonts.google.com/specimen/Saira+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Saira Condensed

![Saira Condensed](./font-family.png)

This font family contains [9 styles](#-gallery).

- `SairaCondensed_Thin100`
- `SairaCondensed_ExtraLight200`
- `SairaCondensed_Light300`
- `SairaCondensed_Regular400`
- `SairaCondensed_Medium500`
- `SairaCondensed_SemiBold600`
- `SairaCondensed_Bold700`
- `SairaCondensed_ExtraBold800`
- `SairaCondensed_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/saira-condensed expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  SairaCondensed_Thin100,
  SairaCondensed_ExtraLight200,
  SairaCondensed_Light300,
  SairaCondensed_Regular400,
  SairaCondensed_Medium500,
  SairaCondensed_SemiBold600,
  SairaCondensed_Bold700,
  SairaCondensed_ExtraBold800,
  SairaCondensed_Black900,
  useFonts,
} from '@expo-google-fonts/saira-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    SairaCondensed_Thin100,
    SairaCondensed_ExtraLight200,
    SairaCondensed_Light300,
    SairaCondensed_Regular400,
    SairaCondensed_Medium500,
    SairaCondensed_SemiBold600,
    SairaCondensed_Bold700,
    SairaCondensed_ExtraBold800,
    SairaCondensed_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaCondensed_Thin100' }}>
          SairaCondensed_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaCondensed_ExtraLight200' }}>
          SairaCondensed_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaCondensed_Light300' }}>
          SairaCondensed_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaCondensed_Regular400' }}>
          SairaCondensed_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaCondensed_Medium500' }}>
          SairaCondensed_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaCondensed_SemiBold600' }}>
          SairaCondensed_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaCondensed_Bold700' }}>
          SairaCondensed_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaCondensed_ExtraBold800' }}>
          SairaCondensed_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaCondensed_Black900' }}>
          SairaCondensed_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### SairaCondensed_Thin100
![SairaCondensed_Thin100](./8220c0c8f2f9288ded38da89babb11b6da4163ebaf504f877d22fb4ee43a5418.ttf.png)

##### SairaCondensed_ExtraLight200
![SairaCondensed_ExtraLight200](./589e794e8c485b04766db461cee8244dec0abc305e90f5cffd6dc37917ace3e4.ttf.png)

##### SairaCondensed_Light300
![SairaCondensed_Light300](./6aeb3495feb7c7ed8e87afce584590944e61b1a581d26f494de054b8a430dca7.ttf.png)

##### SairaCondensed_Regular400
![SairaCondensed_Regular400](./b0c1ee3c73539fe0da52806bb378267b315d3ebd7ffd40f7c435dd3dfef91baa.ttf.png)

##### SairaCondensed_Medium500
![SairaCondensed_Medium500](./c78b83e91201287296ae34c6159727fed972526b1dd8aefae5b922dd4196e687.ttf.png)

##### SairaCondensed_SemiBold600
![SairaCondensed_SemiBold600](./f1b084d4812e81b0cdfa9eed1b7256d043f5d4d8a00a81ab67440f9354549fc9.ttf.png)

##### SairaCondensed_Bold700
![SairaCondensed_Bold700](./9ca3926b06ade51157b1ce932574cac89a6f16dfbdd601a345701da25b7aa8dc.ttf.png)

##### SairaCondensed_ExtraBold800
![SairaCondensed_ExtraBold800](./17caf4ad92a39b0d9333a8f668c1582d993748126b1a8ebbd4b26bca25c66a00.ttf.png)

##### SairaCondensed_Black900
![SairaCondensed_Black900](./3235689af1f16e3535c26922c2fb739dd02adef166d3e761175b3af89f72240b.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/saira-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Saira Condensed page on Google Fonts](https://fonts.google.com/specimen/Saira+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Saira Condensed on Google Fonts](https://fonts.google.com/specimen/Saira+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/saira-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/saira-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
