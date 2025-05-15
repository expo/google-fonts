# @expo-google-fonts/ancizar-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ancizar-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ancizar-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ancizar-sans)

This package lets you use the [**Ancizar Sans**](https://fonts.google.com/specimen/Ancizar+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ancizar Sans

![Ancizar Sans](./font-family.png)

This font family contains [18 styles](#-gallery).

- `AncizarSans_100Thin`
- `AncizarSans_200ExtraLight`
- `AncizarSans_300Light`
- `AncizarSans_400Regular`
- `AncizarSans_500Medium`
- `AncizarSans_600SemiBold`
- `AncizarSans_700Bold`
- `AncizarSans_800ExtraBold`
- `AncizarSans_900Black`
- `AncizarSans_100Thin_Italic`
- `AncizarSans_200ExtraLight_Italic`
- `AncizarSans_300Light_Italic`
- `AncizarSans_400Regular_Italic`
- `AncizarSans_500Medium_Italic`
- `AncizarSans_600SemiBold_Italic`
- `AncizarSans_700Bold_Italic`
- `AncizarSans_800ExtraBold_Italic`
- `AncizarSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ancizar-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/ancizar-sans/useFonts';
import { AncizarSans_100Thin } from '@expo-google-fonts/ancizar-sans/100Thin';
import { AncizarSans_200ExtraLight } from '@expo-google-fonts/ancizar-sans/200ExtraLight';
import { AncizarSans_300Light } from '@expo-google-fonts/ancizar-sans/300Light';
import { AncizarSans_400Regular } from '@expo-google-fonts/ancizar-sans/400Regular';
import { AncizarSans_500Medium } from '@expo-google-fonts/ancizar-sans/500Medium';
import { AncizarSans_600SemiBold } from '@expo-google-fonts/ancizar-sans/600SemiBold';
import { AncizarSans_700Bold } from '@expo-google-fonts/ancizar-sans/700Bold';
import { AncizarSans_800ExtraBold } from '@expo-google-fonts/ancizar-sans/800ExtraBold';
import { AncizarSans_900Black } from '@expo-google-fonts/ancizar-sans/900Black';
import { AncizarSans_100Thin_Italic } from '@expo-google-fonts/ancizar-sans/100Thin_Italic';
import { AncizarSans_200ExtraLight_Italic } from '@expo-google-fonts/ancizar-sans/200ExtraLight_Italic';
import { AncizarSans_300Light_Italic } from '@expo-google-fonts/ancizar-sans/300Light_Italic';
import { AncizarSans_400Regular_Italic } from '@expo-google-fonts/ancizar-sans/400Regular_Italic';
import { AncizarSans_500Medium_Italic } from '@expo-google-fonts/ancizar-sans/500Medium_Italic';
import { AncizarSans_600SemiBold_Italic } from '@expo-google-fonts/ancizar-sans/600SemiBold_Italic';
import { AncizarSans_700Bold_Italic } from '@expo-google-fonts/ancizar-sans/700Bold_Italic';
import { AncizarSans_800ExtraBold_Italic } from '@expo-google-fonts/ancizar-sans/800ExtraBold_Italic';
import { AncizarSans_900Black_Italic } from '@expo-google-fonts/ancizar-sans/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    AncizarSans_100Thin, 
    AncizarSans_200ExtraLight, 
    AncizarSans_300Light, 
    AncizarSans_400Regular, 
    AncizarSans_500Medium, 
    AncizarSans_600SemiBold, 
    AncizarSans_700Bold, 
    AncizarSans_800ExtraBold, 
    AncizarSans_900Black, 
    AncizarSans_100Thin_Italic, 
    AncizarSans_200ExtraLight_Italic, 
    AncizarSans_300Light_Italic, 
    AncizarSans_400Regular_Italic, 
    AncizarSans_500Medium_Italic, 
    AncizarSans_600SemiBold_Italic, 
    AncizarSans_700Bold_Italic, 
    AncizarSans_800ExtraBold_Italic, 
    AncizarSans_900Black_Italic
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
          fontFamily: "AncizarSans_100Thin"
        }}>
          Ancizar Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_200ExtraLight"
        }}>
          Ancizar Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_300Light"
        }}>
          Ancizar Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_400Regular"
        }}>
          Ancizar Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_500Medium"
        }}>
          Ancizar Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_600SemiBold"
        }}>
          Ancizar Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_700Bold"
        }}>
          Ancizar Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_800ExtraBold"
        }}>
          Ancizar Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_900Black"
        }}>
          Ancizar Sans Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_100Thin_Italic"
        }}>
          Ancizar Sans Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_200ExtraLight_Italic"
        }}>
          Ancizar Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_300Light_Italic"
        }}>
          Ancizar Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_400Regular_Italic"
        }}>
          Ancizar Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_500Medium_Italic"
        }}>
          Ancizar Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_600SemiBold_Italic"
        }}>
          Ancizar Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_700Bold_Italic"
        }}>
          Ancizar Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_800ExtraBold_Italic"
        }}>
          Ancizar Sans Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AncizarSans_900Black_Italic"
        }}>
          Ancizar Sans Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AncizarSans_100Thin](./100Thin/AncizarSans_100Thin.ttf.png)|![AncizarSans_200ExtraLight](./200ExtraLight/AncizarSans_200ExtraLight.ttf.png)|![AncizarSans_300Light](./300Light/AncizarSans_300Light.ttf.png)||
|![AncizarSans_400Regular](./400Regular/AncizarSans_400Regular.ttf.png)|![AncizarSans_500Medium](./500Medium/AncizarSans_500Medium.ttf.png)|![AncizarSans_600SemiBold](./600SemiBold/AncizarSans_600SemiBold.ttf.png)||
|![AncizarSans_700Bold](./700Bold/AncizarSans_700Bold.ttf.png)|![AncizarSans_800ExtraBold](./800ExtraBold/AncizarSans_800ExtraBold.ttf.png)|![AncizarSans_900Black](./900Black/AncizarSans_900Black.ttf.png)||
|![AncizarSans_100Thin_Italic](./100Thin_Italic/AncizarSans_100Thin_Italic.ttf.png)|![AncizarSans_200ExtraLight_Italic](./200ExtraLight_Italic/AncizarSans_200ExtraLight_Italic.ttf.png)|![AncizarSans_300Light_Italic](./300Light_Italic/AncizarSans_300Light_Italic.ttf.png)||
|![AncizarSans_400Regular_Italic](./400Regular_Italic/AncizarSans_400Regular_Italic.ttf.png)|![AncizarSans_500Medium_Italic](./500Medium_Italic/AncizarSans_500Medium_Italic.ttf.png)|![AncizarSans_600SemiBold_Italic](./600SemiBold_Italic/AncizarSans_600SemiBold_Italic.ttf.png)||
|![AncizarSans_700Bold_Italic](./700Bold_Italic/AncizarSans_700Bold_Italic.ttf.png)|![AncizarSans_800ExtraBold_Italic](./800ExtraBold_Italic/AncizarSans_800ExtraBold_Italic.ttf.png)|![AncizarSans_900Black_Italic](./900Black_Italic/AncizarSans_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ancizar-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ancizar Sans page on Google Fonts](https://fonts.google.com/specimen/Ancizar+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ancizar Sans on Google Fonts](https://fonts.google.com/specimen/Ancizar+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ancizar-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ancizar-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
