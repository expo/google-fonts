# @expo-google-fonts/victor-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/victor-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/victor-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/victor-mono)

This package lets you use the [**Victor Mono**](https://fonts.google.com/specimen/Victor+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Victor Mono

![Victor Mono](./font-family.png)

This font family contains [14 styles](#-gallery).

- `VictorMono_100Thin`
- `VictorMono_200ExtraLight`
- `VictorMono_300Light`
- `VictorMono_400Regular`
- `VictorMono_500Medium`
- `VictorMono_600SemiBold`
- `VictorMono_700Bold`
- `VictorMono_100Thin_Italic`
- `VictorMono_200ExtraLight_Italic`
- `VictorMono_300Light_Italic`
- `VictorMono_400Regular_Italic`
- `VictorMono_500Medium_Italic`
- `VictorMono_600SemiBold_Italic`
- `VictorMono_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/victor-mono expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, VictorMono_100Thin, VictorMono_200ExtraLight, VictorMono_300Light, VictorMono_400Regular, VictorMono_500Medium, VictorMono_600SemiBold, VictorMono_700Bold, VictorMono_100Thin_Italic, VictorMono_200ExtraLight_Italic, VictorMono_300Light_Italic, VictorMono_400Regular_Italic, VictorMono_500Medium_Italic, VictorMono_600SemiBold_Italic, VictorMono_700Bold_Italic } from '@expo-google-fonts/victor-mono';

export default () => {

  let [fontsLoaded] = useFonts({
    VictorMono_100Thin, 
    VictorMono_200ExtraLight, 
    VictorMono_300Light, 
    VictorMono_400Regular, 
    VictorMono_500Medium, 
    VictorMono_600SemiBold, 
    VictorMono_700Bold, 
    VictorMono_100Thin_Italic, 
    VictorMono_200ExtraLight_Italic, 
    VictorMono_300Light_Italic, 
    VictorMono_400Regular_Italic, 
    VictorMono_500Medium_Italic, 
    VictorMono_600SemiBold_Italic, 
    VictorMono_700Bold_Italic
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
          fontFamily: "VictorMono_100Thin"
        }}>
          Victor Mono Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VictorMono_200ExtraLight"
        }}>
          Victor Mono Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VictorMono_300Light"
        }}>
          Victor Mono Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VictorMono_400Regular"
        }}>
          Victor Mono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VictorMono_500Medium"
        }}>
          Victor Mono Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VictorMono_600SemiBold"
        }}>
          Victor Mono Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VictorMono_700Bold"
        }}>
          Victor Mono Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VictorMono_100Thin_Italic"
        }}>
          Victor Mono Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VictorMono_200ExtraLight_Italic"
        }}>
          Victor Mono Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VictorMono_300Light_Italic"
        }}>
          Victor Mono Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VictorMono_400Regular_Italic"
        }}>
          Victor Mono Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VictorMono_500Medium_Italic"
        }}>
          Victor Mono Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VictorMono_600SemiBold_Italic"
        }}>
          Victor Mono Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "VictorMono_700Bold_Italic"
        }}>
          Victor Mono Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![VictorMono_100Thin](./VictorMono_100Thin.ttf.png)|![VictorMono_200ExtraLight](./VictorMono_200ExtraLight.ttf.png)|![VictorMono_300Light](./VictorMono_300Light.ttf.png)||
|![VictorMono_400Regular](./VictorMono_400Regular.ttf.png)|![VictorMono_500Medium](./VictorMono_500Medium.ttf.png)|![VictorMono_600SemiBold](./VictorMono_600SemiBold.ttf.png)||
|![VictorMono_700Bold](./VictorMono_700Bold.ttf.png)|![VictorMono_100Thin_Italic](./VictorMono_100Thin_Italic.ttf.png)|![VictorMono_200ExtraLight_Italic](./VictorMono_200ExtraLight_Italic.ttf.png)||
|![VictorMono_300Light_Italic](./VictorMono_300Light_Italic.ttf.png)|![VictorMono_400Regular_Italic](./VictorMono_400Regular_Italic.ttf.png)|![VictorMono_500Medium_Italic](./VictorMono_500Medium_Italic.ttf.png)||
|![VictorMono_600SemiBold_Italic](./VictorMono_600SemiBold_Italic.ttf.png)|![VictorMono_700Bold_Italic](./VictorMono_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/victor-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Victor Mono page on Google Fonts](https://fonts.google.com/specimen/Victor+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Victor Mono on Google Fonts](https://fonts.google.com/specimen/Victor+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/victor-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/victor-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
