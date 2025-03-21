# @expo-google-fonts/reddit-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/reddit-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/reddit-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/reddit-mono)

This package lets you use the [**Reddit Mono**](https://fonts.google.com/specimen/Reddit+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Reddit Mono

![Reddit Mono](./font-family.png)

This font family contains [8 styles](#-gallery).

- `RedditMono_200ExtraLight`
- `RedditMono_300Light`
- `RedditMono_400Regular`
- `RedditMono_500Medium`
- `RedditMono_600SemiBold`
- `RedditMono_700Bold`
- `RedditMono_800ExtraBold`
- `RedditMono_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
npx expo install @expo-google-fonts/reddit-mono expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RedditMono_200ExtraLight,
  RedditMono_300Light,
  RedditMono_400Regular,
  RedditMono_500Medium,
  RedditMono_600SemiBold,
  RedditMono_700Bold,
  RedditMono_800ExtraBold,
  RedditMono_900Black,
} from '@expo-google-fonts/reddit-mono';

export default () => {
  let [fontsLoaded] = useFonts({
    RedditMono_200ExtraLight,
    RedditMono_300Light,
    RedditMono_400Regular,
    RedditMono_500Medium,
    RedditMono_600SemiBold,
    RedditMono_700Bold,
    RedditMono_800ExtraBold,
    RedditMono_900Black,
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
            fontFamily: 'RedditMono_200ExtraLight',
          }}>
          Reddit Mono Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditMono_300Light',
          }}>
          Reddit Mono Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditMono_400Regular',
          }}>
          Reddit Mono Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditMono_500Medium',
          }}>
          Reddit Mono Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditMono_600SemiBold',
          }}>
          Reddit Mono Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditMono_700Bold',
          }}>
          Reddit Mono Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditMono_800ExtraBold',
          }}>
          Reddit Mono Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'RedditMono_900Black',
          }}>
          Reddit Mono Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![RedditMono_200ExtraLight](./RedditMono_200ExtraLight.ttf.png)|![RedditMono_300Light](./RedditMono_300Light.ttf.png)|![RedditMono_400Regular](./RedditMono_400Regular.ttf.png)||
|![RedditMono_500Medium](./RedditMono_500Medium.ttf.png)|![RedditMono_600SemiBold](./RedditMono_600SemiBold.ttf.png)|![RedditMono_700Bold](./RedditMono_700Bold.ttf.png)||
|![RedditMono_800ExtraBold](./RedditMono_800ExtraBold.ttf.png)|![RedditMono_900Black](./RedditMono_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/reddit-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Reddit Mono page on Google Fonts](https://fonts.google.com/specimen/Reddit+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Reddit Mono on Google Fonts](https://fonts.google.com/specimen/Reddit+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/reddit-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/reddit-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
