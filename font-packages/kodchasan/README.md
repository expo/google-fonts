# @expo-google-fonts/kodchasan

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kodchasan)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kodchasan)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kodchasan)

This package lets you use the [**Kodchasan**](https://fonts.google.com/specimen/Kodchasan) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Kodchasan

![Kodchasan](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Kodchasan_ExtraLight200`
- `Kodchasan_ExtraLight200_Italic`
- `Kodchasan_Light300`
- `Kodchasan_Light300_Italic`
- `Kodchasan_Regular400`
- `Kodchasan_Regular400_Italic`
- `Kodchasan_Medium500`
- `Kodchasan_Medium500_Italic`
- `Kodchasan_SemiBold600`
- `Kodchasan_SemiBold600_Italic`
- `Kodchasan_Bold700`
- `Kodchasan_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/kodchasan expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Kodchasan_ExtraLight200,
  Kodchasan_ExtraLight200_Italic,
  Kodchasan_Light300,
  Kodchasan_Light300_Italic,
  Kodchasan_Regular400,
  Kodchasan_Regular400_Italic,
  Kodchasan_Medium500,
  Kodchasan_Medium500_Italic,
  Kodchasan_SemiBold600,
  Kodchasan_SemiBold600_Italic,
  Kodchasan_Bold700,
  Kodchasan_Bold700_Italic,
} from '@expo-google-fonts/kodchasan';

export default () => {
  let [fontsLoaded] = useFonts({
    Kodchasan_ExtraLight200,
    Kodchasan_ExtraLight200_Italic,
    Kodchasan_Light300,
    Kodchasan_Light300_Italic,
    Kodchasan_Regular400,
    Kodchasan_Regular400_Italic,
    Kodchasan_Medium500,
    Kodchasan_Medium500_Italic,
    Kodchasan_SemiBold600,
    Kodchasan_SemiBold600_Italic,
    Kodchasan_Bold700,
    Kodchasan_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kodchasan_ExtraLight200' }}>
          Kodchasan_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kodchasan_ExtraLight200_Italic' }}>
          Kodchasan_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kodchasan_Light300' }}>
          Kodchasan_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kodchasan_Light300_Italic' }}>
          Kodchasan_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kodchasan_Regular400' }}>
          Kodchasan_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kodchasan_Regular400_Italic' }}>
          Kodchasan_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kodchasan_Medium500' }}>
          Kodchasan_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kodchasan_Medium500_Italic' }}>
          Kodchasan_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kodchasan_SemiBold600' }}>
          Kodchasan_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kodchasan_SemiBold600_Italic' }}>
          Kodchasan_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kodchasan_Bold700' }}>
          Kodchasan_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Kodchasan_Bold700_Italic' }}>
          Kodchasan_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Kodchasan_ExtraLight200
![Kodchasan_ExtraLight200](./2edcba243e7c1435577d6a15a666013f9b4f4db824a08ac150024e2000e4b7de.ttf.png)

##### Kodchasan_ExtraLight200_Italic
![Kodchasan_ExtraLight200_Italic](./6dabeb02077bcb1ee80b8aa519c66632dc2429a3cd60c6cabd5f91154288b103.ttf.png)

##### Kodchasan_Light300
![Kodchasan_Light300](./6eb43574315a2c2b393aa7ca05550b9b578bddd384857e454e5fbe82b515bfea.ttf.png)

##### Kodchasan_Light300_Italic
![Kodchasan_Light300_Italic](./fb557cb4f6efc30f933535fb5248e6730fbdcd42302a4b7ee4a58357d71aa0a9.ttf.png)

##### Kodchasan_Regular400
![Kodchasan_Regular400](./eeae77f326fa242ac959bdcb27637f93f6ca476033b7d1e36f106cd40c510317.ttf.png)

##### Kodchasan_Regular400_Italic
![Kodchasan_Regular400_Italic](./ec040aba86add77fe833d612e33ecb85ef59b26b83c92a86771db7e3f11a8f55.ttf.png)

##### Kodchasan_Medium500
![Kodchasan_Medium500](./25d7924da481a4595e389025f7a5d21b4bdcc49e7e9766bcdb939f3fe48a3f11.ttf.png)

##### Kodchasan_Medium500_Italic
![Kodchasan_Medium500_Italic](./86198a3feb862a0d1abbba874238ef724e7f0e39221baf31690c24d363b75c52.ttf.png)

##### Kodchasan_SemiBold600
![Kodchasan_SemiBold600](./fa4d9b59366b50f70d33afeb164cee9a13230055602bfdd410ceba9ec9c94132.ttf.png)

##### Kodchasan_SemiBold600_Italic
![Kodchasan_SemiBold600_Italic](./bcc4ef0fab22eb3e1e2ef611c53721b1d133ddc5ae972a8e978c4b8024b6aa30.ttf.png)

##### Kodchasan_Bold700
![Kodchasan_Bold700](./7df1e9c701a40ce05b3d8a4189480e045deff521a283218f2094f2cbbc434e17.ttf.png)

##### Kodchasan_Bold700_Italic
![Kodchasan_Bold700_Italic](./37e6fe167fcb53ce25beebb7983c99d3fb3831d1891cb10d36bdffdcc9bef707.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/kodchasan` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kodchasan page on Google Fonts](https://fonts.google.com/specimen/Kodchasan) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kodchasan on Google Fonts](https://fonts.google.com/specimen/Kodchasan)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kodchasan)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kodchasan)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
