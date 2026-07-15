# @expo-google-fonts/pliant

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/pliant)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/pliant)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/pliant)

This package lets you use the [**Pliant**](https://fonts.google.com/specimen/Pliant) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Pliant

![Pliant](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Pliant_100Thin`
- `Pliant_200ExtraLight`
- `Pliant_300Light`
- `Pliant_400Regular`
- `Pliant_500Medium`
- `Pliant_600SemiBold`
- `Pliant_700Bold`
- `Pliant_800ExtraBold`
- `Pliant_900Black`
- `Pliant_100Thin_Italic`
- `Pliant_200ExtraLight_Italic`
- `Pliant_300Light_Italic`
- `Pliant_400Regular_Italic`
- `Pliant_500Medium_Italic`
- `Pliant_600SemiBold_Italic`
- `Pliant_700Bold_Italic`
- `Pliant_800ExtraBold_Italic`
- `Pliant_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/pliant expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/pliant/useFonts';
import { Pliant_100Thin } from '@expo-google-fonts/pliant/100Thin';
import { Pliant_200ExtraLight } from '@expo-google-fonts/pliant/200ExtraLight';
import { Pliant_300Light } from '@expo-google-fonts/pliant/300Light';
import { Pliant_400Regular } from '@expo-google-fonts/pliant/400Regular';
import { Pliant_500Medium } from '@expo-google-fonts/pliant/500Medium';
import { Pliant_600SemiBold } from '@expo-google-fonts/pliant/600SemiBold';
import { Pliant_700Bold } from '@expo-google-fonts/pliant/700Bold';
import { Pliant_800ExtraBold } from '@expo-google-fonts/pliant/800ExtraBold';
import { Pliant_900Black } from '@expo-google-fonts/pliant/900Black';
import { Pliant_100Thin_Italic } from '@expo-google-fonts/pliant/100Thin_Italic';
import { Pliant_200ExtraLight_Italic } from '@expo-google-fonts/pliant/200ExtraLight_Italic';
import { Pliant_300Light_Italic } from '@expo-google-fonts/pliant/300Light_Italic';
import { Pliant_400Regular_Italic } from '@expo-google-fonts/pliant/400Regular_Italic';
import { Pliant_500Medium_Italic } from '@expo-google-fonts/pliant/500Medium_Italic';
import { Pliant_600SemiBold_Italic } from '@expo-google-fonts/pliant/600SemiBold_Italic';
import { Pliant_700Bold_Italic } from '@expo-google-fonts/pliant/700Bold_Italic';
import { Pliant_800ExtraBold_Italic } from '@expo-google-fonts/pliant/800ExtraBold_Italic';
import { Pliant_900Black_Italic } from '@expo-google-fonts/pliant/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Pliant_100Thin, 
    Pliant_200ExtraLight, 
    Pliant_300Light, 
    Pliant_400Regular, 
    Pliant_500Medium, 
    Pliant_600SemiBold, 
    Pliant_700Bold, 
    Pliant_800ExtraBold, 
    Pliant_900Black, 
    Pliant_100Thin_Italic, 
    Pliant_200ExtraLight_Italic, 
    Pliant_300Light_Italic, 
    Pliant_400Regular_Italic, 
    Pliant_500Medium_Italic, 
    Pliant_600SemiBold_Italic, 
    Pliant_700Bold_Italic, 
    Pliant_800ExtraBold_Italic, 
    Pliant_900Black_Italic
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
          fontFamily: "Pliant_100Thin"
        }}>
          Pliant Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_200ExtraLight"
        }}>
          Pliant Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_300Light"
        }}>
          Pliant Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_400Regular"
        }}>
          Pliant Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_500Medium"
        }}>
          Pliant Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_600SemiBold"
        }}>
          Pliant Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_700Bold"
        }}>
          Pliant Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_800ExtraBold"
        }}>
          Pliant Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_900Black"
        }}>
          Pliant Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_100Thin_Italic"
        }}>
          Pliant Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_200ExtraLight_Italic"
        }}>
          Pliant Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_300Light_Italic"
        }}>
          Pliant Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_400Regular_Italic"
        }}>
          Pliant Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_500Medium_Italic"
        }}>
          Pliant Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_600SemiBold_Italic"
        }}>
          Pliant Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_700Bold_Italic"
        }}>
          Pliant Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_800ExtraBold_Italic"
        }}>
          Pliant Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Pliant_900Black_Italic"
        }}>
          Pliant Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Pliant_100Thin](./100Thin/Pliant_100Thin.ttf.png)|![Pliant_200ExtraLight](./200ExtraLight/Pliant_200ExtraLight.ttf.png)|![Pliant_300Light](./300Light/Pliant_300Light.ttf.png)||
|![Pliant_400Regular](./400Regular/Pliant_400Regular.ttf.png)|![Pliant_500Medium](./500Medium/Pliant_500Medium.ttf.png)|![Pliant_600SemiBold](./600SemiBold/Pliant_600SemiBold.ttf.png)||
|![Pliant_700Bold](./700Bold/Pliant_700Bold.ttf.png)|![Pliant_800ExtraBold](./800ExtraBold/Pliant_800ExtraBold.ttf.png)|![Pliant_900Black](./900Black/Pliant_900Black.ttf.png)||
|![Pliant_100Thin_Italic](./100Thin_Italic/Pliant_100Thin_Italic.ttf.png)|![Pliant_200ExtraLight_Italic](./200ExtraLight_Italic/Pliant_200ExtraLight_Italic.ttf.png)|![Pliant_300Light_Italic](./300Light_Italic/Pliant_300Light_Italic.ttf.png)||
|![Pliant_400Regular_Italic](./400Regular_Italic/Pliant_400Regular_Italic.ttf.png)|![Pliant_500Medium_Italic](./500Medium_Italic/Pliant_500Medium_Italic.ttf.png)|![Pliant_600SemiBold_Italic](./600SemiBold_Italic/Pliant_600SemiBold_Italic.ttf.png)||
|![Pliant_700Bold_Italic](./700Bold_Italic/Pliant_700Bold_Italic.ttf.png)|![Pliant_800ExtraBold_Italic](./800ExtraBold_Italic/Pliant_800ExtraBold_Italic.ttf.png)|![Pliant_900Black_Italic](./900Black_Italic/Pliant_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/pliant` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Pliant page on Google Fonts](https://fonts.google.com/specimen/Pliant) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Pliant on Google Fonts](https://fonts.google.com/specimen/Pliant)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/pliant)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/pliant)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
