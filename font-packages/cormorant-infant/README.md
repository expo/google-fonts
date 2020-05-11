# @expo-google-fonts/cormorant-infant

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cormorant-infant)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cormorant-infant)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cormorant-infant)

This package lets you use the [**Cormorant Infant**](https://fonts.google.com/specimen/Cormorant+Infant) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cormorant Infant

![Cormorant Infant](./font-family.png)

This font family contains [10 styles](#-gallery).

- `CormorantInfant_Light300`
- `CormorantInfant_Light300_Italic`
- `CormorantInfant_Regular400`
- `CormorantInfant_Regular400_Italic`
- `CormorantInfant_Medium500`
- `CormorantInfant_Medium500_Italic`
- `CormorantInfant_SemiBold600`
- `CormorantInfant_SemiBold600_Italic`
- `CormorantInfant_Bold700`
- `CormorantInfant_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cormorant-infant expo-font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
  CormorantInfant_Light300,
  CormorantInfant_Light300_Italic,
  CormorantInfant_Regular400,
  CormorantInfant_Regular400_Italic,
  CormorantInfant_Medium500,
  CormorantInfant_Medium500_Italic,
  CormorantInfant_SemiBold600,
  CormorantInfant_SemiBold600_Italic,
  CormorantInfant_Bold700,
  CormorantInfant_Bold700_Italic,
  useFonts,
} from '@expo-google-fonts/cormorant-infant';

export default () => {
  let [fontsLoaded] = useFonts({
    CormorantInfant_Light300,
    CormorantInfant_Light300_Italic,
    CormorantInfant_Regular400,
    CormorantInfant_Regular400_Italic,
    CormorantInfant_Medium500,
    CormorantInfant_Medium500_Italic,
    CormorantInfant_SemiBold600,
    CormorantInfant_SemiBold600_Italic,
    CormorantInfant_Bold700,
    CormorantInfant_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantInfant_Light300' }}>
          CormorantInfant_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantInfant_Light300_Italic' }}>
          CormorantInfant_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantInfant_Regular400' }}>
          CormorantInfant_Regular400
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'CormorantInfant_Regular400_Italic' }}>
          CormorantInfant_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantInfant_Medium500' }}>
          CormorantInfant_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantInfant_Medium500_Italic' }}>
          CormorantInfant_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantInfant_SemiBold600' }}>
          CormorantInfant_SemiBold600
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'CormorantInfant_SemiBold600_Italic' }}>
          CormorantInfant_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantInfant_Bold700' }}>
          CormorantInfant_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CormorantInfant_Bold700_Italic' }}>
          CormorantInfant_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### CormorantInfant_Light300
![CormorantInfant_Light300](./9168080bdab2d447729e3f3046722e4d88cfd4cb5a1862dc6d916cba737791c5.ttf.png)

##### CormorantInfant_Light300_Italic
![CormorantInfant_Light300_Italic](./e6958c39fabaf907bdde7ba424eb0c17f3fef77c989edbaa01115b1fe5c6e067.ttf.png)

##### CormorantInfant_Regular400
![CormorantInfant_Regular400](./47164cf35cfe61e120d0e8c3e775559372e1a738f9e2c57cf85aa05e8c4bc806.ttf.png)

##### CormorantInfant_Regular400_Italic
![CormorantInfant_Regular400_Italic](./84f78b4a61cce77b8c2c9663434b1c6cf0316b556002a2c9ea9df9265533cf6b.ttf.png)

##### CormorantInfant_Medium500
![CormorantInfant_Medium500](./1d23820c90080bfb4aa4f9cec1e1ef64424729ef0c9b0e977e27806b21d81304.ttf.png)

##### CormorantInfant_Medium500_Italic
![CormorantInfant_Medium500_Italic](./f8a57af623179b25d7e59c823c1acd0563f9cfb6f1f03da9532e49bf49739dab.ttf.png)

##### CormorantInfant_SemiBold600
![CormorantInfant_SemiBold600](./f6a06c7e0bd73d14e395e0d977119af3b5fae58a9ce153ab18a277182316b424.ttf.png)

##### CormorantInfant_SemiBold600_Italic
![CormorantInfant_SemiBold600_Italic](./e1ae8191f481ca057de000de05308f0098090fd60456b76f13b1ffdc82ac1b1d.ttf.png)

##### CormorantInfant_Bold700
![CormorantInfant_Bold700](./a03a98979c43146bda66d723dfb38c68b77012ab2433f4eafcbda573433d75b5.ttf.png)

##### CormorantInfant_Bold700_Italic
![CormorantInfant_Bold700_Italic](./ceb4474fec6832dee11e5cc5624186c760e7993898bc39599f3fe8248cbb1b70.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cormorant-infant` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cormorant Infant page on Google Fonts](https://fonts.google.com/specimen/Cormorant+Infant) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cormorant Infant on Google Fonts](https://fonts.google.com/specimen/Cormorant+Infant)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cormorant-infant)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cormorant-infant)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
