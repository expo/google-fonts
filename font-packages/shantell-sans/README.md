# @expo-google-fonts/shantell-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/shantell-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/shantell-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/shantell-sans)

This package lets you use the [**Shantell Sans**](https://fonts.google.com/specimen/Shantell+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Shantell Sans

![Shantell Sans](./font-family.png)

This font family contains [12 styles](#-gallery).

- `ShantellSans_300Light`
- `ShantellSans_400Regular`
- `ShantellSans_500Medium`
- `ShantellSans_600SemiBold`
- `ShantellSans_700Bold`
- `ShantellSans_800ExtraBold`
- `ShantellSans_300Light_Italic`
- `ShantellSans_400Regular_Italic`
- `ShantellSans_500Medium_Italic`
- `ShantellSans_600SemiBold_Italic`
- `ShantellSans_700Bold_Italic`
- `ShantellSans_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/shantell-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/shantell-sans/useFonts';
import { ShantellSans_300Light } from '@expo-google-fonts/shantell-sans/300Light';
import { ShantellSans_400Regular } from '@expo-google-fonts/shantell-sans/400Regular';
import { ShantellSans_500Medium } from '@expo-google-fonts/shantell-sans/500Medium';
import { ShantellSans_600SemiBold } from '@expo-google-fonts/shantell-sans/600SemiBold';
import { ShantellSans_700Bold } from '@expo-google-fonts/shantell-sans/700Bold';
import { ShantellSans_800ExtraBold } from '@expo-google-fonts/shantell-sans/800ExtraBold';
import { ShantellSans_300Light_Italic } from '@expo-google-fonts/shantell-sans/300Light_Italic';
import { ShantellSans_400Regular_Italic } from '@expo-google-fonts/shantell-sans/400Regular_Italic';
import { ShantellSans_500Medium_Italic } from '@expo-google-fonts/shantell-sans/500Medium_Italic';
import { ShantellSans_600SemiBold_Italic } from '@expo-google-fonts/shantell-sans/600SemiBold_Italic';
import { ShantellSans_700Bold_Italic } from '@expo-google-fonts/shantell-sans/700Bold_Italic';
import { ShantellSans_800ExtraBold_Italic } from '@expo-google-fonts/shantell-sans/800ExtraBold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    ShantellSans_300Light, 
    ShantellSans_400Regular, 
    ShantellSans_500Medium, 
    ShantellSans_600SemiBold, 
    ShantellSans_700Bold, 
    ShantellSans_800ExtraBold, 
    ShantellSans_300Light_Italic, 
    ShantellSans_400Regular_Italic, 
    ShantellSans_500Medium_Italic, 
    ShantellSans_600SemiBold_Italic, 
    ShantellSans_700Bold_Italic, 
    ShantellSans_800ExtraBold_Italic
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShantellSans_300Light"
        }}>
          Shantell Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShantellSans_400Regular"
        }}>
          Shantell Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShantellSans_500Medium"
        }}>
          Shantell Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShantellSans_600SemiBold"
        }}>
          Shantell Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShantellSans_700Bold"
        }}>
          Shantell Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShantellSans_800ExtraBold"
        }}>
          Shantell Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShantellSans_300Light_Italic"
        }}>
          Shantell Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShantellSans_400Regular_Italic"
        }}>
          Shantell Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShantellSans_500Medium_Italic"
        }}>
          Shantell Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShantellSans_600SemiBold_Italic"
        }}>
          Shantell Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShantellSans_700Bold_Italic"
        }}>
          Shantell Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ShantellSans_800ExtraBold_Italic"
        }}>
          Shantell Sans Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ShantellSans_300Light](./300Light/ShantellSans_300Light.ttf.png)|![ShantellSans_400Regular](./400Regular/ShantellSans_400Regular.ttf.png)|![ShantellSans_500Medium](./500Medium/ShantellSans_500Medium.ttf.png)||
|![ShantellSans_600SemiBold](./600SemiBold/ShantellSans_600SemiBold.ttf.png)|![ShantellSans_700Bold](./700Bold/ShantellSans_700Bold.ttf.png)|![ShantellSans_800ExtraBold](./800ExtraBold/ShantellSans_800ExtraBold.ttf.png)||
|![ShantellSans_300Light_Italic](./300Light_Italic/ShantellSans_300Light_Italic.ttf.png)|![ShantellSans_400Regular_Italic](./400Regular_Italic/ShantellSans_400Regular_Italic.ttf.png)|![ShantellSans_500Medium_Italic](./500Medium_Italic/ShantellSans_500Medium_Italic.ttf.png)||
|![ShantellSans_600SemiBold_Italic](./600SemiBold_Italic/ShantellSans_600SemiBold_Italic.ttf.png)|![ShantellSans_700Bold_Italic](./700Bold_Italic/ShantellSans_700Bold_Italic.ttf.png)|![ShantellSans_800ExtraBold_Italic](./800ExtraBold_Italic/ShantellSans_800ExtraBold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/shantell-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Shantell Sans page on Google Fonts](https://fonts.google.com/specimen/Shantell+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Shantell Sans on Google Fonts](https://fonts.google.com/specimen/Shantell+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/shantell-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/shantell-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
