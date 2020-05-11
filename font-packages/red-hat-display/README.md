# @expo-google-fonts/red-hat-display

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/red-hat-display)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/red-hat-display)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/red-hat-display)

This package lets you use the [**Red Hat Display**](https://fonts.google.com/specimen/Red+Hat+Display) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Red Hat Display

![Red Hat Display](./font-family.png)

This font family contains [8 styles](#-gallery).

- `RedHatDisplay_Regular400`
- `RedHatDisplay_Regular400_Italic`
- `RedHatDisplay_Medium500`
- `RedHatDisplay_Medium500_Italic`
- `RedHatDisplay_Bold700`
- `RedHatDisplay_Bold700_Italic`
- `RedHatDisplay_Black900`
- `RedHatDisplay_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/red-hat-display expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  RedHatDisplay_Regular400,
  RedHatDisplay_Regular400_Italic,
  RedHatDisplay_Medium500,
  RedHatDisplay_Medium500_Italic,
  RedHatDisplay_Bold700,
  RedHatDisplay_Bold700_Italic,
  RedHatDisplay_Black900,
  RedHatDisplay_Black900_Italic,
  useFonts,
} from '@expo-google-fonts/red-hat-display';

export default () => {
  let [fontsLoaded] = useFonts({
    RedHatDisplay_Regular400,
    RedHatDisplay_Regular400_Italic,
    RedHatDisplay_Medium500,
    RedHatDisplay_Medium500_Italic,
    RedHatDisplay_Bold700,
    RedHatDisplay_Bold700_Italic,
    RedHatDisplay_Black900,
    RedHatDisplay_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatDisplay_Regular400' }}>
          RedHatDisplay_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatDisplay_Regular400_Italic' }}>
          RedHatDisplay_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatDisplay_Medium500' }}>
          RedHatDisplay_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatDisplay_Medium500_Italic' }}>
          RedHatDisplay_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatDisplay_Bold700' }}>
          RedHatDisplay_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatDisplay_Bold700_Italic' }}>
          RedHatDisplay_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatDisplay_Black900' }}>
          RedHatDisplay_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'RedHatDisplay_Black900_Italic' }}>
          RedHatDisplay_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### RedHatDisplay_Regular400
![RedHatDisplay_Regular400](./675f7abfa369dc6992d9baf79751a6887711f613b7b4783502dbc42d135ad755.ttf.png)

##### RedHatDisplay_Regular400_Italic
![RedHatDisplay_Regular400_Italic](./2e8b90fd9cbce501f652d35b743083be439853e2ee98669ec4885ca518c7fb30.ttf.png)

##### RedHatDisplay_Medium500
![RedHatDisplay_Medium500](./93f27cfcf7823481e7194e5feb84bb5724ae4d872ae2d45469fe2732eb1ffbba.ttf.png)

##### RedHatDisplay_Medium500_Italic
![RedHatDisplay_Medium500_Italic](./fde77be04a3ff0a0162557ffb4a34ea35bfc2b6d6221ea52f4784ee861d23115.ttf.png)

##### RedHatDisplay_Bold700
![RedHatDisplay_Bold700](./7897d54780c1af5e3be81c46c850d6cf5cab921a6d3b9b6f01bc53832a8fba74.ttf.png)

##### RedHatDisplay_Bold700_Italic
![RedHatDisplay_Bold700_Italic](./7d663aae94b1599f6acc3c66f68bd11753c1f0065a6dfd808229663939991c88.ttf.png)

##### RedHatDisplay_Black900
![RedHatDisplay_Black900](./f3fa64617097c3954eacdd21e4502eb79d00053e29ca37b5e0047cf0e3d49aaa.ttf.png)

##### RedHatDisplay_Black900_Italic
![RedHatDisplay_Black900_Italic](./ea4b150dc2f0ba9a550b1a93217bc8dd275a6534aca092096abff10a4751dab1.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/red-hat-display` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Red Hat Display page on Google Fonts](https://fonts.google.com/specimen/Red+Hat+Display) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Red Hat Display on Google Fonts](https://fonts.google.com/specimen/Red+Hat+Display)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/red-hat-display)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/red-hat-display)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
