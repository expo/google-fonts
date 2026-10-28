# @expo-google-fonts/xmind

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/xmind)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/xmind)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/xmind)

This package lets you use the [**Xmind**](https://fonts.google.com/specimen/Xmind) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Xmind

![Xmind](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Xmind_100Thin`
- `Xmind_200ExtraLight`
- `Xmind_300Light`
- `Xmind_400Regular`
- `Xmind_500Medium`
- `Xmind_600SemiBold`
- `Xmind_700Bold`
- `Xmind_800ExtraBold`
- `Xmind_900Black`
- `Xmind_100Thin_Italic`
- `Xmind_200ExtraLight_Italic`
- `Xmind_300Light_Italic`
- `Xmind_400Regular_Italic`
- `Xmind_500Medium_Italic`
- `Xmind_600SemiBold_Italic`
- `Xmind_700Bold_Italic`
- `Xmind_800ExtraBold_Italic`
- `Xmind_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/xmind expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/xmind/useFonts';
import { Xmind_100Thin } from '@expo-google-fonts/xmind/100Thin';
import { Xmind_200ExtraLight } from '@expo-google-fonts/xmind/200ExtraLight';
import { Xmind_300Light } from '@expo-google-fonts/xmind/300Light';
import { Xmind_400Regular } from '@expo-google-fonts/xmind/400Regular';
import { Xmind_500Medium } from '@expo-google-fonts/xmind/500Medium';
import { Xmind_600SemiBold } from '@expo-google-fonts/xmind/600SemiBold';
import { Xmind_700Bold } from '@expo-google-fonts/xmind/700Bold';
import { Xmind_800ExtraBold } from '@expo-google-fonts/xmind/800ExtraBold';
import { Xmind_900Black } from '@expo-google-fonts/xmind/900Black';
import { Xmind_100Thin_Italic } from '@expo-google-fonts/xmind/100Thin_Italic';
import { Xmind_200ExtraLight_Italic } from '@expo-google-fonts/xmind/200ExtraLight_Italic';
import { Xmind_300Light_Italic } from '@expo-google-fonts/xmind/300Light_Italic';
import { Xmind_400Regular_Italic } from '@expo-google-fonts/xmind/400Regular_Italic';
import { Xmind_500Medium_Italic } from '@expo-google-fonts/xmind/500Medium_Italic';
import { Xmind_600SemiBold_Italic } from '@expo-google-fonts/xmind/600SemiBold_Italic';
import { Xmind_700Bold_Italic } from '@expo-google-fonts/xmind/700Bold_Italic';
import { Xmind_800ExtraBold_Italic } from '@expo-google-fonts/xmind/800ExtraBold_Italic';
import { Xmind_900Black_Italic } from '@expo-google-fonts/xmind/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Xmind_100Thin, 
    Xmind_200ExtraLight, 
    Xmind_300Light, 
    Xmind_400Regular, 
    Xmind_500Medium, 
    Xmind_600SemiBold, 
    Xmind_700Bold, 
    Xmind_800ExtraBold, 
    Xmind_900Black, 
    Xmind_100Thin_Italic, 
    Xmind_200ExtraLight_Italic, 
    Xmind_300Light_Italic, 
    Xmind_400Regular_Italic, 
    Xmind_500Medium_Italic, 
    Xmind_600SemiBold_Italic, 
    Xmind_700Bold_Italic, 
    Xmind_800ExtraBold_Italic, 
    Xmind_900Black_Italic
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
          fontFamily: "Xmind_100Thin"
        }}>
          Xmind Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_200ExtraLight"
        }}>
          Xmind Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_300Light"
        }}>
          Xmind Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_400Regular"
        }}>
          Xmind Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_500Medium"
        }}>
          Xmind Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_600SemiBold"
        }}>
          Xmind Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_700Bold"
        }}>
          Xmind Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_800ExtraBold"
        }}>
          Xmind Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_900Black"
        }}>
          Xmind Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_100Thin_Italic"
        }}>
          Xmind Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_200ExtraLight_Italic"
        }}>
          Xmind Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_300Light_Italic"
        }}>
          Xmind Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_400Regular_Italic"
        }}>
          Xmind Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_500Medium_Italic"
        }}>
          Xmind Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_600SemiBold_Italic"
        }}>
          Xmind Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_700Bold_Italic"
        }}>
          Xmind Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_800ExtraBold_Italic"
        }}>
          Xmind Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Xmind_900Black_Italic"
        }}>
          Xmind Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Xmind_100Thin](./100Thin/Xmind_100Thin.ttf.png)|![Xmind_200ExtraLight](./200ExtraLight/Xmind_200ExtraLight.ttf.png)|![Xmind_300Light](./300Light/Xmind_300Light.ttf.png)||
|![Xmind_400Regular](./400Regular/Xmind_400Regular.ttf.png)|![Xmind_500Medium](./500Medium/Xmind_500Medium.ttf.png)|![Xmind_600SemiBold](./600SemiBold/Xmind_600SemiBold.ttf.png)||
|![Xmind_700Bold](./700Bold/Xmind_700Bold.ttf.png)|![Xmind_800ExtraBold](./800ExtraBold/Xmind_800ExtraBold.ttf.png)|![Xmind_900Black](./900Black/Xmind_900Black.ttf.png)||
|![Xmind_100Thin_Italic](./100Thin_Italic/Xmind_100Thin_Italic.ttf.png)|![Xmind_200ExtraLight_Italic](./200ExtraLight_Italic/Xmind_200ExtraLight_Italic.ttf.png)|![Xmind_300Light_Italic](./300Light_Italic/Xmind_300Light_Italic.ttf.png)||
|![Xmind_400Regular_Italic](./400Regular_Italic/Xmind_400Regular_Italic.ttf.png)|![Xmind_500Medium_Italic](./500Medium_Italic/Xmind_500Medium_Italic.ttf.png)|![Xmind_600SemiBold_Italic](./600SemiBold_Italic/Xmind_600SemiBold_Italic.ttf.png)||
|![Xmind_700Bold_Italic](./700Bold_Italic/Xmind_700Bold_Italic.ttf.png)|![Xmind_800ExtraBold_Italic](./800ExtraBold_Italic/Xmind_800ExtraBold_Italic.ttf.png)|![Xmind_900Black_Italic](./900Black_Italic/Xmind_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/xmind` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Xmind page on Google Fonts](https://fonts.google.com/specimen/Xmind) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Xmind on Google Fonts](https://fonts.google.com/specimen/Xmind)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/xmind)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/xmind)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
