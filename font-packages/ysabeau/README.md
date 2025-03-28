# @expo-google-fonts/ysabeau

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ysabeau)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ysabeau)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ysabeau)

This package lets you use the [**Ysabeau**](https://fonts.google.com/specimen/Ysabeau) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ysabeau

![Ysabeau](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Ysabeau_100Thin`
- `Ysabeau_200ExtraLight`
- `Ysabeau_300Light`
- `Ysabeau_400Regular`
- `Ysabeau_500Medium`
- `Ysabeau_600SemiBold`
- `Ysabeau_700Bold`
- `Ysabeau_800ExtraBold`
- `Ysabeau_900Black`
- `Ysabeau_100Thin_Italic`
- `Ysabeau_200ExtraLight_Italic`
- `Ysabeau_300Light_Italic`
- `Ysabeau_400Regular_Italic`
- `Ysabeau_500Medium_Italic`
- `Ysabeau_600SemiBold_Italic`
- `Ysabeau_700Bold_Italic`
- `Ysabeau_800ExtraBold_Italic`
- `Ysabeau_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ysabeau expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/ysabeau/useFonts';
import { Ysabeau_100Thin } from '@expo-google-fonts/ysabeau/100Thin';
import { Ysabeau_200ExtraLight } from '@expo-google-fonts/ysabeau/200ExtraLight';
import { Ysabeau_300Light } from '@expo-google-fonts/ysabeau/300Light';
import { Ysabeau_400Regular } from '@expo-google-fonts/ysabeau/400Regular';
import { Ysabeau_500Medium } from '@expo-google-fonts/ysabeau/500Medium';
import { Ysabeau_600SemiBold } from '@expo-google-fonts/ysabeau/600SemiBold';
import { Ysabeau_700Bold } from '@expo-google-fonts/ysabeau/700Bold';
import { Ysabeau_800ExtraBold } from '@expo-google-fonts/ysabeau/800ExtraBold';
import { Ysabeau_900Black } from '@expo-google-fonts/ysabeau/900Black';
import { Ysabeau_100Thin_Italic } from '@expo-google-fonts/ysabeau/100Thin_Italic';
import { Ysabeau_200ExtraLight_Italic } from '@expo-google-fonts/ysabeau/200ExtraLight_Italic';
import { Ysabeau_300Light_Italic } from '@expo-google-fonts/ysabeau/300Light_Italic';
import { Ysabeau_400Regular_Italic } from '@expo-google-fonts/ysabeau/400Regular_Italic';
import { Ysabeau_500Medium_Italic } from '@expo-google-fonts/ysabeau/500Medium_Italic';
import { Ysabeau_600SemiBold_Italic } from '@expo-google-fonts/ysabeau/600SemiBold_Italic';
import { Ysabeau_700Bold_Italic } from '@expo-google-fonts/ysabeau/700Bold_Italic';
import { Ysabeau_800ExtraBold_Italic } from '@expo-google-fonts/ysabeau/800ExtraBold_Italic';
import { Ysabeau_900Black_Italic } from '@expo-google-fonts/ysabeau/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Ysabeau_100Thin, 
    Ysabeau_200ExtraLight, 
    Ysabeau_300Light, 
    Ysabeau_400Regular, 
    Ysabeau_500Medium, 
    Ysabeau_600SemiBold, 
    Ysabeau_700Bold, 
    Ysabeau_800ExtraBold, 
    Ysabeau_900Black, 
    Ysabeau_100Thin_Italic, 
    Ysabeau_200ExtraLight_Italic, 
    Ysabeau_300Light_Italic, 
    Ysabeau_400Regular_Italic, 
    Ysabeau_500Medium_Italic, 
    Ysabeau_600SemiBold_Italic, 
    Ysabeau_700Bold_Italic, 
    Ysabeau_800ExtraBold_Italic, 
    Ysabeau_900Black_Italic
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
          fontFamily: "Ysabeau_100Thin"
        }}>
          Ysabeau Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_200ExtraLight"
        }}>
          Ysabeau Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_300Light"
        }}>
          Ysabeau Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_400Regular"
        }}>
          Ysabeau Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_500Medium"
        }}>
          Ysabeau Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_600SemiBold"
        }}>
          Ysabeau Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_700Bold"
        }}>
          Ysabeau Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_800ExtraBold"
        }}>
          Ysabeau Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_900Black"
        }}>
          Ysabeau Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_100Thin_Italic"
        }}>
          Ysabeau Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_200ExtraLight_Italic"
        }}>
          Ysabeau Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_300Light_Italic"
        }}>
          Ysabeau Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_400Regular_Italic"
        }}>
          Ysabeau Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_500Medium_Italic"
        }}>
          Ysabeau Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_600SemiBold_Italic"
        }}>
          Ysabeau Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_700Bold_Italic"
        }}>
          Ysabeau Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_800ExtraBold_Italic"
        }}>
          Ysabeau Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Ysabeau_900Black_Italic"
        }}>
          Ysabeau Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Ysabeau_100Thin](./100Thin/Ysabeau_100Thin.ttf.png)|![Ysabeau_200ExtraLight](./200ExtraLight/Ysabeau_200ExtraLight.ttf.png)|![Ysabeau_300Light](./300Light/Ysabeau_300Light.ttf.png)||
|![Ysabeau_400Regular](./400Regular/Ysabeau_400Regular.ttf.png)|![Ysabeau_500Medium](./500Medium/Ysabeau_500Medium.ttf.png)|![Ysabeau_600SemiBold](./600SemiBold/Ysabeau_600SemiBold.ttf.png)||
|![Ysabeau_700Bold](./700Bold/Ysabeau_700Bold.ttf.png)|![Ysabeau_800ExtraBold](./800ExtraBold/Ysabeau_800ExtraBold.ttf.png)|![Ysabeau_900Black](./900Black/Ysabeau_900Black.ttf.png)||
|![Ysabeau_100Thin_Italic](./100Thin_Italic/Ysabeau_100Thin_Italic.ttf.png)|![Ysabeau_200ExtraLight_Italic](./200ExtraLight_Italic/Ysabeau_200ExtraLight_Italic.ttf.png)|![Ysabeau_300Light_Italic](./300Light_Italic/Ysabeau_300Light_Italic.ttf.png)||
|![Ysabeau_400Regular_Italic](./400Regular_Italic/Ysabeau_400Regular_Italic.ttf.png)|![Ysabeau_500Medium_Italic](./500Medium_Italic/Ysabeau_500Medium_Italic.ttf.png)|![Ysabeau_600SemiBold_Italic](./600SemiBold_Italic/Ysabeau_600SemiBold_Italic.ttf.png)||
|![Ysabeau_700Bold_Italic](./700Bold_Italic/Ysabeau_700Bold_Italic.ttf.png)|![Ysabeau_800ExtraBold_Italic](./800ExtraBold_Italic/Ysabeau_800ExtraBold_Italic.ttf.png)|![Ysabeau_900Black_Italic](./900Black_Italic/Ysabeau_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ysabeau` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ysabeau page on Google Fonts](https://fonts.google.com/specimen/Ysabeau) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ysabeau on Google Fonts](https://fonts.google.com/specimen/Ysabeau)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ysabeau)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ysabeau)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
