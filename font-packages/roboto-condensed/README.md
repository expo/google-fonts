# @expo-google-fonts/roboto-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/roboto-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/roboto-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/roboto-condensed)

This package lets you use the [**Roboto Condensed**](https://fonts.google.com/specimen/Roboto+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Roboto Condensed

![Roboto Condensed](./font-family.png)

This font family contains [18 styles](#-gallery).

- `RobotoCondensed_100Thin`
- `RobotoCondensed_200ExtraLight`
- `RobotoCondensed_300Light`
- `RobotoCondensed_400Regular`
- `RobotoCondensed_500Medium`
- `RobotoCondensed_600SemiBold`
- `RobotoCondensed_700Bold`
- `RobotoCondensed_800ExtraBold`
- `RobotoCondensed_900Black`
- `RobotoCondensed_100Thin_Italic`
- `RobotoCondensed_200ExtraLight_Italic`
- `RobotoCondensed_300Light_Italic`
- `RobotoCondensed_400Regular_Italic`
- `RobotoCondensed_500Medium_Italic`
- `RobotoCondensed_600SemiBold_Italic`
- `RobotoCondensed_700Bold_Italic`
- `RobotoCondensed_800ExtraBold_Italic`
- `RobotoCondensed_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/roboto-condensed expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/roboto-condensed/useFonts';
import { RobotoCondensed_100Thin } from '@expo-google-fonts/roboto-condensed/100Thin';
import { RobotoCondensed_200ExtraLight } from '@expo-google-fonts/roboto-condensed/200ExtraLight';
import { RobotoCondensed_300Light } from '@expo-google-fonts/roboto-condensed/300Light';
import { RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed/400Regular';
import { RobotoCondensed_500Medium } from '@expo-google-fonts/roboto-condensed/500Medium';
import { RobotoCondensed_600SemiBold } from '@expo-google-fonts/roboto-condensed/600SemiBold';
import { RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed/700Bold';
import { RobotoCondensed_800ExtraBold } from '@expo-google-fonts/roboto-condensed/800ExtraBold';
import { RobotoCondensed_900Black } from '@expo-google-fonts/roboto-condensed/900Black';
import { RobotoCondensed_100Thin_Italic } from '@expo-google-fonts/roboto-condensed/100Thin_Italic';
import { RobotoCondensed_200ExtraLight_Italic } from '@expo-google-fonts/roboto-condensed/200ExtraLight_Italic';
import { RobotoCondensed_300Light_Italic } from '@expo-google-fonts/roboto-condensed/300Light_Italic';
import { RobotoCondensed_400Regular_Italic } from '@expo-google-fonts/roboto-condensed/400Regular_Italic';
import { RobotoCondensed_500Medium_Italic } from '@expo-google-fonts/roboto-condensed/500Medium_Italic';
import { RobotoCondensed_600SemiBold_Italic } from '@expo-google-fonts/roboto-condensed/600SemiBold_Italic';
import { RobotoCondensed_700Bold_Italic } from '@expo-google-fonts/roboto-condensed/700Bold_Italic';
import { RobotoCondensed_800ExtraBold_Italic } from '@expo-google-fonts/roboto-condensed/800ExtraBold_Italic';
import { RobotoCondensed_900Black_Italic } from '@expo-google-fonts/roboto-condensed/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    RobotoCondensed_100Thin, 
    RobotoCondensed_200ExtraLight, 
    RobotoCondensed_300Light, 
    RobotoCondensed_400Regular, 
    RobotoCondensed_500Medium, 
    RobotoCondensed_600SemiBold, 
    RobotoCondensed_700Bold, 
    RobotoCondensed_800ExtraBold, 
    RobotoCondensed_900Black, 
    RobotoCondensed_100Thin_Italic, 
    RobotoCondensed_200ExtraLight_Italic, 
    RobotoCondensed_300Light_Italic, 
    RobotoCondensed_400Regular_Italic, 
    RobotoCondensed_500Medium_Italic, 
    RobotoCondensed_600SemiBold_Italic, 
    RobotoCondensed_700Bold_Italic, 
    RobotoCondensed_800ExtraBold_Italic, 
    RobotoCondensed_900Black_Italic
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
          fontFamily: "RobotoCondensed_100Thin"
        }}>
          Roboto Condensed Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_200ExtraLight"
        }}>
          Roboto Condensed Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_300Light"
        }}>
          Roboto Condensed Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_400Regular"
        }}>
          Roboto Condensed Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_500Medium"
        }}>
          Roboto Condensed Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_600SemiBold"
        }}>
          Roboto Condensed Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_700Bold"
        }}>
          Roboto Condensed Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_800ExtraBold"
        }}>
          Roboto Condensed Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_900Black"
        }}>
          Roboto Condensed Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_100Thin_Italic"
        }}>
          Roboto Condensed Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_200ExtraLight_Italic"
        }}>
          Roboto Condensed Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_300Light_Italic"
        }}>
          Roboto Condensed Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_400Regular_Italic"
        }}>
          Roboto Condensed Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_500Medium_Italic"
        }}>
          Roboto Condensed Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_600SemiBold_Italic"
        }}>
          Roboto Condensed Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_700Bold_Italic"
        }}>
          Roboto Condensed Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_800ExtraBold_Italic"
        }}>
          Roboto Condensed Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RobotoCondensed_900Black_Italic"
        }}>
          Roboto Condensed Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![RobotoCondensed_100Thin](./100Thin/RobotoCondensed_100Thin.ttf.png)|![RobotoCondensed_200ExtraLight](./200ExtraLight/RobotoCondensed_200ExtraLight.ttf.png)|![RobotoCondensed_300Light](./300Light/RobotoCondensed_300Light.ttf.png)||
|![RobotoCondensed_400Regular](./400Regular/RobotoCondensed_400Regular.ttf.png)|![RobotoCondensed_500Medium](./500Medium/RobotoCondensed_500Medium.ttf.png)|![RobotoCondensed_600SemiBold](./600SemiBold/RobotoCondensed_600SemiBold.ttf.png)||
|![RobotoCondensed_700Bold](./700Bold/RobotoCondensed_700Bold.ttf.png)|![RobotoCondensed_800ExtraBold](./800ExtraBold/RobotoCondensed_800ExtraBold.ttf.png)|![RobotoCondensed_900Black](./900Black/RobotoCondensed_900Black.ttf.png)||
|![RobotoCondensed_100Thin_Italic](./100Thin_Italic/RobotoCondensed_100Thin_Italic.ttf.png)|![RobotoCondensed_200ExtraLight_Italic](./200ExtraLight_Italic/RobotoCondensed_200ExtraLight_Italic.ttf.png)|![RobotoCondensed_300Light_Italic](./300Light_Italic/RobotoCondensed_300Light_Italic.ttf.png)||
|![RobotoCondensed_400Regular_Italic](./400Regular_Italic/RobotoCondensed_400Regular_Italic.ttf.png)|![RobotoCondensed_500Medium_Italic](./500Medium_Italic/RobotoCondensed_500Medium_Italic.ttf.png)|![RobotoCondensed_600SemiBold_Italic](./600SemiBold_Italic/RobotoCondensed_600SemiBold_Italic.ttf.png)||
|![RobotoCondensed_700Bold_Italic](./700Bold_Italic/RobotoCondensed_700Bold_Italic.ttf.png)|![RobotoCondensed_800ExtraBold_Italic](./800ExtraBold_Italic/RobotoCondensed_800ExtraBold_Italic.ttf.png)|![RobotoCondensed_900Black_Italic](./900Black_Italic/RobotoCondensed_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/roboto-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Roboto Condensed page on Google Fonts](https://fonts.google.com/specimen/Roboto+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Roboto Condensed on Google Fonts](https://fonts.google.com/specimen/Roboto+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/roboto-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/roboto-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
