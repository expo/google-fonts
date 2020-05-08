# @expo-google-fonts/crimson-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/crimson-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/crimson-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/crimson-pro)

This package lets you use the [**Crimson Pro**](https://fonts.google.com/specimen/Crimson+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Crimson Pro

![Crimson Pro](./font-family.png)

This font family contains [16 styles](#-gallery).

- `CrimsonPro_ExtraLight200`
- `CrimsonPro_Light300`
- `CrimsonPro_Regular400`
- `CrimsonPro_Medium500`
- `CrimsonPro_SemiBold600`
- `CrimsonPro_Bold700`
- `CrimsonPro_ExtraBold800`
- `CrimsonPro_Black900`
- `CrimsonPro_ExtraLight200_Italic`
- `CrimsonPro_Light300_Italic`
- `CrimsonPro_Regular400_Italic`
- `CrimsonPro_Medium500_Italic`
- `CrimsonPro_SemiBold600_Italic`
- `CrimsonPro_Bold700_Italic`
- `CrimsonPro_ExtraBold800_Italic`
- `CrimsonPro_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/crimson-pro expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  CrimsonPro_ExtraLight200,
  CrimsonPro_Light300,
  CrimsonPro_Regular400,
  CrimsonPro_Medium500,
  CrimsonPro_SemiBold600,
  CrimsonPro_Bold700,
  CrimsonPro_ExtraBold800,
  CrimsonPro_Black900,
  CrimsonPro_ExtraLight200_Italic,
  CrimsonPro_Light300_Italic,
  CrimsonPro_Regular400_Italic,
  CrimsonPro_Medium500_Italic,
  CrimsonPro_SemiBold600_Italic,
  CrimsonPro_Bold700_Italic,
  CrimsonPro_ExtraBold800_Italic,
  CrimsonPro_Black900_Italic,
} from '@expo-google-fonts/crimson-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    CrimsonPro_ExtraLight200,
    CrimsonPro_Light300,
    CrimsonPro_Regular400,
    CrimsonPro_Medium500,
    CrimsonPro_SemiBold600,
    CrimsonPro_Bold700,
    CrimsonPro_ExtraBold800,
    CrimsonPro_Black900,
    CrimsonPro_ExtraLight200_Italic,
    CrimsonPro_Light300_Italic,
    CrimsonPro_Regular400_Italic,
    CrimsonPro_Medium500_Italic,
    CrimsonPro_SemiBold600_Italic,
    CrimsonPro_Bold700_Italic,
    CrimsonPro_ExtraBold800_Italic,
    CrimsonPro_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_ExtraLight200' }}>
          CrimsonPro_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_Light300' }}>
          CrimsonPro_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_Regular400' }}>
          CrimsonPro_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_Medium500' }}>
          CrimsonPro_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_SemiBold600' }}>
          CrimsonPro_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_Bold700' }}>
          CrimsonPro_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_ExtraBold800' }}>
          CrimsonPro_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_Black900' }}>
          CrimsonPro_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_ExtraLight200_Italic' }}>
          CrimsonPro_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_Light300_Italic' }}>
          CrimsonPro_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_Regular400_Italic' }}>
          CrimsonPro_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_Medium500_Italic' }}>
          CrimsonPro_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_SemiBold600_Italic' }}>
          CrimsonPro_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_Bold700_Italic' }}>
          CrimsonPro_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_ExtraBold800_Italic' }}>
          CrimsonPro_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'CrimsonPro_Black900_Italic' }}>
          CrimsonPro_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### CrimsonPro_ExtraLight200
![CrimsonPro_ExtraLight200](./8b66abfec21e34e91fc61b2ac08084816d4d166259ea2198ed01578a1ac727e5.ttf.png)

##### CrimsonPro_Light300
![CrimsonPro_Light300](./9abd9060a62aa38f10dc60738f37bada274814485a3b3bef4353cbc2503358cc.ttf.png)

##### CrimsonPro_Regular400
![CrimsonPro_Regular400](./510241ec6793070724a690b137fdfb9f98422a611b8f81c1e6f22d345a0fef65.ttf.png)

##### CrimsonPro_Medium500
![CrimsonPro_Medium500](./c758f7367d51b291ba0a17386117e7269f7a438bb2dc40acedc1574b113e43e2.ttf.png)

##### CrimsonPro_SemiBold600
![CrimsonPro_SemiBold600](./a0668cef91f47f8b6609de80f66e247d934bc12467bed847c61ad8397297db31.ttf.png)

##### CrimsonPro_Bold700
![CrimsonPro_Bold700](./37a3b4d93b35047eba32401d0e748ed133547287e16a5bacc9e40c85d85b489c.ttf.png)

##### CrimsonPro_ExtraBold800
![CrimsonPro_ExtraBold800](./2fff124d10656b451037180b7611d390d0fb4f603400346db8986461325e2503.ttf.png)

##### CrimsonPro_Black900
![CrimsonPro_Black900](./1e12367e6d503736e81c46a7e8dec43a84b804f31bcd06c8cd2e318cac7888b3.ttf.png)

##### CrimsonPro_ExtraLight200_Italic
![CrimsonPro_ExtraLight200_Italic](./02069dd1baa583bd54af1c82cd1979f3a078ee4087ddd6f64eb34b23c9370ee1.ttf.png)

##### CrimsonPro_Light300_Italic
![CrimsonPro_Light300_Italic](./96b97a5f9ec116f9f218a3b7de6daa5e95e9c6cb1c49b21f12e2df59d5ff2380.ttf.png)

##### CrimsonPro_Regular400_Italic
![CrimsonPro_Regular400_Italic](./737b0264b20a8110302dc2f70673ca8320d865b82c59d69c354a1e54b2edde3e.ttf.png)

##### CrimsonPro_Medium500_Italic
![CrimsonPro_Medium500_Italic](./654dd004b7fefe64e3ef615227b16e1da3abce493c844e6359cebe3bc1e98f18.ttf.png)

##### CrimsonPro_SemiBold600_Italic
![CrimsonPro_SemiBold600_Italic](./c98a3ef2ed0a7bc571852f4b28fe383e22c671bf9696106fb88605680abfe9eb.ttf.png)

##### CrimsonPro_Bold700_Italic
![CrimsonPro_Bold700_Italic](./dfc39b2565c337e814711b840e339b33b5f5b223042561963c34a8a4cfcd41c8.ttf.png)

##### CrimsonPro_ExtraBold800_Italic
![CrimsonPro_ExtraBold800_Italic](./a2dfc4edba8a2ecffbdf37c1e7ffc640034bbf2e83449b7e5df15e39cd78be80.ttf.png)

##### CrimsonPro_Black900_Italic
![CrimsonPro_Black900_Italic](./a99ef7991d1f3adeaa296d774cdf32d4441511e024a0bf21a52b3cac625c49e9.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/crimson-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Crimson Pro page on Google Fonts](https://fonts.google.com/specimen/Crimson+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Crimson Pro on Google Fonts](https://fonts.google.com/specimen/Crimson+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/crimson-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/crimson-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
