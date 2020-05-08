# @expo-google-fonts/amiko

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/amiko)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/amiko)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/amiko)

This package lets you use the [**Amiko**](https://fonts.google.com/specimen/Amiko) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

v0.0.3

## Amiko

![Amiko](./font-family.png)

This font family contains [3 styles](#-gallery).

- `Amiko_Regular400`
- `Amiko_SemiBold600`
- `Amiko_Bold700`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/amiko expo-font @use-expo/font
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Amiko_Regular400, Amiko_SemiBold600, Amiko_Bold700 } from '@expo-google-fonts/amiko';

export default () => {
  let [fontsLoaded] = useFonts({
    Amiko_Regular400,
    Amiko_SemiBold600,
    Amiko_Bold700,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amiko_Regular400' }}>
          Amiko_Regular400
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amiko_SemiBold600' }}>
          Amiko_SemiBold600
        </Text>

        <Text style={{ fontSize, paddingVertical, fontFamily: 'Amiko_Bold700' }}>
          Amiko_Bold700
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery

##### Amiko_Regular400
![Amiko_Regular400](./c2e782cc6b503328a87e3b81b3ee6afa1acb6cd66bd04d9da2ba5d3ff4c43e3f.ttf.png)

##### Amiko_SemiBold600
![Amiko_SemiBold600](./d56799efb6c3d56b106cae38c558a3f2f9da3d0a90d0d1ea64449c693d3cadfc.ttf.png)

##### Amiko_Bold700
![Amiko_Bold700](./037bbdff86b70266d62abc94be043671d3c04188f477dbb0ead70ee89df98ecb.ttf.png)


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/amiko` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Amiko page on Google Fonts](https://fonts.google.com/specimen/Amiko) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Amiko on Google Fonts](https://fonts.google.com/specimen/Amiko)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/amiko)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/amiko)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)


*This entire directory, including this README, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator)*
