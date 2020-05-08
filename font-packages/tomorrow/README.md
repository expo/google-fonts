# @expo-google-fonts/tomorrow

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tomorrow)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tomorrow)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tomorrow)

This package lets you use the [**Tomorrow**](https://fonts.google.com/specimen/Tomorrow) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Tomorrow

![Tomorrow](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Tomorrow_Thin100`
- `Tomorrow_Thin100_Italic`
- `Tomorrow_ExtraLight200`
- `Tomorrow_ExtraLight200_Italic`
- `Tomorrow_Light300`
- `Tomorrow_Light300_Italic`
- `Tomorrow_Regular400`
- `Tomorrow_Regular400_Italic`
- `Tomorrow_Medium500`
- `Tomorrow_Medium500_Italic`
- `Tomorrow_SemiBold600`
- `Tomorrow_SemiBold600_Italic`
- `Tomorrow_Bold700`
- `Tomorrow_Bold700_Italic`
- `Tomorrow_ExtraBold800`
- `Tomorrow_ExtraBold800_Italic`
- `Tomorrow_Black900`
- `Tomorrow_Black900_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/tomorrow expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Tomorrow_Thin100,
  Tomorrow_Thin100_Italic,
  Tomorrow_ExtraLight200,
  Tomorrow_ExtraLight200_Italic,
  Tomorrow_Light300,
  Tomorrow_Light300_Italic,
  Tomorrow_Regular400,
  Tomorrow_Regular400_Italic,
  Tomorrow_Medium500,
  Tomorrow_Medium500_Italic,
  Tomorrow_SemiBold600,
  Tomorrow_SemiBold600_Italic,
  Tomorrow_Bold700,
  Tomorrow_Bold700_Italic,
  Tomorrow_ExtraBold800,
  Tomorrow_ExtraBold800_Italic,
  Tomorrow_Black900,
  Tomorrow_Black900_Italic,
} from '@expo-google-fonts/tomorrow';

export default () => {
  let [fontsLoaded] = useFonts({
    Tomorrow_Thin100,
    Tomorrow_Thin100_Italic,
    Tomorrow_ExtraLight200,
    Tomorrow_ExtraLight200_Italic,
    Tomorrow_Light300,
    Tomorrow_Light300_Italic,
    Tomorrow_Regular400,
    Tomorrow_Regular400_Italic,
    Tomorrow_Medium500,
    Tomorrow_Medium500_Italic,
    Tomorrow_SemiBold600,
    Tomorrow_SemiBold600_Italic,
    Tomorrow_Bold700,
    Tomorrow_Bold700_Italic,
    Tomorrow_ExtraBold800,
    Tomorrow_ExtraBold800_Italic,
    Tomorrow_Black900,
    Tomorrow_Black900_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_Thin100' }}>
          Tomorrow_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_Thin100_Italic' }}>
          Tomorrow_Thin100_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_ExtraLight200' }}>
          Tomorrow_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_ExtraLight200_Italic' }}>
          Tomorrow_ExtraLight200_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_Light300' }}>
          Tomorrow_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_Light300_Italic' }}>
          Tomorrow_Light300_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_Regular400' }}>
          Tomorrow_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_Regular400_Italic' }}>
          Tomorrow_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_Medium500' }}>
          Tomorrow_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_Medium500_Italic' }}>
          Tomorrow_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_SemiBold600' }}>
          Tomorrow_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_SemiBold600_Italic' }}>
          Tomorrow_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_Bold700' }}>
          Tomorrow_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_Bold700_Italic' }}>
          Tomorrow_Bold700_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_ExtraBold800' }}>
          Tomorrow_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_ExtraBold800_Italic' }}>
          Tomorrow_ExtraBold800_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_Black900' }}>
          Tomorrow_Black900
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Tomorrow_Black900_Italic' }}>
          Tomorrow_Black900_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Tomorrow_Thin100
![Tomorrow_Thin100](./2bf064837570b16e64b6e16bb607ccd32e353ea52ff1860fd61a0de72f6a5ea0.ttf.png)

##### Tomorrow_Thin100_Italic
![Tomorrow_Thin100_Italic](./5dd9ba1be08d4e07fc0457665070caeecdad448ec1322aaac51e215904362e1e.ttf.png)

##### Tomorrow_ExtraLight200
![Tomorrow_ExtraLight200](./79fcf41f1188438fdf8ed0f55418e4ca98f03b8443301282f5802555a96f74af.ttf.png)

##### Tomorrow_ExtraLight200_Italic
![Tomorrow_ExtraLight200_Italic](./425bd4136783e2ffeb2842db5e8492f0dc216f55affb59a6318a92710baa27eb.ttf.png)

##### Tomorrow_Light300
![Tomorrow_Light300](./7b2dfcddbd51d970a89a1da730c28728ef35143b92571a0784e276e6717c88ef.ttf.png)

##### Tomorrow_Light300_Italic
![Tomorrow_Light300_Italic](./d222b2be7527fd1ff40802e62efd580a26a2af8429cf2dbddbce712e5a794dba.ttf.png)

##### Tomorrow_Regular400
![Tomorrow_Regular400](./5256d55c0d21f605ff31cd07ca4024c586239869f4fe1ce2e54ef2b9b6dd1611.ttf.png)

##### Tomorrow_Regular400_Italic
![Tomorrow_Regular400_Italic](./b3eda563419f8c13997aed418ed32fcc44e137a85792169be016f3242f1dbd26.ttf.png)

##### Tomorrow_Medium500
![Tomorrow_Medium500](./60bf8a426801434668a4d142fe97fa27c6e2dc3fa243ddeebf54f7c9d0284cbf.ttf.png)

##### Tomorrow_Medium500_Italic
![Tomorrow_Medium500_Italic](./74048134b96771acecb5de5c4af84c177e24ca1b8a7c3b6c9852c5f68517cbb0.ttf.png)

##### Tomorrow_SemiBold600
![Tomorrow_SemiBold600](./3de6c087f280da15fd40635ba1cc66fe7c78a10350dd0f94ae6ada95384f31a4.ttf.png)

##### Tomorrow_SemiBold600_Italic
![Tomorrow_SemiBold600_Italic](./2e985e11cd4dd1e0fd28d54e7a8c28dd1d7bf7fb880476ad1ff3ea0920bae21a.ttf.png)

##### Tomorrow_Bold700
![Tomorrow_Bold700](./2434798866b49db9f385b1aff9ce12097fd03456a8dd4c6aa8dfa8478446c036.ttf.png)

##### Tomorrow_Bold700_Italic
![Tomorrow_Bold700_Italic](./523759fa7f5b6d8e1fd036f0fe530eb086c95d6be872aa152730f72cc697b264.ttf.png)

##### Tomorrow_ExtraBold800
![Tomorrow_ExtraBold800](./1a88013dd353dca273c7a4129ba7433767521753e669d6b73174ac30b3004aca.ttf.png)

##### Tomorrow_ExtraBold800_Italic
![Tomorrow_ExtraBold800_Italic](./c11ab2b695c695bcd579be5ede3d5e8f268d1754defa82cb82da445a0f6fcc68.ttf.png)

##### Tomorrow_Black900
![Tomorrow_Black900](./976124bee1d9ac2c0b64250e695eb111c22947028b468261ac2ba747e935ce41.ttf.png)

##### Tomorrow_Black900_Italic
![Tomorrow_Black900_Italic](./84a0fcf0b30441638a28059e5e836a2441bbd5f51553c29ae163f37af0e07b6e.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/tomorrow` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tomorrow page on Google Fonts](https://fonts.google.com/specimen/Tomorrow) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tomorrow on Google Fonts](https://fonts.google.com/specimen/Tomorrow)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tomorrow)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tomorrow)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
