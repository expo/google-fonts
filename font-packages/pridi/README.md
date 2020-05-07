# @expo-google-fonts/pridi

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/pridi)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/pridi)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/pridi)

This package lets you use the [**Pridi**](https://fonts.google.com/specimen/Pridi) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Pridi

![Pridi](./font-family.png)

This font family contains [6 styles](#gallery).

- `Pridi_ExtraLight200`
- `Pridi_Light300`
- `Pridi_Regular400`
- `Pridi_Medium500`
- `Pridi_SemiBold600`
- `Pridi_Bold700`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/pridi expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Pridi_ExtraLight200,
  Pridi_Light300,
  Pridi_Regular400,
  Pridi_Medium500,
  Pridi_SemiBold600,
  Pridi_Bold700,
} from '@expo-google-fonts/pridi';

export default () => {
  let [fontsLoaded] = useFonts({
    Pridi_ExtraLight200,
    Pridi_Light300,
    Pridi_Regular400,
    Pridi_Medium500,
    Pridi_SemiBold600,
    Pridi_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Pridi_ExtraLight200' }}>
          Pridi_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Pridi_Light300' }}>
          Pridi_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Pridi_Regular400' }}>
          Pridi_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Pridi_Medium500' }}>
          Pridi_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Pridi_SemiBold600' }}>
          Pridi_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Pridi_Bold700' }}>
          Pridi_Bold700
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Pridi_ExtraLight200
![Pridi_ExtraLight200](./25767951345549f712ecc99e7f7e0ed309d7e3b707e8f82ac578dea2843ee338.ttf.png)

##### Pridi_Light300
![Pridi_Light300](./418f1e97f68102aa823ef64c5f96fbcec3fb67597331f6b65bbff28c82031fed.ttf.png)

##### Pridi_Regular400
![Pridi_Regular400](./33f3b1e354916fe8ce1a179c631238fdc60f52a959f39a02efbd3f8023bfbbda.ttf.png)

##### Pridi_Medium500
![Pridi_Medium500](./b57f641bac735f6cd44057a11cbabb787cbc33d1c8270040dc7d1cb6c4563858.ttf.png)

##### Pridi_SemiBold600
![Pridi_SemiBold600](./8847f26d3d388eb8a757c857d14058773c4f265b29fe5ef2da5da9132fb2924a.ttf.png)

##### Pridi_Bold700
![Pridi_Bold700](./26c0c1d38bb9f9387d48474dd1abf32af18563e40fa1067abcfa242e8870cf6b.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/pridi` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Pridi page on Google Fonts](https://fonts.google.com/specimen/Pridi) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Pridi on Google Fonts](https://fonts.google.com/specimen/Pridi)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/pridi)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/pridi)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
