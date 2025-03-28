# @expo-google-fonts/sour-gummy

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sour-gummy)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sour-gummy)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sour-gummy)

This package lets you use the [**Sour Gummy**](https://fonts.google.com/specimen/Sour+Gummy) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Sour Gummy

![Sour Gummy](./font-family.png)

This font family contains [18 styles](#-gallery).

- `SourGummy_100Thin`
- `SourGummy_200ExtraLight`
- `SourGummy_300Light`
- `SourGummy_400Regular`
- `SourGummy_500Medium`
- `SourGummy_600SemiBold`
- `SourGummy_700Bold`
- `SourGummy_800ExtraBold`
- `SourGummy_900Black`
- `SourGummy_100Thin_Italic`
- `SourGummy_200ExtraLight_Italic`
- `SourGummy_300Light_Italic`
- `SourGummy_400Regular_Italic`
- `SourGummy_500Medium_Italic`
- `SourGummy_600SemiBold_Italic`
- `SourGummy_700Bold_Italic`
- `SourGummy_800ExtraBold_Italic`
- `SourGummy_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/sour-gummy expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/sour-gummy/useFonts';
import { SourGummy_100Thin } from '@expo-google-fonts/sour-gummy/100Thin';
import { SourGummy_200ExtraLight } from '@expo-google-fonts/sour-gummy/200ExtraLight';
import { SourGummy_300Light } from '@expo-google-fonts/sour-gummy/300Light';
import { SourGummy_400Regular } from '@expo-google-fonts/sour-gummy/400Regular';
import { SourGummy_500Medium } from '@expo-google-fonts/sour-gummy/500Medium';
import { SourGummy_600SemiBold } from '@expo-google-fonts/sour-gummy/600SemiBold';
import { SourGummy_700Bold } from '@expo-google-fonts/sour-gummy/700Bold';
import { SourGummy_800ExtraBold } from '@expo-google-fonts/sour-gummy/800ExtraBold';
import { SourGummy_900Black } from '@expo-google-fonts/sour-gummy/900Black';
import { SourGummy_100Thin_Italic } from '@expo-google-fonts/sour-gummy/100Thin_Italic';
import { SourGummy_200ExtraLight_Italic } from '@expo-google-fonts/sour-gummy/200ExtraLight_Italic';
import { SourGummy_300Light_Italic } from '@expo-google-fonts/sour-gummy/300Light_Italic';
import { SourGummy_400Regular_Italic } from '@expo-google-fonts/sour-gummy/400Regular_Italic';
import { SourGummy_500Medium_Italic } from '@expo-google-fonts/sour-gummy/500Medium_Italic';
import { SourGummy_600SemiBold_Italic } from '@expo-google-fonts/sour-gummy/600SemiBold_Italic';
import { SourGummy_700Bold_Italic } from '@expo-google-fonts/sour-gummy/700Bold_Italic';
import { SourGummy_800ExtraBold_Italic } from '@expo-google-fonts/sour-gummy/800ExtraBold_Italic';
import { SourGummy_900Black_Italic } from '@expo-google-fonts/sour-gummy/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    SourGummy_100Thin, 
    SourGummy_200ExtraLight, 
    SourGummy_300Light, 
    SourGummy_400Regular, 
    SourGummy_500Medium, 
    SourGummy_600SemiBold, 
    SourGummy_700Bold, 
    SourGummy_800ExtraBold, 
    SourGummy_900Black, 
    SourGummy_100Thin_Italic, 
    SourGummy_200ExtraLight_Italic, 
    SourGummy_300Light_Italic, 
    SourGummy_400Regular_Italic, 
    SourGummy_500Medium_Italic, 
    SourGummy_600SemiBold_Italic, 
    SourGummy_700Bold_Italic, 
    SourGummy_800ExtraBold_Italic, 
    SourGummy_900Black_Italic
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
          fontFamily: "SourGummy_100Thin"
        }}>
          Sour Gummy Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_200ExtraLight"
        }}>
          Sour Gummy Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_300Light"
        }}>
          Sour Gummy Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_400Regular"
        }}>
          Sour Gummy Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_500Medium"
        }}>
          Sour Gummy Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_600SemiBold"
        }}>
          Sour Gummy Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_700Bold"
        }}>
          Sour Gummy Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_800ExtraBold"
        }}>
          Sour Gummy Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_900Black"
        }}>
          Sour Gummy Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_100Thin_Italic"
        }}>
          Sour Gummy Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_200ExtraLight_Italic"
        }}>
          Sour Gummy Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_300Light_Italic"
        }}>
          Sour Gummy Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_400Regular_Italic"
        }}>
          Sour Gummy Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_500Medium_Italic"
        }}>
          Sour Gummy Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_600SemiBold_Italic"
        }}>
          Sour Gummy Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_700Bold_Italic"
        }}>
          Sour Gummy Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_800ExtraBold_Italic"
        }}>
          Sour Gummy Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SourGummy_900Black_Italic"
        }}>
          Sour Gummy Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![SourGummy_100Thin](./100Thin/SourGummy_100Thin.ttf.png)|![SourGummy_200ExtraLight](./200ExtraLight/SourGummy_200ExtraLight.ttf.png)|![SourGummy_300Light](./300Light/SourGummy_300Light.ttf.png)||
|![SourGummy_400Regular](./400Regular/SourGummy_400Regular.ttf.png)|![SourGummy_500Medium](./500Medium/SourGummy_500Medium.ttf.png)|![SourGummy_600SemiBold](./600SemiBold/SourGummy_600SemiBold.ttf.png)||
|![SourGummy_700Bold](./700Bold/SourGummy_700Bold.ttf.png)|![SourGummy_800ExtraBold](./800ExtraBold/SourGummy_800ExtraBold.ttf.png)|![SourGummy_900Black](./900Black/SourGummy_900Black.ttf.png)||
|![SourGummy_100Thin_Italic](./100Thin_Italic/SourGummy_100Thin_Italic.ttf.png)|![SourGummy_200ExtraLight_Italic](./200ExtraLight_Italic/SourGummy_200ExtraLight_Italic.ttf.png)|![SourGummy_300Light_Italic](./300Light_Italic/SourGummy_300Light_Italic.ttf.png)||
|![SourGummy_400Regular_Italic](./400Regular_Italic/SourGummy_400Regular_Italic.ttf.png)|![SourGummy_500Medium_Italic](./500Medium_Italic/SourGummy_500Medium_Italic.ttf.png)|![SourGummy_600SemiBold_Italic](./600SemiBold_Italic/SourGummy_600SemiBold_Italic.ttf.png)||
|![SourGummy_700Bold_Italic](./700Bold_Italic/SourGummy_700Bold_Italic.ttf.png)|![SourGummy_800ExtraBold_Italic](./800ExtraBold_Italic/SourGummy_800ExtraBold_Italic.ttf.png)|![SourGummy_900Black_Italic](./900Black_Italic/SourGummy_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/sour-gummy` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sour Gummy page on Google Fonts](https://fonts.google.com/specimen/Sour+Gummy) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sour Gummy on Google Fonts](https://fonts.google.com/specimen/Sour+Gummy)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sour-gummy)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sour-gummy)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
