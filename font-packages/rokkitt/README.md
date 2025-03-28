# @expo-google-fonts/rokkitt

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/rokkitt)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/rokkitt)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/rokkitt)

This package lets you use the [**Rokkitt**](https://fonts.google.com/specimen/Rokkitt) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Rokkitt

![Rokkitt](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Rokkitt_100Thin`
- `Rokkitt_200ExtraLight`
- `Rokkitt_300Light`
- `Rokkitt_400Regular`
- `Rokkitt_500Medium`
- `Rokkitt_600SemiBold`
- `Rokkitt_700Bold`
- `Rokkitt_800ExtraBold`
- `Rokkitt_900Black`
- `Rokkitt_100Thin_Italic`
- `Rokkitt_200ExtraLight_Italic`
- `Rokkitt_300Light_Italic`
- `Rokkitt_400Regular_Italic`
- `Rokkitt_500Medium_Italic`
- `Rokkitt_600SemiBold_Italic`
- `Rokkitt_700Bold_Italic`
- `Rokkitt_800ExtraBold_Italic`
- `Rokkitt_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/rokkitt expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/rokkitt/useFonts';
import { Rokkitt_100Thin } from '@expo-google-fonts/rokkitt/100Thin';
import { Rokkitt_200ExtraLight } from '@expo-google-fonts/rokkitt/200ExtraLight';
import { Rokkitt_300Light } from '@expo-google-fonts/rokkitt/300Light';
import { Rokkitt_400Regular } from '@expo-google-fonts/rokkitt/400Regular';
import { Rokkitt_500Medium } from '@expo-google-fonts/rokkitt/500Medium';
import { Rokkitt_600SemiBold } from '@expo-google-fonts/rokkitt/600SemiBold';
import { Rokkitt_700Bold } from '@expo-google-fonts/rokkitt/700Bold';
import { Rokkitt_800ExtraBold } from '@expo-google-fonts/rokkitt/800ExtraBold';
import { Rokkitt_900Black } from '@expo-google-fonts/rokkitt/900Black';
import { Rokkitt_100Thin_Italic } from '@expo-google-fonts/rokkitt/100Thin_Italic';
import { Rokkitt_200ExtraLight_Italic } from '@expo-google-fonts/rokkitt/200ExtraLight_Italic';
import { Rokkitt_300Light_Italic } from '@expo-google-fonts/rokkitt/300Light_Italic';
import { Rokkitt_400Regular_Italic } from '@expo-google-fonts/rokkitt/400Regular_Italic';
import { Rokkitt_500Medium_Italic } from '@expo-google-fonts/rokkitt/500Medium_Italic';
import { Rokkitt_600SemiBold_Italic } from '@expo-google-fonts/rokkitt/600SemiBold_Italic';
import { Rokkitt_700Bold_Italic } from '@expo-google-fonts/rokkitt/700Bold_Italic';
import { Rokkitt_800ExtraBold_Italic } from '@expo-google-fonts/rokkitt/800ExtraBold_Italic';
import { Rokkitt_900Black_Italic } from '@expo-google-fonts/rokkitt/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Rokkitt_100Thin, 
    Rokkitt_200ExtraLight, 
    Rokkitt_300Light, 
    Rokkitt_400Regular, 
    Rokkitt_500Medium, 
    Rokkitt_600SemiBold, 
    Rokkitt_700Bold, 
    Rokkitt_800ExtraBold, 
    Rokkitt_900Black, 
    Rokkitt_100Thin_Italic, 
    Rokkitt_200ExtraLight_Italic, 
    Rokkitt_300Light_Italic, 
    Rokkitt_400Regular_Italic, 
    Rokkitt_500Medium_Italic, 
    Rokkitt_600SemiBold_Italic, 
    Rokkitt_700Bold_Italic, 
    Rokkitt_800ExtraBold_Italic, 
    Rokkitt_900Black_Italic
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
          fontFamily: "Rokkitt_100Thin"
        }}>
          Rokkitt Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_200ExtraLight"
        }}>
          Rokkitt Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_300Light"
        }}>
          Rokkitt Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_400Regular"
        }}>
          Rokkitt Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_500Medium"
        }}>
          Rokkitt Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_600SemiBold"
        }}>
          Rokkitt Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_700Bold"
        }}>
          Rokkitt Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_800ExtraBold"
        }}>
          Rokkitt Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_900Black"
        }}>
          Rokkitt Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_100Thin_Italic"
        }}>
          Rokkitt Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_200ExtraLight_Italic"
        }}>
          Rokkitt Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_300Light_Italic"
        }}>
          Rokkitt Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_400Regular_Italic"
        }}>
          Rokkitt Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_500Medium_Italic"
        }}>
          Rokkitt Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_600SemiBold_Italic"
        }}>
          Rokkitt Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_700Bold_Italic"
        }}>
          Rokkitt Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_800ExtraBold_Italic"
        }}>
          Rokkitt Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rokkitt_900Black_Italic"
        }}>
          Rokkitt Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Rokkitt_100Thin](./100Thin/Rokkitt_100Thin.ttf.png)|![Rokkitt_200ExtraLight](./200ExtraLight/Rokkitt_200ExtraLight.ttf.png)|![Rokkitt_300Light](./300Light/Rokkitt_300Light.ttf.png)||
|![Rokkitt_400Regular](./400Regular/Rokkitt_400Regular.ttf.png)|![Rokkitt_500Medium](./500Medium/Rokkitt_500Medium.ttf.png)|![Rokkitt_600SemiBold](./600SemiBold/Rokkitt_600SemiBold.ttf.png)||
|![Rokkitt_700Bold](./700Bold/Rokkitt_700Bold.ttf.png)|![Rokkitt_800ExtraBold](./800ExtraBold/Rokkitt_800ExtraBold.ttf.png)|![Rokkitt_900Black](./900Black/Rokkitt_900Black.ttf.png)||
|![Rokkitt_100Thin_Italic](./100Thin_Italic/Rokkitt_100Thin_Italic.ttf.png)|![Rokkitt_200ExtraLight_Italic](./200ExtraLight_Italic/Rokkitt_200ExtraLight_Italic.ttf.png)|![Rokkitt_300Light_Italic](./300Light_Italic/Rokkitt_300Light_Italic.ttf.png)||
|![Rokkitt_400Regular_Italic](./400Regular_Italic/Rokkitt_400Regular_Italic.ttf.png)|![Rokkitt_500Medium_Italic](./500Medium_Italic/Rokkitt_500Medium_Italic.ttf.png)|![Rokkitt_600SemiBold_Italic](./600SemiBold_Italic/Rokkitt_600SemiBold_Italic.ttf.png)||
|![Rokkitt_700Bold_Italic](./700Bold_Italic/Rokkitt_700Bold_Italic.ttf.png)|![Rokkitt_800ExtraBold_Italic](./800ExtraBold_Italic/Rokkitt_800ExtraBold_Italic.ttf.png)|![Rokkitt_900Black_Italic](./900Black_Italic/Rokkitt_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/rokkitt` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Rokkitt page on Google Fonts](https://fonts.google.com/specimen/Rokkitt) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Rokkitt on Google Fonts](https://fonts.google.com/specimen/Rokkitt)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rokkitt)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rokkitt)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
