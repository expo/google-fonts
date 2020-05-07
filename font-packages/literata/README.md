# @expo-google-fonts/literata

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/literata)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/literata)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/literata)

This package lets you use the [**Literata**](https://fonts.google.com/specimen/Literata) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Literata

![Literata](./font-family.png)

This font family contains [8 styles](#gallery).

- `Literata_Regular400`
- `Literata_Medium500`
- `Literata_SemiBold600`
- `Literata_Bold700`
- `Literata_Regular400_Italic`
- `Literata_Medium500_Italic`
- `Literata_SemiBold600_Italic`
- `Literata_Bold700_Italic`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/literata expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Literata_Regular400,
  Literata_Medium500,
  Literata_SemiBold600,
  Literata_Bold700,
  Literata_Regular400_Italic,
  Literata_Medium500_Italic,
  Literata_SemiBold600_Italic,
  Literata_Bold700_Italic,
} from '@expo-google-fonts/literata';

export default () => {
  let [fontsLoaded] = useFonts({
    Literata_Regular400,
    Literata_Medium500,
    Literata_SemiBold600,
    Literata_Bold700,
    Literata_Regular400_Italic,
    Literata_Medium500_Italic,
    Literata_SemiBold600_Italic,
    Literata_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Literata_Regular400' }}>
          Literata_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Literata_Medium500' }}>
          Literata_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Literata_SemiBold600' }}>
          Literata_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Literata_Bold700' }}>
          Literata_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Literata_Regular400_Italic' }}>
          Literata_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Literata_Medium500_Italic' }}>
          Literata_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Literata_SemiBold600_Italic' }}>
          Literata_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Literata_Bold700_Italic' }}>
          Literata_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Literata_Regular400
![Literata_Regular400](./f994a4c14415cfac63df0a88d12df379634376d190047a3aac8c1ccac859181b.ttf.png)

##### Literata_Medium500
![Literata_Medium500](./1011ff34c164167eb8c8e3cca7b775188431d8992affa5794a30375c51b6d938.ttf.png)

##### Literata_SemiBold600
![Literata_SemiBold600](./497b001be8a26d6015abe84fe17796af4a7dc95f03ad846ec89f4a5555f9f588.ttf.png)

##### Literata_Bold700
![Literata_Bold700](./438f5478b62d5696ec3eb207a5421131200429183907d6e3b4beb353b7169c6c.ttf.png)

##### Literata_Regular400_Italic
![Literata_Regular400_Italic](./fbac7c28db9313dc90a0f798d878fbe937ab215b86a35aef428cbba8f8fa8594.ttf.png)

##### Literata_Medium500_Italic
![Literata_Medium500_Italic](./4842145089ec9a11f9e11c7ebcfba39e857c3b88315313402619eb2a34bda353.ttf.png)

##### Literata_SemiBold600_Italic
![Literata_SemiBold600_Italic](./49a0d45ea7e35b031a48ab51d25b49734acf802145bcb84f0870c6629241d148.ttf.png)

##### Literata_Bold700_Italic
![Literata_Bold700_Italic](./b5feaa5aa4ea544737c3a07671e847a9c6664d791d284ccd3866fe24d45f2927.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/literata` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Literata page on Google Fonts](https://fonts.google.com/specimen/Literata) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Literata on Google Fonts](https://fonts.google.com/specimen/Literata)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/literata)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/literata)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
