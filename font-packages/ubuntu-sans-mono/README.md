# @expo-google-fonts/ubuntu-sans-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ubuntu-sans-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ubuntu-sans-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ubuntu-sans-mono)

This package lets you use the [**Ubuntu Sans Mono**](https://fonts.google.com/specimen/Ubuntu+Sans+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ubuntu Sans Mono

![Ubuntu Sans Mono](./font-family.png)

This font family contains [8 styles](#-gallery).

- `UbuntuSansMono_400Regular`
- `UbuntuSansMono_500Medium`
- `UbuntuSansMono_600SemiBold`
- `UbuntuSansMono_700Bold`
- `UbuntuSansMono_400Regular_Italic`
- `UbuntuSansMono_500Medium_Italic`
- `UbuntuSansMono_600SemiBold_Italic`
- `UbuntuSansMono_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ubuntu-sans-mono expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, UbuntuSansMono_400Regular, UbuntuSansMono_500Medium, UbuntuSansMono_600SemiBold, UbuntuSansMono_700Bold, UbuntuSansMono_400Regular_Italic, UbuntuSansMono_500Medium_Italic, UbuntuSansMono_600SemiBold_Italic, UbuntuSansMono_700Bold_Italic } from '@expo-google-fonts/ubuntu-sans-mono';

export default () => {

  let [fontsLoaded] = useFonts({
    UbuntuSansMono_400Regular, 
    UbuntuSansMono_500Medium, 
    UbuntuSansMono_600SemiBold, 
    UbuntuSansMono_700Bold, 
    UbuntuSansMono_400Regular_Italic, 
    UbuntuSansMono_500Medium_Italic, 
    UbuntuSansMono_600SemiBold_Italic, 
    UbuntuSansMono_700Bold_Italic
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
          fontFamily: "UbuntuSansMono_400Regular"
        }}>
          Ubuntu Sans Mono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSansMono_500Medium"
        }}>
          Ubuntu Sans Mono Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSansMono_600SemiBold"
        }}>
          Ubuntu Sans Mono Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSansMono_700Bold"
        }}>
          Ubuntu Sans Mono Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSansMono_400Regular_Italic"
        }}>
          Ubuntu Sans Mono Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSansMono_500Medium_Italic"
        }}>
          Ubuntu Sans Mono Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSansMono_600SemiBold_Italic"
        }}>
          Ubuntu Sans Mono Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "UbuntuSansMono_700Bold_Italic"
        }}>
          Ubuntu Sans Mono Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![UbuntuSansMono_400Regular](./UbuntuSansMono_400Regular.ttf.png)|![UbuntuSansMono_500Medium](./UbuntuSansMono_500Medium.ttf.png)|![UbuntuSansMono_600SemiBold](./UbuntuSansMono_600SemiBold.ttf.png)||
|![UbuntuSansMono_700Bold](./UbuntuSansMono_700Bold.ttf.png)|![UbuntuSansMono_400Regular_Italic](./UbuntuSansMono_400Regular_Italic.ttf.png)|![UbuntuSansMono_500Medium_Italic](./UbuntuSansMono_500Medium_Italic.ttf.png)||
|![UbuntuSansMono_600SemiBold_Italic](./UbuntuSansMono_600SemiBold_Italic.ttf.png)|![UbuntuSansMono_700Bold_Italic](./UbuntuSansMono_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ubuntu-sans-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ubuntu Sans Mono page on Google Fonts](https://fonts.google.com/specimen/Ubuntu+Sans+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ubuntu Sans Mono on Google Fonts](https://fonts.google.com/specimen/Ubuntu+Sans+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ubuntu-sans-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ubuntu-sans-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
