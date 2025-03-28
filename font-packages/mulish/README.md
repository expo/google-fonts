# @expo-google-fonts/mulish

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mulish)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mulish)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mulish)

This package lets you use the [**Mulish**](https://fonts.google.com/specimen/Mulish) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Mulish

![Mulish](./font-family.png)

This font family contains [16 styles](#-gallery).

- `Mulish_200ExtraLight`
- `Mulish_300Light`
- `Mulish_400Regular`
- `Mulish_500Medium`
- `Mulish_600SemiBold`
- `Mulish_700Bold`
- `Mulish_800ExtraBold`
- `Mulish_900Black`
- `Mulish_200ExtraLight_Italic`
- `Mulish_300Light_Italic`
- `Mulish_400Regular_Italic`
- `Mulish_500Medium_Italic`
- `Mulish_600SemiBold_Italic`
- `Mulish_700Bold_Italic`
- `Mulish_800ExtraBold_Italic`
- `Mulish_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/mulish expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/mulish/useFonts';
import { Mulish_200ExtraLight } from '@expo-google-fonts/mulish/200ExtraLight';
import { Mulish_300Light } from '@expo-google-fonts/mulish/300Light';
import { Mulish_400Regular } from '@expo-google-fonts/mulish/400Regular';
import { Mulish_500Medium } from '@expo-google-fonts/mulish/500Medium';
import { Mulish_600SemiBold } from '@expo-google-fonts/mulish/600SemiBold';
import { Mulish_700Bold } from '@expo-google-fonts/mulish/700Bold';
import { Mulish_800ExtraBold } from '@expo-google-fonts/mulish/800ExtraBold';
import { Mulish_900Black } from '@expo-google-fonts/mulish/900Black';
import { Mulish_200ExtraLight_Italic } from '@expo-google-fonts/mulish/200ExtraLight_Italic';
import { Mulish_300Light_Italic } from '@expo-google-fonts/mulish/300Light_Italic';
import { Mulish_400Regular_Italic } from '@expo-google-fonts/mulish/400Regular_Italic';
import { Mulish_500Medium_Italic } from '@expo-google-fonts/mulish/500Medium_Italic';
import { Mulish_600SemiBold_Italic } from '@expo-google-fonts/mulish/600SemiBold_Italic';
import { Mulish_700Bold_Italic } from '@expo-google-fonts/mulish/700Bold_Italic';
import { Mulish_800ExtraBold_Italic } from '@expo-google-fonts/mulish/800ExtraBold_Italic';
import { Mulish_900Black_Italic } from '@expo-google-fonts/mulish/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Mulish_200ExtraLight, 
    Mulish_300Light, 
    Mulish_400Regular, 
    Mulish_500Medium, 
    Mulish_600SemiBold, 
    Mulish_700Bold, 
    Mulish_800ExtraBold, 
    Mulish_900Black, 
    Mulish_200ExtraLight_Italic, 
    Mulish_300Light_Italic, 
    Mulish_400Regular_Italic, 
    Mulish_500Medium_Italic, 
    Mulish_600SemiBold_Italic, 
    Mulish_700Bold_Italic, 
    Mulish_800ExtraBold_Italic, 
    Mulish_900Black_Italic
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
          fontFamily: "Mulish_200ExtraLight"
        }}>
          Mulish Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_300Light"
        }}>
          Mulish Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_400Regular"
        }}>
          Mulish Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_500Medium"
        }}>
          Mulish Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_600SemiBold"
        }}>
          Mulish Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_700Bold"
        }}>
          Mulish Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_800ExtraBold"
        }}>
          Mulish Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_900Black"
        }}>
          Mulish Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_200ExtraLight_Italic"
        }}>
          Mulish Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_300Light_Italic"
        }}>
          Mulish Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_400Regular_Italic"
        }}>
          Mulish Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_500Medium_Italic"
        }}>
          Mulish Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_600SemiBold_Italic"
        }}>
          Mulish Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_700Bold_Italic"
        }}>
          Mulish Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_800ExtraBold_Italic"
        }}>
          Mulish Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mulish_900Black_Italic"
        }}>
          Mulish Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Mulish_200ExtraLight](./200ExtraLight/Mulish_200ExtraLight.ttf.png)|![Mulish_300Light](./300Light/Mulish_300Light.ttf.png)|![Mulish_400Regular](./400Regular/Mulish_400Regular.ttf.png)||
|![Mulish_500Medium](./500Medium/Mulish_500Medium.ttf.png)|![Mulish_600SemiBold](./600SemiBold/Mulish_600SemiBold.ttf.png)|![Mulish_700Bold](./700Bold/Mulish_700Bold.ttf.png)||
|![Mulish_800ExtraBold](./800ExtraBold/Mulish_800ExtraBold.ttf.png)|![Mulish_900Black](./900Black/Mulish_900Black.ttf.png)|![Mulish_200ExtraLight_Italic](./200ExtraLight_Italic/Mulish_200ExtraLight_Italic.ttf.png)||
|![Mulish_300Light_Italic](./300Light_Italic/Mulish_300Light_Italic.ttf.png)|![Mulish_400Regular_Italic](./400Regular_Italic/Mulish_400Regular_Italic.ttf.png)|![Mulish_500Medium_Italic](./500Medium_Italic/Mulish_500Medium_Italic.ttf.png)||
|![Mulish_600SemiBold_Italic](./600SemiBold_Italic/Mulish_600SemiBold_Italic.ttf.png)|![Mulish_700Bold_Italic](./700Bold_Italic/Mulish_700Bold_Italic.ttf.png)|![Mulish_800ExtraBold_Italic](./800ExtraBold_Italic/Mulish_800ExtraBold_Italic.ttf.png)||
|![Mulish_900Black_Italic](./900Black_Italic/Mulish_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/mulish` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mulish page on Google Fonts](https://fonts.google.com/specimen/Mulish) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mulish on Google Fonts](https://fonts.google.com/specimen/Mulish)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mulish)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mulish)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
