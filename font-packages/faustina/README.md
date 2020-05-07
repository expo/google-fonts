# @expo-google-fonts/faustina

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/faustina)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/faustina)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/faustina)

This package lets you use the [**Faustina**](https://fonts.google.com/specimen/Faustina) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Faustina

![Faustina](./font-family.png)

This font family contains [8 styles](#gallery).

- `Faustina_Regular400`
- `Faustina_Regular400_Italic`
- `Faustina_Medium500`
- `Faustina_Medium500_Italic`
- `Faustina_SemiBold600`
- `Faustina_SemiBold600_Italic`
- `Faustina_Bold700`
- `Faustina_Bold700_Italic`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/faustina expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Faustina_Regular400,
  Faustina_Regular400_Italic,
  Faustina_Medium500,
  Faustina_Medium500_Italic,
  Faustina_SemiBold600,
  Faustina_SemiBold600_Italic,
  Faustina_Bold700,
  Faustina_Bold700_Italic,
} from '@expo-google-fonts/faustina';

export default () => {
  let [fontsLoaded] = useFonts({
    Faustina_Regular400,
    Faustina_Regular400_Italic,
    Faustina_Medium500,
    Faustina_Medium500_Italic,
    Faustina_SemiBold600,
    Faustina_SemiBold600_Italic,
    Faustina_Bold700,
    Faustina_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Faustina_Regular400' }}>
          Faustina_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Faustina_Regular400_Italic' }}>
          Faustina_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Faustina_Medium500' }}>
          Faustina_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Faustina_Medium500_Italic' }}>
          Faustina_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Faustina_SemiBold600' }}>
          Faustina_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Faustina_SemiBold600_Italic' }}>
          Faustina_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Faustina_Bold700' }}>
          Faustina_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Faustina_Bold700_Italic' }}>
          Faustina_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### Faustina_Regular400
![Faustina_Regular400](./b83e2bcd1f015e1e288c5870cf0301c94cff5d1d346b1c0b7d0e497ec7165a06.ttf.png)

##### Faustina_Regular400_Italic
![Faustina_Regular400_Italic](./a7f8c492e8ce7588c67e918c52ae5a4c9517a62c3057c9aaa9f2a2f8bcc1278d.ttf.png)

##### Faustina_Medium500
![Faustina_Medium500](./ced47c330edb05d2c4dc0cfe0e0b69f9b23cfce448a95ab12a7179b3f3e7d8e9.ttf.png)

##### Faustina_Medium500_Italic
![Faustina_Medium500_Italic](./02caa39209526de5d9a8cd33d2d06056bd7dd2c4f91748ddd6a5af7fb9abfa87.ttf.png)

##### Faustina_SemiBold600
![Faustina_SemiBold600](./617c505971ec93fa27bd52270f4a605f1f9e8c04efa06181c1f9e6a684cb907a.ttf.png)

##### Faustina_SemiBold600_Italic
![Faustina_SemiBold600_Italic](./5f2f74ee4758fad98604d34c6a8e8df131c924bfd4654546327cc02df81af527.ttf.png)

##### Faustina_Bold700
![Faustina_Bold700](./e680d2565c4001336be567bd147c16b8d88d21b36f499cd98e689a429568ebcd.ttf.png)

##### Faustina_Bold700_Italic
![Faustina_Bold700_Italic](./32a38ed85ba3470cf4ff6929aae4fdb13233d68ba71b97ce606bc2ce782b0961.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/faustina` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Faustina page on Google Fonts](https://fonts.google.com/specimen/Faustina) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Faustina on Google Fonts](https://fonts.google.com/specimen/Faustina)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/faustina)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/faustina)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
