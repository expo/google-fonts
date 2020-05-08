# @expo-google-fonts/saira

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/saira)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/saira)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/saira)

This package lets you use the [**Saira**](https://fonts.google.com/specimen/Saira) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Saira

![Saira](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Saira_Thin100`
- `Saira_ExtraLight200`
- `Saira_Light300`
- `Saira_Regular400`
- `Saira_Medium500`
- `Saira_SemiBold600`
- `Saira_Bold700`
- `Saira_ExtraBold800`
- `Saira_Black900`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/saira expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Saira_Thin100,
  Saira_ExtraLight200,
  Saira_Light300,
  Saira_Regular400,
  Saira_Medium500,
  Saira_SemiBold600,
  Saira_Bold700,
  Saira_ExtraBold800,
  Saira_Black900,
} from '@expo-google-fonts/saira';

export default () => {
  let [fontsLoaded] = useFonts({
    Saira_Thin100,
    Saira_ExtraLight200,
    Saira_Light300,
    Saira_Regular400,
    Saira_Medium500,
    Saira_SemiBold600,
    Saira_Bold700,
    Saira_ExtraBold800,
    Saira_Black900,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_Thin100' }}>
          Saira_Thin100
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_ExtraLight200' }}>
          Saira_ExtraLight200
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_Light300' }}>
          Saira_Light300
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_Regular400' }}>
          Saira_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_Medium500' }}>
          Saira_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_SemiBold600' }}>
          Saira_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_Bold700' }}>
          Saira_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_ExtraBold800' }}>
          Saira_ExtraBold800
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Saira_Black900' }}>
          Saira_Black900
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Saira_Thin100
![Saira_Thin100](./b6d764b20e47ac3d6764acfa56dcca309c570f72779558c6c85b227d3d52c1a9.ttf.png)

##### Saira_ExtraLight200
![Saira_ExtraLight200](./2b401181dcedd7b5ce954c3110d4a358e96333124e6afb4335cf4ce5a9612a21.ttf.png)

##### Saira_Light300
![Saira_Light300](./9bc2a7efb47daf648f831278c1e7d476dc527592af052be0f1b56d14e3b4e333.ttf.png)

##### Saira_Regular400
![Saira_Regular400](./52c681d7513af192559d2240ada8f9fa22b3643bdb673ee7e21e6eb5684435f9.ttf.png)

##### Saira_Medium500
![Saira_Medium500](./2ca26aa1deaa72e2d0a3578ee8e0308aeeabd47a10628833efad904d84f252ba.ttf.png)

##### Saira_SemiBold600
![Saira_SemiBold600](./d9b40c01b3303786bc3fffeff6a6d3a756acf2bd892721e8d28e640b1269900f.ttf.png)

##### Saira_Bold700
![Saira_Bold700](./6f648ffbf75c94be4a3f3bdce9ed055f5ca4c76cea8df354c32deecf172d4bc3.ttf.png)

##### Saira_ExtraBold800
![Saira_ExtraBold800](./e7ef6f260e896a02dd09b2e149372bffaf3c2fc81e6a3eaba79751a2f84bc498.ttf.png)

##### Saira_Black900
![Saira_Black900](./784cb5c4c9a4355b55b1f819414b962800d401a312f0874e035e90ba2d1ebeb8.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/saira` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Saira page on Google Fonts](https://fonts.google.com/specimen/Saira) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Saira on Google Fonts](https://fonts.google.com/specimen/Saira)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/saira)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/saira)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
