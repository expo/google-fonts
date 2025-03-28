# @expo-google-fonts/texturina

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/texturina)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/texturina)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/texturina)

This package lets you use the [**Texturina**](https://fonts.google.com/specimen/Texturina) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Texturina

![Texturina](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Texturina_100Thin`
- `Texturina_200ExtraLight`
- `Texturina_300Light`
- `Texturina_400Regular`
- `Texturina_500Medium`
- `Texturina_600SemiBold`
- `Texturina_700Bold`
- `Texturina_800ExtraBold`
- `Texturina_900Black`
- `Texturina_100Thin_Italic`
- `Texturina_200ExtraLight_Italic`
- `Texturina_300Light_Italic`
- `Texturina_400Regular_Italic`
- `Texturina_500Medium_Italic`
- `Texturina_600SemiBold_Italic`
- `Texturina_700Bold_Italic`
- `Texturina_800ExtraBold_Italic`
- `Texturina_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/texturina expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/texturina/useFonts';
import { Texturina_100Thin } from '@expo-google-fonts/texturina/100Thin';
import { Texturina_200ExtraLight } from '@expo-google-fonts/texturina/200ExtraLight';
import { Texturina_300Light } from '@expo-google-fonts/texturina/300Light';
import { Texturina_400Regular } from '@expo-google-fonts/texturina/400Regular';
import { Texturina_500Medium } from '@expo-google-fonts/texturina/500Medium';
import { Texturina_600SemiBold } from '@expo-google-fonts/texturina/600SemiBold';
import { Texturina_700Bold } from '@expo-google-fonts/texturina/700Bold';
import { Texturina_800ExtraBold } from '@expo-google-fonts/texturina/800ExtraBold';
import { Texturina_900Black } from '@expo-google-fonts/texturina/900Black';
import { Texturina_100Thin_Italic } from '@expo-google-fonts/texturina/100Thin_Italic';
import { Texturina_200ExtraLight_Italic } from '@expo-google-fonts/texturina/200ExtraLight_Italic';
import { Texturina_300Light_Italic } from '@expo-google-fonts/texturina/300Light_Italic';
import { Texturina_400Regular_Italic } from '@expo-google-fonts/texturina/400Regular_Italic';
import { Texturina_500Medium_Italic } from '@expo-google-fonts/texturina/500Medium_Italic';
import { Texturina_600SemiBold_Italic } from '@expo-google-fonts/texturina/600SemiBold_Italic';
import { Texturina_700Bold_Italic } from '@expo-google-fonts/texturina/700Bold_Italic';
import { Texturina_800ExtraBold_Italic } from '@expo-google-fonts/texturina/800ExtraBold_Italic';
import { Texturina_900Black_Italic } from '@expo-google-fonts/texturina/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Texturina_100Thin, 
    Texturina_200ExtraLight, 
    Texturina_300Light, 
    Texturina_400Regular, 
    Texturina_500Medium, 
    Texturina_600SemiBold, 
    Texturina_700Bold, 
    Texturina_800ExtraBold, 
    Texturina_900Black, 
    Texturina_100Thin_Italic, 
    Texturina_200ExtraLight_Italic, 
    Texturina_300Light_Italic, 
    Texturina_400Regular_Italic, 
    Texturina_500Medium_Italic, 
    Texturina_600SemiBold_Italic, 
    Texturina_700Bold_Italic, 
    Texturina_800ExtraBold_Italic, 
    Texturina_900Black_Italic
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
          fontFamily: "Texturina_100Thin"
        }}>
          Texturina Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_200ExtraLight"
        }}>
          Texturina Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_300Light"
        }}>
          Texturina Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_400Regular"
        }}>
          Texturina Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_500Medium"
        }}>
          Texturina Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_600SemiBold"
        }}>
          Texturina Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_700Bold"
        }}>
          Texturina Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_800ExtraBold"
        }}>
          Texturina Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_900Black"
        }}>
          Texturina Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_100Thin_Italic"
        }}>
          Texturina Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_200ExtraLight_Italic"
        }}>
          Texturina Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_300Light_Italic"
        }}>
          Texturina Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_400Regular_Italic"
        }}>
          Texturina Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_500Medium_Italic"
        }}>
          Texturina Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_600SemiBold_Italic"
        }}>
          Texturina Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_700Bold_Italic"
        }}>
          Texturina Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_800ExtraBold_Italic"
        }}>
          Texturina Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Texturina_900Black_Italic"
        }}>
          Texturina Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Texturina_100Thin](./100Thin/Texturina_100Thin.ttf.png)|![Texturina_200ExtraLight](./200ExtraLight/Texturina_200ExtraLight.ttf.png)|![Texturina_300Light](./300Light/Texturina_300Light.ttf.png)||
|![Texturina_400Regular](./400Regular/Texturina_400Regular.ttf.png)|![Texturina_500Medium](./500Medium/Texturina_500Medium.ttf.png)|![Texturina_600SemiBold](./600SemiBold/Texturina_600SemiBold.ttf.png)||
|![Texturina_700Bold](./700Bold/Texturina_700Bold.ttf.png)|![Texturina_800ExtraBold](./800ExtraBold/Texturina_800ExtraBold.ttf.png)|![Texturina_900Black](./900Black/Texturina_900Black.ttf.png)||
|![Texturina_100Thin_Italic](./100Thin_Italic/Texturina_100Thin_Italic.ttf.png)|![Texturina_200ExtraLight_Italic](./200ExtraLight_Italic/Texturina_200ExtraLight_Italic.ttf.png)|![Texturina_300Light_Italic](./300Light_Italic/Texturina_300Light_Italic.ttf.png)||
|![Texturina_400Regular_Italic](./400Regular_Italic/Texturina_400Regular_Italic.ttf.png)|![Texturina_500Medium_Italic](./500Medium_Italic/Texturina_500Medium_Italic.ttf.png)|![Texturina_600SemiBold_Italic](./600SemiBold_Italic/Texturina_600SemiBold_Italic.ttf.png)||
|![Texturina_700Bold_Italic](./700Bold_Italic/Texturina_700Bold_Italic.ttf.png)|![Texturina_800ExtraBold_Italic](./800ExtraBold_Italic/Texturina_800ExtraBold_Italic.ttf.png)|![Texturina_900Black_Italic](./900Black_Italic/Texturina_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/texturina` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Texturina page on Google Fonts](https://fonts.google.com/specimen/Texturina) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Texturina on Google Fonts](https://fonts.google.com/specimen/Texturina)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/texturina)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/texturina)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
