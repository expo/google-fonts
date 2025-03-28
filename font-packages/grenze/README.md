# @expo-google-fonts/grenze

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/grenze)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/grenze)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/grenze)

This package lets you use the [**Grenze**](https://fonts.google.com/specimen/Grenze) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Grenze

![Grenze](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Grenze_100Thin`
- `Grenze_100Thin_Italic`
- `Grenze_200ExtraLight`
- `Grenze_200ExtraLight_Italic`
- `Grenze_300Light`
- `Grenze_300Light_Italic`
- `Grenze_400Regular`
- `Grenze_400Regular_Italic`
- `Grenze_500Medium`
- `Grenze_500Medium_Italic`
- `Grenze_600SemiBold`
- `Grenze_600SemiBold_Italic`
- `Grenze_700Bold`
- `Grenze_700Bold_Italic`
- `Grenze_800ExtraBold`
- `Grenze_800ExtraBold_Italic`
- `Grenze_900Black`
- `Grenze_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/grenze expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/grenze/useFonts';
import { Grenze_100Thin } from '@expo-google-fonts/grenze/100Thin';
import { Grenze_100Thin_Italic } from '@expo-google-fonts/grenze/100Thin_Italic';
import { Grenze_200ExtraLight } from '@expo-google-fonts/grenze/200ExtraLight';
import { Grenze_200ExtraLight_Italic } from '@expo-google-fonts/grenze/200ExtraLight_Italic';
import { Grenze_300Light } from '@expo-google-fonts/grenze/300Light';
import { Grenze_300Light_Italic } from '@expo-google-fonts/grenze/300Light_Italic';
import { Grenze_400Regular } from '@expo-google-fonts/grenze/400Regular';
import { Grenze_400Regular_Italic } from '@expo-google-fonts/grenze/400Regular_Italic';
import { Grenze_500Medium } from '@expo-google-fonts/grenze/500Medium';
import { Grenze_500Medium_Italic } from '@expo-google-fonts/grenze/500Medium_Italic';
import { Grenze_600SemiBold } from '@expo-google-fonts/grenze/600SemiBold';
import { Grenze_600SemiBold_Italic } from '@expo-google-fonts/grenze/600SemiBold_Italic';
import { Grenze_700Bold } from '@expo-google-fonts/grenze/700Bold';
import { Grenze_700Bold_Italic } from '@expo-google-fonts/grenze/700Bold_Italic';
import { Grenze_800ExtraBold } from '@expo-google-fonts/grenze/800ExtraBold';
import { Grenze_800ExtraBold_Italic } from '@expo-google-fonts/grenze/800ExtraBold_Italic';
import { Grenze_900Black } from '@expo-google-fonts/grenze/900Black';
import { Grenze_900Black_Italic } from '@expo-google-fonts/grenze/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Grenze_100Thin, 
    Grenze_100Thin_Italic, 
    Grenze_200ExtraLight, 
    Grenze_200ExtraLight_Italic, 
    Grenze_300Light, 
    Grenze_300Light_Italic, 
    Grenze_400Regular, 
    Grenze_400Regular_Italic, 
    Grenze_500Medium, 
    Grenze_500Medium_Italic, 
    Grenze_600SemiBold, 
    Grenze_600SemiBold_Italic, 
    Grenze_700Bold, 
    Grenze_700Bold_Italic, 
    Grenze_800ExtraBold, 
    Grenze_800ExtraBold_Italic, 
    Grenze_900Black, 
    Grenze_900Black_Italic
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
          fontFamily: "Grenze_100Thin"
        }}>
          Grenze Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_100Thin_Italic"
        }}>
          Grenze Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_200ExtraLight"
        }}>
          Grenze Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_200ExtraLight_Italic"
        }}>
          Grenze Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_300Light"
        }}>
          Grenze Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_300Light_Italic"
        }}>
          Grenze Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_400Regular"
        }}>
          Grenze Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_400Regular_Italic"
        }}>
          Grenze Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_500Medium"
        }}>
          Grenze Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_500Medium_Italic"
        }}>
          Grenze Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_600SemiBold"
        }}>
          Grenze Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_600SemiBold_Italic"
        }}>
          Grenze Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_700Bold"
        }}>
          Grenze Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_700Bold_Italic"
        }}>
          Grenze Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_800ExtraBold"
        }}>
          Grenze Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_800ExtraBold_Italic"
        }}>
          Grenze Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_900Black"
        }}>
          Grenze Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Grenze_900Black_Italic"
        }}>
          Grenze Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Grenze_100Thin](./100Thin/Grenze_100Thin.ttf.png)|![Grenze_100Thin_Italic](./100Thin_Italic/Grenze_100Thin_Italic.ttf.png)|![Grenze_200ExtraLight](./200ExtraLight/Grenze_200ExtraLight.ttf.png)||
|![Grenze_200ExtraLight_Italic](./200ExtraLight_Italic/Grenze_200ExtraLight_Italic.ttf.png)|![Grenze_300Light](./300Light/Grenze_300Light.ttf.png)|![Grenze_300Light_Italic](./300Light_Italic/Grenze_300Light_Italic.ttf.png)||
|![Grenze_400Regular](./400Regular/Grenze_400Regular.ttf.png)|![Grenze_400Regular_Italic](./400Regular_Italic/Grenze_400Regular_Italic.ttf.png)|![Grenze_500Medium](./500Medium/Grenze_500Medium.ttf.png)||
|![Grenze_500Medium_Italic](./500Medium_Italic/Grenze_500Medium_Italic.ttf.png)|![Grenze_600SemiBold](./600SemiBold/Grenze_600SemiBold.ttf.png)|![Grenze_600SemiBold_Italic](./600SemiBold_Italic/Grenze_600SemiBold_Italic.ttf.png)||
|![Grenze_700Bold](./700Bold/Grenze_700Bold.ttf.png)|![Grenze_700Bold_Italic](./700Bold_Italic/Grenze_700Bold_Italic.ttf.png)|![Grenze_800ExtraBold](./800ExtraBold/Grenze_800ExtraBold.ttf.png)||
|![Grenze_800ExtraBold_Italic](./800ExtraBold_Italic/Grenze_800ExtraBold_Italic.ttf.png)|![Grenze_900Black](./900Black/Grenze_900Black.ttf.png)|![Grenze_900Black_Italic](./900Black_Italic/Grenze_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/grenze` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Grenze page on Google Fonts](https://fonts.google.com/specimen/Grenze) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Grenze on Google Fonts](https://fonts.google.com/specimen/Grenze)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/grenze)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/grenze)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
