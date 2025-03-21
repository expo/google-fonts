# @expo-google-fonts/literata

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/literata)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/literata)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/literata)

This package lets you use the [**Literata**](https://fonts.google.com/specimen/Literata) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Literata

![Literata](./font-family.png)

This font family contains [16 styles](#-gallery).

- `Literata_200ExtraLight`
- `Literata_300Light`
- `Literata_400Regular`
- `Literata_500Medium`
- `Literata_600SemiBold`
- `Literata_700Bold`
- `Literata_800ExtraBold`
- `Literata_900Black`
- `Literata_200ExtraLight_Italic`
- `Literata_300Light_Italic`
- `Literata_400Regular_Italic`
- `Literata_500Medium_Italic`
- `Literata_600SemiBold_Italic`
- `Literata_700Bold_Italic`
- `Literata_800ExtraBold_Italic`
- `Literata_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/literata expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Literata_200ExtraLight, Literata_300Light, Literata_400Regular, Literata_500Medium, Literata_600SemiBold, Literata_700Bold, Literata_800ExtraBold, Literata_900Black, Literata_200ExtraLight_Italic, Literata_300Light_Italic, Literata_400Regular_Italic, Literata_500Medium_Italic, Literata_600SemiBold_Italic, Literata_700Bold_Italic, Literata_800ExtraBold_Italic, Literata_900Black_Italic } from '@expo-google-fonts/literata';

export default () => {

  let [fontsLoaded] = useFonts({
    Literata_200ExtraLight, 
    Literata_300Light, 
    Literata_400Regular, 
    Literata_500Medium, 
    Literata_600SemiBold, 
    Literata_700Bold, 
    Literata_800ExtraBold, 
    Literata_900Black, 
    Literata_200ExtraLight_Italic, 
    Literata_300Light_Italic, 
    Literata_400Regular_Italic, 
    Literata_500Medium_Italic, 
    Literata_600SemiBold_Italic, 
    Literata_700Bold_Italic, 
    Literata_800ExtraBold_Italic, 
    Literata_900Black_Italic
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
          fontFamily: "Literata_200ExtraLight"
        }}>
          Literata Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_300Light"
        }}>
          Literata Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_400Regular"
        }}>
          Literata Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_500Medium"
        }}>
          Literata Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_600SemiBold"
        }}>
          Literata Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_700Bold"
        }}>
          Literata Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_800ExtraBold"
        }}>
          Literata Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_900Black"
        }}>
          Literata Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_200ExtraLight_Italic"
        }}>
          Literata Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_300Light_Italic"
        }}>
          Literata Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_400Regular_Italic"
        }}>
          Literata Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_500Medium_Italic"
        }}>
          Literata Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_600SemiBold_Italic"
        }}>
          Literata Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_700Bold_Italic"
        }}>
          Literata Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_800ExtraBold_Italic"
        }}>
          Literata Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Literata_900Black_Italic"
        }}>
          Literata Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Literata_200ExtraLight](./Literata_200ExtraLight.ttf.png)|![Literata_300Light](./Literata_300Light.ttf.png)|![Literata_400Regular](./Literata_400Regular.ttf.png)||
|![Literata_500Medium](./Literata_500Medium.ttf.png)|![Literata_600SemiBold](./Literata_600SemiBold.ttf.png)|![Literata_700Bold](./Literata_700Bold.ttf.png)||
|![Literata_800ExtraBold](./Literata_800ExtraBold.ttf.png)|![Literata_900Black](./Literata_900Black.ttf.png)|![Literata_200ExtraLight_Italic](./Literata_200ExtraLight_Italic.ttf.png)||
|![Literata_300Light_Italic](./Literata_300Light_Italic.ttf.png)|![Literata_400Regular_Italic](./Literata_400Regular_Italic.ttf.png)|![Literata_500Medium_Italic](./Literata_500Medium_Italic.ttf.png)||
|![Literata_600SemiBold_Italic](./Literata_600SemiBold_Italic.ttf.png)|![Literata_700Bold_Italic](./Literata_700Bold_Italic.ttf.png)|![Literata_800ExtraBold_Italic](./Literata_800ExtraBold_Italic.ttf.png)||
|![Literata_900Black_Italic](./Literata_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/literata` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Literata page on Google Fonts](https://fonts.google.com/specimen/Literata) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Literata on Google Fonts](https://fonts.google.com/specimen/Literata)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/literata)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/literata)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
