# @expo-google-fonts/cabin

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/cabin)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/cabin)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/cabin)

This package lets you use the [**Cabin**](https://fonts.google.com/specimen/Cabin) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Cabin

![Cabin](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Cabin_Regular400`
- `Cabin_Regular400_Italic`
- `Cabin_Medium500`
- `Cabin_Medium500_Italic`
- `Cabin_SemiBold600`
- `Cabin_SemiBold600_Italic`
- `Cabin_Bold700`
- `Cabin_Bold700_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/cabin expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import {
  Cabin_Regular400,
  Cabin_Regular400_Italic,
  Cabin_Medium500,
  Cabin_Medium500_Italic,
  Cabin_SemiBold600,
  Cabin_SemiBold600_Italic,
  Cabin_Bold700,
  Cabin_Bold700_Italic,
} from '@expo-google-fonts/cabin';

export default () => {
  let [fontsLoaded] = useFonts({
    Cabin_Regular400,
    Cabin_Regular400_Italic,
    Cabin_Medium500,
    Cabin_Medium500_Italic,
    Cabin_SemiBold600,
    Cabin_SemiBold600_Italic,
    Cabin_Bold700,
    Cabin_Bold700_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cabin_Regular400' }}>
          Cabin_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cabin_Regular400_Italic' }}>
          Cabin_Regular400_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cabin_Medium500' }}>
          Cabin_Medium500
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cabin_Medium500_Italic' }}>
          Cabin_Medium500_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cabin_SemiBold600' }}>
          Cabin_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cabin_SemiBold600_Italic' }}>
          Cabin_SemiBold600_Italic
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cabin_Bold700' }}>
          Cabin_Bold700
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Cabin_Bold700_Italic' }}>
          Cabin_Bold700_Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Cabin_Regular400
![Cabin_Regular400](./9ff30e9e9a66cf6a4e65d444d6bf8afdea7d574b27589397657972c2f9b2194f.ttf.png)

##### Cabin_Regular400_Italic
![Cabin_Regular400_Italic](./db35751de9b88dfbea004784c70c96bca9d813b5521cf320e5cb30adfd7384a2.ttf.png)

##### Cabin_Medium500
![Cabin_Medium500](./4851465297f9c9aa19d41a969b28272f070f43271c7f279eb6daf3f291a47609.ttf.png)

##### Cabin_Medium500_Italic
![Cabin_Medium500_Italic](./2f1dff32a90462507aca783f85d6b2ed780858dd81a2a13bf217afbbfe5cce77.ttf.png)

##### Cabin_SemiBold600
![Cabin_SemiBold600](./b7e9674a2fca64e9eddd32df2987e72643c1fbadb5cc8158e4a429f8a99ea39a.ttf.png)

##### Cabin_SemiBold600_Italic
![Cabin_SemiBold600_Italic](./da97f68bcdcff651e97b599499a784fc828a6e26feb94f391324076d060e3f7f.ttf.png)

##### Cabin_Bold700
![Cabin_Bold700](./9adb3df669ae368a467dbe74951a83ec476b74739063459b95b664e6ea2bf36a.ttf.png)

##### Cabin_Bold700_Italic
![Cabin_Bold700_Italic](./e4a3605f6b618e79e1d2bc2e4890babb2828cca85fee80608cb7d4a810b06eab.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/cabin` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Cabin page on Google Fonts](https://fonts.google.com/specimen/Cabin) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Cabin on Google Fonts](https://fonts.google.com/specimen/Cabin)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/cabin)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/cabin)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
