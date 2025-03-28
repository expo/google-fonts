# @expo-google-fonts/poppins

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/poppins)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/poppins)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/poppins)

This package lets you use the [**Poppins**](https://fonts.google.com/specimen/Poppins) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Poppins

![Poppins](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Poppins_100Thin`
- `Poppins_100Thin_Italic`
- `Poppins_200ExtraLight`
- `Poppins_200ExtraLight_Italic`
- `Poppins_300Light`
- `Poppins_300Light_Italic`
- `Poppins_400Regular`
- `Poppins_400Regular_Italic`
- `Poppins_500Medium`
- `Poppins_500Medium_Italic`
- `Poppins_600SemiBold`
- `Poppins_600SemiBold_Italic`
- `Poppins_700Bold`
- `Poppins_700Bold_Italic`
- `Poppins_800ExtraBold`
- `Poppins_800ExtraBold_Italic`
- `Poppins_900Black`
- `Poppins_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/poppins expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/poppins/useFonts';
import { Poppins_100Thin } from '@expo-google-fonts/poppins/100Thin';
import { Poppins_100Thin_Italic } from '@expo-google-fonts/poppins/100Thin_Italic';
import { Poppins_200ExtraLight } from '@expo-google-fonts/poppins/200ExtraLight';
import { Poppins_200ExtraLight_Italic } from '@expo-google-fonts/poppins/200ExtraLight_Italic';
import { Poppins_300Light } from '@expo-google-fonts/poppins/300Light';
import { Poppins_300Light_Italic } from '@expo-google-fonts/poppins/300Light_Italic';
import { Poppins_400Regular } from '@expo-google-fonts/poppins/400Regular';
import { Poppins_400Regular_Italic } from '@expo-google-fonts/poppins/400Regular_Italic';
import { Poppins_500Medium } from '@expo-google-fonts/poppins/500Medium';
import { Poppins_500Medium_Italic } from '@expo-google-fonts/poppins/500Medium_Italic';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins/600SemiBold';
import { Poppins_600SemiBold_Italic } from '@expo-google-fonts/poppins/600SemiBold_Italic';
import { Poppins_700Bold } from '@expo-google-fonts/poppins/700Bold';
import { Poppins_700Bold_Italic } from '@expo-google-fonts/poppins/700Bold_Italic';
import { Poppins_800ExtraBold } from '@expo-google-fonts/poppins/800ExtraBold';
import { Poppins_800ExtraBold_Italic } from '@expo-google-fonts/poppins/800ExtraBold_Italic';
import { Poppins_900Black } from '@expo-google-fonts/poppins/900Black';
import { Poppins_900Black_Italic } from '@expo-google-fonts/poppins/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Poppins_100Thin, 
    Poppins_100Thin_Italic, 
    Poppins_200ExtraLight, 
    Poppins_200ExtraLight_Italic, 
    Poppins_300Light, 
    Poppins_300Light_Italic, 
    Poppins_400Regular, 
    Poppins_400Regular_Italic, 
    Poppins_500Medium, 
    Poppins_500Medium_Italic, 
    Poppins_600SemiBold, 
    Poppins_600SemiBold_Italic, 
    Poppins_700Bold, 
    Poppins_700Bold_Italic, 
    Poppins_800ExtraBold, 
    Poppins_800ExtraBold_Italic, 
    Poppins_900Black, 
    Poppins_900Black_Italic
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
          fontFamily: "Poppins_100Thin"
        }}>
          Poppins Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_100Thin_Italic"
        }}>
          Poppins Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_200ExtraLight"
        }}>
          Poppins Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_200ExtraLight_Italic"
        }}>
          Poppins Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_300Light"
        }}>
          Poppins Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_300Light_Italic"
        }}>
          Poppins Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_400Regular"
        }}>
          Poppins Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_400Regular_Italic"
        }}>
          Poppins Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_500Medium"
        }}>
          Poppins Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_500Medium_Italic"
        }}>
          Poppins Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_600SemiBold"
        }}>
          Poppins Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_600SemiBold_Italic"
        }}>
          Poppins Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_700Bold"
        }}>
          Poppins Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_700Bold_Italic"
        }}>
          Poppins Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_800ExtraBold"
        }}>
          Poppins Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_800ExtraBold_Italic"
        }}>
          Poppins Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_900Black"
        }}>
          Poppins Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Poppins_900Black_Italic"
        }}>
          Poppins Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Poppins_100Thin](./100Thin/Poppins_100Thin.ttf.png)|![Poppins_100Thin_Italic](./100Thin_Italic/Poppins_100Thin_Italic.ttf.png)|![Poppins_200ExtraLight](./200ExtraLight/Poppins_200ExtraLight.ttf.png)||
|![Poppins_200ExtraLight_Italic](./200ExtraLight_Italic/Poppins_200ExtraLight_Italic.ttf.png)|![Poppins_300Light](./300Light/Poppins_300Light.ttf.png)|![Poppins_300Light_Italic](./300Light_Italic/Poppins_300Light_Italic.ttf.png)||
|![Poppins_400Regular](./400Regular/Poppins_400Regular.ttf.png)|![Poppins_400Regular_Italic](./400Regular_Italic/Poppins_400Regular_Italic.ttf.png)|![Poppins_500Medium](./500Medium/Poppins_500Medium.ttf.png)||
|![Poppins_500Medium_Italic](./500Medium_Italic/Poppins_500Medium_Italic.ttf.png)|![Poppins_600SemiBold](./600SemiBold/Poppins_600SemiBold.ttf.png)|![Poppins_600SemiBold_Italic](./600SemiBold_Italic/Poppins_600SemiBold_Italic.ttf.png)||
|![Poppins_700Bold](./700Bold/Poppins_700Bold.ttf.png)|![Poppins_700Bold_Italic](./700Bold_Italic/Poppins_700Bold_Italic.ttf.png)|![Poppins_800ExtraBold](./800ExtraBold/Poppins_800ExtraBold.ttf.png)||
|![Poppins_800ExtraBold_Italic](./800ExtraBold_Italic/Poppins_800ExtraBold_Italic.ttf.png)|![Poppins_900Black](./900Black/Poppins_900Black.ttf.png)|![Poppins_900Black_Italic](./900Black_Italic/Poppins_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/poppins` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Poppins page on Google Fonts](https://fonts.google.com/specimen/Poppins) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Poppins on Google Fonts](https://fonts.google.com/specimen/Poppins)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/poppins)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/poppins)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
