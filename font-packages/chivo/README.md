# @expo-google-fonts/chivo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/chivo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/chivo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/chivo)

This package lets you use the [**Chivo**](https://fonts.google.com/specimen/Chivo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Chivo

![Chivo](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Chivo_100Thin`
- `Chivo_200ExtraLight`
- `Chivo_300Light`
- `Chivo_400Regular`
- `Chivo_500Medium`
- `Chivo_600SemiBold`
- `Chivo_700Bold`
- `Chivo_800ExtraBold`
- `Chivo_900Black`
- `Chivo_100Thin_Italic`
- `Chivo_200ExtraLight_Italic`
- `Chivo_300Light_Italic`
- `Chivo_400Regular_Italic`
- `Chivo_500Medium_Italic`
- `Chivo_600SemiBold_Italic`
- `Chivo_700Bold_Italic`
- `Chivo_800ExtraBold_Italic`
- `Chivo_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/chivo expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/chivo/useFonts';
import { Chivo_100Thin } from '@expo-google-fonts/chivo/100Thin';
import { Chivo_200ExtraLight } from '@expo-google-fonts/chivo/200ExtraLight';
import { Chivo_300Light } from '@expo-google-fonts/chivo/300Light';
import { Chivo_400Regular } from '@expo-google-fonts/chivo/400Regular';
import { Chivo_500Medium } from '@expo-google-fonts/chivo/500Medium';
import { Chivo_600SemiBold } from '@expo-google-fonts/chivo/600SemiBold';
import { Chivo_700Bold } from '@expo-google-fonts/chivo/700Bold';
import { Chivo_800ExtraBold } from '@expo-google-fonts/chivo/800ExtraBold';
import { Chivo_900Black } from '@expo-google-fonts/chivo/900Black';
import { Chivo_100Thin_Italic } from '@expo-google-fonts/chivo/100Thin_Italic';
import { Chivo_200ExtraLight_Italic } from '@expo-google-fonts/chivo/200ExtraLight_Italic';
import { Chivo_300Light_Italic } from '@expo-google-fonts/chivo/300Light_Italic';
import { Chivo_400Regular_Italic } from '@expo-google-fonts/chivo/400Regular_Italic';
import { Chivo_500Medium_Italic } from '@expo-google-fonts/chivo/500Medium_Italic';
import { Chivo_600SemiBold_Italic } from '@expo-google-fonts/chivo/600SemiBold_Italic';
import { Chivo_700Bold_Italic } from '@expo-google-fonts/chivo/700Bold_Italic';
import { Chivo_800ExtraBold_Italic } from '@expo-google-fonts/chivo/800ExtraBold_Italic';
import { Chivo_900Black_Italic } from '@expo-google-fonts/chivo/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Chivo_100Thin, 
    Chivo_200ExtraLight, 
    Chivo_300Light, 
    Chivo_400Regular, 
    Chivo_500Medium, 
    Chivo_600SemiBold, 
    Chivo_700Bold, 
    Chivo_800ExtraBold, 
    Chivo_900Black, 
    Chivo_100Thin_Italic, 
    Chivo_200ExtraLight_Italic, 
    Chivo_300Light_Italic, 
    Chivo_400Regular_Italic, 
    Chivo_500Medium_Italic, 
    Chivo_600SemiBold_Italic, 
    Chivo_700Bold_Italic, 
    Chivo_800ExtraBold_Italic, 
    Chivo_900Black_Italic
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
          fontFamily: "Chivo_100Thin"
        }}>
          Chivo Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_200ExtraLight"
        }}>
          Chivo Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_300Light"
        }}>
          Chivo Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_400Regular"
        }}>
          Chivo Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_500Medium"
        }}>
          Chivo Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_600SemiBold"
        }}>
          Chivo Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_700Bold"
        }}>
          Chivo Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_800ExtraBold"
        }}>
          Chivo Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_900Black"
        }}>
          Chivo Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_100Thin_Italic"
        }}>
          Chivo Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_200ExtraLight_Italic"
        }}>
          Chivo Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_300Light_Italic"
        }}>
          Chivo Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_400Regular_Italic"
        }}>
          Chivo Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_500Medium_Italic"
        }}>
          Chivo Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_600SemiBold_Italic"
        }}>
          Chivo Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_700Bold_Italic"
        }}>
          Chivo Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_800ExtraBold_Italic"
        }}>
          Chivo Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Chivo_900Black_Italic"
        }}>
          Chivo Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Chivo_100Thin](./100Thin/Chivo_100Thin.ttf.png)|![Chivo_200ExtraLight](./200ExtraLight/Chivo_200ExtraLight.ttf.png)|![Chivo_300Light](./300Light/Chivo_300Light.ttf.png)||
|![Chivo_400Regular](./400Regular/Chivo_400Regular.ttf.png)|![Chivo_500Medium](./500Medium/Chivo_500Medium.ttf.png)|![Chivo_600SemiBold](./600SemiBold/Chivo_600SemiBold.ttf.png)||
|![Chivo_700Bold](./700Bold/Chivo_700Bold.ttf.png)|![Chivo_800ExtraBold](./800ExtraBold/Chivo_800ExtraBold.ttf.png)|![Chivo_900Black](./900Black/Chivo_900Black.ttf.png)||
|![Chivo_100Thin_Italic](./100Thin_Italic/Chivo_100Thin_Italic.ttf.png)|![Chivo_200ExtraLight_Italic](./200ExtraLight_Italic/Chivo_200ExtraLight_Italic.ttf.png)|![Chivo_300Light_Italic](./300Light_Italic/Chivo_300Light_Italic.ttf.png)||
|![Chivo_400Regular_Italic](./400Regular_Italic/Chivo_400Regular_Italic.ttf.png)|![Chivo_500Medium_Italic](./500Medium_Italic/Chivo_500Medium_Italic.ttf.png)|![Chivo_600SemiBold_Italic](./600SemiBold_Italic/Chivo_600SemiBold_Italic.ttf.png)||
|![Chivo_700Bold_Italic](./700Bold_Italic/Chivo_700Bold_Italic.ttf.png)|![Chivo_800ExtraBold_Italic](./800ExtraBold_Italic/Chivo_800ExtraBold_Italic.ttf.png)|![Chivo_900Black_Italic](./900Black_Italic/Chivo_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/chivo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Chivo page on Google Fonts](https://fonts.google.com/specimen/Chivo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Chivo on Google Fonts](https://fonts.google.com/specimen/Chivo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/chivo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/chivo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
