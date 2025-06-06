# @expo-google-fonts/asta-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/asta-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/asta-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/asta-sans)

This package lets you use the [**Asta Sans**](https://fonts.google.com/specimen/Asta+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Asta Sans

![Asta Sans](./font-family.png)

This font family contains [6 styles](#-gallery).

- `AstaSans_300Light`
- `AstaSans_400Regular`
- `AstaSans_500Medium`
- `AstaSans_600SemiBold`
- `AstaSans_700Bold`
- `AstaSans_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/asta-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/asta-sans/useFonts';
import { AstaSans_300Light } from '@expo-google-fonts/asta-sans/300Light';
import { AstaSans_400Regular } from '@expo-google-fonts/asta-sans/400Regular';
import { AstaSans_500Medium } from '@expo-google-fonts/asta-sans/500Medium';
import { AstaSans_600SemiBold } from '@expo-google-fonts/asta-sans/600SemiBold';
import { AstaSans_700Bold } from '@expo-google-fonts/asta-sans/700Bold';
import { AstaSans_800ExtraBold } from '@expo-google-fonts/asta-sans/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    AstaSans_300Light, 
    AstaSans_400Regular, 
    AstaSans_500Medium, 
    AstaSans_600SemiBold, 
    AstaSans_700Bold, 
    AstaSans_800ExtraBold
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
          fontFamily: "AstaSans_300Light"
        }}>
          Asta Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AstaSans_400Regular"
        }}>
          Asta Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AstaSans_500Medium"
        }}>
          Asta Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AstaSans_600SemiBold"
        }}>
          Asta Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AstaSans_700Bold"
        }}>
          Asta Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AstaSans_800ExtraBold"
        }}>
          Asta Sans Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AstaSans_300Light](./300Light/AstaSans_300Light.ttf.png)|![AstaSans_400Regular](./400Regular/AstaSans_400Regular.ttf.png)|![AstaSans_500Medium](./500Medium/AstaSans_500Medium.ttf.png)||
|![AstaSans_600SemiBold](./600SemiBold/AstaSans_600SemiBold.ttf.png)|![AstaSans_700Bold](./700Bold/AstaSans_700Bold.ttf.png)|![AstaSans_800ExtraBold](./800ExtraBold/AstaSans_800ExtraBold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/asta-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Asta Sans page on Google Fonts](https://fonts.google.com/specimen/Asta+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Asta Sans on Google Fonts](https://fonts.google.com/specimen/Asta+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/asta-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/asta-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
