# @expo-google-fonts/saira-extra-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/saira-extra-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/saira-extra-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/saira-extra-condensed)

This package lets you use the [**Saira Extra Condensed**](https://fonts.google.com/specimen/Saira+Extra+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Saira Extra Condensed

![Saira Extra Condensed](./font-family.png)

This font family contains [9 styles](#gallery).

- `SairaExtraCondensed_Thin100`
- `SairaExtraCondensed_ExtraLight200`
- `SairaExtraCondensed_Light300`
- `SairaExtraCondensed_Regular400`
- `SairaExtraCondensed_Medium500`
- `SairaExtraCondensed_SemiBold600`
- `SairaExtraCondensed_Bold700`
- `SairaExtraCondensed_ExtraBold800`
- `SairaExtraCondensed_Black900`

## 🔡 Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/saira-extra-condensed expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  SairaExtraCondensed_Thin100,
  SairaExtraCondensed_ExtraLight200,
  SairaExtraCondensed_Light300,
  SairaExtraCondensed_Regular400,
  SairaExtraCondensed_Medium500,
  SairaExtraCondensed_SemiBold600,
  SairaExtraCondensed_Bold700,
  SairaExtraCondensed_ExtraBold800,
  SairaExtraCondensed_Black900,
} from '@expo-google-fonts/saira-extra-condensed';

export default () => {
  let [fontsLoaded] = useFonts({
    SairaExtraCondensed_Thin100,
    SairaExtraCondensed_ExtraLight200,
    SairaExtraCondensed_Light300,
    SairaExtraCondensed_Regular400,
    SairaExtraCondensed_Medium500,
    SairaExtraCondensed_SemiBold600,
    SairaExtraCondensed_Bold700,
    SairaExtraCondensed_ExtraBold800,
    SairaExtraCondensed_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaExtraCondensed_Thin100' }}>
          SairaExtraCondensed_Thin100
        </Text>

        <Text
          style={{ fontSize, paddingVertical, fontFamily: 'SairaExtraCondensed_ExtraLight200' }}>
          SairaExtraCondensed_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaExtraCondensed_Light300' }}>
          SairaExtraCondensed_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaExtraCondensed_Regular400' }}>
          SairaExtraCondensed_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaExtraCondensed_Medium500' }}>
          SairaExtraCondensed_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaExtraCondensed_SemiBold600' }}>
          SairaExtraCondensed_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaExtraCondensed_Bold700' }}>
          SairaExtraCondensed_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaExtraCondensed_ExtraBold800' }}>
          SairaExtraCondensed_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'SairaExtraCondensed_Black900' }}>
          SairaExtraCondensed_Black900
        </Text>
      </View>
    );
  }
};

```

## 📖 Gallery

##### SairaExtraCondensed_Thin100
![SairaExtraCondensed_Thin100](./322d3973d59827b2504723abf3285c2d1e85181532fd146fdbabae00398ccbb1.ttf.png)

##### SairaExtraCondensed_ExtraLight200
![SairaExtraCondensed_ExtraLight200](./d52785c9322fca08c09dbab7952bdc038ce7ef5f58298a5252ccc2a9bacfc316.ttf.png)

##### SairaExtraCondensed_Light300
![SairaExtraCondensed_Light300](./aa5dedf23086451deef347c47898e8c5153ee408af19c44b9e780c1d559c7ce3.ttf.png)

##### SairaExtraCondensed_Regular400
![SairaExtraCondensed_Regular400](./7c5c7b4ab19710c4557e47580d437ed2eb1add2fc90a641088ef31539197d16f.ttf.png)

##### SairaExtraCondensed_Medium500
![SairaExtraCondensed_Medium500](./36d4ceb6924f219a43b1ef0abcf228bb570891d5c6360bcfd359afccb20b87fa.ttf.png)

##### SairaExtraCondensed_SemiBold600
![SairaExtraCondensed_SemiBold600](./a69037b3e5411f785d7b05bb682b957613e8105cae22044518c630107b4504b2.ttf.png)

##### SairaExtraCondensed_Bold700
![SairaExtraCondensed_Bold700](./3b08c582f603d1d8ae1944b4362aa3f7db533be5b7ba1c0f4971b93188a903d4.ttf.png)

##### SairaExtraCondensed_ExtraBold800
![SairaExtraCondensed_ExtraBold800](./3d5b2328322a4ecff567415a1417dff7b0659414c992b7e2b88ca399d456df3c.ttf.png)

##### SairaExtraCondensed_Black900
![SairaExtraCondensed_Black900](./2f9e1ef084cecc66c6306c5618a464b6f6557c0fab6b20f4061378300d83e090.ttf.png)


## 🖥️ Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## ⚖️ License

The `@expo-google-fonts/saira-extra-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Saira Extra Condensed page on Google Fonts](https://fonts.google.com/specimen/Saira+Extra+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Saira Extra Condensed on Google Fonts](https://fonts.google.com/specimen/Saira+Extra+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/saira-extra-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/saira-extra-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This file was generated. Instead of editing it by head, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
