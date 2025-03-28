# @expo-google-fonts/rem

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/rem)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/rem)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/rem)

This package lets you use the [**REM**](https://fonts.google.com/specimen/REM) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## REM

![REM](./font-family.png)

This font family contains [18 styles](#-gallery).

- `REM_100Thin`
- `REM_200ExtraLight`
- `REM_300Light`
- `REM_400Regular`
- `REM_500Medium`
- `REM_600SemiBold`
- `REM_700Bold`
- `REM_800ExtraBold`
- `REM_900Black`
- `REM_100Thin_Italic`
- `REM_200ExtraLight_Italic`
- `REM_300Light_Italic`
- `REM_400Regular_Italic`
- `REM_500Medium_Italic`
- `REM_600SemiBold_Italic`
- `REM_700Bold_Italic`
- `REM_800ExtraBold_Italic`
- `REM_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/rem expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/rem/useFonts';
import { REM_100Thin } from '@expo-google-fonts/rem/100Thin';
import { REM_200ExtraLight } from '@expo-google-fonts/rem/200ExtraLight';
import { REM_300Light } from '@expo-google-fonts/rem/300Light';
import { REM_400Regular } from '@expo-google-fonts/rem/400Regular';
import { REM_500Medium } from '@expo-google-fonts/rem/500Medium';
import { REM_600SemiBold } from '@expo-google-fonts/rem/600SemiBold';
import { REM_700Bold } from '@expo-google-fonts/rem/700Bold';
import { REM_800ExtraBold } from '@expo-google-fonts/rem/800ExtraBold';
import { REM_900Black } from '@expo-google-fonts/rem/900Black';
import { REM_100Thin_Italic } from '@expo-google-fonts/rem/100Thin_Italic';
import { REM_200ExtraLight_Italic } from '@expo-google-fonts/rem/200ExtraLight_Italic';
import { REM_300Light_Italic } from '@expo-google-fonts/rem/300Light_Italic';
import { REM_400Regular_Italic } from '@expo-google-fonts/rem/400Regular_Italic';
import { REM_500Medium_Italic } from '@expo-google-fonts/rem/500Medium_Italic';
import { REM_600SemiBold_Italic } from '@expo-google-fonts/rem/600SemiBold_Italic';
import { REM_700Bold_Italic } from '@expo-google-fonts/rem/700Bold_Italic';
import { REM_800ExtraBold_Italic } from '@expo-google-fonts/rem/800ExtraBold_Italic';
import { REM_900Black_Italic } from '@expo-google-fonts/rem/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    REM_100Thin, 
    REM_200ExtraLight, 
    REM_300Light, 
    REM_400Regular, 
    REM_500Medium, 
    REM_600SemiBold, 
    REM_700Bold, 
    REM_800ExtraBold, 
    REM_900Black, 
    REM_100Thin_Italic, 
    REM_200ExtraLight_Italic, 
    REM_300Light_Italic, 
    REM_400Regular_Italic, 
    REM_500Medium_Italic, 
    REM_600SemiBold_Italic, 
    REM_700Bold_Italic, 
    REM_800ExtraBold_Italic, 
    REM_900Black_Italic
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
          fontFamily: "REM_100Thin"
        }}>
          REM Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_200ExtraLight"
        }}>
          REM Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_300Light"
        }}>
          REM Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_400Regular"
        }}>
          REM Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_500Medium"
        }}>
          REM Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_600SemiBold"
        }}>
          REM Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_700Bold"
        }}>
          REM Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_800ExtraBold"
        }}>
          REM Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_900Black"
        }}>
          REM Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_100Thin_Italic"
        }}>
          REM Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_200ExtraLight_Italic"
        }}>
          REM Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_300Light_Italic"
        }}>
          REM Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_400Regular_Italic"
        }}>
          REM Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_500Medium_Italic"
        }}>
          REM Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_600SemiBold_Italic"
        }}>
          REM Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_700Bold_Italic"
        }}>
          REM Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_800ExtraBold_Italic"
        }}>
          REM Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "REM_900Black_Italic"
        }}>
          REM Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![REM_100Thin](./100Thin/REM_100Thin.ttf.png)|![REM_200ExtraLight](./200ExtraLight/REM_200ExtraLight.ttf.png)|![REM_300Light](./300Light/REM_300Light.ttf.png)||
|![REM_400Regular](./400Regular/REM_400Regular.ttf.png)|![REM_500Medium](./500Medium/REM_500Medium.ttf.png)|![REM_600SemiBold](./600SemiBold/REM_600SemiBold.ttf.png)||
|![REM_700Bold](./700Bold/REM_700Bold.ttf.png)|![REM_800ExtraBold](./800ExtraBold/REM_800ExtraBold.ttf.png)|![REM_900Black](./900Black/REM_900Black.ttf.png)||
|![REM_100Thin_Italic](./100Thin_Italic/REM_100Thin_Italic.ttf.png)|![REM_200ExtraLight_Italic](./200ExtraLight_Italic/REM_200ExtraLight_Italic.ttf.png)|![REM_300Light_Italic](./300Light_Italic/REM_300Light_Italic.ttf.png)||
|![REM_400Regular_Italic](./400Regular_Italic/REM_400Regular_Italic.ttf.png)|![REM_500Medium_Italic](./500Medium_Italic/REM_500Medium_Italic.ttf.png)|![REM_600SemiBold_Italic](./600SemiBold_Italic/REM_600SemiBold_Italic.ttf.png)||
|![REM_700Bold_Italic](./700Bold_Italic/REM_700Bold_Italic.ttf.png)|![REM_800ExtraBold_Italic](./800ExtraBold_Italic/REM_800ExtraBold_Italic.ttf.png)|![REM_900Black_Italic](./900Black_Italic/REM_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/rem` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [REM page on Google Fonts](https://fonts.google.com/specimen/REM) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [REM on Google Fonts](https://fonts.google.com/specimen/REM)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rem)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rem)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
