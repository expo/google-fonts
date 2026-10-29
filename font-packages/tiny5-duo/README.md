# @expo-google-fonts/tiny5-duo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tiny5-duo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tiny5-duo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tiny5-duo)

This package lets you use the [**Tiny5 Duo**](https://fonts.google.com/specimen/Tiny5+Duo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Tiny5 Duo

![Tiny5 Duo](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Tiny5Duo_100Thin`
- `Tiny5Duo_200ExtraLight`
- `Tiny5Duo_300Light`
- `Tiny5Duo_400Regular`
- `Tiny5Duo_500Medium`
- `Tiny5Duo_600SemiBold`
- `Tiny5Duo_700Bold`
- `Tiny5Duo_800ExtraBold`
- `Tiny5Duo_900Black`
- `Tiny5Duo_100Thin_Italic`
- `Tiny5Duo_200ExtraLight_Italic`
- `Tiny5Duo_300Light_Italic`
- `Tiny5Duo_400Regular_Italic`
- `Tiny5Duo_500Medium_Italic`
- `Tiny5Duo_600SemiBold_Italic`
- `Tiny5Duo_700Bold_Italic`
- `Tiny5Duo_800ExtraBold_Italic`
- `Tiny5Duo_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/tiny5-duo expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/tiny5-duo/useFonts';
import { Tiny5Duo_100Thin } from '@expo-google-fonts/tiny5-duo/100Thin';
import { Tiny5Duo_200ExtraLight } from '@expo-google-fonts/tiny5-duo/200ExtraLight';
import { Tiny5Duo_300Light } from '@expo-google-fonts/tiny5-duo/300Light';
import { Tiny5Duo_400Regular } from '@expo-google-fonts/tiny5-duo/400Regular';
import { Tiny5Duo_500Medium } from '@expo-google-fonts/tiny5-duo/500Medium';
import { Tiny5Duo_600SemiBold } from '@expo-google-fonts/tiny5-duo/600SemiBold';
import { Tiny5Duo_700Bold } from '@expo-google-fonts/tiny5-duo/700Bold';
import { Tiny5Duo_800ExtraBold } from '@expo-google-fonts/tiny5-duo/800ExtraBold';
import { Tiny5Duo_900Black } from '@expo-google-fonts/tiny5-duo/900Black';
import { Tiny5Duo_100Thin_Italic } from '@expo-google-fonts/tiny5-duo/100Thin_Italic';
import { Tiny5Duo_200ExtraLight_Italic } from '@expo-google-fonts/tiny5-duo/200ExtraLight_Italic';
import { Tiny5Duo_300Light_Italic } from '@expo-google-fonts/tiny5-duo/300Light_Italic';
import { Tiny5Duo_400Regular_Italic } from '@expo-google-fonts/tiny5-duo/400Regular_Italic';
import { Tiny5Duo_500Medium_Italic } from '@expo-google-fonts/tiny5-duo/500Medium_Italic';
import { Tiny5Duo_600SemiBold_Italic } from '@expo-google-fonts/tiny5-duo/600SemiBold_Italic';
import { Tiny5Duo_700Bold_Italic } from '@expo-google-fonts/tiny5-duo/700Bold_Italic';
import { Tiny5Duo_800ExtraBold_Italic } from '@expo-google-fonts/tiny5-duo/800ExtraBold_Italic';
import { Tiny5Duo_900Black_Italic } from '@expo-google-fonts/tiny5-duo/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Tiny5Duo_100Thin, 
    Tiny5Duo_200ExtraLight, 
    Tiny5Duo_300Light, 
    Tiny5Duo_400Regular, 
    Tiny5Duo_500Medium, 
    Tiny5Duo_600SemiBold, 
    Tiny5Duo_700Bold, 
    Tiny5Duo_800ExtraBold, 
    Tiny5Duo_900Black, 
    Tiny5Duo_100Thin_Italic, 
    Tiny5Duo_200ExtraLight_Italic, 
    Tiny5Duo_300Light_Italic, 
    Tiny5Duo_400Regular_Italic, 
    Tiny5Duo_500Medium_Italic, 
    Tiny5Duo_600SemiBold_Italic, 
    Tiny5Duo_700Bold_Italic, 
    Tiny5Duo_800ExtraBold_Italic, 
    Tiny5Duo_900Black_Italic
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
          fontFamily: "Tiny5Duo_100Thin"
        }}>
          Tiny5 Duo Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_200ExtraLight"
        }}>
          Tiny5 Duo Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_300Light"
        }}>
          Tiny5 Duo Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_400Regular"
        }}>
          Tiny5 Duo Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_500Medium"
        }}>
          Tiny5 Duo Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_600SemiBold"
        }}>
          Tiny5 Duo Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_700Bold"
        }}>
          Tiny5 Duo Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_800ExtraBold"
        }}>
          Tiny5 Duo Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_900Black"
        }}>
          Tiny5 Duo Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_100Thin_Italic"
        }}>
          Tiny5 Duo Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_200ExtraLight_Italic"
        }}>
          Tiny5 Duo Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_300Light_Italic"
        }}>
          Tiny5 Duo Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_400Regular_Italic"
        }}>
          Tiny5 Duo Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_500Medium_Italic"
        }}>
          Tiny5 Duo Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_600SemiBold_Italic"
        }}>
          Tiny5 Duo Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_700Bold_Italic"
        }}>
          Tiny5 Duo Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_800ExtraBold_Italic"
        }}>
          Tiny5 Duo Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5Duo_900Black_Italic"
        }}>
          Tiny5 Duo Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Tiny5Duo_100Thin](./100Thin/Tiny5Duo_100Thin.ttf.png)|![Tiny5Duo_200ExtraLight](./200ExtraLight/Tiny5Duo_200ExtraLight.ttf.png)|![Tiny5Duo_300Light](./300Light/Tiny5Duo_300Light.ttf.png)||
|![Tiny5Duo_400Regular](./400Regular/Tiny5Duo_400Regular.ttf.png)|![Tiny5Duo_500Medium](./500Medium/Tiny5Duo_500Medium.ttf.png)|![Tiny5Duo_600SemiBold](./600SemiBold/Tiny5Duo_600SemiBold.ttf.png)||
|![Tiny5Duo_700Bold](./700Bold/Tiny5Duo_700Bold.ttf.png)|![Tiny5Duo_800ExtraBold](./800ExtraBold/Tiny5Duo_800ExtraBold.ttf.png)|![Tiny5Duo_900Black](./900Black/Tiny5Duo_900Black.ttf.png)||
|![Tiny5Duo_100Thin_Italic](./100Thin_Italic/Tiny5Duo_100Thin_Italic.ttf.png)|![Tiny5Duo_200ExtraLight_Italic](./200ExtraLight_Italic/Tiny5Duo_200ExtraLight_Italic.ttf.png)|![Tiny5Duo_300Light_Italic](./300Light_Italic/Tiny5Duo_300Light_Italic.ttf.png)||
|![Tiny5Duo_400Regular_Italic](./400Regular_Italic/Tiny5Duo_400Regular_Italic.ttf.png)|![Tiny5Duo_500Medium_Italic](./500Medium_Italic/Tiny5Duo_500Medium_Italic.ttf.png)|![Tiny5Duo_600SemiBold_Italic](./600SemiBold_Italic/Tiny5Duo_600SemiBold_Italic.ttf.png)||
|![Tiny5Duo_700Bold_Italic](./700Bold_Italic/Tiny5Duo_700Bold_Italic.ttf.png)|![Tiny5Duo_800ExtraBold_Italic](./800ExtraBold_Italic/Tiny5Duo_800ExtraBold_Italic.ttf.png)|![Tiny5Duo_900Black_Italic](./900Black_Italic/Tiny5Duo_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/tiny5-duo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tiny5 Duo page on Google Fonts](https://fonts.google.com/specimen/Tiny5+Duo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tiny5 Duo on Google Fonts](https://fonts.google.com/specimen/Tiny5+Duo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tiny5-duo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tiny5-duo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
