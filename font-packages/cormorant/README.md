# @expo-google-fonts/cormorant

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cormorant)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cormorant)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cormorant)

This package lets you use the [**Cormorant**](https://fonts.google.com/specimen/Cormorant) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cormorant

![Cormorant](./font-family.png)

This font family contains [10 styles](#-gallery).

- `Cormorant_Light300`
- `Cormorant_Light300_Italic`
- `Cormorant_Regular400`
- `Cormorant_Regular400_Italic`
- `Cormorant_Medium500`
- `Cormorant_Medium500_Italic`
- `Cormorant_SemiBold600`
- `Cormorant_SemiBold600_Italic`
- `Cormorant_Bold700`
- `Cormorant_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cormorant expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Cormorant_Light300,
  Cormorant_Light300_Italic,
  Cormorant_Regular400,
  Cormorant_Regular400_Italic,
  Cormorant_Medium500,
  Cormorant_Medium500_Italic,
  Cormorant_SemiBold600,
  Cormorant_SemiBold600_Italic,
  Cormorant_Bold700,
  Cormorant_Bold700_Italic,
} from '@expo-google-fonts/cormorant';

export default () => {
  let [fontsLoaded] = useFonts({
    Cormorant_Light300,
    Cormorant_Light300_Italic,
    Cormorant_Regular400,
    Cormorant_Regular400_Italic,
    Cormorant_Medium500,
    Cormorant_Medium500_Italic,
    Cormorant_SemiBold600,
    Cormorant_SemiBold600_Italic,
    Cormorant_Bold700,
    Cormorant_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cormorant_Light300' }}>
          Cormorant_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cormorant_Light300_Italic' }}>
          Cormorant_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cormorant_Regular400' }}>
          Cormorant_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cormorant_Regular400_Italic' }}>
          Cormorant_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cormorant_Medium500' }}>
          Cormorant_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cormorant_Medium500_Italic' }}>
          Cormorant_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cormorant_SemiBold600' }}>
          Cormorant_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cormorant_SemiBold600_Italic' }}>
          Cormorant_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cormorant_Bold700' }}>
          Cormorant_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cormorant_Bold700_Italic' }}>
          Cormorant_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Cormorant_Light300
![Cormorant_Light300](./25d9142c8c73577fb3546a40795e753bab11f4e22663e2f1168cbc485cbaa542.ttf.png)

##### Cormorant_Light300_Italic
![Cormorant_Light300_Italic](./d90d995e2a130e04d6e32ee3778e059092e41f5d9c1c812a659c7ffb52951a19.ttf.png)

##### Cormorant_Regular400
![Cormorant_Regular400](./fd04cb22306c1c15bb1727fc4b3d2344de940e929b75dbe3faa9b7f43f9e0d6d.ttf.png)

##### Cormorant_Regular400_Italic
![Cormorant_Regular400_Italic](./1f64218505ec6321eba3b8df95d0806808f61c872f9c081bce39c00a402a4429.ttf.png)

##### Cormorant_Medium500
![Cormorant_Medium500](./20c11bc6844b3f25ad300ce80d94c0c0fc2fb997b51e04cd1959156c6d78309d.ttf.png)

##### Cormorant_Medium500_Italic
![Cormorant_Medium500_Italic](./47bba53369e3f5bcda0e230d7e6fe60ae86b40b59b80d57c603c50e273d2f17c.ttf.png)

##### Cormorant_SemiBold600
![Cormorant_SemiBold600](./c1821d5e327189284afba6a7a2a9831a3025677c5afb37910353410a72391791.ttf.png)

##### Cormorant_SemiBold600_Italic
![Cormorant_SemiBold600_Italic](./c02d2b3a07288427fe5cd64e378eebe86d6a308b6d7dfe0e8cc4d1975d32e0d5.ttf.png)

##### Cormorant_Bold700
![Cormorant_Bold700](./a91dc6bed8f499ba7dfc43c8259fa142dc1d0097d84aba2a73c003c35b409845.ttf.png)

##### Cormorant_Bold700_Italic
![Cormorant_Bold700_Italic](./01317d3f16a7d1e98e9fcb9e49778326433ab76c291971e501f5e721ac437b0d.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cormorant` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cormorant page on Google Fonts](https://fonts.google.com/specimen/Cormorant) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cormorant on Google Fonts](https://fonts.google.com/specimen/Cormorant)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cormorant)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cormorant)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
