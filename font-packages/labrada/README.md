# @expo-google-fonts/labrada

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/labrada)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/labrada)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/labrada)

This package lets you use the [**Labrada**](https://fonts.google.com/specimen/Labrada) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Labrada

![Labrada](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Labrada_100Thin`
- `Labrada_200ExtraLight`
- `Labrada_300Light`
- `Labrada_400Regular`
- `Labrada_500Medium`
- `Labrada_600SemiBold`
- `Labrada_700Bold`
- `Labrada_800ExtraBold`
- `Labrada_900Black`
- `Labrada_100Thin_Italic`
- `Labrada_200ExtraLight_Italic`
- `Labrada_300Light_Italic`
- `Labrada_400Regular_Italic`
- `Labrada_500Medium_Italic`
- `Labrada_600SemiBold_Italic`
- `Labrada_700Bold_Italic`
- `Labrada_800ExtraBold_Italic`
- `Labrada_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/labrada expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/labrada/useFonts';
import { Labrada_100Thin } from '@expo-google-fonts/labrada/100Thin';
import { Labrada_200ExtraLight } from '@expo-google-fonts/labrada/200ExtraLight';
import { Labrada_300Light } from '@expo-google-fonts/labrada/300Light';
import { Labrada_400Regular } from '@expo-google-fonts/labrada/400Regular';
import { Labrada_500Medium } from '@expo-google-fonts/labrada/500Medium';
import { Labrada_600SemiBold } from '@expo-google-fonts/labrada/600SemiBold';
import { Labrada_700Bold } from '@expo-google-fonts/labrada/700Bold';
import { Labrada_800ExtraBold } from '@expo-google-fonts/labrada/800ExtraBold';
import { Labrada_900Black } from '@expo-google-fonts/labrada/900Black';
import { Labrada_100Thin_Italic } from '@expo-google-fonts/labrada/100Thin_Italic';
import { Labrada_200ExtraLight_Italic } from '@expo-google-fonts/labrada/200ExtraLight_Italic';
import { Labrada_300Light_Italic } from '@expo-google-fonts/labrada/300Light_Italic';
import { Labrada_400Regular_Italic } from '@expo-google-fonts/labrada/400Regular_Italic';
import { Labrada_500Medium_Italic } from '@expo-google-fonts/labrada/500Medium_Italic';
import { Labrada_600SemiBold_Italic } from '@expo-google-fonts/labrada/600SemiBold_Italic';
import { Labrada_700Bold_Italic } from '@expo-google-fonts/labrada/700Bold_Italic';
import { Labrada_800ExtraBold_Italic } from '@expo-google-fonts/labrada/800ExtraBold_Italic';
import { Labrada_900Black_Italic } from '@expo-google-fonts/labrada/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Labrada_100Thin, 
    Labrada_200ExtraLight, 
    Labrada_300Light, 
    Labrada_400Regular, 
    Labrada_500Medium, 
    Labrada_600SemiBold, 
    Labrada_700Bold, 
    Labrada_800ExtraBold, 
    Labrada_900Black, 
    Labrada_100Thin_Italic, 
    Labrada_200ExtraLight_Italic, 
    Labrada_300Light_Italic, 
    Labrada_400Regular_Italic, 
    Labrada_500Medium_Italic, 
    Labrada_600SemiBold_Italic, 
    Labrada_700Bold_Italic, 
    Labrada_800ExtraBold_Italic, 
    Labrada_900Black_Italic
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
          fontFamily: "Labrada_100Thin"
        }}>
          Labrada Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_200ExtraLight"
        }}>
          Labrada Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_300Light"
        }}>
          Labrada Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_400Regular"
        }}>
          Labrada Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_500Medium"
        }}>
          Labrada Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_600SemiBold"
        }}>
          Labrada Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_700Bold"
        }}>
          Labrada Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_800ExtraBold"
        }}>
          Labrada Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_900Black"
        }}>
          Labrada Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_100Thin_Italic"
        }}>
          Labrada Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_200ExtraLight_Italic"
        }}>
          Labrada Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_300Light_Italic"
        }}>
          Labrada Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_400Regular_Italic"
        }}>
          Labrada Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_500Medium_Italic"
        }}>
          Labrada Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_600SemiBold_Italic"
        }}>
          Labrada Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_700Bold_Italic"
        }}>
          Labrada Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_800ExtraBold_Italic"
        }}>
          Labrada Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Labrada_900Black_Italic"
        }}>
          Labrada Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Labrada_100Thin](./100Thin/Labrada_100Thin.ttf.png)|![Labrada_200ExtraLight](./200ExtraLight/Labrada_200ExtraLight.ttf.png)|![Labrada_300Light](./300Light/Labrada_300Light.ttf.png)||
|![Labrada_400Regular](./400Regular/Labrada_400Regular.ttf.png)|![Labrada_500Medium](./500Medium/Labrada_500Medium.ttf.png)|![Labrada_600SemiBold](./600SemiBold/Labrada_600SemiBold.ttf.png)||
|![Labrada_700Bold](./700Bold/Labrada_700Bold.ttf.png)|![Labrada_800ExtraBold](./800ExtraBold/Labrada_800ExtraBold.ttf.png)|![Labrada_900Black](./900Black/Labrada_900Black.ttf.png)||
|![Labrada_100Thin_Italic](./100Thin_Italic/Labrada_100Thin_Italic.ttf.png)|![Labrada_200ExtraLight_Italic](./200ExtraLight_Italic/Labrada_200ExtraLight_Italic.ttf.png)|![Labrada_300Light_Italic](./300Light_Italic/Labrada_300Light_Italic.ttf.png)||
|![Labrada_400Regular_Italic](./400Regular_Italic/Labrada_400Regular_Italic.ttf.png)|![Labrada_500Medium_Italic](./500Medium_Italic/Labrada_500Medium_Italic.ttf.png)|![Labrada_600SemiBold_Italic](./600SemiBold_Italic/Labrada_600SemiBold_Italic.ttf.png)||
|![Labrada_700Bold_Italic](./700Bold_Italic/Labrada_700Bold_Italic.ttf.png)|![Labrada_800ExtraBold_Italic](./800ExtraBold_Italic/Labrada_800ExtraBold_Italic.ttf.png)|![Labrada_900Black_Italic](./900Black_Italic/Labrada_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/labrada` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Labrada page on Google Fonts](https://fonts.google.com/specimen/Labrada) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Labrada on Google Fonts](https://fonts.google.com/specimen/Labrada)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/labrada)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/labrada)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
