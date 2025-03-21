# @expo-google-fonts/chivo-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/chivo-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/chivo-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/chivo-mono)

This package lets you use the [**Chivo Mono**](https://fonts.google.com/specimen/Chivo+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Chivo Mono

![Chivo Mono](./font-family.png)

This font family contains [18 styles](#-gallery).

- `ChivoMono_100Thin`
- `ChivoMono_200ExtraLight`
- `ChivoMono_300Light`
- `ChivoMono_400Regular`
- `ChivoMono_500Medium`
- `ChivoMono_600SemiBold`
- `ChivoMono_700Bold`
- `ChivoMono_800ExtraBold`
- `ChivoMono_900Black`
- `ChivoMono_100Thin_Italic`
- `ChivoMono_200ExtraLight_Italic`
- `ChivoMono_300Light_Italic`
- `ChivoMono_400Regular_Italic`
- `ChivoMono_500Medium_Italic`
- `ChivoMono_600SemiBold_Italic`
- `ChivoMono_700Bold_Italic`
- `ChivoMono_800ExtraBold_Italic`
- `ChivoMono_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/chivo-mono expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, ChivoMono_100Thin, ChivoMono_200ExtraLight, ChivoMono_300Light, ChivoMono_400Regular, ChivoMono_500Medium, ChivoMono_600SemiBold, ChivoMono_700Bold, ChivoMono_800ExtraBold, ChivoMono_900Black, ChivoMono_100Thin_Italic, ChivoMono_200ExtraLight_Italic, ChivoMono_300Light_Italic, ChivoMono_400Regular_Italic, ChivoMono_500Medium_Italic, ChivoMono_600SemiBold_Italic, ChivoMono_700Bold_Italic, ChivoMono_800ExtraBold_Italic, ChivoMono_900Black_Italic } from '@expo-google-fonts/chivo-mono';

export default () => {

  let [fontsLoaded] = useFonts({
    ChivoMono_100Thin, 
    ChivoMono_200ExtraLight, 
    ChivoMono_300Light, 
    ChivoMono_400Regular, 
    ChivoMono_500Medium, 
    ChivoMono_600SemiBold, 
    ChivoMono_700Bold, 
    ChivoMono_800ExtraBold, 
    ChivoMono_900Black, 
    ChivoMono_100Thin_Italic, 
    ChivoMono_200ExtraLight_Italic, 
    ChivoMono_300Light_Italic, 
    ChivoMono_400Regular_Italic, 
    ChivoMono_500Medium_Italic, 
    ChivoMono_600SemiBold_Italic, 
    ChivoMono_700Bold_Italic, 
    ChivoMono_800ExtraBold_Italic, 
    ChivoMono_900Black_Italic
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
          fontFamily: "ChivoMono_100Thin"
        }}>
          Chivo Mono Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_200ExtraLight"
        }}>
          Chivo Mono Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_300Light"
        }}>
          Chivo Mono Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_400Regular"
        }}>
          Chivo Mono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_500Medium"
        }}>
          Chivo Mono Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_600SemiBold"
        }}>
          Chivo Mono Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_700Bold"
        }}>
          Chivo Mono Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_800ExtraBold"
        }}>
          Chivo Mono Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_900Black"
        }}>
          Chivo Mono Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_100Thin_Italic"
        }}>
          Chivo Mono Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_200ExtraLight_Italic"
        }}>
          Chivo Mono Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_300Light_Italic"
        }}>
          Chivo Mono Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_400Regular_Italic"
        }}>
          Chivo Mono Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_500Medium_Italic"
        }}>
          Chivo Mono Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_600SemiBold_Italic"
        }}>
          Chivo Mono Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_700Bold_Italic"
        }}>
          Chivo Mono Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_800ExtraBold_Italic"
        }}>
          Chivo Mono Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ChivoMono_900Black_Italic"
        }}>
          Chivo Mono Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ChivoMono_100Thin](./ChivoMono_100Thin.ttf.png)|![ChivoMono_200ExtraLight](./ChivoMono_200ExtraLight.ttf.png)|![ChivoMono_300Light](./ChivoMono_300Light.ttf.png)||
|![ChivoMono_400Regular](./ChivoMono_400Regular.ttf.png)|![ChivoMono_500Medium](./ChivoMono_500Medium.ttf.png)|![ChivoMono_600SemiBold](./ChivoMono_600SemiBold.ttf.png)||
|![ChivoMono_700Bold](./ChivoMono_700Bold.ttf.png)|![ChivoMono_800ExtraBold](./ChivoMono_800ExtraBold.ttf.png)|![ChivoMono_900Black](./ChivoMono_900Black.ttf.png)||
|![ChivoMono_100Thin_Italic](./ChivoMono_100Thin_Italic.ttf.png)|![ChivoMono_200ExtraLight_Italic](./ChivoMono_200ExtraLight_Italic.ttf.png)|![ChivoMono_300Light_Italic](./ChivoMono_300Light_Italic.ttf.png)||
|![ChivoMono_400Regular_Italic](./ChivoMono_400Regular_Italic.ttf.png)|![ChivoMono_500Medium_Italic](./ChivoMono_500Medium_Italic.ttf.png)|![ChivoMono_600SemiBold_Italic](./ChivoMono_600SemiBold_Italic.ttf.png)||
|![ChivoMono_700Bold_Italic](./ChivoMono_700Bold_Italic.ttf.png)|![ChivoMono_800ExtraBold_Italic](./ChivoMono_800ExtraBold_Italic.ttf.png)|![ChivoMono_900Black_Italic](./ChivoMono_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/chivo-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Chivo Mono page on Google Fonts](https://fonts.google.com/specimen/Chivo+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Chivo Mono on Google Fonts](https://fonts.google.com/specimen/Chivo+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/chivo-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/chivo-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
