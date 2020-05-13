# @expo-google-fonts/inknut-antiqua

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/inknut-antiqua)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/inknut-antiqua)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/inknut-antiqua)

This package lets you use the [**Inknut Antiqua**](https://fonts.google.com/specimen/Inknut+Antiqua) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Inknut Antiqua

![Inknut Antiqua](./font-family.png)

This font family contains [7 styles](#-gallery).

- `InknutAntiqua_300Light`
- `InknutAntiqua_400Regular`
- `InknutAntiqua_500Medium`
- `InknutAntiqua_600SemiBold`
- `InknutAntiqua_700Bold`
- `InknutAntiqua_800ExtraBold`
- `InknutAntiqua_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/inknut-antiqua expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  InknutAntiqua_300Light,
  InknutAntiqua_400Regular,
  InknutAntiqua_500Medium,
  InknutAntiqua_600SemiBold,
  InknutAntiqua_700Bold,
  InknutAntiqua_800ExtraBold,
  InknutAntiqua_900Black,
} from '@expo-google-fonts/inknut-antiqua';

export default () => {
  let [fontsLoaded] = useFonts({
    InknutAntiqua_300Light,
    InknutAntiqua_400Regular,
    InknutAntiqua_500Medium,
    InknutAntiqua_600SemiBold,
    InknutAntiqua_700Bold,
    InknutAntiqua_800ExtraBold,
    InknutAntiqua_900Black,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_300Light' }}>
          InknutAntiqua_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_400Regular' }}>
          InknutAntiqua_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_500Medium' }}>
          InknutAntiqua_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_600SemiBold' }}>
          InknutAntiqua_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_700Bold' }}>
          InknutAntiqua_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_800ExtraBold' }}>
          InknutAntiqua_800ExtraBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'InknutAntiqua_900Black' }}>
          InknutAntiqua_900Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### InknutAntiqua_300Light
![InknutAntiqua_300Light](./InknutAntiqua_300Light.ttf.png)

##### InknutAntiqua_400Regular
![InknutAntiqua_400Regular](./InknutAntiqua_400Regular.ttf.png)

##### InknutAntiqua_500Medium
![InknutAntiqua_500Medium](./InknutAntiqua_500Medium.ttf.png)

##### InknutAntiqua_600SemiBold
![InknutAntiqua_600SemiBold](./InknutAntiqua_600SemiBold.ttf.png)

##### InknutAntiqua_700Bold
![InknutAntiqua_700Bold](./InknutAntiqua_700Bold.ttf.png)

##### InknutAntiqua_800ExtraBold
![InknutAntiqua_800ExtraBold](./InknutAntiqua_800ExtraBold.ttf.png)

##### InknutAntiqua_900Black
![InknutAntiqua_900Black](./InknutAntiqua_900Black.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/inknut-antiqua` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Inknut Antiqua page on Google Fonts](https://fonts.google.com/specimen/Inknut+Antiqua) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Inknut Antiqua on Google Fonts](https://fonts.google.com/specimen/Inknut+Antiqua)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/inknut-antiqua)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/inknut-antiqua)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
