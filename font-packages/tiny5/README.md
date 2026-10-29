# @expo-google-fonts/tiny5

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tiny5)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tiny5)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tiny5)

This package lets you use the [**Tiny5**](https://fonts.google.com/specimen/Tiny5) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Tiny5

![Tiny5](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Tiny5_100Thin`
- `Tiny5_200ExtraLight`
- `Tiny5_300Light`
- `Tiny5_400Regular`
- `Tiny5_500Medium`
- `Tiny5_600SemiBold`
- `Tiny5_700Bold`
- `Tiny5_800ExtraBold`
- `Tiny5_900Black`
- `Tiny5_100Thin_Italic`
- `Tiny5_200ExtraLight_Italic`
- `Tiny5_300Light_Italic`
- `Tiny5_400Regular_Italic`
- `Tiny5_500Medium_Italic`
- `Tiny5_600SemiBold_Italic`
- `Tiny5_700Bold_Italic`
- `Tiny5_800ExtraBold_Italic`
- `Tiny5_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/tiny5 expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/tiny5/useFonts';
import { Tiny5_100Thin } from '@expo-google-fonts/tiny5/100Thin';
import { Tiny5_200ExtraLight } from '@expo-google-fonts/tiny5/200ExtraLight';
import { Tiny5_300Light } from '@expo-google-fonts/tiny5/300Light';
import { Tiny5_400Regular } from '@expo-google-fonts/tiny5/400Regular';
import { Tiny5_500Medium } from '@expo-google-fonts/tiny5/500Medium';
import { Tiny5_600SemiBold } from '@expo-google-fonts/tiny5/600SemiBold';
import { Tiny5_700Bold } from '@expo-google-fonts/tiny5/700Bold';
import { Tiny5_800ExtraBold } from '@expo-google-fonts/tiny5/800ExtraBold';
import { Tiny5_900Black } from '@expo-google-fonts/tiny5/900Black';
import { Tiny5_100Thin_Italic } from '@expo-google-fonts/tiny5/100Thin_Italic';
import { Tiny5_200ExtraLight_Italic } from '@expo-google-fonts/tiny5/200ExtraLight_Italic';
import { Tiny5_300Light_Italic } from '@expo-google-fonts/tiny5/300Light_Italic';
import { Tiny5_400Regular_Italic } from '@expo-google-fonts/tiny5/400Regular_Italic';
import { Tiny5_500Medium_Italic } from '@expo-google-fonts/tiny5/500Medium_Italic';
import { Tiny5_600SemiBold_Italic } from '@expo-google-fonts/tiny5/600SemiBold_Italic';
import { Tiny5_700Bold_Italic } from '@expo-google-fonts/tiny5/700Bold_Italic';
import { Tiny5_800ExtraBold_Italic } from '@expo-google-fonts/tiny5/800ExtraBold_Italic';
import { Tiny5_900Black_Italic } from '@expo-google-fonts/tiny5/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Tiny5_100Thin, 
    Tiny5_200ExtraLight, 
    Tiny5_300Light, 
    Tiny5_400Regular, 
    Tiny5_500Medium, 
    Tiny5_600SemiBold, 
    Tiny5_700Bold, 
    Tiny5_800ExtraBold, 
    Tiny5_900Black, 
    Tiny5_100Thin_Italic, 
    Tiny5_200ExtraLight_Italic, 
    Tiny5_300Light_Italic, 
    Tiny5_400Regular_Italic, 
    Tiny5_500Medium_Italic, 
    Tiny5_600SemiBold_Italic, 
    Tiny5_700Bold_Italic, 
    Tiny5_800ExtraBold_Italic, 
    Tiny5_900Black_Italic
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
          fontFamily: "Tiny5_100Thin"
        }}>
          Tiny5 Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_200ExtraLight"
        }}>
          Tiny5 Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_300Light"
        }}>
          Tiny5 Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_400Regular"
        }}>
          Tiny5 Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_500Medium"
        }}>
          Tiny5 Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_600SemiBold"
        }}>
          Tiny5 Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_700Bold"
        }}>
          Tiny5 Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_800ExtraBold"
        }}>
          Tiny5 Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_900Black"
        }}>
          Tiny5 Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_100Thin_Italic"
        }}>
          Tiny5 Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_200ExtraLight_Italic"
        }}>
          Tiny5 Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_300Light_Italic"
        }}>
          Tiny5 Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_400Regular_Italic"
        }}>
          Tiny5 Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_500Medium_Italic"
        }}>
          Tiny5 Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_600SemiBold_Italic"
        }}>
          Tiny5 Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_700Bold_Italic"
        }}>
          Tiny5 Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_800ExtraBold_Italic"
        }}>
          Tiny5 Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tiny5_900Black_Italic"
        }}>
          Tiny5 Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Tiny5_100Thin](./100Thin/Tiny5_100Thin.ttf.png)|![Tiny5_200ExtraLight](./200ExtraLight/Tiny5_200ExtraLight.ttf.png)|![Tiny5_300Light](./300Light/Tiny5_300Light.ttf.png)||
|![Tiny5_400Regular](./400Regular/Tiny5_400Regular.ttf.png)|![Tiny5_500Medium](./500Medium/Tiny5_500Medium.ttf.png)|![Tiny5_600SemiBold](./600SemiBold/Tiny5_600SemiBold.ttf.png)||
|![Tiny5_700Bold](./700Bold/Tiny5_700Bold.ttf.png)|![Tiny5_800ExtraBold](./800ExtraBold/Tiny5_800ExtraBold.ttf.png)|![Tiny5_900Black](./900Black/Tiny5_900Black.ttf.png)||
|![Tiny5_100Thin_Italic](./100Thin_Italic/Tiny5_100Thin_Italic.ttf.png)|![Tiny5_200ExtraLight_Italic](./200ExtraLight_Italic/Tiny5_200ExtraLight_Italic.ttf.png)|![Tiny5_300Light_Italic](./300Light_Italic/Tiny5_300Light_Italic.ttf.png)||
|![Tiny5_400Regular_Italic](./400Regular_Italic/Tiny5_400Regular_Italic.ttf.png)|![Tiny5_500Medium_Italic](./500Medium_Italic/Tiny5_500Medium_Italic.ttf.png)|![Tiny5_600SemiBold_Italic](./600SemiBold_Italic/Tiny5_600SemiBold_Italic.ttf.png)||
|![Tiny5_700Bold_Italic](./700Bold_Italic/Tiny5_700Bold_Italic.ttf.png)|![Tiny5_800ExtraBold_Italic](./800ExtraBold_Italic/Tiny5_800ExtraBold_Italic.ttf.png)|![Tiny5_900Black_Italic](./900Black_Italic/Tiny5_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/tiny5` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tiny5 page on Google Fonts](https://fonts.google.com/specimen/Tiny5) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tiny5 on Google Fonts](https://fonts.google.com/specimen/Tiny5)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tiny5)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tiny5)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
