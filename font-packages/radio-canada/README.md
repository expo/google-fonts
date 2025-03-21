# @expo-google-fonts/radio-canada

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/radio-canada)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/radio-canada)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/radio-canada)

This package lets you use the [**Radio Canada**](https://fonts.google.com/specimen/Radio+Canada) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Radio Canada

![Radio Canada](./font-family.png)

This font family contains [10 styles](#-gallery).

- `RadioCanada_300Light`
- `RadioCanada_400Regular`
- `RadioCanada_500Medium`
- `RadioCanada_600SemiBold`
- `RadioCanada_700Bold`
- `RadioCanada_300Light_Italic`
- `RadioCanada_400Regular_Italic`
- `RadioCanada_500Medium_Italic`
- `RadioCanada_600SemiBold_Italic`
- `RadioCanada_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/radio-canada expo-font expo-app-loading
```

Now add code like this to your project

```js
import React, { useState, useEffect } from "react";

import { Text, View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, RadioCanada_300Light, RadioCanada_400Regular, RadioCanada_500Medium, RadioCanada_600SemiBold, RadioCanada_700Bold, RadioCanada_300Light_Italic, RadioCanada_400Regular_Italic, RadioCanada_500Medium_Italic, RadioCanada_600SemiBold_Italic, RadioCanada_700Bold_Italic } from '@expo-google-fonts/radio-canada';

export default () => {

  let [fontsLoaded] = useFonts({
    RadioCanada_300Light, 
    RadioCanada_400Regular, 
    RadioCanada_500Medium, 
    RadioCanada_600SemiBold, 
    RadioCanada_700Bold, 
    RadioCanada_300Light_Italic, 
    RadioCanada_400Regular_Italic, 
    RadioCanada_500Medium_Italic, 
    RadioCanada_600SemiBold_Italic, 
    RadioCanada_700Bold_Italic
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
          fontFamily: "RadioCanada_300Light"
        }}>
          Radio Canada Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanada_400Regular"
        }}>
          Radio Canada Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanada_500Medium"
        }}>
          Radio Canada Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanada_600SemiBold"
        }}>
          Radio Canada Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanada_700Bold"
        }}>
          Radio Canada Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanada_300Light_Italic"
        }}>
          Radio Canada Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanada_400Regular_Italic"
        }}>
          Radio Canada Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanada_500Medium_Italic"
        }}>
          Radio Canada Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanada_600SemiBold_Italic"
        }}>
          Radio Canada Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanada_700Bold_Italic"
        }}>
          Radio Canada Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![RadioCanada_300Light](./RadioCanada_300Light.ttf.png)|![RadioCanada_400Regular](./RadioCanada_400Regular.ttf.png)|![RadioCanada_500Medium](./RadioCanada_500Medium.ttf.png)||
|![RadioCanada_600SemiBold](./RadioCanada_600SemiBold.ttf.png)|![RadioCanada_700Bold](./RadioCanada_700Bold.ttf.png)|![RadioCanada_300Light_Italic](./RadioCanada_300Light_Italic.ttf.png)||
|![RadioCanada_400Regular_Italic](./RadioCanada_400Regular_Italic.ttf.png)|![RadioCanada_500Medium_Italic](./RadioCanada_500Medium_Italic.ttf.png)|![RadioCanada_600SemiBold_Italic](./RadioCanada_600SemiBold_Italic.ttf.png)||
|![RadioCanada_700Bold_Italic](./RadioCanada_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/radio-canada` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Radio Canada page on Google Fonts](https://fonts.google.com/specimen/Radio+Canada) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Radio Canada on Google Fonts](https://fonts.google.com/specimen/Radio+Canada)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/radio-canada)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/radio-canada)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
