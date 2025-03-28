# @expo-google-fonts/azeret-mono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/azeret-mono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/azeret-mono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/azeret-mono)

This package lets you use the [**Azeret Mono**](https://fonts.google.com/specimen/Azeret+Mono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Azeret Mono

![Azeret Mono](./font-family.png)

This font family contains [18 styles](#-gallery).

- `AzeretMono_100Thin`
- `AzeretMono_200ExtraLight`
- `AzeretMono_300Light`
- `AzeretMono_400Regular`
- `AzeretMono_500Medium`
- `AzeretMono_600SemiBold`
- `AzeretMono_700Bold`
- `AzeretMono_800ExtraBold`
- `AzeretMono_900Black`
- `AzeretMono_100Thin_Italic`
- `AzeretMono_200ExtraLight_Italic`
- `AzeretMono_300Light_Italic`
- `AzeretMono_400Regular_Italic`
- `AzeretMono_500Medium_Italic`
- `AzeretMono_600SemiBold_Italic`
- `AzeretMono_700Bold_Italic`
- `AzeretMono_800ExtraBold_Italic`
- `AzeretMono_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/azeret-mono expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/azeret-mono/useFonts';
import { AzeretMono_100Thin } from '@expo-google-fonts/azeret-mono/100Thin';
import { AzeretMono_200ExtraLight } from '@expo-google-fonts/azeret-mono/200ExtraLight';
import { AzeretMono_300Light } from '@expo-google-fonts/azeret-mono/300Light';
import { AzeretMono_400Regular } from '@expo-google-fonts/azeret-mono/400Regular';
import { AzeretMono_500Medium } from '@expo-google-fonts/azeret-mono/500Medium';
import { AzeretMono_600SemiBold } from '@expo-google-fonts/azeret-mono/600SemiBold';
import { AzeretMono_700Bold } from '@expo-google-fonts/azeret-mono/700Bold';
import { AzeretMono_800ExtraBold } from '@expo-google-fonts/azeret-mono/800ExtraBold';
import { AzeretMono_900Black } from '@expo-google-fonts/azeret-mono/900Black';
import { AzeretMono_100Thin_Italic } from '@expo-google-fonts/azeret-mono/100Thin_Italic';
import { AzeretMono_200ExtraLight_Italic } from '@expo-google-fonts/azeret-mono/200ExtraLight_Italic';
import { AzeretMono_300Light_Italic } from '@expo-google-fonts/azeret-mono/300Light_Italic';
import { AzeretMono_400Regular_Italic } from '@expo-google-fonts/azeret-mono/400Regular_Italic';
import { AzeretMono_500Medium_Italic } from '@expo-google-fonts/azeret-mono/500Medium_Italic';
import { AzeretMono_600SemiBold_Italic } from '@expo-google-fonts/azeret-mono/600SemiBold_Italic';
import { AzeretMono_700Bold_Italic } from '@expo-google-fonts/azeret-mono/700Bold_Italic';
import { AzeretMono_800ExtraBold_Italic } from '@expo-google-fonts/azeret-mono/800ExtraBold_Italic';
import { AzeretMono_900Black_Italic } from '@expo-google-fonts/azeret-mono/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    AzeretMono_100Thin, 
    AzeretMono_200ExtraLight, 
    AzeretMono_300Light, 
    AzeretMono_400Regular, 
    AzeretMono_500Medium, 
    AzeretMono_600SemiBold, 
    AzeretMono_700Bold, 
    AzeretMono_800ExtraBold, 
    AzeretMono_900Black, 
    AzeretMono_100Thin_Italic, 
    AzeretMono_200ExtraLight_Italic, 
    AzeretMono_300Light_Italic, 
    AzeretMono_400Regular_Italic, 
    AzeretMono_500Medium_Italic, 
    AzeretMono_600SemiBold_Italic, 
    AzeretMono_700Bold_Italic, 
    AzeretMono_800ExtraBold_Italic, 
    AzeretMono_900Black_Italic
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
          fontFamily: "AzeretMono_100Thin"
        }}>
          Azeret Mono Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_200ExtraLight"
        }}>
          Azeret Mono Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_300Light"
        }}>
          Azeret Mono Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_400Regular"
        }}>
          Azeret Mono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_500Medium"
        }}>
          Azeret Mono Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_600SemiBold"
        }}>
          Azeret Mono Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_700Bold"
        }}>
          Azeret Mono Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_800ExtraBold"
        }}>
          Azeret Mono Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_900Black"
        }}>
          Azeret Mono Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_100Thin_Italic"
        }}>
          Azeret Mono Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_200ExtraLight_Italic"
        }}>
          Azeret Mono Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_300Light_Italic"
        }}>
          Azeret Mono Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_400Regular_Italic"
        }}>
          Azeret Mono Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_500Medium_Italic"
        }}>
          Azeret Mono Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_600SemiBold_Italic"
        }}>
          Azeret Mono Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_700Bold_Italic"
        }}>
          Azeret Mono Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_800ExtraBold_Italic"
        }}>
          Azeret Mono Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AzeretMono_900Black_Italic"
        }}>
          Azeret Mono Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AzeretMono_100Thin](./100Thin/AzeretMono_100Thin.ttf.png)|![AzeretMono_200ExtraLight](./200ExtraLight/AzeretMono_200ExtraLight.ttf.png)|![AzeretMono_300Light](./300Light/AzeretMono_300Light.ttf.png)||
|![AzeretMono_400Regular](./400Regular/AzeretMono_400Regular.ttf.png)|![AzeretMono_500Medium](./500Medium/AzeretMono_500Medium.ttf.png)|![AzeretMono_600SemiBold](./600SemiBold/AzeretMono_600SemiBold.ttf.png)||
|![AzeretMono_700Bold](./700Bold/AzeretMono_700Bold.ttf.png)|![AzeretMono_800ExtraBold](./800ExtraBold/AzeretMono_800ExtraBold.ttf.png)|![AzeretMono_900Black](./900Black/AzeretMono_900Black.ttf.png)||
|![AzeretMono_100Thin_Italic](./100Thin_Italic/AzeretMono_100Thin_Italic.ttf.png)|![AzeretMono_200ExtraLight_Italic](./200ExtraLight_Italic/AzeretMono_200ExtraLight_Italic.ttf.png)|![AzeretMono_300Light_Italic](./300Light_Italic/AzeretMono_300Light_Italic.ttf.png)||
|![AzeretMono_400Regular_Italic](./400Regular_Italic/AzeretMono_400Regular_Italic.ttf.png)|![AzeretMono_500Medium_Italic](./500Medium_Italic/AzeretMono_500Medium_Italic.ttf.png)|![AzeretMono_600SemiBold_Italic](./600SemiBold_Italic/AzeretMono_600SemiBold_Italic.ttf.png)||
|![AzeretMono_700Bold_Italic](./700Bold_Italic/AzeretMono_700Bold_Italic.ttf.png)|![AzeretMono_800ExtraBold_Italic](./800ExtraBold_Italic/AzeretMono_800ExtraBold_Italic.ttf.png)|![AzeretMono_900Black_Italic](./900Black_Italic/AzeretMono_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/azeret-mono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Azeret Mono page on Google Fonts](https://fonts.google.com/specimen/Azeret+Mono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Azeret Mono on Google Fonts](https://fonts.google.com/specimen/Azeret+Mono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/azeret-mono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/azeret-mono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
