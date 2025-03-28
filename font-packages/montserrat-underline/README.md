# @expo-google-fonts/montserrat-underline

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/montserrat-underline)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/montserrat-underline)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/montserrat-underline)

This package lets you use the [**Montserrat Underline**](https://fonts.google.com/specimen/Montserrat+Underline) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Montserrat Underline

![Montserrat Underline](./font-family.png)

This font family contains [18 styles](#-gallery).

- `MontserratUnderline_100Thin`
- `MontserratUnderline_200ExtraLight`
- `MontserratUnderline_300Light`
- `MontserratUnderline_400Regular`
- `MontserratUnderline_500Medium`
- `MontserratUnderline_600SemiBold`
- `MontserratUnderline_700Bold`
- `MontserratUnderline_800ExtraBold`
- `MontserratUnderline_900Black`
- `MontserratUnderline_100Thin_Italic`
- `MontserratUnderline_200ExtraLight_Italic`
- `MontserratUnderline_300Light_Italic`
- `MontserratUnderline_400Regular_Italic`
- `MontserratUnderline_500Medium_Italic`
- `MontserratUnderline_600SemiBold_Italic`
- `MontserratUnderline_700Bold_Italic`
- `MontserratUnderline_800ExtraBold_Italic`
- `MontserratUnderline_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/montserrat-underline expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/montserrat-underline/useFonts';
import { MontserratUnderline_100Thin } from '@expo-google-fonts/montserrat-underline/100Thin';
import { MontserratUnderline_200ExtraLight } from '@expo-google-fonts/montserrat-underline/200ExtraLight';
import { MontserratUnderline_300Light } from '@expo-google-fonts/montserrat-underline/300Light';
import { MontserratUnderline_400Regular } from '@expo-google-fonts/montserrat-underline/400Regular';
import { MontserratUnderline_500Medium } from '@expo-google-fonts/montserrat-underline/500Medium';
import { MontserratUnderline_600SemiBold } from '@expo-google-fonts/montserrat-underline/600SemiBold';
import { MontserratUnderline_700Bold } from '@expo-google-fonts/montserrat-underline/700Bold';
import { MontserratUnderline_800ExtraBold } from '@expo-google-fonts/montserrat-underline/800ExtraBold';
import { MontserratUnderline_900Black } from '@expo-google-fonts/montserrat-underline/900Black';
import { MontserratUnderline_100Thin_Italic } from '@expo-google-fonts/montserrat-underline/100Thin_Italic';
import { MontserratUnderline_200ExtraLight_Italic } from '@expo-google-fonts/montserrat-underline/200ExtraLight_Italic';
import { MontserratUnderline_300Light_Italic } from '@expo-google-fonts/montserrat-underline/300Light_Italic';
import { MontserratUnderline_400Regular_Italic } from '@expo-google-fonts/montserrat-underline/400Regular_Italic';
import { MontserratUnderline_500Medium_Italic } from '@expo-google-fonts/montserrat-underline/500Medium_Italic';
import { MontserratUnderline_600SemiBold_Italic } from '@expo-google-fonts/montserrat-underline/600SemiBold_Italic';
import { MontserratUnderline_700Bold_Italic } from '@expo-google-fonts/montserrat-underline/700Bold_Italic';
import { MontserratUnderline_800ExtraBold_Italic } from '@expo-google-fonts/montserrat-underline/800ExtraBold_Italic';
import { MontserratUnderline_900Black_Italic } from '@expo-google-fonts/montserrat-underline/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    MontserratUnderline_100Thin, 
    MontserratUnderline_200ExtraLight, 
    MontserratUnderline_300Light, 
    MontserratUnderline_400Regular, 
    MontserratUnderline_500Medium, 
    MontserratUnderline_600SemiBold, 
    MontserratUnderline_700Bold, 
    MontserratUnderline_800ExtraBold, 
    MontserratUnderline_900Black, 
    MontserratUnderline_100Thin_Italic, 
    MontserratUnderline_200ExtraLight_Italic, 
    MontserratUnderline_300Light_Italic, 
    MontserratUnderline_400Regular_Italic, 
    MontserratUnderline_500Medium_Italic, 
    MontserratUnderline_600SemiBold_Italic, 
    MontserratUnderline_700Bold_Italic, 
    MontserratUnderline_800ExtraBold_Italic, 
    MontserratUnderline_900Black_Italic
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
          fontFamily: "MontserratUnderline_100Thin"
        }}>
          Montserrat Underline Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_200ExtraLight"
        }}>
          Montserrat Underline Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_300Light"
        }}>
          Montserrat Underline Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_400Regular"
        }}>
          Montserrat Underline Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_500Medium"
        }}>
          Montserrat Underline Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_600SemiBold"
        }}>
          Montserrat Underline Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_700Bold"
        }}>
          Montserrat Underline Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_800ExtraBold"
        }}>
          Montserrat Underline Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_900Black"
        }}>
          Montserrat Underline Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_100Thin_Italic"
        }}>
          Montserrat Underline Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_200ExtraLight_Italic"
        }}>
          Montserrat Underline Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_300Light_Italic"
        }}>
          Montserrat Underline Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_400Regular_Italic"
        }}>
          Montserrat Underline Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_500Medium_Italic"
        }}>
          Montserrat Underline Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_600SemiBold_Italic"
        }}>
          Montserrat Underline Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_700Bold_Italic"
        }}>
          Montserrat Underline Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_800ExtraBold_Italic"
        }}>
          Montserrat Underline Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "MontserratUnderline_900Black_Italic"
        }}>
          Montserrat Underline Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![MontserratUnderline_100Thin](./100Thin/MontserratUnderline_100Thin.ttf.png)|![MontserratUnderline_200ExtraLight](./200ExtraLight/MontserratUnderline_200ExtraLight.ttf.png)|![MontserratUnderline_300Light](./300Light/MontserratUnderline_300Light.ttf.png)||
|![MontserratUnderline_400Regular](./400Regular/MontserratUnderline_400Regular.ttf.png)|![MontserratUnderline_500Medium](./500Medium/MontserratUnderline_500Medium.ttf.png)|![MontserratUnderline_600SemiBold](./600SemiBold/MontserratUnderline_600SemiBold.ttf.png)||
|![MontserratUnderline_700Bold](./700Bold/MontserratUnderline_700Bold.ttf.png)|![MontserratUnderline_800ExtraBold](./800ExtraBold/MontserratUnderline_800ExtraBold.ttf.png)|![MontserratUnderline_900Black](./900Black/MontserratUnderline_900Black.ttf.png)||
|![MontserratUnderline_100Thin_Italic](./100Thin_Italic/MontserratUnderline_100Thin_Italic.ttf.png)|![MontserratUnderline_200ExtraLight_Italic](./200ExtraLight_Italic/MontserratUnderline_200ExtraLight_Italic.ttf.png)|![MontserratUnderline_300Light_Italic](./300Light_Italic/MontserratUnderline_300Light_Italic.ttf.png)||
|![MontserratUnderline_400Regular_Italic](./400Regular_Italic/MontserratUnderline_400Regular_Italic.ttf.png)|![MontserratUnderline_500Medium_Italic](./500Medium_Italic/MontserratUnderline_500Medium_Italic.ttf.png)|![MontserratUnderline_600SemiBold_Italic](./600SemiBold_Italic/MontserratUnderline_600SemiBold_Italic.ttf.png)||
|![MontserratUnderline_700Bold_Italic](./700Bold_Italic/MontserratUnderline_700Bold_Italic.ttf.png)|![MontserratUnderline_800ExtraBold_Italic](./800ExtraBold_Italic/MontserratUnderline_800ExtraBold_Italic.ttf.png)|![MontserratUnderline_900Black_Italic](./900Black_Italic/MontserratUnderline_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/montserrat-underline` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Montserrat Underline page on Google Fonts](https://fonts.google.com/specimen/Montserrat+Underline) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Montserrat Underline on Google Fonts](https://fonts.google.com/specimen/Montserrat+Underline)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/montserrat-underline)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/montserrat-underline)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
