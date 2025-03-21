# @expo-google-fonts/anybody

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/anybody)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/anybody)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/anybody)

This package lets you use the [**Anybody**](https://fonts.google.com/specimen/Anybody) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Anybody

![Anybody](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Anybody_100Thin`
- `Anybody_200ExtraLight`
- `Anybody_300Light`
- `Anybody_400Regular`
- `Anybody_500Medium`
- `Anybody_600SemiBold`
- `Anybody_700Bold`
- `Anybody_800ExtraBold`
- `Anybody_900Black`
- `Anybody_100Thin_Italic`
- `Anybody_200ExtraLight_Italic`
- `Anybody_300Light_Italic`
- `Anybody_400Regular_Italic`
- `Anybody_500Medium_Italic`
- `Anybody_600SemiBold_Italic`
- `Anybody_700Bold_Italic`
- `Anybody_800ExtraBold_Italic`
- `Anybody_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/anybody expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Anybody_100Thin, Anybody_200ExtraLight, Anybody_300Light, Anybody_400Regular, Anybody_500Medium, Anybody_600SemiBold, Anybody_700Bold, Anybody_800ExtraBold, Anybody_900Black, Anybody_100Thin_Italic, Anybody_200ExtraLight_Italic, Anybody_300Light_Italic, Anybody_400Regular_Italic, Anybody_500Medium_Italic, Anybody_600SemiBold_Italic, Anybody_700Bold_Italic, Anybody_800ExtraBold_Italic, Anybody_900Black_Italic } from '@expo-google-fonts/anybody';

export default () => {

  let [fontsLoaded] = useFonts({
    Anybody_100Thin, 
    Anybody_200ExtraLight, 
    Anybody_300Light, 
    Anybody_400Regular, 
    Anybody_500Medium, 
    Anybody_600SemiBold, 
    Anybody_700Bold, 
    Anybody_800ExtraBold, 
    Anybody_900Black, 
    Anybody_100Thin_Italic, 
    Anybody_200ExtraLight_Italic, 
    Anybody_300Light_Italic, 
    Anybody_400Regular_Italic, 
    Anybody_500Medium_Italic, 
    Anybody_600SemiBold_Italic, 
    Anybody_700Bold_Italic, 
    Anybody_800ExtraBold_Italic, 
    Anybody_900Black_Italic
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
          fontFamily: "Anybody_100Thin"
        }}>
          Anybody Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_200ExtraLight"
        }}>
          Anybody Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_300Light"
        }}>
          Anybody Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_400Regular"
        }}>
          Anybody Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_500Medium"
        }}>
          Anybody Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_600SemiBold"
        }}>
          Anybody Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_700Bold"
        }}>
          Anybody Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_800ExtraBold"
        }}>
          Anybody Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_900Black"
        }}>
          Anybody Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_100Thin_Italic"
        }}>
          Anybody Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_200ExtraLight_Italic"
        }}>
          Anybody Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_300Light_Italic"
        }}>
          Anybody Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_400Regular_Italic"
        }}>
          Anybody Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_500Medium_Italic"
        }}>
          Anybody Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_600SemiBold_Italic"
        }}>
          Anybody Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_700Bold_Italic"
        }}>
          Anybody Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_800ExtraBold_Italic"
        }}>
          Anybody Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Anybody_900Black_Italic"
        }}>
          Anybody Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Anybody_100Thin](./Anybody_100Thin.ttf.png)|![Anybody_200ExtraLight](./Anybody_200ExtraLight.ttf.png)|![Anybody_300Light](./Anybody_300Light.ttf.png)||
|![Anybody_400Regular](./Anybody_400Regular.ttf.png)|![Anybody_500Medium](./Anybody_500Medium.ttf.png)|![Anybody_600SemiBold](./Anybody_600SemiBold.ttf.png)||
|![Anybody_700Bold](./Anybody_700Bold.ttf.png)|![Anybody_800ExtraBold](./Anybody_800ExtraBold.ttf.png)|![Anybody_900Black](./Anybody_900Black.ttf.png)||
|![Anybody_100Thin_Italic](./Anybody_100Thin_Italic.ttf.png)|![Anybody_200ExtraLight_Italic](./Anybody_200ExtraLight_Italic.ttf.png)|![Anybody_300Light_Italic](./Anybody_300Light_Italic.ttf.png)||
|![Anybody_400Regular_Italic](./Anybody_400Regular_Italic.ttf.png)|![Anybody_500Medium_Italic](./Anybody_500Medium_Italic.ttf.png)|![Anybody_600SemiBold_Italic](./Anybody_600SemiBold_Italic.ttf.png)||
|![Anybody_700Bold_Italic](./Anybody_700Bold_Italic.ttf.png)|![Anybody_800ExtraBold_Italic](./Anybody_800ExtraBold_Italic.ttf.png)|![Anybody_900Black_Italic](./Anybody_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/anybody` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Anybody page on Google Fonts](https://fonts.google.com/specimen/Anybody) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Anybody on Google Fonts](https://fonts.google.com/specimen/Anybody)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/anybody)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/anybody)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
