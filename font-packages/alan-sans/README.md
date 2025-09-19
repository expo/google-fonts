# @expo-google-fonts/alan-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/alan-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/alan-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/alan-sans)

This package lets you use the [**Alan Sans**](https://fonts.google.com/specimen/Alan+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Alan Sans

![Alan Sans](./font-family.png)

This font family contains [7 styles](#-gallery).

- `AlanSans_300Light`
- `AlanSans_400Regular`
- `AlanSans_500Medium`
- `AlanSans_600SemiBold`
- `AlanSans_700Bold`
- `AlanSans_800ExtraBold`
- `AlanSans_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/alan-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/alan-sans/useFonts';
import { AlanSans_300Light } from '@expo-google-fonts/alan-sans/300Light';
import { AlanSans_400Regular } from '@expo-google-fonts/alan-sans/400Regular';
import { AlanSans_500Medium } from '@expo-google-fonts/alan-sans/500Medium';
import { AlanSans_600SemiBold } from '@expo-google-fonts/alan-sans/600SemiBold';
import { AlanSans_700Bold } from '@expo-google-fonts/alan-sans/700Bold';
import { AlanSans_800ExtraBold } from '@expo-google-fonts/alan-sans/800ExtraBold';
import { AlanSans_900Black } from '@expo-google-fonts/alan-sans/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    AlanSans_300Light, 
    AlanSans_400Regular, 
    AlanSans_500Medium, 
    AlanSans_600SemiBold, 
    AlanSans_700Bold, 
    AlanSans_800ExtraBold, 
    AlanSans_900Black
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
          fontFamily: "AlanSans_300Light"
        }}>
          Alan Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlanSans_400Regular"
        }}>
          Alan Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlanSans_500Medium"
        }}>
          Alan Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlanSans_600SemiBold"
        }}>
          Alan Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlanSans_700Bold"
        }}>
          Alan Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlanSans_800ExtraBold"
        }}>
          Alan Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlanSans_900Black"
        }}>
          Alan Sans Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AlanSans_300Light](./300Light/AlanSans_300Light.ttf.png)|![AlanSans_400Regular](./400Regular/AlanSans_400Regular.ttf.png)|![AlanSans_500Medium](./500Medium/AlanSans_500Medium.ttf.png)||
|![AlanSans_600SemiBold](./600SemiBold/AlanSans_600SemiBold.ttf.png)|![AlanSans_700Bold](./700Bold/AlanSans_700Bold.ttf.png)|![AlanSans_800ExtraBold](./800ExtraBold/AlanSans_800ExtraBold.ttf.png)||
|![AlanSans_900Black](./900Black/AlanSans_900Black.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/alan-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Alan Sans page on Google Fonts](https://fonts.google.com/specimen/Alan+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Alan Sans on Google Fonts](https://fonts.google.com/specimen/Alan+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alan-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alan-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
