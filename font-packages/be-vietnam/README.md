# @expo-google-fonts/be-vietnam

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/be-vietnam)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/be-vietnam)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/be-vietnam)

This package lets you use the [**Be Vietnam**](https://fonts.google.com/specimen/Be+Vietnam) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Be Vietnam

![Be Vietnam](./font-family.png)

This font family contains [14 styles](#-gallery).

- `BeVietnam_100Thin`
- `BeVietnam_100Thin_Italic`
- `BeVietnam_300Light`
- `BeVietnam_300Light_Italic`
- `BeVietnam_400Regular`
- `BeVietnam_400Regular_Italic`
- `BeVietnam_500Medium`
- `BeVietnam_500Medium_Italic`
- `BeVietnam_600SemiBold`
- `BeVietnam_600SemiBold_Italic`
- `BeVietnam_700Bold`
- `BeVietnam_700Bold_Italic`
- `BeVietnam_800ExtraBold`
- `BeVietnam_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/be-vietnam expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  BeVietnam_100Thin,
  BeVietnam_100Thin_Italic,
  BeVietnam_300Light,
  BeVietnam_300Light_Italic,
  BeVietnam_400Regular,
  BeVietnam_400Regular_Italic,
  BeVietnam_500Medium,
  BeVietnam_500Medium_Italic,
  BeVietnam_600SemiBold,
  BeVietnam_600SemiBold_Italic,
  BeVietnam_700Bold,
  BeVietnam_700Bold_Italic,
  BeVietnam_800ExtraBold,
  BeVietnam_800ExtraBold_Italic,
} from '@expo-google-fonts/be-vietnam';

export default () => {
  let [fontsLoaded] = useFonts({
    BeVietnam_100Thin,
    BeVietnam_100Thin_Italic,
    BeVietnam_300Light,
    BeVietnam_300Light_Italic,
    BeVietnam_400Regular,
    BeVietnam_400Regular_Italic,
    BeVietnam_500Medium,
    BeVietnam_500Medium_Italic,
    BeVietnam_600SemiBold,
    BeVietnam_600SemiBold_Italic,
    BeVietnam_700Bold,
    BeVietnam_700Bold_Italic,
    BeVietnam_800ExtraBold,
    BeVietnam_800ExtraBold_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_100Thin' }}>
          BeVietnam_100Thin
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_100Thin_Italic' }}>
          BeVietnam_100Thin_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_300Light' }}>
          BeVietnam_300Light
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_300Light_Italic' }}>
          BeVietnam_300Light_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_400Regular' }}>
          BeVietnam_400Regular
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_400Regular_Italic' }}>
          BeVietnam_400Regular_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_500Medium' }}>
          BeVietnam_500Medium
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_500Medium_Italic' }}>
          BeVietnam_500Medium_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_600SemiBold' }}>
          BeVietnam_600SemiBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_600SemiBold_Italic' }}>
          BeVietnam_600SemiBold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_700Bold' }}>
          BeVietnam_700Bold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_700Bold_Italic' }}>
          BeVietnam_700Bold_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_800ExtraBold' }}>
          BeVietnam_800ExtraBold
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'BeVietnam_800ExtraBold_Italic' }}>
          BeVietnam_800ExtraBold_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### BeVietnam_100Thin
![BeVietnam_100Thin](./BeVietnam_100Thin.ttf.png)

##### BeVietnam_100Thin_Italic
![BeVietnam_100Thin_Italic](./BeVietnam_100Thin_Italic.ttf.png)

##### BeVietnam_300Light
![BeVietnam_300Light](./BeVietnam_300Light.ttf.png)

##### BeVietnam_300Light_Italic
![BeVietnam_300Light_Italic](./BeVietnam_300Light_Italic.ttf.png)

##### BeVietnam_400Regular
![BeVietnam_400Regular](./BeVietnam_400Regular.ttf.png)

##### BeVietnam_400Regular_Italic
![BeVietnam_400Regular_Italic](./BeVietnam_400Regular_Italic.ttf.png)

##### BeVietnam_500Medium
![BeVietnam_500Medium](./BeVietnam_500Medium.ttf.png)

##### BeVietnam_500Medium_Italic
![BeVietnam_500Medium_Italic](./BeVietnam_500Medium_Italic.ttf.png)

##### BeVietnam_600SemiBold
![BeVietnam_600SemiBold](./BeVietnam_600SemiBold.ttf.png)

##### BeVietnam_600SemiBold_Italic
![BeVietnam_600SemiBold_Italic](./BeVietnam_600SemiBold_Italic.ttf.png)

##### BeVietnam_700Bold
![BeVietnam_700Bold](./BeVietnam_700Bold.ttf.png)

##### BeVietnam_700Bold_Italic
![BeVietnam_700Bold_Italic](./BeVietnam_700Bold_Italic.ttf.png)

##### BeVietnam_800ExtraBold
![BeVietnam_800ExtraBold](./BeVietnam_800ExtraBold.ttf.png)

##### BeVietnam_800ExtraBold_Italic
![BeVietnam_800ExtraBold_Italic](./BeVietnam_800ExtraBold_Italic.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/be-vietnam` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Be Vietnam page on Google Fonts](https://fonts.google.com/specimen/Be+Vietnam) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Be Vietnam on Google Fonts](https://fonts.google.com/specimen/Be+Vietnam)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/be-vietnam)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/be-vietnam)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
