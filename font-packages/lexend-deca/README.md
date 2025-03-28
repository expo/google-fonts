# @expo-google-fonts/lexend-deca

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lexend-deca)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lexend-deca)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lexend-deca)

This package lets you use the [**Lexend Deca**](https://fonts.google.com/specimen/Lexend+Deca) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lexend Deca

![Lexend Deca](./font-family.png)

This font family contains [9 styles](#-gallery).

- `LexendDeca_100Thin`
- `LexendDeca_200ExtraLight`
- `LexendDeca_300Light`
- `LexendDeca_400Regular`
- `LexendDeca_500Medium`
- `LexendDeca_600SemiBold`
- `LexendDeca_700Bold`
- `LexendDeca_800ExtraBold`
- `LexendDeca_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/lexend-deca expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/lexend-deca/useFonts';
import { LexendDeca_100Thin } from '@expo-google-fonts/lexend-deca/100Thin';
import { LexendDeca_200ExtraLight } from '@expo-google-fonts/lexend-deca/200ExtraLight';
import { LexendDeca_300Light } from '@expo-google-fonts/lexend-deca/300Light';
import { LexendDeca_400Regular } from '@expo-google-fonts/lexend-deca/400Regular';
import { LexendDeca_500Medium } from '@expo-google-fonts/lexend-deca/500Medium';
import { LexendDeca_600SemiBold } from '@expo-google-fonts/lexend-deca/600SemiBold';
import { LexendDeca_700Bold } from '@expo-google-fonts/lexend-deca/700Bold';
import { LexendDeca_800ExtraBold } from '@expo-google-fonts/lexend-deca/800ExtraBold';
import { LexendDeca_900Black } from '@expo-google-fonts/lexend-deca/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    LexendDeca_100Thin, 
    LexendDeca_200ExtraLight, 
    LexendDeca_300Light, 
    LexendDeca_400Regular, 
    LexendDeca_500Medium, 
    LexendDeca_600SemiBold, 
    LexendDeca_700Bold, 
    LexendDeca_800ExtraBold, 
    LexendDeca_900Black
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
          fontFamily: "LexendDeca_100Thin"
        }}>
          Lexend Deca Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendDeca_200ExtraLight"
        }}>
          Lexend Deca Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendDeca_300Light"
        }}>
          Lexend Deca Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendDeca_400Regular"
        }}>
          Lexend Deca Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendDeca_500Medium"
        }}>
          Lexend Deca Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendDeca_600SemiBold"
        }}>
          Lexend Deca Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendDeca_700Bold"
        }}>
          Lexend Deca Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendDeca_800ExtraBold"
        }}>
          Lexend Deca Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LexendDeca_900Black"
        }}>
          Lexend Deca Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![LexendDeca_100Thin](./100Thin/LexendDeca_100Thin.ttf.png)|![LexendDeca_200ExtraLight](./200ExtraLight/LexendDeca_200ExtraLight.ttf.png)|![LexendDeca_300Light](./300Light/LexendDeca_300Light.ttf.png)||
|![LexendDeca_400Regular](./400Regular/LexendDeca_400Regular.ttf.png)|![LexendDeca_500Medium](./500Medium/LexendDeca_500Medium.ttf.png)|![LexendDeca_600SemiBold](./600SemiBold/LexendDeca_600SemiBold.ttf.png)||
|![LexendDeca_700Bold](./700Bold/LexendDeca_700Bold.ttf.png)|![LexendDeca_800ExtraBold](./800ExtraBold/LexendDeca_800ExtraBold.ttf.png)|![LexendDeca_900Black](./900Black/LexendDeca_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/lexend-deca` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lexend Deca page on Google Fonts](https://fonts.google.com/specimen/Lexend+Deca) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lexend Deca on Google Fonts](https://fonts.google.com/specimen/Lexend+Deca)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lexend-deca)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lexend-deca)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
