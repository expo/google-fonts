# @expo-google-fonts/host-grotesk

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/host-grotesk)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/host-grotesk)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/host-grotesk)

This package lets you use the [**Host Grotesk**](https://fonts.google.com/specimen/Host+Grotesk) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Host Grotesk

![Host Grotesk](./font-family.png)

This font family contains [12 styles](#-gallery).

- `HostGrotesk_300Light`
- `HostGrotesk_400Regular`
- `HostGrotesk_500Medium`
- `HostGrotesk_600SemiBold`
- `HostGrotesk_700Bold`
- `HostGrotesk_800ExtraBold`
- `HostGrotesk_300Light_Italic`
- `HostGrotesk_400Regular_Italic`
- `HostGrotesk_500Medium_Italic`
- `HostGrotesk_600SemiBold_Italic`
- `HostGrotesk_700Bold_Italic`
- `HostGrotesk_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/host-grotesk expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, HostGrotesk_300Light, HostGrotesk_400Regular, HostGrotesk_500Medium, HostGrotesk_600SemiBold, HostGrotesk_700Bold, HostGrotesk_800ExtraBold, HostGrotesk_300Light_Italic, HostGrotesk_400Regular_Italic, HostGrotesk_500Medium_Italic, HostGrotesk_600SemiBold_Italic, HostGrotesk_700Bold_Italic, HostGrotesk_800ExtraBold_Italic } from '@expo-google-fonts/host-grotesk';

export default () => {

  let [fontsLoaded] = useFonts({
    HostGrotesk_300Light, 
    HostGrotesk_400Regular, 
    HostGrotesk_500Medium, 
    HostGrotesk_600SemiBold, 
    HostGrotesk_700Bold, 
    HostGrotesk_800ExtraBold, 
    HostGrotesk_300Light_Italic, 
    HostGrotesk_400Regular_Italic, 
    HostGrotesk_500Medium_Italic, 
    HostGrotesk_600SemiBold_Italic, 
    HostGrotesk_700Bold_Italic, 
    HostGrotesk_800ExtraBold_Italic
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HostGrotesk_300Light"
        }}>
          Host Grotesk Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HostGrotesk_400Regular"
        }}>
          Host Grotesk Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HostGrotesk_500Medium"
        }}>
          Host Grotesk Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HostGrotesk_600SemiBold"
        }}>
          Host Grotesk Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HostGrotesk_700Bold"
        }}>
          Host Grotesk Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HostGrotesk_800ExtraBold"
        }}>
          Host Grotesk Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HostGrotesk_300Light_Italic"
        }}>
          Host Grotesk Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HostGrotesk_400Regular_Italic"
        }}>
          Host Grotesk Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HostGrotesk_500Medium_Italic"
        }}>
          Host Grotesk Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HostGrotesk_600SemiBold_Italic"
        }}>
          Host Grotesk Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HostGrotesk_700Bold_Italic"
        }}>
          Host Grotesk Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HostGrotesk_800ExtraBold_Italic"
        }}>
          Host Grotesk Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![HostGrotesk_300Light](./HostGrotesk_300Light.ttf.png)|![HostGrotesk_400Regular](./HostGrotesk_400Regular.ttf.png)|![HostGrotesk_500Medium](./HostGrotesk_500Medium.ttf.png)||
|![HostGrotesk_600SemiBold](./HostGrotesk_600SemiBold.ttf.png)|![HostGrotesk_700Bold](./HostGrotesk_700Bold.ttf.png)|![HostGrotesk_800ExtraBold](./HostGrotesk_800ExtraBold.ttf.png)||
|![HostGrotesk_300Light_Italic](./HostGrotesk_300Light_Italic.ttf.png)|![HostGrotesk_400Regular_Italic](./HostGrotesk_400Regular_Italic.ttf.png)|![HostGrotesk_500Medium_Italic](./HostGrotesk_500Medium_Italic.ttf.png)||
|![HostGrotesk_600SemiBold_Italic](./HostGrotesk_600SemiBold_Italic.ttf.png)|![HostGrotesk_700Bold_Italic](./HostGrotesk_700Bold_Italic.ttf.png)|![HostGrotesk_800ExtraBold_Italic](./HostGrotesk_800ExtraBold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/host-grotesk` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Host Grotesk page on Google Fonts](https://fonts.google.com/specimen/Host+Grotesk) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Host Grotesk on Google Fonts](https://fonts.google.com/specimen/Host+Grotesk)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/host-grotesk)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/host-grotesk)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
