# @expo-google-fonts/biorhyme

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/biorhyme)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/biorhyme)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/biorhyme)

This package lets you use the [**BioRhyme**](https://fonts.google.com/specimen/BioRhyme) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## BioRhyme

![BioRhyme](./font-family.png)

This font family contains [5 styles](#-gallery).

- `BioRhyme_200ExtraLight`
- `BioRhyme_300Light`
- `BioRhyme_400Regular`
- `BioRhyme_700Bold`
- `BioRhyme_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/biorhyme expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  BioRhyme_200ExtraLight,
  BioRhyme_300Light,
  BioRhyme_400Regular,
  BioRhyme_700Bold,
  BioRhyme_800ExtraBold,
} from '@expo-google-fonts/biorhyme';

export default () => {
  let [fontsLoaded] = useFonts({
    BioRhyme_200ExtraLight,
    BioRhyme_300Light,
    BioRhyme_400Regular,
    BioRhyme_700Bold,
    BioRhyme_800ExtraBold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhyme_200ExtraLight' }}>
          BioRhyme_200ExtraLight
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhyme_300Light' }}>
          BioRhyme_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhyme_400Regular' }}>
          BioRhyme_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhyme_700Bold' }}>
          BioRhyme_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BioRhyme_800ExtraBold' }}>
          BioRhyme_800ExtraBold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### BioRhyme_200ExtraLight
![BioRhyme_200ExtraLight](./BioRhyme_200ExtraLight.ttf.png)

##### BioRhyme_300Light
![BioRhyme_300Light](./BioRhyme_300Light.ttf.png)

##### BioRhyme_400Regular
![BioRhyme_400Regular](./BioRhyme_400Regular.ttf.png)

##### BioRhyme_700Bold
![BioRhyme_700Bold](./BioRhyme_700Bold.ttf.png)

##### BioRhyme_800ExtraBold
![BioRhyme_800ExtraBold](./BioRhyme_800ExtraBold.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/biorhyme` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [BioRhyme page on Google Fonts](https://fonts.google.com/specimen/BioRhyme) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [BioRhyme on Google Fonts](https://fonts.google.com/specimen/BioRhyme)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/biorhyme)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/biorhyme)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
