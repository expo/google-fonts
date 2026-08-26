# @expo-google-fonts/scoutie-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/scoutie-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/scoutie-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/scoutie-sans)

This package lets you use the [**Scoutie Sans**](https://fonts.google.com/specimen/Scoutie+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Scoutie Sans

![Scoutie Sans](./font-family.png)

This font family contains [14 styles](#-gallery).

- `ScoutieSans_200ExtraLight`
- `ScoutieSans_300Light`
- `ScoutieSans_400Regular`
- `ScoutieSans_500Medium`
- `ScoutieSans_600SemiBold`
- `ScoutieSans_700Bold`
- `ScoutieSans_800ExtraBold`
- `ScoutieSans_200ExtraLight_Italic`
- `ScoutieSans_300Light_Italic`
- `ScoutieSans_400Regular_Italic`
- `ScoutieSans_500Medium_Italic`
- `ScoutieSans_600SemiBold_Italic`
- `ScoutieSans_700Bold_Italic`
- `ScoutieSans_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/scoutie-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/scoutie-sans/useFonts';
import { ScoutieSans_200ExtraLight } from '@expo-google-fonts/scoutie-sans/200ExtraLight';
import { ScoutieSans_300Light } from '@expo-google-fonts/scoutie-sans/300Light';
import { ScoutieSans_400Regular } from '@expo-google-fonts/scoutie-sans/400Regular';
import { ScoutieSans_500Medium } from '@expo-google-fonts/scoutie-sans/500Medium';
import { ScoutieSans_600SemiBold } from '@expo-google-fonts/scoutie-sans/600SemiBold';
import { ScoutieSans_700Bold } from '@expo-google-fonts/scoutie-sans/700Bold';
import { ScoutieSans_800ExtraBold } from '@expo-google-fonts/scoutie-sans/800ExtraBold';
import { ScoutieSans_200ExtraLight_Italic } from '@expo-google-fonts/scoutie-sans/200ExtraLight_Italic';
import { ScoutieSans_300Light_Italic } from '@expo-google-fonts/scoutie-sans/300Light_Italic';
import { ScoutieSans_400Regular_Italic } from '@expo-google-fonts/scoutie-sans/400Regular_Italic';
import { ScoutieSans_500Medium_Italic } from '@expo-google-fonts/scoutie-sans/500Medium_Italic';
import { ScoutieSans_600SemiBold_Italic } from '@expo-google-fonts/scoutie-sans/600SemiBold_Italic';
import { ScoutieSans_700Bold_Italic } from '@expo-google-fonts/scoutie-sans/700Bold_Italic';
import { ScoutieSans_800ExtraBold_Italic } from '@expo-google-fonts/scoutie-sans/800ExtraBold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    ScoutieSans_200ExtraLight, 
    ScoutieSans_300Light, 
    ScoutieSans_400Regular, 
    ScoutieSans_500Medium, 
    ScoutieSans_600SemiBold, 
    ScoutieSans_700Bold, 
    ScoutieSans_800ExtraBold, 
    ScoutieSans_200ExtraLight_Italic, 
    ScoutieSans_300Light_Italic, 
    ScoutieSans_400Regular_Italic, 
    ScoutieSans_500Medium_Italic, 
    ScoutieSans_600SemiBold_Italic, 
    ScoutieSans_700Bold_Italic, 
    ScoutieSans_800ExtraBold_Italic
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
          fontFamily: "ScoutieSans_200ExtraLight"
        }}>
          Scoutie Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScoutieSans_300Light"
        }}>
          Scoutie Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScoutieSans_400Regular"
        }}>
          Scoutie Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScoutieSans_500Medium"
        }}>
          Scoutie Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScoutieSans_600SemiBold"
        }}>
          Scoutie Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScoutieSans_700Bold"
        }}>
          Scoutie Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScoutieSans_800ExtraBold"
        }}>
          Scoutie Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScoutieSans_200ExtraLight_Italic"
        }}>
          Scoutie Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScoutieSans_300Light_Italic"
        }}>
          Scoutie Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScoutieSans_400Regular_Italic"
        }}>
          Scoutie Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScoutieSans_500Medium_Italic"
        }}>
          Scoutie Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScoutieSans_600SemiBold_Italic"
        }}>
          Scoutie Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScoutieSans_700Bold_Italic"
        }}>
          Scoutie Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScoutieSans_800ExtraBold_Italic"
        }}>
          Scoutie Sans Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ScoutieSans_200ExtraLight](./200ExtraLight/ScoutieSans_200ExtraLight.ttf.png)|![ScoutieSans_300Light](./300Light/ScoutieSans_300Light.ttf.png)|![ScoutieSans_400Regular](./400Regular/ScoutieSans_400Regular.ttf.png)||
|![ScoutieSans_500Medium](./500Medium/ScoutieSans_500Medium.ttf.png)|![ScoutieSans_600SemiBold](./600SemiBold/ScoutieSans_600SemiBold.ttf.png)|![ScoutieSans_700Bold](./700Bold/ScoutieSans_700Bold.ttf.png)||
|![ScoutieSans_800ExtraBold](./800ExtraBold/ScoutieSans_800ExtraBold.ttf.png)|![ScoutieSans_200ExtraLight_Italic](./200ExtraLight_Italic/ScoutieSans_200ExtraLight_Italic.ttf.png)|![ScoutieSans_300Light_Italic](./300Light_Italic/ScoutieSans_300Light_Italic.ttf.png)||
|![ScoutieSans_400Regular_Italic](./400Regular_Italic/ScoutieSans_400Regular_Italic.ttf.png)|![ScoutieSans_500Medium_Italic](./500Medium_Italic/ScoutieSans_500Medium_Italic.ttf.png)|![ScoutieSans_600SemiBold_Italic](./600SemiBold_Italic/ScoutieSans_600SemiBold_Italic.ttf.png)||
|![ScoutieSans_700Bold_Italic](./700Bold_Italic/ScoutieSans_700Bold_Italic.ttf.png)|![ScoutieSans_800ExtraBold_Italic](./800ExtraBold_Italic/ScoutieSans_800ExtraBold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/scoutie-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Scoutie Sans page on Google Fonts](https://fonts.google.com/specimen/Scoutie+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Scoutie Sans on Google Fonts](https://fonts.google.com/specimen/Scoutie+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/scoutie-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/scoutie-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
