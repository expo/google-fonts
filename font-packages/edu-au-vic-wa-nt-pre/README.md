# @expo-google-fonts/edu-au-vic-wa-nt-pre

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/edu-au-vic-wa-nt-pre)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/edu-au-vic-wa-nt-pre)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/edu-au-vic-wa-nt-pre)

This package lets you use the [**Edu AU VIC WA NT Pre**](https://fonts.google.com/specimen/Edu+AU+VIC+WA+NT+Pre) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Edu AU VIC WA NT Pre

![Edu AU VIC WA NT Pre](./font-family.png)

This font family contains [4 styles](#-gallery).

- `EduAUVICWANTPre_400Regular`
- `EduAUVICWANTPre_500Medium`
- `EduAUVICWANTPre_600SemiBold`
- `EduAUVICWANTPre_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/edu-au-vic-wa-nt-pre expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  EduAUVICWANTPre_400Regular,
  EduAUVICWANTPre_500Medium,
  EduAUVICWANTPre_600SemiBold,
  EduAUVICWANTPre_700Bold,
} from '@expo-google-fonts/edu-au-vic-wa-nt-pre';

export default () => {
  let [fontsLoaded] = useFonts({
    EduAUVICWANTPre_400Regular,
    EduAUVICWANTPre_500Medium,
    EduAUVICWANTPre_600SemiBold,
    EduAUVICWANTPre_700Bold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EduAUVICWANTPre_400Regular',
          }}>
          Edu AU VIC WA NT Pre Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EduAUVICWANTPre_500Medium',
          }}>
          Edu AU VIC WA NT Pre Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EduAUVICWANTPre_600SemiBold',
          }}>
          Edu AU VIC WA NT Pre Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'EduAUVICWANTPre_700Bold',
          }}>
          Edu AU VIC WA NT Pre Bold
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![EduAUVICWANTPre_400Regular](./EduAUVICWANTPre_400Regular.ttf.png)|![EduAUVICWANTPre_500Medium](./EduAUVICWANTPre_500Medium.ttf.png)|![EduAUVICWANTPre_600SemiBold](./EduAUVICWANTPre_600SemiBold.ttf.png)||
|![EduAUVICWANTPre_700Bold](./EduAUVICWANTPre_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/edu-au-vic-wa-nt-pre` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Edu AU VIC WA NT Pre page on Google Fonts](https://fonts.google.com/specimen/Edu+AU+VIC+WA+NT+Pre) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Edu AU VIC WA NT Pre on Google Fonts](https://fonts.google.com/specimen/Edu+AU+VIC+WA+NT+Pre)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/edu-au-vic-wa-nt-pre)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/edu-au-vic-wa-nt-pre)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
