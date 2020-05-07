# @expo-google-fonts/expletus-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/expletus-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/expletus-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/expletus-sans)

This package lets you use the [**Expletus Sans**](https://fonts.google.com/specimen/Expletus+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Expletus Sans

![Expletus Sans](./font-family.png)

This font family contains [8 styles](#gallery).

- `ExpletusSans_Regular400`
- `ExpletusSans_Regular400_Italic`
- `ExpletusSans_Medium500`
- `ExpletusSans_Medium500_Italic`
- `ExpletusSans_SemiBold600`
- `ExpletusSans_SemiBold600_Italic`
- `ExpletusSans_Bold700`
- `ExpletusSans_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/expletus-sans expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  ExpletusSans_Regular400,
  ExpletusSans_Regular400_Italic,
  ExpletusSans_Medium500,
  ExpletusSans_Medium500_Italic,
  ExpletusSans_SemiBold600,
  ExpletusSans_SemiBold600_Italic,
  ExpletusSans_Bold700,
  ExpletusSans_Bold700_Italic,
} from '@expo-google-fonts/expletus-sans';

export default () => {
  let [fontsLoaded] = useFonts({
    ExpletusSans_Regular400,
    ExpletusSans_Regular400_Italic,
    ExpletusSans_Medium500,
    ExpletusSans_Medium500_Italic,
    ExpletusSans_SemiBold600,
    ExpletusSans_SemiBold600_Italic,
    ExpletusSans_Bold700,
    ExpletusSans_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'ExpletusSans_Regular400' }}>
          ExpletusSans_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ExpletusSans_Regular400_Italic' }}>
          ExpletusSans_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ExpletusSans_Medium500' }}>
          ExpletusSans_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ExpletusSans_Medium500_Italic' }}>
          ExpletusSans_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ExpletusSans_SemiBold600' }}>
          ExpletusSans_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ExpletusSans_SemiBold600_Italic' }}>
          ExpletusSans_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ExpletusSans_Bold700' }}>
          ExpletusSans_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'ExpletusSans_Bold700_Italic' }}>
          ExpletusSans_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### ExpletusSans_Regular400
![ExpletusSans_Regular400](./8e8194fbcb2069328e5c506a10ab38e405a359ec0ab5c0d2379659cdff0830db.ttf.png)

##### ExpletusSans_Regular400_Italic
![ExpletusSans_Regular400_Italic](./072928d584fe0a92e93d576c43798a1dc6d1bf065c7db59d28112cb4733cad2a.ttf.png)

##### ExpletusSans_Medium500
![ExpletusSans_Medium500](./b5cd6f4acc507801fef499ca08c7da56ff9e5df77a4ba14eac1718e7ccfe49e5.ttf.png)

##### ExpletusSans_Medium500_Italic
![ExpletusSans_Medium500_Italic](./b16455d3607896d0b779898db128a332df5ed111317da3f1341a85a07317b209.ttf.png)

##### ExpletusSans_SemiBold600
![ExpletusSans_SemiBold600](./732974a8456ad103e02e3ad28c0844e71113017aae30a88969af3ec454dc2043.ttf.png)

##### ExpletusSans_SemiBold600_Italic
![ExpletusSans_SemiBold600_Italic](./935e18b8d6f075d9b37b0017bde129fd0e68ee0800f60eac4c68f6534c528aa3.ttf.png)

##### ExpletusSans_Bold700
![ExpletusSans_Bold700](./1f5f64f05469211d27b24f1b1f39e57ec0ca9e4211a24b28c336f629254bd482.ttf.png)

##### ExpletusSans_Bold700_Italic
![ExpletusSans_Bold700_Italic](./77c1827497333ee775fc45b32a1c0c2da85ac489afa78e6ee3808130e850e355.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/expletus-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Expletus Sans page on Google Fonts](https://fonts.google.com/specimen/Expletus+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Expletus Sans on Google Fonts](https://fonts.google.com/specimen/Expletus+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/expletus-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/expletus-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
